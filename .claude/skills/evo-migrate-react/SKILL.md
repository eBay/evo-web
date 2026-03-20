---
name: evo-migrate-react
description: Migrate a component from @ebay/ebayui-core-react to @evo-web/react. Receives the ebayui-core-react component name as the argument (e.g. /evo-migrate-react ebay-button).
---

# Migrate ebayui-core-react → evo-react

You are migrating `$ARGUMENTS` from `packages/ebayui-core-react/src/$ARGUMENTS/` to a new `packages/evo-react/src/evo-${ARGUMENTS#ebay-}/` directory.

## Step 0 — Read before writing

1. Read every file in `packages/ebayui-core-react/src/$ARGUMENTS/`.
2. Read the Marko `style.ts` for the same component in either:
   - `packages/evo-marko/src/tags/evo-${ARGUMENTS#ebay-}/style.ts`, or
   - `packages/ebayui-core/src/components/$ARGUMENTS/style.ts`
     This gives you the correct skin module name to import (e.g. `@ebay/skin/button` → used as `@ebay/skin/button.mjs`).
3. Read the evo-marko component (`packages/evo-marko/src/tags/evo-${ARGUMENTS#ebay-}/index.marko` and its `marko-tag.json` or tag definition) to extract the full list of supported props and their types.
4. Read `packages/evo-react/src/evo-button/` as the canonical reference for all conventions.
5. Read `packages/evo-react/src/index.ts` to know where to add the new exports.

---

## Naming conventions

| ebayui-core-react        | evo-react               |
| ------------------------ | ----------------------- |
| `ebay-button` (dir)      | `evo-button` (dir)      |
| `EbayButton` (component) | `EvoButton` (component) |
| `EbayButtonProps` (type) | `EvoButtonProps` (type) |

Story title mirrors the ebayui-core-react story title with `ebay` replaced by `evo`:

- `"buttons/ebay-button"` → `"buttons/evo-button"`
- `"graphics & icons/ebay-avatar"` → `"graphics & icons/evo-avatar"`

---

## File structure

```
packages/evo-react/src/evo-{name}/
  index.ts                  ← named re-exports only (no default exports)
  {name}.tsx                ← main component
  {subcomponent-name}.tsx   ← sub-components if present (named after actual sub-component, e.g. button-cell.tsx)
  types.ts                  ← all exported types
  README.md                 ← component name + Documentation section with Storybook link only
  {name}.stories.tsx        ← Storybook stories (co-located, NOT in __tests__/)
  test/
    test.browser.tsx        ← browser interaction tests (vitest-browser-react)
    test.server.tsx         ← SSR snapshot tests (renderToString)
```

**Key difference from ebayui-core-react:** tests live in `test/` (not `__tests__/`), stories co-located with source (not inside `__tests__/`).

**README.md format** — keep it minimal, just a Storybook link (props and usage docs live in the story):

```md
# EvoButton

## Documentation

[Storybook](https://opensource.ebay.com/evo-web/react/main/?path=/docs/buttons-evo-button--documentation)
```

---

## Component authoring rules

### Named function declarations — no `FC`, no arrow function components

```tsx
// ✅ evo-react
export function EvoButton(props: NativeButtonProps) { ... }

// ❌ do NOT copy from ebayui-core-react
const EbayButton: FC<Props> = (props) => { ... }
```

For overloaded signatures, annotate overloads with `React.JSX.Element` but let the implementation infer:

```tsx
export function EvoButton(props: AnchorButtonProps): React.JSX.Element;
export function EvoButton(props: NativeButtonProps): React.JSX.Element;
export function EvoButton(props: AnchorButtonProps | NativeButtonProps) { ... }
```

For non-overloaded components, omit the return type entirely and let TypeScript infer it.

### No `forwardRef` — React 19 native ref

```tsx
// ✅ evo-react: ref works natively as a normal prop
export function EvoButton({ ref, ...props }: NativeButtonProps) { ... }

// ❌ do NOT use
React.forwardRef(...)
withForwardRef(...)
forwardedRef prop
```

### No default exports

```tsx
// ✅
export function EvoButton(...) { ... }

// ❌
export default EvoButton;
```

### Import Skin CSS directly in the component file, always with `.mjs` extension

```tsx
import "@ebay/skin/button.mjs"; // ✅
import "@ebay/skin/button"; // ❌
import "@ebay/skin/button.css"; // ❌
```

Derive the module name from the `style.ts` file you read in Step 0 and append `.mjs`.

### Use individual `EvoIcon*` components, not `<EbayIcon name="..." />`

```tsx
// ✅ evo-react
import { EvoIconChevronDown16 } from "../evo-icon/icons/evo-icon-chevron-down-16";
<EvoIconChevronDown16 />

// ❌ ebayui-core-react pattern — do not copy
<EbayIcon name="chevron-down-16" />
```

### Optional callbacks — no required default `() => {}`

```tsx
// ✅
onEscape?: (e: KeyboardEvent<HTMLButtonElement>) => void;
onEscape?.(event);

// ❌
onEscape = () => {}
onEscape(event);
```

### Prop audit — align with evo-marko and eliminate unnecessary props

Before finalising the prop surface, compare the ebayui-core-react props against the evo-marko component you read in Step 0:

1. **Props in evo-marko but missing from ebayui-core-react** — add them to evo-react.
2. **Props in ebayui-core-react but missing from evo-marko** — investigate whether they are still needed:
   - Does CSS/Skin handle it now (so the prop is redundant)?
   - Was it a framework workaround that React 19 / evo-react no longer needs?
   - A real example: `noSkinClasses` on `EbayIcon` existed to opt out of skin class generation, but evo-react icon components always apply skin classes — the prop is unnecessary and should be dropped.
   - If you are uncertain whether a prop should be kept or removed, **stop and ask** before proceeding. Explain what the prop does and why you think it may be removable.
3. **Mismatched types or semantics** — if a prop exists in both but with different types or behaviour, **stop and ask** before deciding which to follow.

Do not silently carry over every prop from ebayui-core-react. Each prop must have a clear purpose in the evo-react context.

### Accessibility prop naming — prefer `a11yText` over `aria-label`

evo-react standardises accessible label props as `a11yText` instead of raw `aria-label` for consistency across components. Before deciding the prop name:

1. Check how the evo-marko component names it (from the `marko-tag.json` / tag definition you read in Step 0).
2. If evo-marko uses `a11yText`, use `a11yText` in evo-react and map it to `aria-label` on the underlying element internally:

```tsx
// ✅ evo-react
export function EvoButton({ a11yText, ...rest }: EvoButtonProps) {
  return <button aria-label={a11yText} {...rest} />;
}

// ❌ do not expose aria-label as a custom prop name when a11yText is the standard
```

3. If evo-marko uses a different name, or the pattern is unclear, **stop and ask** before proceeding.

### Never use `React.Children` APIs

Do **not** use `Children.map`, `Children.toArray`, `findComponent`, `filterComponent`, or any child-scanning pattern.

If the ebayui-core-react component uses children composition (e.g. finding a sub-component in children), **stop and ask** before proceeding. Propose one or more alternative approaches using explicit props instead of child scanning, for example:

- Accepting sub-component content as a named prop (`footer`, `header`, `title`)
- Accepting a render prop
- Splitting into separate sibling components

Do not guess — get alignment before migrating this pattern.

---

## Types

Keep all custom types in `types.ts`. Export them from `index.ts`. Do not inline complex types inside the component file.

```ts
// types.ts
export type Priority = "primary" | "secondary" | "tertiary" | "none";
export type EvoButtonProps = AnchorButtonProps | NativeButtonProps;

// index.ts
export { EvoButton } from "./button";
export type { EvoButtonProps, Priority } from "./types";
```

---

## Test patterns

### Browser tests — `test/test.browser.tsx`

Uses `vitest-browser-react` + `userEvent`. Tests real DOM interactions.

```tsx
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoButton } from "../button";

describe("evo-button", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("emits click event when clicked", async () => {
    const onClick = vi.fn();
    const screen = await render(
      <EvoButton onClick={onClick}>Click Me</EvoButton>,
    );
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
```

Key differences from ebayui-core-react tests:

- `vitest-browser-react`, not `@testing-library/react`
- `await render(...)` (async)
- `userEvent` from `vitest/browser`
- `await expect.element(el).toBeInTheDocument()` not `expect(el).toBeInTheDocument()`

### Server tests — `test/test.server.tsx`

Uses `renderToString` for SSR snapshots.

```tsx
import { it, expect, describe } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoButton } from "../button";
import type { Priority } from "../types";

describe("EvoButton SSR", () => {
  it.each<Priority>(["primary", "secondary", "tertiary", "none"])(
    "should render button with priority=%s",
    (priority) => {
      expect(
        renderToString(<EvoButton priority={priority}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );
});
```

---

## Storybook stories — `{name}.stories.tsx`

- One story per component whenever possible. Only add multiple stories when variations require different component structure that cannot be expressed through args/argTypes alone.
- `title` must mirror the ebayui-core-react story title with `ebay` replaced by `evo`.
- Description format: one-sentence summary followed by a `## Usage` section with the import snippet.

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "./button";

const meta: Meta<typeof EvoButton> = {
  title: "buttons/evo-button",
  component: EvoButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A flexible button component that renders as \`<button>\` or \`<a>\` based on the \`href\` prop.

## Usage

\`\`\`tsx
import { EvoButton } from "@evo-web/react";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    // one entry per custom prop with control type + description
  },
  args: {
    // sensible defaults
  },
};

export default meta;
type Story = StoryObj<typeof EvoButton>;

export const Default: Story = {
  args: { children: "Button" },
};
```

---

## Register in `packages/evo-react/src/index.ts`

```ts
export { EvoButton, EvoButtonCell } from "./evo-button";
export type { EvoButtonProps, Priority } from "./evo-button";
```

---

## Update the app migration skill

After completing the component, update `.claude/skills/evo-app-migrate-react/SKILL.md`:

1. Add a new `### \`ebay-{name}\`` section under **Step 3 — Apply per-component prop changes**.
2. Document every prop that changed compared to `ebayui-core-react`:
   - Removed props (with reason, e.g. "handled by CSS now")
   - Renamed props (old → new)
   - Type changes
   - Behavior differences
3. If nothing changed beyond the global renames, write: `No prop changes. Global renames (Step 2) are sufficient.`

Keep entries concise — one line per change. App owners read this, not component authors.

---

## Checklist before finishing

- [ ] All files use named exports (no `export default`)
- [ ] No `React.forwardRef` or `withForwardRef`
- [ ] No `FC<Props>` type annotation on components
- [ ] Return type omitted on non-overloaded components (inferred by TS)
- [ ] Skin CSS imported with `.mjs` extension
- [ ] Individual `EvoIcon*` components used (no `<EbayIcon name="..." />`)
- [ ] Optional callbacks use `?.` (no `= () => {}` defaults)
- [ ] Props cross-checked against evo-marko — missing props added, unnecessary props removed or queried
- [ ] `aria-label` prop replaced with `a11yText` if evo-marko uses it (mapped internally to `aria-label`); asked if naming is unclear
- [ ] No `React.Children`, `findComponent`, or child-scanning — asked if encountered
- [ ] `test/test.browser.tsx` uses `vitest-browser-react`
- [ ] `test/test.server.tsx` uses `renderToString` + snapshots
- [ ] `README.md` created with component name and Storybook documentation link only
- [ ] Stories in `{name}.stories.tsx` co-located with source
- [ ] Story title follows `"category/evo-{name}"` pattern
- [ ] Exports registered in `packages/evo-react/src/index.ts`
- [ ] `npm run build -w packages/evo-react` passes
