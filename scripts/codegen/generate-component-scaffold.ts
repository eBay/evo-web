#!/usr/bin/env node
/**
 * generate-component-scaffold.ts
 *
 * Generates the deterministic structural scaffolding for a new evo-web component.
 * Writes files that are byte-identical given the same manifest — the AI skills
 * then complete the non-deterministic parts (template body, component body,
 * behavioral logic) on top of these scaffolds.
 *
 * Files written:
 *   packages/evo-marko/src/tags/<name>/style.ts          — complete (one line)
 *   packages/evo-marko/src/tags/<name>/index.marko        — scaffold (interface + stubs)
 *   packages/evo-marko/src/tags/<name>/test/test.server.ts — complete structure
 *   packages/evo-react/src/<name>/index.tsx               — scaffold (props type + stubs)
 *
 * Usage:
 *   npx tsx scripts/codegen/generate-component-scaffold.ts <component-name>
 *   npx tsx scripts/codegen/generate-component-scaffold.ts accordion
 *
 * Reads:  src/routes/_index/components/<name>/manifest.json
 * Writes: packages/evo-marko/src/tags/<evo-name>/*
 *         packages/evo-react/src/<evo-name>/*
 */

/* eslint-disable no-console */
import fs from "fs";
import path from "path";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Manifest {
    component: {
        name: string;
        displayName: string;
        description?: string;
        category?: string;
    };
    rootElement?: {
        default?: string;
        excludedAttributes?: string[];
    };
    props?: ManifestProp[];
    a11yProps?: ManifestA11yProp[];
    slots?: ManifestSlot[];
    variants?: { name: string }[];
    bem?: {
        block: string;
        modifiers?: { name: string; description?: string }[];
        elements?: { name: string }[];
    };
    a11y?: {
        role?: string;
        explicitRole?: boolean;
        labelStrategy?: string;
        ariaAttributes?: { attribute: string; condition?: string }[];
    };
    keyboardModel?: unknown;
}

interface ManifestProp {
    name: string;
    type: string;
    values?: unknown[] | null;
    default?: unknown;
    required?: boolean;
    description?: string | null;
}

interface ManifestA11yProp {
    name: string;
    type?: string;
    required?: boolean;
    allowNull?: boolean;
    description?: string | null;
}

interface ManifestSlot {
    name: string;
    type?: string | null;
    required?: boolean;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const HTML_ELEMENT_MAP: Record<string, string> = {
    div: "Div",
    span: "Span",
    button: "Button",
    a: "A",
    input: "Input",
    textarea: "Textarea",
    select: "Select",
    form: "Form",
    ul: "Ul",
    ol: "Ol",
    li: "Li",
    nav: "Nav",
    section: "Section",
    article: "Article",
    header: "Header",
    footer: "Footer",
    main: "Main",
    aside: "Aside",
    dialog: "Dialog",
    details: "Details",
    summary: "Summary",
    label: "Label",
    fieldset: "Fieldset",
    legend: "Legend",
    table: "Table",
    tr: "Tr",
    td: "Td",
    th: "Th",
};

function markoHtmlType(element: string): string {
    return `Marko.HTML.${HTML_ELEMENT_MAP[element] ?? "Div"}`;
}

function reactHtmlType(element: string): string {
    return `"${element}"`;
}

function propToMarkoType(prop: ManifestProp): string {
    switch (prop.type) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        case "enum":
            return prop.values?.map((v) => JSON.stringify(v)).join(" | ") ?? "string";
        default:
            return "unknown";
    }
}

function propToReactType(prop: ManifestProp): string {
    // Same logic for now — both use TypeScript
    return propToMarkoType(prop);
}

function buildOmitList(manifest: Manifest): string[] {
    const omit: string[] = [];
    if (manifest.a11y?.explicitRole && manifest.a11y.role) omit.push("role");
    if (manifest.a11y?.labelStrategy === "aria-label-prop") omit.push("aria-label");
    if (manifest.a11y?.labelStrategy === "aria-hidden") {
        omit.push("aria-label");
        omit.push("aria-hidden");
    }
    return [...new Set([...(manifest.rootElement?.excludedAttributes ?? []), ...omit])];
}

// ── Marko Input interface ─────────────────────────────────────────────────────

function buildMarkoInterface(manifest: Manifest): string {
    const rootEl = manifest.rootElement?.default ?? "div";
    const htmlType = markoHtmlType(rootEl);
    const omit = buildOmitList(manifest);
    const extension =
        omit.length > 0
            ? `Omit<${htmlType}, ${omit.map((a) => JSON.stringify(a)).join(" | ")}>`
            : htmlType;

    const lines: string[] = [];

    // Regular props
    for (const prop of manifest.props ?? []) {
        const tsType = propToMarkoType(prop);
        const optional = !prop.required ? "?" : "";
        if (prop.description) {
            lines.push(`    /** ${prop.description.replace(/\n/g, " ")} */`);
        }
        lines.push(`    ${prop.name}${optional}: ${tsType};`);
    }

    // A11y props
    for (const a11yProp of manifest.a11yProps ?? []) {
        const nullable = a11yProp.allowNull ? " | null" : "";
        const optional = !a11yProp.required ? "?" : "";
        if (a11yProp.description) {
            lines.push(`    /** ${a11yProp.description.replace(/\n/g, " ")} */`);
        }
        lines.push(`    ${a11yProp.name}${optional}: string${nullable};`);
    }

    // Named slots
    for (const slot of manifest.slots ?? []) {
        if (slot.type === "named-attrtag") {
            const optional = !slot.required ? "?" : "";
            lines.push(`    ${slot.name}${optional}: Marko.AttrTag<Marko.HTML.Div>; // TODO: narrow element type`);
        }
    }

    const body = lines.length > 0 ? "\n" + lines.join("\n") + "\n" : "";

    return `export interface Input extends ${extension} {${body}}`;
}

// ── React Props interface ─────────────────────────────────────────────────────

function buildReactInterface(manifest: Manifest, componentName: string): string {
    const rootEl = manifest.rootElement?.default ?? "div";
    const omit = buildOmitList(manifest);
    const extension =
        omit.length > 0
            ? `Omit<React.ComponentProps<${reactHtmlType(rootEl)}>, ${omit.map((a) => JSON.stringify(a)).join(" | ")}>`
            : `React.ComponentProps<${reactHtmlType(rootEl)}>`;

    const lines: string[] = [];

    for (const prop of manifest.props ?? []) {
        const tsType = propToReactType(prop);
        const optional = !prop.required ? "?" : "";
        if (prop.description) {
            lines.push(`    /** ${prop.description.replace(/\n/g, " ")} */`);
        }
        lines.push(`    ${prop.name}${optional}: ${tsType};`);
    }

    for (const a11yProp of manifest.a11yProps ?? []) {
        const nullable = a11yProp.allowNull ? " | null" : "";
        const optional = !a11yProp.required ? "?" : "";
        if (a11yProp.description) {
            lines.push(`    /** ${a11yProp.description.replace(/\n/g, " ")} */`);
        }
        lines.push(`    ${a11yProp.name}${optional}: string${nullable};`);
    }

    for (const slot of manifest.slots ?? []) {
        if (slot.type === "named-attrtag") {
            const optional = !slot.required ? "?" : "";
            lines.push(`    ${slot.name}${optional}: React.ReactNode;`);
        }
    }

    const body = lines.length > 0 ? "\n" + lines.join("\n") + "\n" : "";
    const ifaceName = `${componentName}Props`;

    return `export interface ${ifaceName} extends ${extension} {${body}}`;
}

// ── BEM class array comment ───────────────────────────────────────────────────

function buildBEMComment(manifest: Manifest): string {
    const block = manifest.bem?.block ?? "component";
    const modifiers = (manifest.bem?.modifiers ?? []).map((m) => m.name);

    const lines = [`// BEM class array — add conditional expressions for each modifier:`];
    lines.push(`// class=[`);
    lines.push(`//     "${block}",                    // always`);
    for (const mod of modifiers) {
        lines.push(`//     /* ${mod} && "${block}--${mod}" */,  // TODO: add condition`);
    }
    lines.push(`//     className,              // consumer className passthrough`);
    lines.push(`// ]`);

    return lines.join("\n");
}

// ── ARIA wiring comment ───────────────────────────────────────────────────────

function buildARIAComment(manifest: Manifest): string {
    const a11y = manifest.a11y;
    if (!a11y) return "// No ARIA wiring required for this component.";

    const lines = ["// ARIA wiring — wire these exactly as shown:"];

    if (a11y.explicitRole && a11y.role) {
        lines.push(`// role="${a11y.role}"`);
    }

    if (a11y.labelStrategy === "aria-label-prop") {
        const prop = manifest.a11yProps?.[0]?.name ?? "a11yText";
        const allowNull = manifest.a11yProps?.[0]?.allowNull;
        if (allowNull) {
            lines.push(`// aria-label=(${prop} !== null ? ${prop} : undefined)`);
            lines.push(`// aria-hidden=(${prop} === null ? "true" : undefined)`);
        } else {
            lines.push(`// aria-label=${prop}`);
        }
    }

    for (const attr of a11y.ariaAttributes ?? []) {
        if (attr.condition && attr.condition !== "always") {
            lines.push(`// ${attr.attribute}=(/* ${attr.condition} */ ? ... : undefined)`);
        } else {
            lines.push(`// ${attr.attribute}=...`);
        }
    }

    return lines.join("\n");
}

// ── File generators ───────────────────────────────────────────────────────────

function generateStyleTs(block: string): string {
    return `import "@ebay/skin/${block}";\n`;
}

function generateIndexMarko(manifest: Manifest): string {
    const iface = buildMarkoInterface(manifest);
    const bem = buildBEMComment(manifest);
    const aria = buildARIAComment(manifest);

    return [
        `// AUTO-SCAFFOLD — generated by scripts/codegen/generate-component-scaffold.ts`,
        `// The Input interface, BEM names, and ARIA wiring below are DETERMINISTIC.`,
        `// Complete the template body in the TODO section — do not regenerate the interface.`,
        ``,
        iface,
        ``,
        bem,
        ``,
        aria,
        ``,
        `// ── TODO: Complete template body ────────────────────────────────────────────`,
        `// Add <const/{ }=input> destructuring, reactive state (<let/>), and HTML markup.`,
        `// Read the BEM and ARIA comments above — use those class names and attributes exactly.`,
        ``,
    ].join("\n");
}

function generateIndexTsx(manifest: Manifest, componentName: string): string {
    const block = manifest.bem?.block ?? componentName.replace(/^evo-/, "");
    const displayName = manifest.component.displayName;
    const iface = buildReactInterface(manifest, displayName);
    const aria = buildARIAComment(manifest);
    const propsParam = `{ ${[...(manifest.props ?? []), ...(manifest.a11yProps ?? [])].map((p) => p.name).join(", ")}, className, children, ref, ...rest }`;

    return [
        `// AUTO-SCAFFOLD — generated by scripts/codegen/generate-component-scaffold.ts`,
        `// The Props interface and ARIA wiring below are DETERMINISTIC.`,
        `// Complete the component body in the TODO section — do not regenerate the interface.`,
        ``,
        `import "@ebay/skin/${block}";`,
        `import React from "react";`,
        ``,
        iface,
        ``,
        aria,
        ``,
        `// ── TODO: Complete component body ───────────────────────────────────────────`,
        `// Use the Props interface above. Wire ARIA attributes from the comment above.`,
        `// Spread ...rest onto the root element. Attach ref to the root element.`,
        `export function ${displayName}(${propsParam}: ${displayName}Props) {`,
        `    // TODO: implement component body`,
        `    return null;`,
        `}`,
        ``,
    ].join("\n");
}

function generateTestServerTs(manifest: Manifest, componentName: string): string {
    const variants = manifest.variants ?? [{ name: "Default" }];
    const storiesPath = `./${componentName}.stories`;

    const imports = [
        `import { describe, it } from "vitest";`,
        `import { composeStories } from "@storybook/marko";`,
        `import { snapshotHTML } from "../../../common/test-utils/snapshots";`,
        `import * as stories from "${storiesPath}";`,
    ].join("\n");

    const destructure =
        `const { ` +
        variants
            .map((v) => v.name.replace(/\s+/g, ""))
            .join(", ") +
        ` } = composeStories(stories);`;

    const tests = variants
        .map((v) => {
            const name = v.name.replace(/\s+/g, "");
            const label = v.name.toLowerCase();
            return [
                `    it("renders ${label}", async () => {`,
                `        await snapshotHTML(${name});`,
                `    });`,
            ].join("\n");
        })
        .join("\n\n");

    return [
        `// AUTO-SCAFFOLD — generated by scripts/codegen/generate-component-scaffold.ts`,
        `// Structure is deterministic. Add assertion content as needed.`,
        ``,
        imports,
        ``,
        `${destructure}`,
        ``,
        `describe("${componentName}", () => {`,
        tests,
        `});`,
        ``,
    ].join("\n");
}


/** Resolves the docs component folder path.
 *  Strips the "evo-" prefix if present, since docs folders use the BEM block name.
 *  e.g., "evo-accordion" -> "src/routes/_index/components/accordion"
 *  e.g., "accordion"     -> "src/routes/_index/components/accordion"
 */
function componentDocsDir(componentName: string): string {
    const block = componentName.replace(/^evo-/, "");
    return path.resolve("src/routes/_index/components", block);
}

// ── Main ──────────────────────────────────────────────────────────────────────

const componentName = process.argv[2];
if (!componentName) {
    console.error("Usage: generate-component-scaffold.ts <component-name>");
    process.exit(1);
}

const manifestPath = path.join(componentDocsDir(componentName), "manifest.json");
if (!fs.existsSync(manifestPath)) {
    console.error(`No manifest found at ${manifestPath} — run spec-to-manifest.ts first`);
    process.exit(1);
}

const manifest: Manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

// Derive display name from componentName if manifest.component is not yet populated
// (e.g. when only spec-to-manifest.ts has run and the AI manifest skill hasn't yet)
const rawName = componentName.replace(/^evo-/, "");
const derivedDisplayName = rawName
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
if (!manifest.component) {
    (manifest as Record<string, unknown>).component = {
        name: componentName,
        displayName: derivedDisplayName,
        description: "",
        category: "",
    };
}

const block = manifest.bem?.block ?? rawName;
const markoDir = path.resolve("packages/evo-marko/src/tags", componentName);
const reactDir = path.resolve("packages/evo-react/src", componentName);

fs.mkdirSync(path.join(markoDir, "test"), { recursive: true });
fs.mkdirSync(reactDir, { recursive: true });

const written: string[] = [];

// style.ts — complete, byte-identical
const styleTs = generateStyleTs(block);
fs.writeFileSync(path.join(markoDir, "style.ts"), styleTs, "utf-8");
written.push("packages/evo-marko/.../style.ts  ← complete");

// index.marko — scaffold with deterministic interface + stubs
const indexMarko = generateIndexMarko(manifest);
fs.writeFileSync(path.join(markoDir, "index.marko"), indexMarko, "utf-8");
written.push("packages/evo-marko/.../index.marko  ← scaffold (complete template body)");

// test.server.ts — complete structure with stubs
const testServer = generateTestServerTs(manifest, componentName);
fs.writeFileSync(path.join(markoDir, "test", "test.server.ts"), testServer, "utf-8");
written.push("packages/evo-marko/.../test/test.server.ts  ← complete structure");

// test.browser.ts — touch only if interactive (skill fills content)
if (manifest.keyboardModel) {
    const browserStub = [
        `// AUTO-SCAFFOLD — generated by scripts/codegen/generate-component-scaffold.ts`,
        `// This file exists because manifest.keyboardModel is present (interactive component).`,
        `// Complete browser interaction tests here.`,
        ``,
        `import { describe, it, expect, afterEach } from "vitest";`,
        `import { render, cleanup } from "@marko/testing-library";`,
        `import { composeStories } from "@storybook/marko";`,
        `import * as stories from "../${componentName}.stories";`,
        ``,
        `const { Default } = composeStories(stories);`,
        ``,
        `afterEach(cleanup);`,
        ``,
        `describe("${componentName} — browser", () => {`,
        `    // TODO: add keyboard and interaction tests`,
        `});`,
        ``,
    ].join("\n");
    fs.writeFileSync(path.join(markoDir, "test", "test.browser.ts"), browserStub, "utf-8");
    written.push("packages/evo-marko/.../test/test.browser.ts  ← scaffold (keyboardModel present)");
}

// index.tsx — scaffold with deterministic props type + stubs
const indexTsx = generateIndexTsx(manifest, componentName);
fs.writeFileSync(path.join(reactDir, "index.tsx"), indexTsx, "utf-8");
written.push("packages/evo-react/.../index.tsx  ← scaffold (complete component body)");

console.log(`✅ generate-component-scaffold: ${componentName}`);
written.forEach((f) => console.log(`   ${f}`));
console.log(`\nNext: complete template body in index.marko and component body in index.tsx`);
