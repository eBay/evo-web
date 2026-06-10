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

## Step 3b — Check for existing stories file

Before writing, check whether the stories file already exists.

**If the file does not exist:** proceed to Step 4 and write from scratch.

**If the file already exists**, determine what is new by diffing the specs:

```bash
git show HEAD:src/routes/_index/components/<block>/<block>.spec.json
```

- **If the committed spec exists** (command returns content): parse its `states.type[]`
  and `props.type.enum[]` arrays. Compare against the same fields in the current on-disk
  spec. The delta — values present in the current spec but absent in the committed one —
  are the variants new to this run. Add story exports only for those variants.

- **If no committed spec exists** (new component or spec never committed): fall back to
  comparing the manifest `variants[]` and `states[]` against the existing named exports in
  the stories file. Add exports for any variant not yet represented.

In both cases:

- Read the current stories file first
- Append missing exports at the end of the file — do not touch existing exports
- Do not re-add `RTL` or `textSpacing` if already present
- Skip to the output checklist — Step 4 applies only to new files

If nothing is new, print:

```
⏭  Stories file already up to date — no new exports needed.
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
export const base = () =>
  `<span class="badge" role="img" aria-label="2 notifications">2</span>`;
export const dot = () =>
  `<span class="badge badge--dot" role="img" aria-label="New activity"/>`;
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

---

## Completion record — mandatory final step

After all story exports are written and verified on disk, write the completion record.
This is the signal the orchestrator reads to advance — do not skip this step.

> **Before running:** Substitute the actual component name for `$COMPONENT` and the actual BEM block name for `<BLOCK>`.

```bash
node -e "
const fs = require('fs');
const comp = '$COMPONENT';
const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
const block = '<BLOCK>';
s.steps['5'] = {
  status: 'complete',
  completedAt: new Date().toISOString(),
  outputs: [
    \`packages/skin/src/sass/\${block}/stories/\${block}.stories.js\`,
  ]
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
console.log('Step 5 completion record written.');
"
```

If any required story export (RTL, textSpacing, or a required modifier story) could not be
generated, write `status: "failed"` with an `error` field describing what is missing instead of `status: "complete"`.

> **Before running the failed variant:** Substitute the actual component name for `$COMPONENT`.

```bash
node -e "
const fs = require('fs');
const comp = '$COMPONENT';
const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
s.steps['5'] = {
  status: 'failed',
  error: '<describe missing export or failure>'
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
"
```
