---
name: evo-marko-storybook
description: >
  Generate Marko Storybook story files for a new evo-web component in the evo-marko package.
  Reads manifest.json for props/slots/argTypes, writes a .stories.ts file and example .marko
  templates under packages/evo-marko/src/tags/<name>/.
  Use this whenever the user says "generate Marko stories", "create Marko storybook", "scaffold
  the Marko stories", or when the evo-component orchestrator invokes Step 8.
---

# evo-marko-storybook

You are scaffolding the Marko Storybook for a new evo-marko component. Every story is backed
by a standalone `.marko` example template — the story file just wires them to Storybook.

## Step 1 — Read the manifest

Read `src/routes/_index/components/$COMPONENT/manifest.json`. Extract:

- `component.name` — the tag name (e.g. `evo-accordion`); strip `evo-` for the directory name
- `component.displayName` — human name for the Storybook title (e.g. `Accordion`)
- `component.category` — maps to the Storybook title prefix (see categories below)
- `props[]` — each prop's name, type, values (enum), default, required, description
- `a11yProps[]` — required i18n text strings; always `required: true` in argTypes
- `slots[]` — named content regions; drives example template structure
- `variants[]` — named rendering modes that need separate example templates
- `states[]` — interactive states that need separate examples (expanded, open, checked)
- `stateLiftingCallbacks[]` — controllable props (need `controllable: true` in argTypes)

Also read `packages/evo-marko/src/tags/<name>/index.marko` to confirm the exact `Input`
interface — the manifest is authoritative, but seeing the generated types catches any
discrepancy before writing stories.

## Step 2 — Check the docs page

Check for `src/routes/_index/components/<block>/marko+page.marko`.

If it exists, read it. The Marko docs pages mostly link to external storybooks — they
rarely contain markup examples. But scan for: any prose describing specific variants or
behaviors that aren't in the manifest, and any evo-marko-specific usage notes.

The `css+page.marko` (from the CSS storybook step) is more signal-rich for story content.
If you have access to those findings from a prior step in this session, apply them here to
determine which variants need dedicated example templates.

## Step 3 — Determine Storybook title category

Map `component.category` to the correct Storybook title prefix:

| manifest category  | Storybook prefix          |
| ------------------ | ------------------------- |
| `buttons`          | `Buttons`                 |
| `form`             | `Form`                    |
| `graphics & icons` | `Graphics & Icons`        |
| `layout`           | `Layout`                  |
| `dialogs`          | `Dialogs`                 |
| `navigation`       | `Navigation & Disclosure` |
| `notices`          | `Notices & Tips`          |
| `progress`         | `Progress`                |
| `building blocks`  | `Building Blocks`         |
| `media`            | `Media`                   |

Title format: `"<Prefix>/<DisplayName>"` — e.g. `"Buttons/Accordion"` or `"Form/Textbox"`.

## Step 4 — Plan example templates

Each story variant needs a standalone `.marko` file in `examples/`. Decide what to create:

**Always create:** `examples/default.marko` — the base rendering with all required props and
a realistic content example.

**Create one template per variant when:**

- The manifest has `variants[]` with distinct rendering modes
- A state (expanded, checked, open) changes the component's structure significantly
- A slot combination is meaningfully different (e.g. with icon, without icon)
- The component has an interactive behavior that requires a wrapper with `<let>` state

**Keep to the minimum that demonstrates the full API.** Three to five templates is typical.
More than eight is a sign to reconsider — engineers can explore variants through controls.

## Step 5 — Write the example templates

Each file in `examples/` is a standalone Marko 6 template. Rules:

**Spread `...input` onto the component root** — this makes all argTypes controllable:

```marko
<evo-badge ...input/>
```

**For components with slots**, include realistic hardcoded slot content:

```marko
<evo-accordion ...input>
  <@item>
    <@title>Section one</@title>
    <@content>
      <p>Content for section one.</p>
    </@content>
  </@item>
  <@item>
    <@title>Section two</@title>
    <@content>
      <p>Content for section two.</p>
    </@content>
  </@item>
</evo-accordion>
```

**For controllable/interactive state** (open, expanded, checked), use `<let>` with `:=` binding:

```marko
<let/open:=input.open>

<evo-button onClick() {
  open = true;
}>
  Open
</evo-button>

<evo-dialog ...input open:=open>
  <@header>Dialog Title</@header>
  <@close a11yText="Close"/>
  <p>Dialog content.</p>
</evo-dialog>
```

Use `:=` for two-way binding on props that the parent controls; use a plain `<let>` local
variable only when the component manages its own state internally.

**Do not import CSS** — skin CSS is loaded globally by the storybook preview.

**Use realistic content** — real label text, real numbers, not `"string"` or `"content"`.

## Step 6 — Write the stories file

Create `packages/evo-marko/src/tags/<name>/<name>.stories.ts`:

```ts
import type { Meta, StoryObj } from "@storybook/marko";
import type { Input } from "./index.marko";
import { buildExtensionTemplate } from "../../common/storybook/utils.ts";

import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
// one pair per additional template:
// import ExpandedTemplate from "./examples/expanded.marko";
// import ExpandedTemplateCode from "./examples/expanded.marko?raw";

const meta = {
  title: "<Category>/<DisplayName>",
  component: (await import("./index.marko")).default,
  parameters: {
    docs: {
      description: {
        component: "<one-sentence description from manifest>",
      },
    },
  },
  argTypes: {
    // — one entry per prop, a11yProp, and slot —
  },
} satisfies Meta<Input>;

export default meta;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    // default arg values — mirror manifest prop defaults
  },
);
```

### argTypes reference

**String prop:**

```ts
myProp: {
  type: "string",
  description: "Description from manifest.",
  control: "text",
  table: { defaultValue: { summary: "null" } },
},
```

**Enum prop:**

```ts
type: {
  type: "string",
  description: "Controls whether one or multiple items can be expanded.",
  control: "inline-radio",
  options: ["single", "multiple"],
  table: { defaultValue: { summary: "single" } },
},
```

**Boolean prop:**

```ts
collapsible: {
  type: "boolean",
  description: "Whether expanded items can be collapsed.",
  control: "boolean",
  table: { defaultValue: { summary: "true" } },
},
```

**Number prop:**

```ts
count: {
  type: "number",
  description: "The numeric value to display.",
  control: "number",
  table: { defaultValue: { summary: "undefined" } },
},
```

**Required a11y text prop:**

```ts
a11yText: {
  type: { name: "string", required: true },
  description: "Accessible label for screen readers.",
  control: "text",
},
```

**Controllable prop (state-lifting callback exists):**

```ts
open: {
  type: "boolean",
  description: "Controls the open/closed state.",
  control: "boolean",
  controllable: true,
  table: { defaultValue: { summary: "false" } },
},
```

**Named slot (AttrTag):**

```ts
header: {
  description: "The header content of the dialog (required).",
},
```

**Named slot with documented sub-attributes:**

```ts
image: {
  description: "Optional image to display in the avatar.",
  "@": {
    src: { type: "string", description: "Image URL." },
    onLoad: { description: "Callback fired when image loads." },
  },
},
```

**Pass-through HTML attributes:**

```ts
["<div> attributes" as any]: {
  description: "All native div attributes are forwarded to the root element.",
},
```

### Additional story variants

Each variant beyond Default follows the same `buildExtensionTemplate` pattern:

```ts
export const Expanded = buildExtensionTemplate(
  ExpandedTemplate,
  ExpandedTemplateCode,
  { open: true },
);

export const Disabled = buildExtensionTemplate(
  DisabledTemplate,
  DisabledTemplateCode,
);
```

Export name is PascalCase; it becomes the story name in the sidebar.

## Step 7 — Verify

Run the type-checker on the new stories file:

```bash
pnpm exec tsc --noEmit -p packages/evo-marko/tsconfig.json
```

Fix any type errors inline. Common issues:

- `Input` type mismatch in `satisfies Meta<Input>` — check the generated `index.marko` types
- `argTypes` key not in `Input` — remove or correct the key
- Missing required arg in `buildExtensionTemplate` default args

Stories are non-blocking in the pipeline — a type error is a warning in the final summary,
not a hard stop. Note it and move on if the fix is not immediately obvious.

---

## Output checklist

- [ ] `examples/default.marko` created with realistic slot content and `...input` spread
- [ ] Additional example templates created for key variants and interactive states
- [ ] `<name>.stories.ts` created with correct `title`, `component`, `argTypes`
- [ ] One `buildExtensionTemplate` export per example template
- [ ] All props from manifest represented in `argTypes` (props + a11yProps + slots)
- [ ] Enum props use `inline-radio` or `select` control with `options`
- [ ] Required props use `type: { name: "string", required: true }`
- [ ] Controllable props (state-lifting) marked `controllable: true`
- [ ] Type-check passes (or errors noted in summary)

---

## Completion record — mandatory final step

After story files are verified on disk, write the completion record.

> **Before running:** Substitute the actual component name for `$COMPONENT` and the full Marko tag name (e.g. `evo-accordion`) for `<NAME>`.

```bash
node -e "
const fs = require('fs');
const comp = '$COMPONENT';
const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
const name = '<NAME>';
s.steps['9'] = {
  status: 'complete',
  completedAt: new Date().toISOString(),
  outputs: [
    \`packages/evo-marko/src/tags/\${name}/\${name}.stories.ts\`,
  ]
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
console.log('Step 9 completion record written.');
"
```

If story generation failed, write `status: "failed"` with an `error` field instead.
