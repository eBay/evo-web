---
name: evo-app-migrate-react
description: Migrate an application from @ebay/ui-core-react to @evo-web/react. Run this in your application repo (not in the evo-web monorepo). Receives an optional component name to migrate (e.g. /evo-app-migrate-react ebay-button), or migrates all supported components if no argument is given.
---

# Migrate app: @ebay/ui-core-react → @evo-web/react

**Argument:** `$ARGUMENTS` — specific component (e.g. `ebay-button`), or empty to migrate all.

---

## Step 0 — Scope the work first

1. Confirm `@ebay/ui-core-react` is in `package.json`.
2. Find all affected files:
   ```
   grep -r "@ebay/ui-core-react" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" -l
   ```
3. If `$ARGUMENTS` is set, filter to only files importing that component.
4. List every affected file before modifying anything.

---

## Step 1 — Update package.json

Add `@evo-web/react` at latest. Remove `@ebay/ui-core-react` only if all its components are now migrated.

```diff
+ "@evo-web/react": "latest",
- "@ebay/ui-core-react": "x.x.x",   // only if fully replaced
```

---

## Step 2 — Apply global renames (all components)

**Import path:** map each `@ebay/ui-core-react` subpath to the matching `@evo-web/react` subpath, dropping the `ebay-` prefix from the subpath name:

```diff
- import { EbayButton } from "@ebay/ui-core-react/ebay-button";
+ import { EvoButton } from "@evo-web/react/button";
```

For icons:

```diff
- import { EbayIconCart16 } from "@ebay/ui-core-react/icons/ebay-icon-cart-16";
+ import { EvoIconCart16 } from "@evo-web/react/icons/cart-16";
```

**Component names:** `Ebay` prefix → `Evo` prefix (e.g. `EbayButton` → `EvoButton`, `EbayButtonCell` → `EvoButtonCell`). Types follow the same pattern (`EbayButtonProps` → `EvoButtonProps`).

**Refs:** `ref` works as a native prop in `@evo-web/react` — no change needed in usage.

---

## Step 3 — Apply per-component prop changes

If a component is not listed below, it has **not been migrated yet** — keep using `@ebay/ui-core-react` for it and tell the user.

When migrating a listed component, read the linked file completely and apply the component-specific changes in addition to the global renames from Step 2.

- `ebay-accordion`: [evo-accordion.md](components/evo-accordion.md)
- `ebay-alert-dialog`: [evo-alert-dialog.md](components/evo-alert-dialog.md)
- `ebay-badge`: [evo-badge.md](components/evo-badge.md)
- `ebay-breadcrumbs`: [evo-breadcrumbs.md](components/evo-breadcrumbs.md)
- `ebay-button`: [evo-button.md](components/evo-button.md)
- `ebay-calendar`: [evo-calendar.md](components/evo-calendar.md)
- `ebay-ccd`: [evo-ccd.md](components/evo-ccd.md)
- `ebay-character-count`: [evo-character-count.md](components/evo-character-count.md)
- `ebay-checkbox`: [evo-checkbox.md](components/evo-checkbox.md)
- `ebay-chip`: [evo-chip.md](components/evo-chip.md)
- `ebay-confirm-dialog`: [evo-confirm-dialog.md](components/evo-confirm-dialog.md)
- `ebay-cta-button`: [evo-cta-button.md](components/evo-cta-button.md)
- `ebay-details`: [evo-details.md](components/evo-details.md)
- `ebay-eek`: [evo-eek.md](components/evo-eek.md)
- `ebay-fake-menu`: [evo-fake-menu.md](components/evo-fake-menu.md)
- `ebay-fake-tabs`: [evo-fake-tabs.md](components/evo-fake-tabs.md)
- `ebay-file-input`: [evo-file-input.md](components/evo-file-input.md)
- `ebay-filter-chip`: [evo-filter-chip.md](components/evo-filter-chip.md)
- `ebay-icon-button`: [evo-icon-button.md](components/evo-icon-button.md)
- `ebay-infotip`: [evo-infotip.md](components/evo-infotip.md)
- `ebay-lightbox-dialog`: [evo-dialog.md](components/evo-dialog.md)
- `ebay-menu`: [evo-menu.md](components/evo-menu.md)
- `ebay-progress-bar-expressive`: [evo-progress-bar-expressive.md](components/evo-progress-bar-expressive.md)
- `ebay-progress-spinner`: [evo-progress-spinner.md](components/evo-progress-spinner.md)
- `ebay-radio`: [evo-radio.md](components/evo-radio.md)
- `ebay-tabs`: [evo-tabs.md](components/evo-tabs.md)
- `ebay-textbox`: [evo-input.md](components/evo-input.md) / [evo-textarea.md](components/evo-textarea.md)

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
