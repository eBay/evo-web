---
name: evo-react-component
description: >
  Generates the React 19 structural layer for a new evo-web component from an
  approved manifest.json. Produces index.tsx (React 19 component), and
  __tests__/index.spec.tsx (Vitest test scaffold). Called inline by /evo-component
  as Step 5. Use this skill whenever the user says "generate the React layer",
  "create the React files from the manifest", "generate the evo-react component",
  or when /evo-component delegates Step 5 to this skill. Do NOT confuse with
  /evo-migrate-react which ports existing ebayui-core-react components — this
  skill generates new components from scratch.
---

# React 19 Generation from manifest.json

This skill translates a locked `manifest.json` into a production-ready React 19
component in the `@evo-web/react` package. All design decisions were made by
the engineer during manifest review. Your job is accurate translation, not
interpretation.

**Output location:** `packages/evo-react/src/<component-name>/`

**Output files:**

- `index.tsx` — React 19 component (ESM, native `ref`, no `forwardRef`)
- `__tests__/index.spec.tsx` — Vitest + Testing Library test scaffold

There is **no** CommonJS build target, no `forwardRef`, no external MakeupJS
dependency — those are ebayui-core-react patterns. This is the new ESM stack.

---

## Step 1 — Check for scaffold files, then read the manifest

**Check for scaffold files first.** If the orchestrator ran `generate-component-scaffold.ts`
(Step 6.5), a scaffold file already exists at the target path. If it exists, read it
before proceeding — do not regenerate the deterministic parts it contains.

```
packages/evo-react/src/<name>/index.tsx — if present, read and complete the TODO sections only
```

When the scaffold file exists, your job is **completion, not generation**: read the existing
file, find the `// TODO:` sections, and fill them in. The Props interface, skin CSS import,
and ARIA comment are already correct — do not re-derive or overwrite them. Only write the
component body (the JSX return, state, event handlers) and any imports the body requires.

Read `src/routes/_index/components/[component-name]/manifest.json` in full. Extract:

- `component.name` — kebab-case name (e.g. `evo-avatar`)
- `component.displayName` — PascalCase component name (e.g. `EvoAvatar`)
- `rootElement.default` — the underlying HTML element (`div`, `button`, `span`, etc.)
- `rootElement.excludedAttributes` — which native attrs the component manages internally
- `props[]` + `a11yProps[]` — component prop definitions
- `slots[]` — how content regions map to React children patterns
- `bem.block` — for the skin CSS import path
- `a11y` — role, label strategy, aria attributes
- `behaviors[]` + `keyboardModel` — whether event handlers / keyboard logic is needed
- `stateLiftingCallbacks[]` — controlled props (need both value prop + onChange handler)
- `gaps` — medium-confidence fields become `// TODO: verify` inline comments

---

## Step 2 — Generate `index.tsx`

### File structure

```tsx
import "@ebay/skin/<bem.block>";
import React from "react";

// Props type
export interface <DisplayName>Props extends Omit<React.ComponentProps<"div">, "role"> {
    // props from manifest
}

// Component
export function <DisplayName>({ ..., ref, ...rest }: <DisplayName>Props) {
    // ...
    return (
        <div ref={ref} {...rest} ...>
            {/* ... */}
        </div>
    );
}
```

### Skin CSS import

Always import skin CSS directly in the component file (not in a separate style file):

```tsx
import "@ebay/skin/<bem.block>";
```

### Props interface

Derive from `manifest.props[]` + `manifest.a11yProps[]`:

```tsx
export interface EvoAvatarProps extends Omit<
  React.ComponentProps<"div">,
  "role" | "aria-label"
> {
  size?: 32 | 40 | 48 | 56 | 64 | 96 | 128;
  color?: string;
  username?: string;
  a11yText: string | null; // required a11yProp
  onLoad?: (event: Event) => void; // event from manifest.events[]
}
```

**Prop type mapping:**

| manifest `type`    | TypeScript type          |
| ------------------ | ------------------------ |
| `"string"`         | `string`                 |
| `"number"`         | `number`                 |
| `"boolean"`        | `boolean`                |
| `"enum"` + values  | union of string literals |
| `"string \| null"` | `string \| null`         |

**`Omit<>` rules:** Only omit attributes that the component hardcodes and must
not accept from consumers (e.g. `"role"` if `a11y.explicitRole` is true and
a fixed role is always applied). Read `manifest.rootElement.excludedAttributes`.

**Slots:** Named slots from `manifest.slots[]` become named `ReactNode` props
(e.g. `header?: ReactNode`) or a standard `children` prop for the default slot.
If a slot has `type: "named-attrtag"` in the manifest, it maps to a named prop
in React, not `children`.

**Controlled props:** If `manifest.stateLiftingCallbacks[]` is present, the prop
is controllable. Follow React's controlled/uncontrolled pattern:

```tsx
// e.g. for open: controlled if onOpenChange is provided, otherwise internal state
const [isOpen, setIsOpen] = React.useState(defaultOpen ?? false);
const open = onOpenChange !== undefined ? (openProp ?? false) : isOpen;
```

**Required a11yProps:** These are always required (no `?`). A11yProps with
`allowNull: true` use `string | null` type.

### Component function

Use React 19's native `ref` — no `forwardRef`:

```tsx
export function EvoAvatar({
    size,
    color,
    username,
    a11yText,
    className,
    children,
    ref,
    ...rest
}: EvoAvatarProps) {
```

**BEM classes:**

```tsx
const classes = ["avatar", size && `avatar--${size}`, className]
  .filter(Boolean)
  .join(" ");
```

**ARIA from `manifest.a11y`:**

- If `labelStrategy === "aria-label-prop"`: `aria-label={a11yText ?? undefined}`
- If `allowNull: true` on a11yText: also `aria-hidden={a11yText === null ? "true" : undefined}`
- Each entry in `manifest.a11y.ariaAttributes[]` maps to a JSX attribute

**Spread to root:** Always spread `...rest` onto the root element so consumers
can pass native HTML attributes:

```tsx
<div {...rest} ref={ref} className={classes} role="img" aria-label={...}>
```

**Keyboard handlers:** If `manifest.keyboardModel` is present, wire `onKeyDown`
on the appropriate element. Map `manifest.keyboardInteractions[]` to key checks:

```tsx
onKeyDown={(e) => {
    if (e.key === "Escape") onEscape?.(e);
    if (e.key === "Enter" || e.key === " ") onActivate?.(e);
}}
```

**Medium-confidence gaps:** Add `{/* TODO: verify — [gap note] */}` next to
the affected JSX attribute or prop.

### Return value

Return JSX matching `manifest.rootElement.default`. Render slots/children in
the correct position:

```tsx
return (
  <div
    {...rest}
    ref={ref}
    className={classes}
    role="img"
    aria-label={a11yText ?? undefined}
  >
    {image ? (
      <img src={image.src} alt="" onLoad={image.onLoad} />
    ) : username ? (
      <span>{username.charAt(0).toUpperCase()}</span>
    ) : (
      <EvoIconAvatarSignedOut />
    )}
    {children}
  </div>
);
```

---

## Step 3 — Generate `__tests__/index.spec.tsx`

Scaffold Vitest + Testing Library tests. One describe block, tests for each
key variant from `manifest.variants[]` and key states from `manifest.states[]`.

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { EvoAvatar } from "../index";

describe("EvoAvatar", () => {
  it("renders with accessible label", () => {
    render(<EvoAvatar a11yText="Profile photo of Alex" />);
    expect(
      screen.getByRole("img", { name: "Profile photo of Alex" }),
    ).toBeInTheDocument();
  });

  it("renders decorative when a11yText is null", () => {
    const { container } = render(<EvoAvatar a11yText={null} />);
    const el = container.querySelector(".avatar");
    expect(el).toHaveAttribute("aria-hidden", "true");
  });

  // One it() per variant/state that has a distinct visual or ARIA change
  // Structure: render → query → assert. Do not assert implementation details.
});
```

If `manifest.keyboardModel` is present, add keyboard interaction tests:

```tsx
import userEvent from "@testing-library/user-event";

it("closes on Escape", async () => {
  render(<EvoDialog open a11yCloseText="Close" />);
  await userEvent.keyboard("{Escape}");
  // assert closed state
});
```

---

## Key React 19 / evo-react conventions

**No `forwardRef`:** React 19 supports native `ref` as a prop. Never wrap with
`React.forwardRef()`.

**ESM only:** No `require()`, no CommonJS exports.

**Skin CSS in component file:** `import "@ebay/skin/<block>"` at the top of
`index.tsx` — not in a separate file.

**No MakeupJS:** Unlike ebayui-core-react, evo-react does not depend on
`@ebay/makeup-*` utilities. Implement focus management directly if needed.

**Spread `...rest` always:** Consumers must be able to pass `data-*`, `id`,
`tabIndex`, etc. to the root element. Always include `{...rest}` on the root.

**`ref` on root:** The `ref` prop should attach to the root DOM element via
`<div ref={ref} ...>`.

---

## Output verification

After generating, confirm:

- `index.tsx` exports a named function component matching `component.displayName`
- Props interface covers all manifest props + a11yProps with correct types
- `Omit<>` only for attributes in `manifest.rootElement.excludedAttributes`
- `...rest` spread on root element; `ref` on root
- ARIA attributes from `manifest.a11y` are present with correct conditions
- Skin CSS imported directly in the component file
- No `forwardRef`, no CommonJS, no MakeupJS
- Test file has at least one test per key variant
- `// TODO: verify` comments present for medium-confidence gaps

Report generated file paths to the orchestrator.

---

## Completion record — mandatory final step

After output verification passes, write the completion record.

> **Before running:** Substitute the actual component name for `$COMPONENT` and the bare kebab-case component name (e.g. `accordion`) for `<NAME>`.

```bash
node -e "
const fs = require('fs');
const comp = '$COMPONENT';
const p = \`src/routes/_index/components/\${comp}/pipeline-state.json\`;
const s = JSON.parse(fs.readFileSync(p, 'utf8'));
const name = '<NAME>';
s.steps['10'] = {
  status: 'complete',
  completedAt: new Date().toISOString(),
  outputs: [
    \`packages/evo-react/src/\${name}/index.tsx\`,
    \`packages/evo-react/src/\${name}/__tests__/index.spec.tsx\`,
  ]
};
s.updatedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(s, null, 2));
console.log('Step 10 completion record written.');
"
```

If any output verification check failed (forwardRef found, export missing, etc.),
write `status: "failed"` with the failing check as the `error` field instead.
