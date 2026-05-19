---
name: evo-style-component
description: >
  Generate the skin SCSS layer for a new evo-web component from its manifest and Figma design.
  Reads src/routes/_index/components/$COMPONENT/manifest.json for BEM structure and design tokens, uses the Figma MCP
  to validate, clarify, and fill gaps, then writes packages/skin/src/sass/<name>/<name>.scss.
  Also registers the new component in skin-headless.scss.
  Use this whenever the user says "generate the SCSS", "create styles for", "run style component",
  "write the skin layer", or when the evo-component orchestrator invokes Step 6.
---

# evo-style-component

You are generating the skin SCSS for a new component. The manifest is the primary source of
truth — it already contains a token map derived from the design team's spec. Figma is a
validator, clarifier, and gap-filler, not the primary source.

## Step 1 — Read the manifest

Read `src/routes/_index/components/$COMPONENT/manifest.json`. Extract:

- `tokens` — named map of semantic property → CSS custom property name
  (e.g. `{ "background": "--color-background-primary", "border": "--color-border-subtle" }`)
  This is your primary token source. If present, go to Step 2. If absent, go to [No Tokens](#no-tokens).
- `bem.block` — BEM block class name (e.g. `"accordion"`)
- `bem.elements` — array of element objects with `name` field
- `bem.modifiers` — array of modifier objects with `name` and `description` fields
- `figma.fileKey` and/or `figmaUrl` — used to reach Figma for validation

## Step 2 — Validate and fill gaps with Figma

The `tokens` map tells you *which* CSS custom properties to use but not always *how* each maps
to the visual design — spacing values, typographic scale, border widths, and shape details still
need visual confirmation. Use Figma for this.

**Determine Figma coordinates:**
- If `figmaUrl` is present: parse `fileKey` and `nodeId` from the URL
  (URL format: `https://www.figma.com/design/:fileKey/:fileName?node-id=1-2`; convert `-` to `:` in nodeId)
- If only `figma.fileKey` is present (no full URL): call `search_design_system` to locate the node:
  ```
  search_design_system(query=<component display name>, fileKey=<figma.fileKey>)
  ```
  Use the first matching component result's nodeId.
- If neither is available: skip this step, proceed with tokens map only, note gaps.

**Run these calls in parallel:**
```
get_design_context(nodeId, fileKey, clientLanguages="scss,css", clientFrameworks="unknown")
get_variable_defs(nodeId, fileKey)
```

**What to do with the results:**

From `get_design_context` — use for visual confirmation and gap-filling:
- Study the screenshot to verify spacing, shape, border details, and typographic scale
- Check if the reference code mentions tokens not in your manifest `tokens` map — add them
- Note design annotations — they often specify edge-case states (hover, disabled, focus)

From `get_variable_defs` — use to validate and fill gaps:
- Cross-check the manifest token names against the Figma variable names
  (Figma: `color/background/primary` → CSS: `--color-background-primary` — same translation)
- If a Figma variable is used in the design but missing from the manifest `tokens` map,
  add it with a note that it came from Figma validation
- If a Figma value has no matching CSS custom property (e.g. a hardcoded hex), flag it

**Gap-filling priority:**
1. Manifest `tokens` map — trust it
2. `get_variable_defs` — use to add any missing tokens
3. `get_design_context` screenshot + annotations — use for spacing math and state details
4. Hardcode only as a last resort (no token exists); use SCSS `$_` variable with a comment

## Step 3 — Generate the SCSS file

Write `packages/skin/src/sass/<block>/<block>.scss`.

### File structure

```scss
@use "../mixins/private/token-mixins";
/* add other @use lines only if needed — e.g. @use "../variables/variables"; */

.<block> {
    /* base layout and visual styles */
}

.<block>--<modifier> {
    /* modifier overrides */
}

.<block>__<element> {
    /* element styles */
}
```

### Style rules

**BEM selectors — flat, never nested:**
```scss
/* ✅ correct */
.avatar { ... }
.avatar--fit { ... }
.avatar__image { ... }

/* ❌ wrong — no nesting */
.avatar {
    &--fit { ... }   /* do not use */
}
```

**Token usage — two approaches:**

For most properties, use CSS custom properties directly:
```scss
.badge {
    background-color: var(--color-background-attention);
    border: 2px solid var(--color-border-on-attention);
}
```

For brand-critical color properties that consumers may want to override at the component level,
use the two-tier mixin (component-token → product-token fallback):
```scss
@include token-mixins.color-token(badge-background-color, color-background-attention);
/* compiles to: background-color: var(--badge-background-color, var(--color-background-attention)); */
```

Use the mixin for `background-color`, `color`, and `border-color` on the root block when the
component has a distinct branded appearance. Skip it for layout properties (padding, margin,
border-radius, font-size) — those go as plain `var(--)`.

**Token source priority — always prefer the manifest `tokens` map over guessing.** The list below
is a reference for gap-filling only, when the spec/manifest did not provide a token for a property:
- Background: `--color-background-primary`, `--color-background-accent`, `--color-background-attention`, `--color-background-disabled`
- Foreground: `--color-foreground-primary`, `--color-foreground-accent`, `--color-foreground-on-accent`, `--color-foreground-disabled`
- Border: `--color-border-medium`, `--color-border-accent`, `--color-border-disabled`
- Border radius: `--border-radius-50` (8px), `--border-radius-100` (16px), `--border-radius-150` (24px), `--border-radius-full` (9999px)
- Spacing: `--spacing-25` (2px), `--spacing-50` (4px), `--spacing-100` (8px), `--spacing-150` (12px), `--spacing-200` (16px), `--spacing-300` (24px)
- Typography: `--font-size-small`, `--font-size-body`, `--font-size-medium`, `--font-size-large-1`, `--font-size-large-2`

**Hardcoded values:** Acceptable only for component-specific palette values not yet in the token
system (e.g. the avatar color variants `green`, `teal`, `magenta`). Use SCSS file-scoped
variables prefixed with `$_`:
```scss
$_avatar-green: #5ba85a;

.avatar--green {
    background-color: $_avatar-green;
}
```

**ARIA as a styling hook (when semantically correct):**
```scss
.btn[disabled],
.btn[aria-disabled="true"] {
    background-color: var(--color-background-disabled);
    color: var(--color-foreground-disabled);
}
```
Prefer this over a `.btn--disabled` modifier class.

**Do not:**
- Chain BEM modifiers (`.avatar--fit.avatar--green` is wrong)
- Use presentational names (`.btn--green` is wrong; `.btn--primary` is right) — unless the
  modifier IS a color variant by design (e.g. avatar color variants are intentionally named)
- Use `.disabled` class — use `[disabled]` or `[aria-disabled="true"]`
- Add commented-out code
- Write deep nesting beyond pseudo-selectors (`:hover`, `::before`, `:focus-visible`)

## Step 4 — Register in the bundle

Add `@use "../<block>/<block>";` to `packages/skin/src/sass/bundles/skin-headless.scss`
in **alphabetical order** among the existing `@use` lines.

## Step 5 — Verify

Run `npm run build` from the repo root to confirm the SCSS compiles without errors.

If the build fails:
- Check for missing token references (typos in `var(--)` names)
- Check for SCSS syntax errors (unclosed braces, invalid `@use` paths)
- Fix inline; do not re-run the skill

---

## No Tokens

If the manifest has no `tokens` map AND no `figma.fileKey` or `figmaUrl`, there is no way to
resolve design tokens. Print:

```
⏭  Skipping style generation: no design tokens available.
   The manifest has no 'tokens' field and no Figma reference.
   When the design spec is ready:
   1. Ensure src/routes/_index/components/$COMPONENT/*.spec.json exists with a 'tokens' field
   2. Re-run /evo-create-component-manifest $COMPONENT to update manifest.json
   3. Re-run /evo-style-component $COMPONENT
```

If the manifest has Figma info but no `tokens` map, proceed using Figma MCP as the
sole source. This is the fallback for components without a spec file.

---

## Output checklist

Before reporting done, verify:
- [ ] `packages/skin/src/sass/<block>/<block>.scss` created
- [ ] `@use` line added to `skin-headless.scss` in alphabetical order
- [ ] All BEM selectors from manifest `bem.modifiers` and `bem.elements` have coverage
- [ ] No Marko 5 patterns, no component.ts, no browser.json
- [ ] `npm run build` passes
