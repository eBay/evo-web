---
name: evo-migrate-react
description: Migrate a component from @ebay/ebayui-core-react to @evo-web/react. Receives the ebayui-core-react component name as the argument (e.g. /evo-migrate-react ebay-button).
---

# Migrate ebayui-core-react → evo-react

You are migrating `$ARGUMENTS` from `packages/ebayui-core-react/src/$ARGUMENTS/` to a new `packages/evo-react/src/${ARGUMENTS#ebay-}/` directory.

## Step 0 — Read before writing

1. Read every file in `packages/ebayui-core-react/src/$ARGUMENTS/`.
2. Read the Marko `style.ts` for the same component in either:
   - `packages/evo-marko/src/tags/evo-${ARGUMENTS#ebay-}/style.ts`, or
   - `packages/ebayui-core/src/components/$ARGUMENTS/style.ts`
     This gives you the correct skin module name to import (e.g. `@ebay/skin/button` → used as `@ebay/skin/button.mjs`).
3. Read the evo-marko component (`packages/evo-marko/src/tags/evo-${ARGUMENTS#ebay-}/index.marko` and its `marko-tag.json` or tag definition) to extract the full list of supported props and their types.
4. Read `packages/evo-react/src/button/` as the canonical reference for all conventions.

---

## Naming conventions

| ebayui-core-react        | evo-react               |
| ------------------------ | ----------------------- |
| `ebay-button` (dir)      | `button` (dir)          |
| `EbayButton` (component) | `EvoButton` (component) |
| `EbayButtonProps` (type) | `EvoButtonProps` (type) |

Story title mirrors the ebayui-core-react story title with `ebay` replaced by `evo`:

- `"buttons/ebay-button"` → `"buttons/evo-button"`
- `"graphics & icons/ebay-avatar"` → `"graphics & icons/evo-avatar"`

---

## File structure

```
packages/evo-react/src/{name}/
  index.ts                  ← named re-exports only (no default exports)
  {name}.tsx                ← main component
  {subcomponent-name}.tsx   ← sub-components if present (named after actual sub-component, e.g. button-cell.tsx)
  types.ts                  ← all exported types
  context.ts                ← React context + accessor hook (only if component uses context)
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

[Storybook](https://opensource.ebay.com/evo-web/react/?path=/docs/buttons-evo-button--documentation)
```

---

## Component authoring rules

### No `import React from "react"` unless required for typing

`@evo-web/react` uses the automatic JSX transform — the JSX runtime is injected automatically and `React` does not need to be imported for JSX. Import only what you actually use as named imports:

```tsx
// ✅ evo-react — import only what is needed
import type { ComponentProps, SyntheticEvent } from "react";
import classNames from "classnames";

// ❌ do NOT import the default React object unless unavoidable
import React from "react";
```

The only time `import React from "react"` is acceptable is when you need the namespace for a specific type like `React.JSX.Element` in overloaded signatures, and even then prefer `import type { JSX } from "react"` with `JSX.Element`.

---

### Named function declarations — no `FC`, no arrow function components

Destructure props directly in the function signature. Do not assign to a `props` variable and destructure inside the body:

```tsx
// ✅ evo-react
export function EvoButton({ className, children, ref, ...rest }: NativeButtonProps) { ... }

// ❌ do NOT use a props variable
export function EvoButton(props: NativeButtonProps) {
  const { className, children, ref, ...rest } = props;
}

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

**Controlled/uncontrolled pattern:** when you need to distinguish between a prop being passed vs. omitted (e.g. `open` vs. `open={undefined}`), use `!== undefined` after destructuring — do **not** keep `props` alive just for `"open" in props`:

```tsx
// ✅
export function EvoFoo({ open, defaultOpen = false, ...rest }: EvoFooProps) {
  const isControlled = open !== undefined;
}
```

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

**Exception — `@ebay/skin/icon.mjs`:** Never import this directly in a component. It is already imported inside the `EvoIcon` base component (`src/icon/icon.tsx`), so any component that renders `EvoIcon*` gets it transitively. Importing it again is redundant.

### Use individual `EvoIcon*` components, not `<EbayIcon name="..." />`

```tsx
// ✅ evo-react
import { EvoIconChevronDown16 } from "../icon/icons/chevron-down-16";
<EvoIconChevronDown16 />

// ❌ ebayui-core-react pattern — do not copy
<EbayIcon name="chevron-down-16" />
```

This applies to **stories and tests** as well — never use inline `<svg>` or custom placeholder icons. Always use an existing `EvoIcon*` component. Available icons are in `packages/evo-react/src/evo-icon/icons/`.

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

### Use `use()` instead of `useContext()`

Always consume React context with the `use()` hook from React 19, never `useContext`:

```tsx
// ✅ evo-react
import { use } from "react";
const value = use(FooContext);

// ❌ do NOT use
import { useContext } from "react";
const value = useContext(FooContext);
```

### Context provider pattern — always use a dedicated Provider component

Never pass an inline object literal to a context `value` prop. Instead, define a `<XxxProvider>` component in `context.tsx` that accepts each value as a named prop and memos the object internally:

```tsx
// ✅ evo-react — context.tsx
export function FooProvider({ size, onToggle, children }: FooProviderProps) {
  const value = useMemo(() => ({ size, onToggle }), [size, onToggle]);
  return <FooContext value={value}>{children}</FooContext>;
}

// ✅ evo-react — foo.tsx
<FooProvider size={size} onToggle={onToggle}>

// ❌ do NOT inline the object
<FooContext value={{ size, onToggle }}>
```

This keeps memoization out of the component file and prevents unnecessary re-renders of all context consumers.

### Never use `React.Children` APIs

Do **not** use `Children.map`, `Children.toArray`, `findComponent`, `filterComponent`, or any child-scanning pattern.

The **preferred approach** is named sub-components with React context (see [ADR 0005](../../../docs/adr/0005-evo-react-child-component-composition.md)). This is the established pattern in `@evo-web/react` and should be the default proposal for consistency.

If the ebayui-core-react component uses children composition (e.g. finding a sub-component in children), **stop and ask** before proceeding. Lead with the sub-component approach as the recommendation, but present the full picture so the user can confirm:

1. What sub-components would be needed, and what state (if any) the parent must share via context.
2. Whether a simpler alternative fits — e.g. a named prop (`footer`, `header`, `title`) if the region is a single, unstructured slot with no BEM class injection needed.
3. Any edge cases specific to this component that could affect the choice (e.g. enforced ordering, complex shared state, accessibility requirements).

Do not guess — get alignment before migrating this pattern.

---

## Types

Keep all custom types in `types.ts`. Export them from `index.ts`. Do not inline complex types inside the component file.

Do **not** add JSDoc comments to `types.ts`. Type names and the TypeScript type system are self-documenting; prose descriptions belong in Storybook `argTypes`.

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

### Query preference — semantic locators over `querySelector`

`vitest-browser-react` exposes RTL-inspired locators (`getByRole`, `getByText`, `getByLabelText`, etc.) backed by Playwright. Always prefer these over raw DOM queries. See [vitest-browser-react API](https://vitest.dev/api/browser/react).

**Prefer semantic locators:**

```tsx
// ✅ prefer — queries the accessible role
const dialog = screen.getByRole("alertdialog");
const button = screen.getByRole("button", { name: "OK" });
const heading = screen.getByRole("heading", { name: "Alert Title" });
const content = screen.getByText(
  "You must acknowledge this alert to continue.",
);

// ❌ avoid — opaque DOM traversal
const dialog = screen.container.querySelector("dialog");
const button = screen.container.querySelector("button");
const title = screen.container.querySelector(".dialog__title");
```

**Use `.closest()` to assert on a parent element** when you locate a child via a semantic query but need to verify a BEM class or ID on its wrapper:

```tsx
// ✅ locate the heading semantically, then walk up to check its container class
const heading = screen.getByRole("heading", { name: "Alert Title" });
expect(heading.element().closest(".dialog__title")).not.toBeNull();

// ✅ locate content by text, then assert the wrapper has the right class
const content = screen.getByText("...");
const main = content.element().closest(".dialog__main");
expect(main).not.toBeNull();
```

**Exception — closed/hidden elements:** `vitest-browser-react` locators use the Playwright accessibility tree and cannot find elements hidden from it (e.g. a `<dialog>` without the `open` attribute). In these cases `querySelector` is acceptable, but **leave a comment** explaining the intent:

```tsx
// dialog is closed and hidden from the a11y tree; querySelector is intentional here
const dialog = container.querySelector("dialog");
await expect.element(dialog!).toHaveClass("dialog--close");
```

Note: `getByRole(..., { hidden: true })` is **not supported** by `vitest-browser-react` (it is an RTL-only option). Do not use it.

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

- **One story per component** unless the component tree itself must change between variations (e.g. different sub-components, optional children). Visual and prop variations (size, alignment, disabled, open…) must be handled through `args` and `argTypes` controls — not separate stories.
- **`select` controls for optional props — do not include `undefined` in `options`.** Storybook's select control already renders a "Choose option…" placeholder for optional props. Adding `undefined` as an explicit option creates a duplicate empty entry. Only list the actual valid string values:

  ```tsx
  // ✅ correct — Storybook adds the empty/unset option automatically
  argTypes: {
    chargerIcon: {
      control: "select",
      options: ["included", "not-included"],
    },
  }

  // ❌ do NOT add undefined to options
  argTypes: {
    chargerIcon: {
      control: "select",
      options: [undefined, "included", "not-included"],
    },
  }
  ```

- `title` must mirror the ebayui-core-react story title with `ebay` replaced by `evo`.
- Description format: one-sentence summary followed by a `## Usage` section with the import snippet.
- **`subcomponents`**: If the component has sub-components (e.g. `EvoAvatarImage` alongside `EvoAvatar`), declare them in the meta using the `subcomponents` field. This causes Storybook's autodocs to render a props table for each sub-component as a separate tab.

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "./button";

const meta: Meta<typeof EvoButton> = {
  title: "buttons/evo-button",
  component: EvoButton,
  // Include any exported sub-components so autodocs generates their prop tables:
  // subcomponents: { EvoButtonCell },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A flexible button component that renders as \`<button>\` or \`<a>\` based on the \`href\` prop.

## Usage

\`\`\`tsx
import { EvoButton } from "@evo-web/react/button";
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

## Update the app migration skill

After completing the component, update `.claude/skills/evo-app-migrate-react/`:

1. Create or update `.claude/skills/evo-app-migrate-react/components/evo-{name}.md` where `{name}` is the evo-react component directory name (for example, `evo-accordion.md`).
2. In that component file, document every prop that changed compared to `ebayui-core-react`:
   - Removed props (with reason, e.g. "handled by CSS now")
   - Renamed props (old → new)
   - Type changes
   - Behavior differences
   - New composition requirements, if the React API changed to named sub-components
3. If nothing changed beyond the global renames, write: `No prop changes. Global renames from Step 2 are sufficient.`
4. Update `.claude/skills/evo-app-migrate-react/SKILL.md` **only as an index**:
   - Add a row for `ebay-{name}` under **Step 3 — Apply per-component prop changes**.
   - Link that row to `components/evo-{name}.md`.
   - Do not inline per-component migration details in `SKILL.md`.

Keep component entries concise. App owners read these files, not component authors.

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
- [ ] App migration skill has a linked `components/evo-{name}.md` file and no inline component details in `SKILL.md`
- [ ] `pnpm --filter @evo-web/react build` passes
- [ ] Changeset added in `.changeset/` with `patch` bump for `@evo-web/react` (`@evo-web/react` is still experimental, so all additions use `patch`). Keep the description to one short line — e.g. `Add EvoFoo component.` — no bullet points or implementation details.
