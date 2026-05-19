---
name: evo-static-storybook
description: >
  Generates Skin (static) Storybook story files for a new evo-web component.
  Reads the canonical HTML established by /evo-static-component (in shared
  context) rather than re-deriving from the manifest. Writes CSF2 story files
  under packages/skin/src/sass/<block>/stories/, including required RTL and
  textSpacing stories. Also reads the component's css+page.marko docs when it
  exists for additional variant context. Use this whenever the user says
  "generate static stories", "create CSS stories", "scaffold the static
  storybook", or when the evo-component orchestrator invokes Step 5.
---

# evo-static-storybook

You are wrapping the canonical HTML established by `/evo-static-component`
into CSF2 Storybook story files. The HTML is already in your context from
the previous step — use it directly. Do not re-derive markup from the manifest.

## Step 1 — Read the static component output

The HTML catalogue produced by `/evo-static-component` (Step 4) is in your
conversation context, labelled by variant (`=== Default ===`, etc.). Use
these HTML blocks as the story content. They are the authoritative structure.

Also read from the manifest for metadata:
- `component.displayName` — for the Storybook title (e.g. `"Accordion"`)
- `bem.block` — for file paths

## Step 2 — Check the docs page

Check for `src/routes/_index/components/<block>/css+page.marko`.

If it exists, read it. The `<highlight-code type="html">` blocks may contain
additional variant examples or interaction notes not yet covered by the static
component's HTML catalogue. Add any additional stories from the docs that
aren't already in the catalogue. The docs page is supplementary — the static
component output is primary.

## Step 3 — Decide file structure

**Single file** — ≤ 8 total stories:
```
packages/skin/src/sass/<block>/stories/<block>.stories.js
```

**Split files** — > 8 stories or clearly distinct sub-groupings:
```
packages/skin/src/sass/<block>/stories/<block>/base.stories.js
packages/skin/src/sass/<block>/stories/<block>/cascade.stories.js
```

## Step 4 — Write story files

### Format (CSF2 — always)

```js
export default { title: "Skin/<DisplayName>" };

export const base = () => `
<div class="<block>">
    <!-- HTML from static component output -->
</div>
`;
```

**Rules:**
- Default export has `title` only — no `component`, `parameters`, `decorators`
- Every named export is a **zero-argument arrow function returning an HTML string**
- Use the HTML exactly as established by `/evo-static-component`
- No `args`, no `argTypes`, no controls

### Required stories (always include)

**One story per variant** from the static component HTML catalogue — use the
label as the export name (camelCase):

```js
export const base = () => `<span class="badge" role="img" aria-label="2 notifications">2</span>`;
export const dot = () => `<span class="badge badge--dot" role="img" aria-label="New activity"/>`;
```

**RTL** — wrap the default HTML in `<div dir="rtl">`. Use text content appropriate
for RTL languages where possible:

```js
export const RTL = () => `
<div dir="rtl">
  <span class="badge" role="img" aria-label="إشعاران">2</span>
</div>
`;
```

**textSpacing** — apply `demo-a11y-text-spacing` directly on the root BEM element
(the class is already available globally in the Storybook preview):

```js
export const textSpacing = () => `
<span class="badge demo-a11y-text-spacing" role="img" aria-label="2 notifications">2</span>
`;
```

### Experimental stories

If the docs page marks something as EXPERIMENTAL, include it with a comment:

```js
// EXPERIMENTAL — requires interpolate-size: allow-keywords in Chrome 123+
export const animated = () => `...`;
```

## Output checklist

- [ ] Stories file(s) written at correct path
- [ ] HTML content sourced from `/evo-static-component` output (not re-derived)
- [ ] One story per variant from the static component catalogue
- [ ] `RTL` export present
- [ ] `textSpacing` export present with `demo-a11y-text-spacing` on root BEM element
- [ ] All exports are zero-argument functions returning HTML strings
- [ ] EXPERIMENTAL stories flagged with comment
