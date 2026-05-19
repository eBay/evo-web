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
   When the design spec is ready, update *.spec.json, re-run
   /evo-create-component-manifest, then re-run /evo-static-component.
```

### Token resolution

**Primary source:** `manifest.tokens` — named map to CSS custom property:
`{ "background": "--color-background-primary" }`. Use these directly.

**Figma as validator/gap-filler:** When `figma.fileKey` or `figmaUrl` present,
call in parallel to validate and fill gaps:

```
get_design_context(nodeId, fileKey, clientLanguages="scss,css")
get_variable_defs(nodeId, fileKey)
```

Use `search_design_system(component-name, fileKey)` to find `nodeId` when only
`fileKey` is available.

### SCSS file

Write `packages/skin/src/sass/<block>/<block>.scss`:

```scss
@use "../mixins/private/token-mixins";

.<block> {
    background-color: var(--color-background-primary);
    border-radius: var(--border-radius-50);
}

.<block>--<modifier> { /* flat — never nested */ }

.<block>__<element> { /* element styles */ }
```

**Rules:** flat BEM only; `var(--)` for tokens; `@include token-mixins.color-token()`
for brand-critical colors; `$_` SCSS variables for un-tokenised values;
ARIA/state attribute selectors over modifier classes for state.

### Bundle registration

Add `@use "../<block>/<block>";` to
`packages/skin/src/sass/bundles/skin-headless.scss` in alphabetical order.

### Build verification

```bash
cd packages/skin && npm run build
```

Fix any errors inline. Do not re-run the skill.

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
```

The HTML catalogue above is the canonical reference for all downstream skills.
