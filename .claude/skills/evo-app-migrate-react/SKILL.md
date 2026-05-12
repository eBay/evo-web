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

**Import path:** map each `@ebay/ebayui-core-react` subpath to the matching `@evo-web/react` subpath, dropping the `ebay-` prefix from the subpath name:

```diff
- import { EbayButton } from "@ebay/ebayui-core-react/ebay-button";
+ import { EvoButton } from "@evo-web/react/button";
```

For icons:

```diff
- import { EbayIconCart16 } from "@ebay/ebayui-core-react/icons/ebay-icon-cart-16";
+ import { EvoIconCart16 } from "@evo-web/react/icons/cart-16";
```

**Component names:** `Ebay` prefix → `Evo` prefix (e.g. `EbayButton` → `EvoButton`, `EbayButtonCell` → `EvoButtonCell`). Types follow the same pattern (`EbayButtonProps` → `EvoButtonProps`).

**Refs:** `ref` works as a native prop in `@evo-web/react` — no change needed in usage.

---

## Step 3 — Apply per-component prop changes

If a component is not listed below, it has **not been migrated yet** — keep using `@ebay/ebayui-core-react` for it and tell the user.

When migrating a listed component, read the linked file completely and apply the component-specific changes in addition to the global renames from Step 2.

| ebayui-core-react component | Migration details                                     |
| --------------------------- | ----------------------------------------------------- |
| `ebay-accordion`            | [evo-accordion.md](components/evo-accordion.md)       |
| `ebay-alert-dialog`         | [evo-alert-dialog.md](components/evo-alert-dialog.md) |
| `ebay-badge`                | [evo-badge.md](components/evo-badge.md)               |
| `ebay-breadcrumbs`          | [evo-breadcrumbs.md](components/evo-breadcrumbs.md)   |
| `ebay-button`               | [evo-button.md](components/evo-button.md)             |
| `ebay-details`              | [evo-details.md](components/evo-details.md)           |

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
