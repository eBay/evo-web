#!/usr/bin/env node
'use strict';

/**
 * Phase 1 Static Analysis Script
 *
 * Scans all three package layers (evo-marko, skin, evo-react) and produces:
 *   - audit-output/components/<name>.json  — per-component summary
 *   - audit-output/summary.json            — cross-component aggregate
 *
 * Run from repo root:
 *   node .claude/skills/evo-create-component-manifest/scripts/component-audit.js
 */

const fs = require('fs');
const path = require('path');

// ── Paths ──────────────────────────────────────────────────────────────────────
const REPO_ROOT = path.resolve(__dirname, '../../../../');
const EVO_MARKO_TAGS = path.join(REPO_ROOT, 'packages/evo-marko/src/tags');
const SKIN_SASS = path.join(REPO_ROOT, 'packages/skin/src/sass');
const EVO_REACT_SRC = path.join(REPO_ROOT, 'packages/evo-react/src');
const OUT_DIR = path.join(__dirname, 'audit-output');
const COMP_DIR = path.join(OUT_DIR, 'components');

// ── Utils ──────────────────────────────────────────────────────────────────────
function readFile(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return null; }
}
function exists(p) { return fs.existsSync(p); }
function listDir(p) {
  try { return fs.readdirSync(p); } catch { return []; }
}
function unique(arr) { return [...new Set(arr)]; }

// ── Brace-block extractor ──────────────────────────────────────────────────────
// Starts at `openBraceIdx` (the `{`), returns { body, endIdx }
// endIdx points one past the closing `}`.
function extractBracedBlock(content, openBraceIdx) {
  let depth = 1;
  let i = openBraceIdx + 1;
  while (i < content.length && depth > 0) {
    const ch = content[i];
    if (ch === '{') { depth++; i++; continue; }
    if (ch === '}') { depth--; i++; continue; }
    // Skip string literals to avoid counting braces inside them
    if (ch === '"' || ch === "'" || ch === '`') {
      const q = ch; i++;
      while (i < content.length && content[i] !== q) {
        if (content[i] === '\\') i++;
        i++;
      }
      i++;
      continue;
    }
    i++;
  }
  return { body: content.slice(openBraceIdx + 1, i - 1), endIdx: i };
}

// ── TypeScript prop parser ─────────────────────────────────────────────────────
//
// Splits the interface body into individual prop strings, then parses each.
// Tracks angle-bracket and brace depth so semicolons inside generics / object
// literals don't trigger a split. `=>` in arrow-function types is handled by
// not decrementing angle depth when the `>` is immediately preceded by `=`.

function parseProps(body) {
  const segments = [];
  let cur = '';
  let angleDepth = 0;
  let braceDepth = 0;

  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (ch === '<') { angleDepth++; }
    else if (ch === '>' && body[i - 1] !== '=') { angleDepth = Math.max(0, angleDepth - 1); }
    else if (ch === '{') { braceDepth++; }
    else if (ch === '}') { braceDepth = Math.max(0, braceDepth - 1); }
    else if (ch === ';' && angleDepth === 0 && braceDepth === 0) {
      const t = cur.trim();
      if (t) segments.push(t);
      cur = '';
      continue;
    }
    cur += ch;
  }
  if (cur.trim()) segments.push(cur.trim());

  return segments.map(parsePropDef).filter(Boolean);
}

function parsePropDef(raw) {
  const clean = raw
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '')
    .trim();
  if (!clean) return null;

  // `"aria-label"?: type`  or  `propName?: type`
  const m = clean.match(/^(?:"([^"]+)"|([a-zA-Z_$][\w$]*))\s*(\??):\s*([\s\S]+)$/);
  if (!m) return null;

  const name = (m[1] || m[2]).trim();
  const optional = m[3] === '?';
  const type = m[4].replace(/\s+/g, ' ').trim();

  const category =
    name.startsWith('a11y') ? 'a11y' :
    name.startsWith('aria-') ? 'aria' :
    /^on[A-Z]/.test(name) ? 'event' :
    type.includes('Marko.AttrTag') ? 'slot' : 'prop';

  return { name, optional, type, category };
}

// ── evo-marko analysis ─────────────────────────────────────────────────────────

function parseSkinImports(styleContent) {
  if (!styleContent) return [];
  const re = /import\s+["'](@ebay\/skin\/[^"']+)["']/g;
  const out = [];
  let m;
  while ((m = re.exec(styleContent)) !== null) out.push(m[1]);
  return out;
}

function parseMakeupImports(src) {
  if (!src) return [];
  const re = /["'](@ebay\/makeup-[^"']+)["']/g;
  const out = new Set();
  let m;
  while ((m = re.exec(src)) !== null) out.add(m[1]);
  return [...out];
}

function parseInternalTagImports(src) {
  // Static imports: import ... from "<evo-*>"
  const re = /from\s+["']<(evo-[a-z][a-z0-9-]*)>["']/g;
  const out = new Set();
  let m;
  while ((m = re.exec(src)) !== null) out.add(m[1]);
  return [...out];
}

function parseSubComponentTags(src, selfName) {
  // <evo-* tags used in the template (includes icons like <evo-icon-chevron-down-16>)
  const re = /<(evo-[a-z][a-z0-9-]*)/g;
  const out = new Set();
  let m;
  while ((m = re.exec(src)) !== null) {
    if (m[1] !== selfName) out.add(m[1]);
  }
  return [...out];
}

// Splits a comma-separated list while respecting angle-bracket nesting and
// template literals (e.g. `on${string}` in TypeScript utility types).
function splitGenericAwareComma(str) {
  const parts = [];
  let current = '';
  let depth = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '<') { depth++; current += ch; }
    else if (ch === '>') { depth = Math.max(0, depth - 1); current += ch; }
    else if (ch === ',' && depth === 0) {
      if (current.trim()) parts.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function extractInputInterface(src) {
  if (!src) return null;
  // Find `export interface Input` (with optional generic parameter)
  const headerRe = /export\s+interface\s+Input(?:<[^>]*>)?\s*/g;
  const headerMatch = headerRe.exec(src);
  if (!headerMatch) return null;

  // Walk character-by-character from after the header to find:
  //   - the optional `extends Foo, Bar<Baz>` clause
  //   - the opening `{` of the interface body
  // We must handle template literals (`...${...}...`) and quoted strings so
  // that a `{` inside `\`on${string}\`` doesn't fool us.
  let i = headerMatch.index + headerMatch[0].length;
  let extendsStr = '';
  let inExtends = false;

  if (src.slice(i).match(/^\s*extends\s/)) {
    // Skip 'extends '
    i += src.slice(i).match(/^\s*extends\s/)[0].length;
    inExtends = true;
  }

  let angleDepth = 0;

  while (i < src.length) {
    const ch = src[i];

    // Skip quoted strings and template literals so `{` inside them is ignored
    if (ch === '"' || ch === "'") {
      const q = ch;
      extendsStr += ch; i++;
      while (i < src.length && src[i] !== q) {
        if (src[i] === '\\') { extendsStr += src[i]; i++; }
        extendsStr += src[i]; i++;
      }
      extendsStr += src[i] || ''; i++;
      continue;
    }
    if (ch === '`') {
      extendsStr += ch; i++;
      while (i < src.length && src[i] !== '`') {
        if (src[i] === '\\') { extendsStr += src[i]; i++; }
        extendsStr += src[i]; i++;
      }
      extendsStr += src[i] || ''; i++;
      continue;
    }

    if (ch === '<') { angleDepth++; }
    else if (ch === '>') { angleDepth = Math.max(0, angleDepth - 1); }
    else if (ch === '{' && angleDepth === 0) {
      // This is the interface body opening brace
      const extendsClause = inExtends
        ? splitGenericAwareComma(extendsStr).map(s => s.replace(/\s+/g, ' ').trim())
        : [];
      const block = extractBracedBlock(src, i);
      return { extends: extendsClause, endIdx: block.endIdx, props: parseProps(block.body) };
    }

    if (inExtends) extendsStr += ch;
    i++;
  }
  return null;
}

// Also look for helper interfaces defined above Input (e.g. `export interface Tab`)
function extractHelperInterfaces(src) {
  const re = /export\s+interface\s+((?!Input\b)\w+)(?:<[^>]*>)?(?:\s+extends\s+[^{]+)?\s*\{/g;
  const results = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    const braceIdx = m.index + m[0].length - 1;
    const block = extractBracedBlock(src, braceIdx);
    results.push({
      name: m[1],
      props: parseProps(block.body),
    });
  }
  return results;
}

function parseTemplateAriaUsages(src, interfaceEndIdx) {
  const template = interfaceEndIdx ? src.slice(interfaceEndIdx) : (src || '');
  // Match aria-attr=value where value is: unquoted-token, (expr), or "string"
  const re = /(aria-[\w-]+)=("(?:[^"]*)"|'(?:[^']*)'|\([^)]*\)|[^\s>]+)/g;
  const results = [];
  let m;
  while ((m = re.exec(template)) !== null) {
    results.push({ attr: m[1], value: m[2] });
  }
  return results;
}

function parseMarkoRoleUsages(src, interfaceEndIdx) {
  const template = interfaceEndIdx ? src.slice(interfaceEndIdx) : (src || '');
  const re = /\brole=("(?:[^"]*)"|'(?:[^']*)'|[^\s>]+)/g;
  const roles = new Set();
  let m;
  while ((m = re.exec(template)) !== null) roles.add(m[1].replace(/['"]/g, ''));
  return [...roles];
}

function analyzeMarko(componentName) {
  const dir = path.join(EVO_MARKO_TAGS, componentName);
  const src = readFile(path.join(dir, 'index.marko'));
  if (!src) return null;

  const styleContent = readFile(path.join(dir, 'style.ts'));
  const skinImports = parseSkinImports(styleContent);
  const makeupImports = parseMakeupImports(src);
  const internalImports = parseInternalTagImports(src);
  const subComponents = parseSubComponentTags(src, componentName);

  const iface = extractInputInterface(src);
  const helperInterfaces = extractHelperInterfaces(src);

  let inputInterface = null;
  if (iface) {
    inputInterface = {
      extends: iface.extends,
      a11yProps: iface.props.filter(p => p.category === 'a11y'),
      ariaProps: iface.props.filter(p => p.category === 'aria'),
      eventCallbacks: iface.props.filter(p => p.category === 'event'),
      attrTagSlots: iface.props.filter(p => p.category === 'slot'),
      regularProps: iface.props.filter(p => p.category === 'prop'),
    };
  }

  return {
    hasImplementation: true,
    skinImports,
    makeupImports,
    internalImports,
    subComponents: unique(subComponents),
    helperInterfaces,
    inputInterface,
    templateAriaUsages: parseTemplateAriaUsages(src, iface?.endIdx),
    templateRoleUsages: parseMarkoRoleUsages(src, iface?.endIdx),
  };
}

// ── Skin analysis ──────────────────────────────────────────────────────────────

function analyzeSkin(skinModule) {
  const dir = path.join(SKIN_SASS, skinModule);
  if (!exists(dir)) return { hasImplementation: false };

  const scssContent = listDir(dir)
    .filter(f => f.endsWith('.scss'))
    .map(f => readFile(path.join(dir, f)))
    .filter(Boolean)
    .join('\n');

  if (!scssContent) return { hasImplementation: false };

  // ── BEM extraction ──
  // Full explicit class names (e.g. `.btn__cell`, `.btn--primary`)
  const allClassNames = new Set();
  const classRe = /\.([a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*)?(?:--[a-z][a-z0-9]*(?:-[a-z0-9]+)*)?)\b/g;
  let m;
  while ((m = classRe.exec(scssContent)) !== null) allClassNames.add(m[1]);

  const bemBlocks = new Set();
  const bemElements = new Set();
  const bemModifiers = new Set();
  for (const cls of allClassNames) {
    if (cls.includes('__')) bemElements.add(cls);
    else if (cls.includes('--')) bemModifiers.add(cls);
    else bemBlocks.add(cls);
  }

  // SCSS `&__element` and `&--modifier` nested selectors (partial — needs parent context)
  const nestedElementSuffixes = unique(
    (scssContent.match(/&__([a-z][a-z0-9]*(?:-[a-z0-9]+)*)/g) || [])
      .map(s => s.replace('&__', ''))
  ).sort();
  const nestedModifierSuffixes = unique(
    (scssContent.match(/&--([a-z][a-z0-9]*(?:-[a-z0-9]+)*)/g) || [])
      .map(s => s.replace('&--', ''))
  ).sort();

  // ── State selectors ──
  const stateAttrs = [
    'aria-', 'data-', 'role', 'disabled', 'hidden', 'readonly',
    'required', 'checked', 'selected', 'open', 'expanded', 'invalid',
  ];
  const stateRe = new RegExp(
    `\\[((?:${stateAttrs.join('|')})[^\\]]*)\\]`, 'g'
  );
  const stateSelectors = new Set();
  while ((m = stateRe.exec(scssContent)) !== null) stateSelectors.add(`[${m[1]}]`);

  // ── CSS custom properties ──
  const varRe = /var\((--[a-z][a-z0-9-]*)/g;
  const cssVars = new Set();
  while ((m = varRe.exec(scssContent)) !== null) cssVars.add(m[1]);

  // ── :root custom property definitions ──
  const rootVarRe = /:root\s*\{([^}]+)\}/g;
  const rootVarDefs = new Set();
  while ((m = rootVarRe.exec(scssContent)) !== null) {
    const block = m[1];
    const defRe = /(--[a-z][a-z0-9-]*):/g;
    let dm;
    while ((dm = defRe.exec(block)) !== null) rootVarDefs.add(dm[1]);
  }

  return {
    hasImplementation: true,
    bemBlocks: [...bemBlocks].sort(),
    bemElements: [...bemElements].sort(),
    bemModifiers: [...bemModifiers].sort(),
    nestedBemElementSuffixes: nestedElementSuffixes,
    nestedBemModifierSuffixes: nestedModifierSuffixes,
    cssCustomProperties: [...cssVars].sort(),
    cssCustomPropertyDefinitions: [...rootVarDefs].sort(),
    stateSelectors: [...stateSelectors].sort(),
    rtlOverrides: /\[dir=['"]rtl['"]\]/.test(scssContent),
  };
}

// ── evo-react analysis ─────────────────────────────────────────────────────────

function analyzeReact(componentName) {
  const dir = path.join(EVO_REACT_SRC, componentName);
  if (!exists(dir)) return { hasImplementation: false };

  const src = listDir(dir)
    .filter(f => /\.(tsx?|ts)$/.test(f) && !/\.(spec|stories)\./.test(f))
    .map(f => readFile(path.join(dir, f)))
    .filter(Boolean)
    .join('\n');

  if (!src) return { hasImplementation: false };

  // Extract TypeScript interface/type bodies
  const allProps = [];
  // Match `interface FooProps extends ... { ... }` or `type FooProps = { ... }`
  const ifaceRe = /(?:interface\s+\w+(?:\s+extends\s+[^{]+)?\s*\{|type\s+\w+\s*=\s*\{)([^}]+)\}/g;
  let m;
  while ((m = ifaceRe.exec(src)) !== null) {
    allProps.push(...parseProps(m[1]));
  }

  // aria-* usages in JSX
  const ariaRe = /(aria-[\w-]+)=/g;
  const ariaUsages = new Set();
  while ((m = ariaRe.exec(src)) !== null) ariaUsages.add(m[1]);

  // role= usages in JSX
  const roleRe = /\brole=["'{]([^"'}\s]+)/g;
  const roles = new Set();
  while ((m = roleRe.exec(src)) !== null) roles.add(m[1]);

  return {
    hasImplementation: true,
    props: allProps.filter(Boolean),
    a11yProps: allProps.filter(p => p?.category === 'a11y'),
    ariaProps: allProps.filter(p => p?.category === 'aria'),
    eventHandlers: allProps.filter(p => p && /^on[A-Z]/.test(p.name)),
    ariaUsages: [...ariaUsages].sort(),
    roleUsages: [...roles].sort(),
    makeupImports: parseMakeupImports(src),
  };
}

// ── Per-component audit ────────────────────────────────────────────────────────

function auditComponent(name) {
  const marko = analyzeMarko(name);

  const skinImportModules = marko?.skinImports?.map(i => i.replace('@ebay/skin/', '')) ?? [];
  const skinModules = skinImportModules.length > 0
    ? skinImportModules
    : [name.replace(/^evo-/, '')];

  const skin = analyzeSkin(skinModules[0]);
  const react = analyzeReact(name);

  return { name, skinModules, marko: marko ?? { hasImplementation: false }, skin, react };
}

// ── Cross-component summary ────────────────────────────────────────────────────

function buildSummary(all) {
  const counts = { total: all.length, withMarko: 0, withSkin: 0, withReact: 0 };
  const makeupPackages = new Set();
  const a11yPropNames = new Set();
  const ariaProps = new Set();
  const eventCallbacks = new Set();
  const attrTagSlots = new Set();
  const templateAriaAttrs = new Set();
  const templateRoles = new Set();
  const allBemBlocks = new Set();
  const allStateSelectors = new Set();
  const allCssVars = new Set();

  const withMakeup = [];
  const withAttrTagSlots = [];
  const withRtl = [];
  const withHelperInterfaces = [];
  const withSubComponents = [];

  for (const comp of all) {
    if (comp.marko?.hasImplementation) {
      counts.withMarko++;

      comp.marko.makeupImports?.forEach(p => {
        makeupPackages.add(p);
        if (!withMakeup.includes(comp.name)) withMakeup.push(comp.name);
      });

      if (comp.marko.subComponents?.length) withSubComponents.push(comp.name);
      if (comp.marko.helperInterfaces?.length) withHelperInterfaces.push(comp.name);

      const iface = comp.marko.inputInterface;
      if (iface) {
        iface.a11yProps?.forEach(p => a11yPropNames.add(p.name));
        iface.ariaProps?.forEach(p => ariaProps.add(p.name));
        iface.eventCallbacks?.forEach(p => eventCallbacks.add(p.name));
        if (iface.attrTagSlots?.length) {
          iface.attrTagSlots.forEach(p => attrTagSlots.add(p.name));
          withAttrTagSlots.push(comp.name);
        }
      }

      comp.marko.templateAriaUsages?.forEach(u => templateAriaAttrs.add(u.attr));
      comp.marko.templateRoleUsages?.forEach(r => templateRoles.add(r));
    }

    if (comp.skin?.hasImplementation) {
      counts.withSkin++;
      comp.skin.bemBlocks?.forEach(b => allBemBlocks.add(b));
      comp.skin.stateSelectors?.forEach(s => allStateSelectors.add(s));
      comp.skin.cssCustomProperties?.forEach(v => allCssVars.add(v));
      if (comp.skin.rtlOverrides) withRtl.push(comp.name);
    }

    if (comp.react?.hasImplementation) counts.withReact++;
  }

  const toArr = s => [...s].sort();

  return {
    counts,
    makeupPackages: toArr(makeupPackages),
    a11yPropNames: toArr(a11yPropNames),
    ariaProps: toArr(ariaProps),
    eventCallbacks: toArr(eventCallbacks),
    attrTagSlots: toArr(attrTagSlots),
    templateAriaAttrs: toArr(templateAriaAttrs),
    templateRoles: toArr(templateRoles),
    allBemBlocks: toArr(allBemBlocks),
    allStateSelectors: toArr(allStateSelectors),
    allCssVars: toArr(allCssVars),
    withMakeup,
    withAttrTagSlots,
    withRtl,
    withHelperInterfaces,
    withSubComponents,
  };
}

// ── Entry point ────────────────────────────────────────────────────────────────

function main() {
  fs.mkdirSync(COMP_DIR, { recursive: true });

  const components = listDir(EVO_MARKO_TAGS).filter(name => {
    const p = path.join(EVO_MARKO_TAGS, name);
    return fs.statSync(p).isDirectory() && name.startsWith('evo-');
  });

  console.log(`\nPhase 1 — Static Analysis (${components.length} components)\n`);

  const results = components.map(name => {
    process.stdout.write(`  ${name.padEnd(36)}`);
    const result = auditComponent(name);
    const flags = [
      result.marko.hasImplementation ? 'marko' : '     ',
      result.skin.hasImplementation  ? 'skin'  : '    ',
      result.react.hasImplementation ? 'react' : '     ',
    ].join(' ');
    console.log(flags);
    fs.writeFileSync(
      path.join(COMP_DIR, `${name}.json`),
      JSON.stringify(result, null, 2)
    );
    return result;
  });

  const summary = buildSummary(results);
  fs.writeFileSync(path.join(OUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2));

  const rel = path.relative(process.cwd(), OUT_DIR);
  console.log(`\nOutput written to ${rel}/`);
  console.log(`  ${components.length} component files + summary.json`);
  console.log(`\nSummary:`);
  console.log(`  ${summary.counts.withMarko}/${summary.counts.total} have evo-marko implementation`);
  console.log(`  ${summary.counts.withSkin}/${summary.counts.total}  have skin CSS`);
  console.log(`  ${summary.counts.withReact}/${summary.counts.total}  have evo-react implementation`);
  console.log(`  ${summary.a11yPropNames.length} unique a11y prop names`);
  console.log(`  ${summary.eventCallbacks.length} unique event callback names`);
  console.log(`  ${summary.attrTagSlots.length} unique AttrTag slot names`);
  console.log(`  ${summary.makeupPackages.length} MakeupJS packages used`);
  console.log(`  ${summary.withRtl.length} components with RTL overrides`);
}

main();
