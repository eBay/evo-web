---
name: evo-static-component
description: >
  Generates the static layer for a new evo-web component: canonical HTML
  structure for every variant (always) and SCSS when design tokens or Figma
  info is available (conditional). Always runs first in the pipeline — the
  HTML it establishes is the authoritative reference that /evo-static-storybook,
  /evo-marko-component, /evo-react-component, and /evo-docs-hookup all read
  from. Use this whenever the user says "generate the static layer", "create
  the static component", "build the CSS component", "write the skin layer", or
  when the evo-component orchestrator invokes Step 4.
---

# evo-static-component

You are generating the static (CSS) layer — the foundation that all other
layers wrap. This skill always runs and always produces HTML. SCSS is
conditional on token/Figma availability.

**Two phases:**
- **Phase 1 (always):** Establish canonical HTML structure for every variant
- **Phase 2 (conditional):** Generate SCSS when `manifest.tokens` or
  `figma.fileKey` / `figmaUrl` is present

The HTML produced in Phase 1 is the authoritative source of truth.
Downstream skills read from this output — they do not re-derive structure
from the manifest independently.

---

## Step 1 — Read the manifest

Read `src/routes/_index/components/$COMPONENT/manifest.json`. Extract:

- `bem.block` — root CSS class (e.g. `"accordion"`)
- `bem.elements[]` — element names and descriptions
- `bem.modifiers[]` — modifier names and when they apply
- `rootElement.default` — HTML element for the root (`div`, `button`, `span`, etc.)
- `variants[]` — distinct rendering modes needing separate HTML examples
- `states[]` — visual/interactive states (disabled, expanded, selected, etc.)
- `a11y` — role, label strategy, ariaAttributes (for correct ARIA in HTML)
- `a11yProps[]` — required text strings that drive `aria-label` etc.
- `component.displayName` — human name for section headings
- `tokens` — named CSS custom property map (triggers Phase 2)
- `figma.fileKey` / `figmaUrl` — Figma reference (triggers Phase 2)

---

## Phase 1 — Canonical HTML structure (always runs)

Produce the canonical HTML markup for each variant. This is the source of
truth for all downstream skills — write it clearly and completely.

### Rules for generating the HTML

**Root element:** Use `manifest.rootElement.default`. Apply the BEM block
class and required ARIA from `manifest.a11y`:

```html
<!-- Non-interactive, informational -->
<div class="avatar" role="img" aria-label="Profile photo of Alex Chen">
  ...
</div>

<!-- Interactive -->
<button class="btn btn--primary" type="button">
  Submit
</button>
```

**BEM class application:**
- Block: always on root — `class="<block>"`
- Modifier: conditional — `class="<block> <block>--<modifier>"` for each variant
- Element: on child elements — `class="<block>__<element>"`

**ARIA from `manifest.a11y`:**
- Apply `role` if `a11y.explicitRole: true`
- Apply `aria-label` / `aria-hidden` per `a11y.labelStrategy` with realistic placeholder values
- Apply each entry in `a11y.ariaAttributes[]`

**States:** Use HTML attribute selectors — not modifier classes:
- Disabled: `disabled` on button; `aria-disabled="true"` on non-button
- Expanded: `aria-expanded="true"` / `"false"`
- Selected: `aria-selected="true"` / `"false"`

**Content:** Realistic — real words and numbers, not "lorem ipsum" or "Component".

### Variant catalogue

Produce one clearly-labelled HTML block per variant:

1. **Default** — base rendering, no modifiers
2. One block per `manifest.variants[]` entry
3. Key states from `manifest.states[]` that change the HTML structure
4. **Disabled** if present in states
5. **RTL** — base HTML wrapped in `<div dir="rtl">`

Format:

```
=== Default ===
<span class="badge" role="img" aria-label="2 notifications">2</span>

=== Dot (no number) ===
<span class="badge badge--dot" role="img" aria-label="New activity"/>

=== RTL ===
<div dir="rtl">
  <span class="badge" role="img" aria-label="إشعاران">2</span>
</div>
```

This labelled output is what `/evo-static-storybook`, `/evo-marko-component`,
`/evo-react-component`, and `/evo-docs-hookup` consume directly.

---

## Phase 2 — SCSS (conditional)

**Skip if neither `manifest.tokens` nor any Figma reference is present:**

```
⏭  SCSS deferred: no design tokens or Figma reference in manifest.
   When the design spec is ready:
   1. Ensure src/routes/_index/components/$COMPONENT/*.spec.json exists with a 'tokens' field
   2. Re-run /evo-create-component-manifest $COMPONENT to update manifest.json
   3. Re-run /evo-static-component $COMPONENT
```

### Token resolution

**Gap-filling priority order — follow this strictly:**
1. `manifest.tokens` map — trust it; use these directly without question
2. `get_variable_defs` Figma call — use to catch tokens present in the design but missing from the manifest
3. `get_design_context` screenshot + annotations — use for spacing math, border widths, typographic scale, and edge-case state details
4. Token lookup fallback list (below) — reference for common properties when none of the above provides a value
5. Hardcode with `$_` variable — only when no token exists anywhere; always leave a comment

**Token lookup — two-stop check before declaring a token missing:**

When a token referenced in the manifest or spec is not found in `packages/skin/dist/tokens/`, check `node_modules/@ebay/design-tokens/dist/mixins/` before concluding it is absent. Evo themes inherit from that package without re-declaring every token, so a token can be valid and available even if it does not appear in the compiled skin token files.

```bash
grep -i "<token-name>" node_modules/@ebay/design-tokens/dist/mixins/evo-light.scss
```

Only after both checks come up empty should you treat the token as missing and fall back to the next priority level.

### Figma validation (when `figma.fileKey` or `figmaUrl` present)

**Determine Figma coordinates:**
- If `figmaUrl` is present: extract `fileKey` and `nodeId` directly from the URL.
  URL format: `https://www.figma.com/design/:fileKey/:fileName?node-id=1-2`
  Convert the `node-id` query param from `-` to `:` (e.g. `1-2` → `1:2`).
- If only `figma.fileKey` is present (no full URL): call `search_design_system` to locate the nodeId:
  ```
  search_design_system(query=<component display name>, fileKey=<figma.fileKey>)
  ```
  Use the first matching component result's nodeId.
- If neither is available: skip Figma, proceed with manifest tokens + fallback list only, note gaps.

**Run these calls in parallel:**
```
get_design_context(nodeId, fileKey, clientLanguages="scss,css", clientFrameworks="unknown")
get_variable_defs(nodeId, fileKey)
```

**What to do with each result:**

From `get_design_context` — visual confirmation and gap-filling:
- Study the screenshot to verify spacing, shape, border widths, and typographic scale
- Check if reference code mentions tokens not in your manifest `tokens` map — add them
- Note design annotations for edge-case states (hover, disabled, focus)

From `get_variable_defs` — token cross-check:
- Compare manifest token names against Figma variable names
  (translation: `color/background/primary` → `--color-background-primary`)
- If a Figma variable is used in the design but absent from the manifest `tokens` map, add it and note it came from Figma validation
- If a Figma value has no matching CSS custom property (e.g. a hardcoded hex), flag it as a gap

### Token gap-filling reference

Use these only when manifest, Figma variable defs, and `@ebay/design-tokens` all fail to provide a value:

- **Background:** `--color-background-primary`, `--color-background-accent`, `--color-background-attention`, `--color-background-disabled`
- **Foreground:** `--color-foreground-primary`, `--color-foreground-accent`, `--color-foreground-on-accent`, `--color-foreground-disabled`
- **Border:** `--color-border-medium`, `--color-border-accent`, `--color-border-disabled`
- **Border radius:** `--border-radius-50` (8px), `--border-radius-100` (16px), `--border-radius-150` (24px), `--border-radius-full` (9999px)
- **Spacing:** `--spacing-25` (2px), `--spacing-50` (4px), `--spacing-100` (8px), `--spacing-150` (12px), `--spacing-200` (16px), `--spacing-300` (24px)
- **Typography:** `--font-size-small`, `--font-size-body`, `--font-size-medium`, `--font-size-large-1`, `--font-size-large-2`

### SCSS file

Write `packages/skin/src/sass/<block>/<block>.scss`:

```scss
@use "../mixins/private/token-mixins";
/* add other @use lines only if needed — e.g. @use "../variables/variables"; */

.<block> {
    /* base layout and visual styles */
}

.<block>--<modifier> {
    /* modifier overrides — flat, never nested */
}

.<block>__<element> {
    /* element styles */
}
```

**Token usage — two approaches:**

For most properties, use CSS custom properties directly:
```scss
.badge {
    border-radius: var(--border-radius-50);
    font-size: var(--font-size-body);
    padding: var(--spacing-50) var(--spacing-100);
}
```

For brand-critical color properties (`background-color`, `color`, `border-color`) on the
root block — where consumers may want component-level overrides — use the two-tier mixin:
```scss
@include token-mixins.background-color-token(badge-background-color, color-background-attention);
/* compiles to: background-color: var(--badge-background-color, var(--color-background-attention)); */
```

Skip the mixin for layout properties (padding, margin, border-radius, font-size) — those go
as plain `var(--)`.

**Hardcoded values:** Acceptable only when no token exists in the manifest, Figma variable defs,
`@ebay/design-tokens`, or the fallback list. Use SCSS file-scoped variables prefixed with `$_`:
```scss
$_avatar-green: #5ba85a;

.avatar--green {
    background-color: $_avatar-green;
}
```

**ARIA attributes as styling hooks** — prefer attribute selectors over modifier classes for state:
```scss
.btn[disabled],
.btn[aria-disabled="true"] {
    background-color: var(--color-background-disabled);
    color: var(--color-foreground-disabled);
}
```

**Do not:**
- Nest BEM selectors (`&--modifier` inside the block is wrong — keep them flat)
- Chain BEM modifiers (`.avatar--fit.avatar--green` is wrong)
- Use presentational names (`.btn--green` is wrong; `.btn--primary` is right) — unless the modifier IS a color variant by design (e.g. avatar color variants are intentionally named by color)
- Use `.disabled` class — use `[disabled]` or `[aria-disabled="true"]`
- Add commented-out code
- Write deep nesting beyond pseudo-selectors (`:hover`, `::before`, `:focus-visible`)

### Bundle registration

Add `@use "../<block>/<block>";` to `packages/skin/src/sass/bundles/skin-headless.scss`
in **alphabetical order** among the existing `@use` lines.

### Build verification

```bash
npm run build -w @ebay/skin
```

Fix any errors inline. Do not re-run the skill.

Common failure causes:
- Typo in a `var(--)` token name — cross-check against the two-stop lookup
- Missing or wrong `@use` path
- Unclosed brace from a nested block that should be flat

---

## Mandatory completion gate

> ⚠️ **This skill is not done when you finish writing files.**
> It is done when every item below is explicitly checked off.
> Returning control to the pipeline with unchecked items is a pipeline violation.
> Do not print the output summary until this gate is fully passed.

Work through each item in order. Read the file on disk to verify each claim — do not
rely on memory of what you wrote. If any item fails, fix it before continuing.

**HTML**
- [ ] HTML catalogue is written in the output and covers: Default, every modifier in `manifest.bem.modifiers[]`, RTL, and every state that changes the HTML structure

**SCSS**
- [ ] `packages/skin/src/sass/<block>/<block>.scss` exists on disk
- [ ] `.${block}` base rule present in the SCSS
- [ ] Every modifier in `manifest.bem.modifiers[]` has a `.${block}--${modifier}` rule — grep the file to confirm
- [ ] Every element in `manifest.bem.elements[]` has a `.${block}__${element}` rule — grep the file to confirm
- [ ] Token mixin used for `background-color`, `color`, `border-color` on root block; plain `var(--)` for layout properties
- [ ] No BEM nesting (`&--modifier` inside block is forbidden — keep rules flat)

**Dark mode token check** — run this for every modifier that sets a background-color:
- [ ] If the modifier introduces a **light or warm background** (yellow, white, cream, light-tinted):

  **Step 1 — Verify the token is defined in all four theme files.**
  The skin theming system has two parallel implementations that must both be updated:
  - `evo-light.scss` / `evo-dark.scss` — `:root`-scoped, media-query themes (production bundles)
  - `evo-light-class.scss` / `evo-dark-class.scss` — `.evo-theme`-scoped, class-based themes (dev server and `.evo-theme` wrapper in production)

  **All four files must define `--color-foreground-on-<type>`.** Missing it in the class-based pair means the dev site silently inherits the wrong foreground color even when the production bundle is correct.

  ```bash
  grep "foreground-on-<type>" packages/skin/src/tokens/evo-light.scss
  grep "foreground-on-<type>" packages/skin/src/tokens/evo-dark.scss
  grep "foreground-on-<type>" packages/skin/src/tokens/evo-light-class.scss
  grep "foreground-on-<type>" packages/skin/src/tokens/evo-dark-class.scss
  ```

  If any file is missing the definition, add `--color-foreground-on-<type>: var(--color-neutral-800)` to it. **Never alias to `--color-foreground-primary`** — that token resolves to `#f7f7f7` (near-white) in dark mode and will silently fail contrast on any light background.

  **Step 2 — Verify the token resolves correctly in the browser.**
  File-level grep confirms the source exists but not that the browser receives it. The token scope must match what the page loads — `evo-light-class.scss` defines within `.evo-theme`, while `evo-light.scss` defines on `:root`. After rebuild, navigate to the CSS docs page and run:

  ```js
  getComputedStyle(document.querySelector('.evo-theme') || document.documentElement)
    .getPropertyValue('--color-foreground-on-<type>').trim()
  // Must return a dark hex value (e.g. "#191919") — not empty string, not a light color
  ```

  An empty string means the token is missing from the class-based file. A light color (e.g. `#f7f7f7`) means it is aliasing `foreground-primary` or another adaptive token.

- [ ] If the modifier only uses dark backgrounds (attention, inverse, etc.), both sub-steps pass automatically

**Foreground specificity check** — run this when a modifier sets `color-token` on its root element:
- [ ] If the new modifier sets text color via `color-token` on the root AND the block has existing `.${block} a { color: ... }` or `.${block} button.fake-link { color: ... }` rules:

  The base `.block a` rule has specificity `(0,1,1)`, which beats the modifier's root color `(0,2,0)` for `a` elements. The modifier's text color **does not cascade to links** without an explicit override — links will silently inherit the base fallback (often `on-inverse` / white), which fails WCAG AA on a light background.

  Verify explicit link/button overrides exist for the modifier:
  ```bash
  grep "\.${block}--<modifier> a\b\|\.${block}--<modifier> button\.fake-link" \
    packages/skin/src/sass/<block>/<block>.scss
  ```

  For light-background modifiers (warning, etc.), if both `.modifier a` and `.modifier button.fake-link` color rules are absent, this is a **blocking WCAG 1.4.3 failure** — add them before proceeding.

**Stories**
- [ ] `packages/skin/src/sass/<block>/stories/<block>.stories.js` exists on disk
- [ ] `export const RTL` exists — wraps representative HTML in `<div dir="rtl">...</div>`
- [ ] `export const textSpacing` exists — applies `demo-a11y-text-spacing` class to the root element
- [ ] Every modifier added or modified in this run has at least one story export
- [ ] All story exports are zero-argument functions — no `args`, no `argTypes`

**Docs**
- [ ] `src/routes/_index/components/<name>/css+page.marko` updated with a live demo block and `<highlight-code>` snippet for every new modifier or variant

**Build**
- [ ] `npm run build -w @ebay/skin` passes with no errors
- [ ] Grep `packages/skin/dist/bundles/skin-default.css` to confirm the new modifier selector is present in the compiled output

Only after every box is checked, print the output summary and return.

---

## Output summary

```
## Static component: $COMPONENT

Phase 1 — HTML structure:
  Variants: Default, [list]
  Root element: <element>
  BEM block: <block>
  ARIA: [label strategy summary]
  [Full HTML catalogue above]

Phase 2 — SCSS:
  [✅ packages/skin/src/sass/<block>/<block>.scss written]
  [✅ skin-headless.scss updated]
  [⏭  Deferred — no tokens or Figma reference]

Completion gate: ✅ All items passed
```

The HTML catalogue above is the canonical reference for all downstream skills.
