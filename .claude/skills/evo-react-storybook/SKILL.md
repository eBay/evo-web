---
name: evo-react-storybook
description: >
  Generate React Storybook story files for a new evo-web component in the evo-react package.
  Reads manifest.json for props/argTypes and the generated index.tsx for component types,
  writes a CSF3 .stories.tsx file under packages/evo-react/src/<name>/.
  Use this whenever the user says "generate React stories", "create React storybook",
  "scaffold the React stories", or when the evo-component orchestrator invokes Step 9.
---

# evo-react-storybook

You are scaffolding the React Storybook for a new evo-react component. Stories are CSF3
TypeScript objects — no external helpers, no decorator imports, everything self-contained.

## Step 1 — Read the manifest and component types

Read `src/routes/_index/components/$COMPONENT/manifest.json`. Extract:

- `component.name` — tag name (e.g. `evo-accordion`)
- `component.displayName` — for the Storybook title (e.g. `EvoAccordion`)
- `component.category` — maps to the Storybook title prefix
- `component.description` — for the docs description block
- `props[]` — name, type, values (enum), default, required, description
- `a11yProps[]` — required i18n string props
- `slots[]` — determines how children/render props are handled

Also read the generated `packages/evo-react/src/<name>/index.tsx` to confirm the exported
component name(s) and prop types — these drive `Meta<typeof EvoXxx>` and `argTypes`.

## Step 2 — Check the docs page

Check for `src/routes/_index/components/<block>/react+page.marko`.

These pages rarely contain markup examples — they link to the external storybook. Scan for
any evo-react-specific usage notes. More useful: the CSS docs findings from `css+page.marko`
(if available from an earlier step) tell you which variants deserve dedicated stories.

## Step 3 — Determine Storybook title

Map `component.category` to the sidebar category using these exact strings (they match the
`storySort` order in `preview.tsx`):

| manifest category  | Storybook title prefix    |
| ------------------ | ------------------------- |
| `buttons`          | `buttons`                 |
| `form`             | `form input`              |
| `graphics & icons` | `Graphics & Icons`        |
| `layout`           | `building blocks`         |
| `dialogs`          | `dialogs`                 |
| `navigation`       | `navigation & disclosure` |
| `notices`          | `notices & tips`          |
| `progress`         | `progress`                |
| `building blocks`  | `building blocks`         |
| `media`            | `media`                   |
| `data display`     | `data display`            |

Title format: `"<prefix>/<ComponentName>"` — e.g. `"buttons/EvoAccordion"` or `"form input/EvoTextbox"`.

## Step 4 — Write the stories file

Create `packages/evo-react/src/<name>/<basename>.stories.tsx`.
The basename matches the component file name (e.g. if the component is `accordion.tsx`,
the stories file is `accordion.stories.tsx`).

### File structure

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoAccordion } from "./accordion"; // adjust to actual export name(s)

const meta: Meta<typeof EvoAccordion> = {
  title: "<prefix>/<ComponentName>",
  component: EvoAccordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
<one-sentence description from manifest>

## Usage
\`\`\`tsx
import { EvoAccordion } from "@evo-web/react";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    // — one entry per prop — see reference below
  },
  args: {
    // meta-level defaults applied to every story
  },
};

export default meta;
type Story = StoryObj<typeof EvoAccordion>;

export const Default: Story = {
  args: {
    // story-level overrides; usually just children for simple components
  },
};
```

### argTypes reference

**String enum (select):**

```tsx
type: {
  control: "select",
  options: ["single", "multiple"],
  description: "Controls whether one or multiple items can be expanded.",
  table: { defaultValue: { summary: '"single"' } },
},
```

**Boolean:**

```tsx
collapsible: {
  control: "boolean",
  description: "Whether expanded items can be collapsed.",
  table: { defaultValue: { summary: "true" } },
},
```

**Free string (including `children` and `a11yText`):**

```tsx
children: {
  control: "text",
  description: "Content rendered inside the component.",
},
a11yText: {
  control: "text",
  description: "Accessible label for screen readers. Required.",
},
```

**Number:**

```tsx
count: {
  control: "number",
  description: "The numeric value to display.",
  table: { defaultValue: { summary: "undefined" } },
},
```

**Event callbacks:** Do NOT define explicit argTypes for event callbacks — `react-docgen-typescript`
auto-discovers them from the TypeScript types. Only add an argType for an event if you
want it explicitly in the controls panel (uncommon).

**Pass-through HTML attributes:** Not listed individually — they are discovered automatically
from the TypeScript types when the component extends native HTML props.

### `args` defaults

Set `args` at the meta level for props that every story should have a sensible default for:

- `children` → a realistic label string (`"Accordion"`, `"Submit"`, not `"string"`)
- Required a11y props → realistic English defaults (`"Close dialog"`, `"Loading"`)
- Enum props → the manifest default value

Story-level `args` only override what differs from the meta defaults.

### Additional stories

**Simple override:** Just add `args`:

```tsx
export const Secondary: Story = {
  args: { priority: "secondary" },
};
```

**Complex children or JSX wrapper:** Use `render`:

```tsx
export const WithIcon: Story = {
  render: (args) => (
    <EvoAccordion {...args}>
      <EvoAccordionItem>
        <EvoAccordionTitle>Section one</EvoAccordionTitle>
        <EvoAccordionContent>Content here.</EvoAccordionContent>
      </EvoAccordionItem>
    </EvoAccordion>
  ),
};
```

Use `render` when:

- Children must be JSX nodes, not a string
- The component requires a context provider or layout wrapper
- Multiple sub-components must be composed together (compound component)

**Controlled/stateful example:** Use React state inside `render`:

```tsx
export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <EvoButton onClick={() => setOpen(true)}>Open</EvoButton>
        <EvoDialog {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
};
```

Import `React` from `"react"` at the top of the file when using hooks.

### How many stories to create

| Component complexity                      | Minimum stories                                    |
| ----------------------------------------- | -------------------------------------------------- |
| Static, no variants                       | `Default` only                                     |
| Has enum prop with distinct visual states | `Default` + one per meaningful option              |
| Interactive (open/close, check/uncheck)   | `Default` + `Controlled`                           |
| Compound (accordion, tabs, dialog)        | `Default` with full child structure + key variants |

Keep to ≤ 6 stories — engineers explore variants through the controls panel. Stories
are for documenting intent and verifying the key visual states, not exhaustive enumeration.

## Step 5 — Verify

Run the type-checker on the new stories file:

```bash
npx tsc --noEmit -p packages/evo-react/tsconfig.json
```

Fix type errors inline. Common issues:

- Incorrect import path or export name from the component file
- `argTypes` key not matching a prop in the component's TypeScript type
- `args` value of wrong type for a prop

Stories are non-blocking — note type errors in the summary and move on if the fix requires
resolving an upstream type issue in the component itself.

---

## Output checklist

- [ ] `packages/evo-react/src/<name>/<basename>.stories.tsx` created
- [ ] `Meta<typeof EvoXxx>` with correct `title`, `component`, `tags: ["autodocs"]`
- [ ] `parameters.docs.description.component` includes description + Usage import block
- [ ] `argTypes` covers all props from manifest (enum → `"select"`, bool → `"boolean"`, string → `"text"`)
- [ ] Required a11y props included in `argTypes` and `args` with realistic defaults
- [ ] `Default` story present with sensible `args`
- [ ] Additional stories added for key variants and interactive states
- [ ] Complex children/stateful examples use `render` function
- [ ] No shared utilities imported (self-contained)
- [ ] Type-check passes (or errors noted in summary)

---

## Completion record — mandatory final step

After story files are verified on disk, write the completion record.

> **Before running:** Substitute the actual component name for `$COMPONENT` and the bare kebab-case component name (e.g. `accordion`) for `<NAME>`. Replace `<basename>` with the actual story filename (typically the component name).

```bash
node -e "
const fs = require('fs');
const comp = '$COMPONENT';
const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
const name = '<NAME>';
s.steps['11'] = {
  status: 'complete',
  completedAt: new Date().toISOString(),
  outputs: [
    \`packages/evo-react/src/\${name}/<basename>.stories.tsx\`,
  ]
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
console.log('Step 11 completion record written.');
"
```

If story generation failed, write `status: "failed"` with an `error` field instead.
