---
name: evo-app-migrate-react
description: Migrate an application from @ebay/ebayui-core-react to @evo-web/react. Run this in your application repo (not in the evo-web monorepo). Receives an optional component name to migrate (e.g. /evo-app-migrate-react ebay-button), or migrates all supported components if no argument is given.
---

# Migrate app: @ebay/ebayui-core-react → @evo-web/react

**Argument:** `$ARGUMENTS` — specific component (e.g. `ebay-button`), or empty to migrate all.

---

## Step 0 — Scope the work first

1. Confirm `@ebay/ebayui-core-react` is in `package.json`.
2. Find all affected files:
   ```
   grep -r "@ebay/ebayui-core-react" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" -l
   ```
3. If `$ARGUMENTS` is set, filter to only files importing that component.
4. List every affected file before modifying anything.

---

## Step 1 — Update package.json

Add `@evo-web/react` at latest. Remove `@ebay/ebayui-core-react` only if all its components are now migrated.

```diff
+ "@evo-web/react": "latest",
- "@ebay/ebayui-core-react": "x.x.x",   // only if fully replaced
```

---

## Step 2 — Apply global renames (all components)

**Import path:** sub-path imports → package root

```diff
- import { EbayButton } from "@ebay/ebayui-core-react/ebay-button";
+ import { EvoButton } from "@evo-web/react";
```

**Component names:** `Ebay` prefix → `Evo` prefix (e.g. `EbayButton` → `EvoButton`, `EbayButtonCell` → `EvoButtonCell`). Types follow the same pattern (`EbayButtonProps` → `EvoButtonProps`).

**Refs:** `ref` works as a native prop in `@evo-web/react` — no change needed in usage.

---

## Step 3 — Apply per-component prop changes

If a component is not listed below, it has **not been migrated yet** — keep using `@ebay/ebayui-core-react` for it and tell the user.

### `ebay-button`

No prop changes. Global renames (Step 2) are sufficient.

### `ebay-details`

This component has a **new composite API** in evo-react. The flat-prop approach is replaced by named sub-components.

**Before:**

```tsx
import { EbayDetails } from "@ebay/ebayui-core-react/ebay-details";

<EbayDetails
  text="Show me the details!"
  size="small"
  alignment="center"
  leading={<Icon />}
  onToggle={handler}
>
  Content here
</EbayDetails>;
```

**After:**

```tsx
import {
  EvoDetails,
  EvoDetailsSummary,
  EvoDetailsLeading,
  EvoDetailsLabel,
  EvoDetailsContent,
} from "@evo-web/react";

<EvoDetails size="small" alignment="center" onToggle={handler}>
  <EvoDetailsSummary>
    <EvoDetailsLeading>
      <Icon />
    </EvoDetailsLeading>
    <EvoDetailsLabel>Show me the details!</EvoDetailsLabel>
  </EvoDetailsSummary>
  <EvoDetailsContent>Content here</EvoDetailsContent>
</EvoDetails>;
```

**Prop changes:**

| ebayui-core-react        | evo-react                           | Notes                                                                        |
| ------------------------ | ----------------------------------- | ---------------------------------------------------------------------------- |
| `text: string`           | `<EvoDetailsLabel>` sub-component   | Move label text into `<EvoDetailsLabel>` inside `<EvoDetailsSummary>`        |
| `leading?: ReactElement` | `<EvoDetailsLeading>` sub-component | Move leading element into `<EvoDetailsLeading>` inside `<EvoDetailsSummary>` |
| `as?: ElementType`       | `as` prop on `<EvoDetailsContent>`  | Move to the content sub-component                                            |
| `onToggle`               | `onToggle`                          | Same signature: `(event, { open: boolean }) => void`                         |
| `children`               | `<EvoDetailsContent>` children      | Wrap children in `<EvoDetailsContent>`                                       |

**Important:** `<EvoDetailsLeading>` must appear before `<EvoDetailsLabel>` inside `<EvoDetailsSummary>` — order is not enforced by the component.

---

## Step 4 — Verify

1. Type-check: `tsc --noEmit` (or equivalent).
2. Run the app's test suite.
3. Smoke-test migrated components in the browser.

---

## Rules

- Do not migrate components not listed in Step 3 — flag them to the user instead.
- Do not guess at prop renames — if a prop in the app isn't listed above, keep it and flag it.
- Do not upgrade any other dependencies.
