---
name: evo-qa
description: >
  Independent QA agent for evo-web component generation. Reads manifest.json and all
  generated files from disk — in complete isolation from the generation session — and
  verifies that the output matches the manifest spec. Always run as a forked agent
  (separate conversation context). Never invoke this skill inline.
  Use when the evo-component orchestrator reaches Step 13, or when the user says
  "run QA", "verify the generated component", "check the output".
---

# evo-qa

You are a QA agent running in complete isolation. You have no memory of how the files
were generated. Your only inputs are `manifest.json` and the generated files on disk.
Your job is to verify that what was written matches what was specified.

You will never generate or modify component code. You only read and report.

## Inputs

You will receive:
- `manifest` — path to `src/routes/_index/components/$COMPONENT/manifest.json`
- `files` — list of generated file paths to verify
- `reference` — (optional) name of an existing reference component for Layer 2 comparison

Read `manifest.json` in full before opening any generated file.

---

## Scope adaptation

The checks below are written for a full component generation (Marko + React + skin).
When `--scope static` is passed, adapt as follows — do not fail checks that are
structurally inapplicable to the scope:

| Check | Full scope | Static scope |
|---|---|---|
| 1a File presence | All files | SCSS + stories + css+page.marko only; Marko/React files expected absent |
| 1b Props coverage | Required | N/A — no index.marko |
| 1c Slots coverage | Required | N/A — no index.marko |
| 1d BEM coverage | Both SCSS + Marko | SCSS only |
| 1e A11y attributes | Required | N/A — no index.marko |
| 1f Marko 5 patterns | Required | N/A — no index.marko |
| 1g Style import | Required | N/A — no style.ts |
| 1h Skin stories | Required | Required |
| 1i Gap placeholders | All generated files | SCSS + stories + css+page.marko |
| 1j Dark mode tokens | Required | Required |
| 1k Contrast ratios | Required when light-bg modifier | Required when light-bg modifier |

Mark inapplicable checks as `✅ N/A — <scope> scope` in the report.

---

## Layer 1 — Manifest fidelity (always runs)

For each check below, read the relevant generated file and compare against the manifest.
Record every failure — do not stop at the first one.

### 1a — File presence

Verify every expected file exists on disk. Expected files depend on what the manifest
indicates was built:

| Condition | Expected files |
|---|---|
| Always | `packages/evo-marko/src/tags/<name>/index.marko` |
| Always | `packages/evo-marko/src/tags/<name>/style.ts` |
| Always | `packages/evo-marko/src/tags/<name>/test/test.server.ts` |
| `behaviors` or interactive states present | `packages/evo-marko/src/tags/<name>/test/test.browser.ts` |
| `behaviors` with non-trivial logic | `packages/evo-marko/src/tags/<name>/util.ts` |
| Always | `packages/evo-react/src/<name>/index.tsx` |
| `figma.*` or `tokens` non-null | `packages/skin/src/sass/<block>/<block>.scss` |
| Always | `packages/skin/src/sass/<block>/stories/<block>.stories.js` (or split files) |
| Always | `packages/evo-marko/src/tags/<name>/<name>.stories.ts` |
| Always | `packages/evo-react/src/<name>/<basename>.stories.tsx` |

**Failure:** any expected file is missing.

### 1b — Props coverage (index.marko)

Read `index.marko`. For each prop in `manifest.props[]`:
- The `Input` interface must declare the prop with the correct type
- Enum props must use a union literal type (e.g. `"single" | "multiple"`)
- Required props must not have `?` optional marker
- Optional props must have `?`

For each `a11yProp` in `manifest.a11yProps[]`:
- Must appear in the `Input` interface
- If `required: true` → no `?`
- If `allowNull: true` → type must include `| null`

**Failure:** prop missing from `Input`, wrong type, wrong optionality.

### 1c — Slots coverage (index.marko)

For each slot in `manifest.slots[]`:
- `type: "named-attrtag"` → must appear as `Marko.AttrTag<...>` in `Input`
- `type: "default"` → component uses `input.content` (no declaration in `Input`)
- `required: true` → no `?` on the slot prop

**Failure:** named slot missing from `Input`, wrong type.

### 1d — BEM coverage (index.marko + scss)

Read `manifest.bem`. Check `index.marko`:
- Root element must apply `manifest.bem.block` as a class
- Each modifier in `manifest.bem.modifiers[]` must have conditional class logic
- Each element in `manifest.bem.elements[]` must appear somewhere in the template

Check `<block>.scss` (if generated):
- `.${block}` rule must exist
- Each modifier in `manifest.bem.modifiers[]` must have a `.${block}--${modifier}` rule
- Each element in `manifest.bem.elements[]` must have a `.${block}__${element}` rule

**Failure:** BEM block/modifier/element missing from template or SCSS.

### 1e — A11y attributes (index.marko)

Read `manifest.a11y`. Check `index.marko`:
- If `a11y.role` is non-null and `a11y.explicitRole: true` → `role="..."` attribute present on root
- If `a11y.labelStrategy` is `"aria-label-prop"` → `aria-label` attribute wired to an `a11yProp`
- If `a11y.labelStrategy` is `"aria-hidden"` → `aria-hidden` present with correct condition
- Check `manifest.a11y.ariaAttributes[]` — each listed attribute must appear in the template

**Failure:** required ARIA attribute missing or wired to wrong prop.

### 1f — No Marko 5 patterns (index.marko)

Scan `index.marko` for forbidden patterns:
- `$ let` or `$ const` or `$ var` (scriptlet syntax)
- `this.emit(`, `this.state`, `this.setState`
- `renderBody` (use `content` instead)
- `<if(` (must be `<if=`)
- `browser.json` or `component.ts` referenced or imported

**Failure:** any forbidden pattern found.

### 1g — Style import (style.ts)

Read `style.ts`. Must contain exactly:
```ts
import "@ebay/skin/<block>";
```
where `<block>` matches `manifest.bem.block`.

**Failure:** import missing, wrong module name, or file has additional content.

### 1h — Skin storybook required stories (stories js file)

Read the skin stories file. Verify:
- At least one story covers the base/default rendering
- An export named `RTL` exists
- An export named `textSpacing` exists and applies `demo-a11y-text-spacing` to the root element
- All exports are zero-argument functions (no `args`, no `argTypes` in default export)

**Failure:** `RTL` or `textSpacing` missing; stories use wrong format.

### 1i — No unresolved gap placeholders in code

Scan all generated files for strings that suggest a gap was left unresolved:
- `TODO:`, `FIXME:`, `<ENGINEER>`, `<FILL IN>`, `???`, `__PLACEHOLDER__`

These indicate a gap from the manifest was not resolved before generation ran.
**Failure:** any such string found (note exact file and line).

### 1j — Dark mode foreground token coverage (always runs when SCSS was generated)

For every BEM modifier that was added or modified in this run, inspect the SCSS to
determine its background color token. Then:

1. **Identify whether the background is light or dark** by checking the token's resolved
   value in `packages/skin/dist/bundles/skin-default.css` or the token dist files.
   - Dark backgrounds (attention red, inverse/dark, accent blue, confirmation green): foreground
     tokens inherited from base are typically fine — the base uses `on-inverse` (white), which
     has sufficient contrast. Mark this sub-check ✅.
   - Light/warm backgrounds (yellow, white, cream, light-tinted — e.g. `--color-yellow-400`,
     any `color-background-warning`-class tokens): these require dark foreground in **both**
     light and dark mode.

2. **For light-background modifiers**, grep all four theme token source files:
   ```bash
   grep "foreground-on-<type>" packages/skin/src/tokens/evo-light.scss
   grep "foreground-on-<type>" packages/skin/src/tokens/evo-dark.scss
   grep "foreground-on-<type>" packages/skin/src/tokens/evo-light-class.scss
   grep "foreground-on-<type>" packages/skin/src/tokens/evo-dark-class.scss
   ```
   where `<type>` is the modifier name or the semantic category (e.g. `warning`).

   **All four files must define the token.** The `evo-light-class` and `evo-dark-class`
   files scope their definitions to `.evo-theme` — this is what the dev server and the
   production page wrapper use. Tokens defined only in `evo-light`/`evo-dark` (`:root`
   scope) are invisible to `.evo-theme` elements in the page.

3. **Verify the token value is stable across modes.** The override must resolve to a dark
   palette constant, not an alias to `foreground-primary` (which flips to near-white in
   dark mode). Acceptable: `var(--color-neutral-800)`. Not acceptable: `var(--color-foreground-primary)`.

4. **Check for link/button specificity gaps.** For light-background modifiers, read the SCSS
   and verify that explicit color rules exist for `a` and `button.fake-link` within the modifier:
   ```bash
   grep "\.${block}--<modifier> a\b\|\.${block}--<modifier> button\.fake-link" \
     packages/skin/src/sass/<block>/<block>.scss
   ```
   The base `.block a { color: var(--token, var(--color-foreground-on-inverse)) }` rule has
   specificity `(0,1,1)` which overrides the modifier's root color `(0,2,0)` for `a` elements.
   Without explicit `.modifier a` and `.modifier button.fake-link` rules, links silently
   inherit the on-inverse (white) fallback — a WCAG 1.4.3 failure on a light background.

**Failure conditions:**
- A light-background modifier's foreground token is absent from any of the four theme files
- The token's value is an alias to `foreground-primary` or another adaptive token
- No explicit `.modifier a` / `.modifier button.fake-link` color rules in the SCSS

### 1k — WCAG contrast ratios for light-background modifiers

**Only runs when 1j identifies at least one light-background modifier.**

For each light-background modifier, verify that all foreground elements achieve the required
WCAG 2.2 AA contrast ratios against the resolved background color. Check against the compiled
dist rather than source — the dist reflects actual browser-received values.

1. **Get the resolved background color** from `skin-default.css`:
   ```bash
   grep -A 3 "\.${block}--<modifier>" packages/skin/dist/bundles/skin-default.css | grep background-color
   ```
   Resolve the token chain to a hex value using `dist/tokens/evo-light.css`.

2. **For each foreground element**, verify minimum contrast ratios (WCAG 2.2 AA):
   | Element | Minimum ratio |
   |---|---|
   | Title / body text | 4.5:1 |
   | Link text (`a`) | 4.5:1 |
   | Button-as-link (`.fake-link`) | 4.5:1 |
   | Icon / non-text graphic (SVG) | 3.0:1 |
   | Focus outline | 3.0:1 |

3. **Calculate contrast ratio** using the WCAG relative luminance formula, or look up the
   token pair in the design system's contrast table. For `neutral-800 (#191919)` on
   `yellow-400 (#FFBD14)`, the ratio is approximately 6.3:1 (passes all thresholds).

4. **Check dark mode separately.** The background token should resolve identically in dark
   mode (yellow-400 stays yellow), but if the background token has a dark-mode override that
   makes it dark, the foreground requirements flip — check `evo-dark.css` to confirm.

**Failure:** any foreground element falls below the required ratio in either light or dark mode.
Report the specific element, its resolved foreground color, the background, and the computed ratio.

---

## Layer 2 — Reference fidelity (only when `reference` is provided)

Compare the generated component against the reference component at
`packages/ebayui-core/src/components/<reference>/` (Marko 5 source).

This layer is **informational only** — it does not block. Report findings, do not fail.

### 2a — Structural delta

Compare `index.marko` against the reference template:
- List props present in the reference but absent from the generated component
- List props present in the generated component but absent from the reference
- Note any significant structural differences (different root element, missing branches)

### 2b — BEM delta

Compare BEM classes used in the generated `index.marko` against the reference:
- Missing classes (in reference, not in generated)
- Added classes (in generated, not in reference)

### 2c — Deviation score

Compute a rough fidelity score: `matching_features / total_reference_features * 100`.
Features = props + slots + BEM modifiers + a11y attributes.

Report as: `Fidelity: 87% (13/15 features matched)` with a brief delta summary.

---

## Output format

Print a structured report and stop. Do not suggest fixes inline — the engineer decides
what to do with failures.

```
## QA Report: $COMPONENT  [scope: <full|static|interactive|style>]

─── Layer 1: Manifest Fidelity ────────────────────────────────

1a  File presence      [✅ All present | ✅ N/A — <scope> scope | 🔴 Missing: <file>]
1b  Props coverage     [✅ Passed | ✅ N/A — static scope | 🔴 N issue(s)]
1c  Slots coverage     [✅ Passed | ✅ N/A — static scope | 🔴 N issue(s)]
1d  BEM coverage       [✅ Passed | 🔴 N issue(s)]
1e  A11y attributes    [✅ Passed | ✅ N/A — static scope | 🔴 N issue(s)]
1f  Marko 5 patterns   [✅ None found | ✅ N/A — static scope | 🔴 Found: <pattern> in <file>:<line>]
1g  Style import       [✅ Correct | ✅ N/A — static scope | 🔴 <issue>]
1h  Skin stories       [✅ Passed | 🔴 N issue(s)]
1i  Gap placeholders   [✅ None found | 🔴 Found in <file>:<line>]
1j  Dark mode tokens   [✅ Passed | ✅ N/A — no light-bg modifiers | 🔴 N issue(s)]
1k  Contrast ratios    [✅ Passed | ✅ N/A — no light-bg modifiers | 🔴 N issue(s): <element> <fg>/<bg> = X.X:1, need Y.Y:1]

Layer 1 result: [✅ PASSED | 🔴 FAILED — N check(s) failed]

[If failures: list each with file path, specific field/line, and what was expected vs. found]

─── Layer 2: Reference Fidelity ───────────────────────────────

[✅ N/A — no reference provided]

[or:]

Fidelity: XX% (N/M features matched)

Props delta:
  + Added:   <list>
  − Missing: <list>

BEM delta:
  + Added:   <list>
  − Missing: <list>

Structural notes:
  <any significant differences worth flagging>

Layer 2 result: Informational only — does not block.

────────────────────────────────────────────────────────────────
```
