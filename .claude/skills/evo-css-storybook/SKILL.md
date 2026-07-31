---
name: evo-css-storybook
description: >
  Generate Skin (CSS) Storybook story files for a new evo-web component.
  Reads manifest.json for BEM structure and variants, writes CSF2 story files
  under packages/skin/src/sass/<block>/stories/.
  Use this whenever the user says "generate skin stories", "create CSS stories",
  "scaffold the skin storybook", or when the evo-component orchestrator invokes Step 7.
---

# evo-css-storybook

You are scaffolding the Skin Storybook for a new component. Stories are raw HTML strings —
no framework, no args, no controls. The output documents every visual permutation so designers
and engineers can review the CSS in isolation.

## Step 1 — Read the manifest

Read `src/routes/_index/components/$COMPONENT/manifest.json`. Extract:

- `component.displayName` — used in the Storybook title (e.g. `"Accordion"`)
- `bem.block` — the root CSS class (e.g. `"accordion"`)
- `bem.elements[]` — element names (e.g. `["item", "title", "content"]`)
- `bem.modifiers[]` — modifier names and descriptions
- `variants[]` — named rendering modes from the manifest
- `states[]` — visual states (expanded, disabled, collapsed, etc.)

Also read the generated SCSS file at
`packages/skin/src/sass/<block>/<block>.scss` to see what selectors were actually
written — use this as the ground truth for what stories to cover.

## Step 2 — Read the docs page (if it exists)

Check for `src/routes/_index/components/<block>/css+page.marko`.

**If it exists:** Read it in full. This is the canonical visual catalogue — it takes precedence
over manifest inference for story content. Extract:

- **Story names** — each `<h3 id="...">` heading defines a story. The `id` is the slug
  (e.g. `id="button-partially-disabled"`) and the heading text is the human name.

- **Exact markup** — the `<highlight-code type="html">` block immediately following each
  heading contains the canonical HTML. This is what the story function should return.
  Strip the `<highlight-code>` wrapper; use the inner HTML string verbatim.

- **Accessibility constraints in demos** — the live demo `<div class="demo__inner">` often
  includes `role`, `aria-label`, `aria-expanded` etc. that must be in the story markup.
  Cross-check with the highlight-code block — if the demo has ARIA attributes the
  highlight-code block omits, add them (the demo is the more authoritative for ARIA).

- **Experimental / progressive-enhancement flags** — any prose noting `EXPERIMENTAL`,
  browser-conditional behavior, or JS-required state. Flag these in a comment above the
  story export so engineers know the story is aspirational without JS.

- **Also read** `accessibility+page.marko` for the same component — it surfaces ARIA
  attribute requirements (e.g. `role="img"` + `aria-label` on badge) that belong in every
  story's HTML, not just the accessibility story.

**How docs findings override manifest-derived stories:**

| Situation                                                                         | Action                                       |
| --------------------------------------------------------------------------------- | -------------------------------------------- |
| Docs has a named section the manifest didn't list                                 | Add it as a new story                        |
| Docs markup differs from what you'd infer from SCSS                               | Use the docs markup                          |
| Docs shows a state combo the manifest doesn't (e.g. `aria-disabled` ≠ `disabled`) | Create separate stories for each             |
| Docs marks something EXPERIMENTAL                                                 | Include story, add `// EXPERIMENTAL` comment |
| Docs references icon names or children structure                                  | Use exactly those icon names in story HTML   |

**If the docs page does not exist:** Note it in the final summary and proceed using
manifest + SCSS as the sole sources. Do not block generation.

## Step 3 — Decide story file structure

**Source priority for this decision:** prefer the docs page structure over the manifest. If the
docs has clearly distinct named sections (e.g. primary, secondary, destructive, cascade), mirror
that grouping in the story files.

**Single file** — use when the component has ≤ 8 total stories (base + modifiers + states):

```
packages/skin/src/sass/<block>/stories/<block>.stories.js
```

**Split files** — use when the component has more than ~8 stories or has clearly distinct
sub-groupings (e.g. button has Primary, Secondary, Destructive, Cascade each as separate files):

```
packages/skin/src/sass/<block>/stories/<block>/base.stories.js
packages/skin/src/sass/<block>/stories/<block>/cascade.stories.js
packages/skin/src/sass/<block>/stories/<block>/text-spacing.stories.js
```

RTL always goes either as a named export in the base/cascade file, or in its own
`rtl.stories.js` for components with complex bidirectional layouts.

## Step 3 — Write the story files

### File format (CSF2 — always)

```js
export default { title: "Skin/<DisplayName>" };

export const base = () => `
<div class="<block>">
    <!-- minimal semantic HTML demonstrating the component -->
</div>
`;
```

**Rules:**

- Default export has `title` only — no `component`, `parameters`, `decorators`, or `argTypes`
- Every named export is a **zero-argument arrow function returning an HTML string**
- No `args`, no `argTypes`, no controls
- Use template literals for multi-line HTML; single-line is fine for truly simple markup

### Story naming

| What to story                | Export name                | Title path                                        |
| ---------------------------- | -------------------------- | ------------------------------------------------- |
| Base/default state           | `base` or descriptive name | `"Skin/<DisplayName>"`                            |
| A modifier                   | camelCase modifier name    | same file                                         |
| A state (disabled, expanded) | camelCase state name       | same file                                         |
| RTL layout                   | `RTL`                      | same file, or `"Skin/<DisplayName>/RTL"`          |
| Text spacing                 | `textSpacing`              | same file, or `"Skin/<DisplayName>/Text Spacing"` |
| Sub-group of variants        | —                          | `"Skin/<DisplayName>/<SubGroup>"`                 |

### Required stories (every component must have these)

**1. Base story** — shows the component in its default/resting state with minimal markup:

```js
export const base = () => `
<span class="badge">1</span>
`;
```

**2. One story per BEM modifier** — use the modifier's name as the export name:

```js
export const dot = () => `
<span class="badge badge--dot"></span>
`;
```

**3. Disabled / state stories** — if the manifest has states like `disabled`, `expanded`:

```js
export const disabled = () => `
<button class="btn btn--primary" disabled>Disabled</button>
`;
// Prefer HTML attribute selectors over BEM modifier classes for state:
// [disabled], [aria-disabled], [aria-expanded], [aria-checked]
```

**4. RTL** — wrap the base markup in `<div dir="rtl">`. If the component has no
directional layout (text only, symmetric shapes), still include it — it verifies
nothing breaks under RTL:

```js
export const RTL = () => `
<div dir="rtl">
    <span class="badge">1</span>
</div>
`;
```

**5. textSpacing** — apply `demo-a11y-text-spacing` class directly on the root BEM element
(not a wrapper). Pick the most representative variant (usually base):

```js
export const textSpacing = () => `
<span class="badge demo-a11y-text-spacing">99+</span>
`;
```

The `demo-a11y-text-spacing` class simulates WCAG 1.4.12 (Text Spacing) by forcing
`line-height: 1.5`, `letter-spacing: 0.12em`, `word-spacing: 0.16em`. Verify the component
doesn't break under these constraints.

### HTML in stories — conventions

- Use real, semantic HTML (not `<div>` soup) — stories double as accessibility references
- Match the element type to `manifest.rootElement.default`
- Include realistic content (real labels, realistic numbers) — not "Lorem ipsum" or "Component"
- For compound components (accordion, tabs): show a full working example with all required
  child elements, not just the wrapper
- Use `[aria-expanded]`, `[disabled]`, `[aria-selected]` etc. to represent state — these
  are the actual CSS hooks used in the SCSS, not modifier classes

### Compound component example (accordion)

```js
export default { title: "Skin/Accordion" };

export const singleExpanded = () => `
<div class="accordion">
    <div class="accordion__item" aria-expanded="true">
        <button class="accordion__title" aria-expanded="true" aria-controls="acc-1-content">
            Section one
        </button>
        <div class="accordion__content" id="acc-1-content">
            <p>Content for section one.</p>
        </div>
    </div>
    <div class="accordion__item">
        <button class="accordion__title" aria-expanded="false" aria-controls="acc-2-content">
            Section two
        </button>
        <div class="accordion__content" id="acc-2-content" hidden>
            <p>Content for section two.</p>
        </div>
    </div>
</div>
`;

export const allCollapsed = () => `
<div class="accordion">
    <div class="accordion__item">
        <button class="accordion__title" aria-expanded="false" aria-controls="acc-3-content">
            Section one
        </button>
        <div class="accordion__content" id="acc-3-content" hidden>
            <p>Content for section one.</p>
        </div>
    </div>
</div>
`;

export const disabled = () => `
<div class="accordion">
    <div class="accordion__item">
        <button class="accordion__title" aria-expanded="false" aria-controls="acc-4-content" disabled>
            Disabled section
        </button>
        <div class="accordion__content" id="acc-4-content" hidden>
            <p>Content.</p>
        </div>
    </div>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="accordion">
        <div class="accordion__item" aria-expanded="true">
            <button class="accordion__title" aria-expanded="true" aria-controls="acc-rtl-content">
                محتوى
            </button>
            <div class="accordion__content" id="acc-rtl-content">
                <p>النص هنا</p>
            </div>
        </div>
    </div>
</div>
`;

export const textSpacing = () => `
<div class="accordion demo-a11y-text-spacing">
    <div class="accordion__item" aria-expanded="true">
        <button class="accordion__title" aria-expanded="true" aria-controls="acc-ts-content">
            Section one
        </button>
        <div class="accordion__content" id="acc-ts-content">
            <p>Content for section one.</p>
        </div>
    </div>
</div>
`;
```

## Step 5 — Verify

Stories are non-blocking (a missing story is a warning, not a build failure). Still:

- Run `pnpm start` briefly to confirm stories appear in the skin storybook sidebar under `Skin/<DisplayName>`
- Check that RTL and textSpacing stories render without visual breakage
- If the storybook server is already running, refresh — Vite HMR will pick up new files

If `pnpm start` is not feasible in this context, note it in the summary and move on.

---

## Output checklist

- [ ] `packages/skin/src/sass/<block>/stories/<block>.stories.js` created (or split files)
- [ ] `css+page.marko` read and its sections reflected in stories (or noted as absent)
- [ ] Base story covers the default rendering
- [ ] One story per named section / BEM modifier (docs take precedence over manifest)
- [ ] State stories for disabled, expanded, selected etc. (using HTML attribute selectors)
- [ ] ARIA attributes from docs/accessibility page present in story HTML
- [ ] `RTL` story included
- [ ] `textSpacing` story included with `demo-a11y-text-spacing` on root BEM element
- [ ] EXPERIMENTAL stories flagged with a `// EXPERIMENTAL` comment
- [ ] All story exports are zero-argument functions returning HTML strings (CSF2)
- [ ] No args, argTypes, parameters, or decorators in default export
