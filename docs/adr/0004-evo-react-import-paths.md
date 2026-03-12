# 4. Evo React Import Paths

**Date:** 2026-03-12

## Status

Accepted

## Context

The `@ebay/ebayui-core-react` package uses individual subpath exports for every component, requiring imports like:

```tsx
import { EbayButton } from "@ebay/ebayui-core-react/ebay-button";
import { EbayIconCart16 } from "@ebay/ebayui-core-react/icons/ebay-icon-cart-16";
```

This approach optimizes tree-shaking at the cost of more verbose imports and increased cognitive overhead.

For `@evo-web/react`, we need to decide on an import strategy that balances bundle size optimization, developer experience, and build performance. The core issue with importing all 1,036+ icons from a single entry point is that bundlers must parse and tree-shake them on every build, significantly impacting build performance and risking bundle bloat if tree-shaking fails.

## Decision

Use a **hybrid import strategy** for `@evo-web/react`:

### Components (Unified Entry Point)

All non-icon components export from the main package entry:

```tsx
import { EvoButton, EvoTextbox, EvoIconProvider } from "@evo-web/react";
```

**Rationale:** Small number of components (~20-30 total expected), minimal tree-shaking overhead, simpler imports, better developer experience.

### Icons (Individual Subpath Exports)

Each icon has its own subpath export:

```tsx
import { EvoIconCart16 } from "@evo-web/react/evo-icon-cart-16";
import { EvoIconChevronDown24 } from "@evo-web/react/evo-icon-chevron-down-24";
```

**Rationale:**

- **Bundle size**: Bundlers resolve exact files without parsing 1,000+ unused icons
- **Build performance**: Skip tree-shaking analysis for unused icons entirely
- **No bloat risk**: Direct imports prevent accidental bundling of unused icons
- **Type safety**: TypeScript resolves icon types without loading all 1,036 definitions

## Consequences

### Positive

- Faster builds: Bundlers only process icons actually imported
- Smaller bundles: Zero risk of accidentally including unused icons
- Better DX for components: Single import for most use cases
- Type performance: IDEs don't auto-complete 1,036 icon names from main export
- Explicit icon usage: Clear dependency on which icons are used

### Negative

- Verbose icon imports: Each icon requires its own import statement
- Mixed patterns: Developers must remember two import styles
- Autocomplete fragmentation: Icons don't appear in main package autocomplete
