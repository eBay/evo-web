---
name: evo-docs-hookup
description: >
  Generates documentation site files for a new evo-web component in two modes.
  css-only mode (Step 6): writes css+page.marko and css+meta.json immediately
  after the static layer while the HTML is fresh in context. Full mode (Step 13):
  writes +page.marko, +meta.json, and updates component-metadata.json after all
  layers are complete. Use this whenever the user says "hook up the docs",
  "wire up the docs site", "create the docs page", "add the component to the
  docs", or when the evo-component orchestrator invokes Step 6 or Step 13.
---

# evo-docs-hookup

You run in two modes within the pipeline, called at different points:

- **css-only** (Step 6, after static storybook): writes the CSS tab docs while
  static HTML is fresh in context
- **full** (Step 13, after all layers): writes the Overview tab and updates the
  component registry

The orchestrator tells you which mode to run. Do not write files outside your
declared mode's scope.

---

## Mode: css-only (Step 6)

**Writes:** `css+page.marko` + `css+meta.json`
**Does not write:** `+page.marko`, `+meta.json`, `component-metadata.json`

### Step 1 — Read the manifest

Extract: `bem.block`, `component.displayName`, `variants[]`, `states[]`

### Step 1b — Check for existing css+page.marko

Before writing anything, check whether `src/routes/_index/components/<block>/css+page.marko` already exists.

**If the file does not exist:** proceed to Step 2 and write from scratch.

**If the file already exists**, determine what is new by diffing the specs:

```bash
git show HEAD:src/routes/_index/components/<block>/<block>.spec.json
```

- **If the committed spec exists** (command returns content): parse its `states.type[]`
  and `props.type.enum[]` arrays. Compare against the same fields in the current on-disk
  spec. The delta — values present in the current spec but absent in the committed one —
  are the variants new to this run. Add documentation sections only for those variants.

- **If no committed spec exists** (new component or spec never committed): fall back to
  extracting section IDs already present in `css+page.marko` (e.g. `id="badge-dot"`)
  and adding sections for any variant in `manifest.variants[]` not yet represented.

For each variant that needs to be added, locate its HTML — in this order:

1. Step 4 context: look for a labelled block (`=== <VariantName> ===`) in the current conversation
2. If not in context: read `packages/skin/src/sass/<block>/stories/<block>.stories.js`
   and extract the HTML string from the matching story export

Insert each new section (heading + demo + highlight-code block) immediately before the
closing `</div>` of the root element. Do not touch existing sections.

If nothing is new, print:

```
⏭  css+page.marko already up to date — no new variant sections needed.
```

and skip to css+meta.json (Step 3). Do not rewrite the file.

**In all cases:** do not rewrite sections that already exist. The goal is additive.

### Step 2 — Build css+page.marko

The canonical HTML is in your context from `/evo-static-component` (Step 4).
Use the labelled HTML blocks directly — do not re-derive from the manifest.

```marko
<div id="<block>">
  <section-header/>

  <h3 id="<block>-default">
    Default
  </h3>
  <div class="demo">
    <div class="demo__inner">
      <!-- HTML from static component output, === Default === block -->
    </div>
  </div>
  <highlight-code type="html">
    <!-- same HTML repeated -->
  </highlight-code>
  <!-- one <h3> + demo + highlight-code per variant from static component output -->
</div>
export const metadata = {
  component: "<block>",
  "ds-component": {
    name: "<block>",
    version: 1,
  },
};
```

**Rules:**

- `<section-header/>` always first — renders the `<h1>`
- `export const metadata` block always at the bottom — required by Marko Router
- Section IDs: `<block>-<variant-name>` (e.g. `badge-dot`, `accordion-expanded`)
- Use HTML from Step 4 context exactly — it is the canonical source
- Do NOT import `{urls}` unless actually linking to another component

### Step 3 — Write css+meta.json

```json
{
  "pageTitle": "<DisplayName> CSS Component",
  "pageDescription": "A <DisplayName> CSS component is a <brief description>."
}
```

---

## Mode: full (Step 13)

**Writes:** `+page.marko` + `+meta.json` + updates `component-metadata.json`
**Does not rewrite:** `css+page.marko` or `css+meta.json` (already written in Step 6)

### Step 1 — Write +page.marko (Overview tab)

```marko
<div id="<block>-overview">
  <component-banner-img/>
</div>
```

Add prose after `<component-banner-img/>` only when the manifest has:

- `callerObligations[]` with a11y-critical category → add a brief accessibility note
- Notable related components in `component.description` → add cross-links using `${urls.components}/<name>`

### Step 2 — Write +meta.json

```json
{
  "pageTitle": "<DisplayName> Component",
  "pageDescription": "<component.description from manifest>. Available in Evo Web's CSS, React, and Marko implementations."
}
```

### Step 3 — Update component-metadata.json

Run the deterministic metadata script first — it writes the correct entry with byte-identical
JSON rather than having the AI generate it:

```bash
pnpm exec tsx scripts/codegen/update-component-metadata.ts $COMPONENT
```

The script writes: component key, description, ds-component name/version, and null storybook
paths. After the script runs, check if any storybook paths can be determined from session
context and update them:

- Skin: `/story/skin-<block>--<story-name>` (kebab-case story name)
- Marko/React: `/docs/<category>-evo<displayname>--documentation`

If the script errors, fall back to writing the JSON entry manually with the same field set.
Surface any null storybook paths as 🟡 warnings in the output summary.

Set to `null` if unknown — tabs simply won't appear until filled. Surface as 🟡 warning.

Do NOT remove or modify existing entries.

---

## Output summary

**css-only mode:**

```
CSS docs written:
  ✅  src/routes/_index/components/<block>/css+page.marko
  ✅  src/routes/_index/components/<block>/css+meta.json
```

**full mode:**

```
Docs wired:
  ✅  src/routes/_index/components/<block>/+page.marko
  ✅  src/routes/_index/components/<block>/+meta.json
  ✅  src/data/component-metadata.json — entry added/updated
  [✅ storybook paths set | 🟡 paths null — fill after deploy]
```

---

## Completion record — mandatory final step

After all output files are verified on disk, write the completion record.
The step ID depends on which mode was declared at invocation.
This is the signal the orchestrator reads to advance — do not skip this step.

### css-only mode (Step 6)

> **Before running:** Substitute the actual component name for `$COMPONENT` and the actual BEM block name for `<BLOCK>`.

```bash
node -e "
const fs = require('fs');
const comp = '$COMPONENT';
const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
const block = '<BLOCK>';
s.steps['6'] = {
  status: 'complete',
  completedAt: new Date().toISOString(),
  outputs: [
    \`src/routes/_index/components/\${block}/css+page.marko\`,
    \`src/routes/_index/components/\${block}/css+meta.json\`,
  ]
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
console.log('Step 6 completion record written.');
"
```

### full mode (Step 13)

> **Before running:** Substitute the actual component name for `$COMPONENT` and the actual BEM block name for `<BLOCK>`.

```bash
node -e "
const fs = require('fs');
const comp = '$COMPONENT';
const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
const block = '<BLOCK>';
s.steps['13'] = {
  status: 'complete',
  completedAt: new Date().toISOString(),
  outputs: [
    \`src/routes/_index/components/\${block}/+page.marko\`,
    \`src/routes/_index/components/\${block}/+meta.json\`,
    'src/data/component-metadata.json',
  ]
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
console.log('Step 13 completion record written.');
"
```

If any output file could not be written, set `status: "failed"` with an `error` field describing what failed instead of `status: "complete"`. Use the same step ID (`'6'` or `'13'`) as the mode that was invoked.
