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

2. **For light-background modifiers**, run both of these greps:
   ```bash
   grep "foreground-on-<type>" packages/skin/src/tokens/evo-dark.scss
   grep "foreground-on-<type>" packages/skin/src/tokens/evo-dark-class.scss
   ```
   where `<type>` is the modifier name or the semantic category (e.g. `warning`).

3. **Failure conditions:**
   - A light-background modifier's foreground token is NOT explicitly set to a dark value
     in `evo-dark.scss` — the token will flip to near-white in dark mode via `foreground-primary`
     inheritance, causing a contrast failure.
   - A light-background modifier's foreground token is NOT explicitly set in
     `evo-dark-class.scss` — the `.evo-theme`-scoped dark mode (used by the dev site and
     production) will also have the contrast failure.

4. **What to check for:** the override must be a hardcoded dark palette token, not an alias
   to `foreground-primary` (which itself flips in dark mode). Specifically:
   `--color-foreground-on-<type>: var(--color-neutral-800)` or equivalent dark palette value.

**Failure:** light-background modifier exists but either `evo-dark.scss` or
`evo-dark-class.scss` is missing the explicit dark foreground override.

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
