# 6. Evo React Subpath Imports

**Date:** 2026-04-24

## Status

Accepted — Supersedes [ADR 0004](./0004-evo-react-import-paths.md)

## Context

ADR 0004 established a hybrid import strategy for `@evo-web/react`: components exported from a single barrel entry (`@evo-web/react`) and icons from individual subpath exports (`@evo-web/react/evo-icon-cart-16`). The rationale was that the small number of components (~20–30) made tree-shaking overhead "negligible."

However, two issues emerged:

1. **Bundle risk at scale**: Even with a small component count today, any bundler that fails to tree-shake (e.g., due to side effects, misconfiguration, or CommonJS interop in a consumer's toolchain) would bundle all components unconditionally. Subpath imports eliminate this risk entirely.
2. **Inconsistent patterns**: Two import styles (barrel for components, subpath for icons) created cognitive overhead and an asymmetric API. Developers had to remember which style applied to which export.

Since `@evo-web/react` is still experimental with no external consumers, the migration cost is minimal.

## Decision

All exports from `@evo-web/react` use **component-level subpath imports**. The barrel entry (`.`) is removed.

### Components

```tsx
import { EvoButton } from "@evo-web/react/button";
import { EvoIconProvider } from "@evo-web/react/icon";
```

### Icons

```tsx
import { EvoIconCart16 } from "@evo-web/react/icons/cart-16";
import { EvoIconChevronDown24 } from "@evo-web/react/icons/chevron-down-24";
```

### Package exports (wildcard)

```json
{
  "./icons/*": {
    "types": "./dist/icon/icons/*.d.ts",
    "default": "./dist/icon/icons/*.js"
  },
  "./*": {
    "types": "./dist/*/index.d.ts",
    "default": "./dist/*/index.js"
  }
}
```

Node.js resolves `./icons/*` first (longer static prefix), so icons and components coexist without conflict. No enumeration is required — new components and icons are picked up automatically.

### Source directory naming

Component directories drop the `evo-` prefix to avoid redundancy with the package name (`@evo-web/react`):

- `src/evo-button/` → `src/button/`
- `src/evo-icon/` → `src/icon/`
- Icon files: `src/icon/icons/cart-16.tsx` (was `evo-icon-cart-16.tsx`)

### Build entry discovery

`vite.config.js` dynamically scans `src/` for directories containing an `index.ts` file (component entries) and `src/icon/icons/` for `.tsx` files (icon entries). New components require no build config changes.

## Consequences

### Positive

- **Guaranteed tree-shaking**: Bundlers resolve only the exact files imported, regardless of toolchain configuration
- **Consistent API**: One import style for all exports
- **No barrel maintenance**: Wildcard exports + dynamic build discovery mean zero manual updates when adding components
- **Cleaner subpaths**: `@evo-web/react/button` and `@evo-web/react/icons/cart-16` carry no redundant prefix

### Negative

- **Slightly more verbose imports**: Each component requires its own import path (mitigated by IDE autocomplete)
- **Breaking change**: Removes the barrel entry — existing consumers must update imports (acceptable while the package is experimental)
