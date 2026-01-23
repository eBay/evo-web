# @evo-web/react

Collection of core eBay components; considered to be the building blocks for all composite structures, pages & apps.

## Status: Pre-release

This package is currently in active development. Component migration from `@ebay/ui-core-react` is in progress.

## Requirements

- Node.js v20.12.2+
- React 19+
- eBay Skin 19+
- **ESM-compatible build setup** (Vite, Webpack 5+, Rollup, etc.)

## Installation

```bash
npm install @evo-web/react @ebay/skin react react-dom
```

## ESM-Only Notice

This package is distributed as **ESM-only**. Your project must support ECMAScript modules:

If you need CommonJS support, continue using `@ebay/ui-core-react`.

## CSS Import

You must import the required eBay Skin CSS in your application:

```typescript
import "@ebay/skin/marketsans.css";
import "@ebay/skin/tokens.css";
import "@ebay/skin/global.css";
```

## Usage

```tsx
import { EvoButton } from "@evo-web/react";
```

## Component Naming

All components use the `Evo*` prefix (e.g., `EvoButton`, `EvoAccordion`).

## Key Differences from @ebay/ui-core-react

| Feature          | @ebay/ui-core-react    | @evo-web/react    |
| ---------------- | ---------------------- | ----------------- |
| Output Format    | CommonJS               | ESM               |
| Tree-shaking     | component path imports | Optimal           |
| Component Naming | `Ebay*`                | `Evo*`            |
| React Version    | 16.8+, 18+, 19+        | 19+               |
| Ref Handling     | `forwardRef`           | Native (React 19) |
| TypeScript       | Partial strict mode    | Full strict mode  |
| Makeup.js        | External               | Bundled           |

## Migration Guide

Documentation will be provided when components are available. Migration will involve:

- Component renames: `EbayButton` → `EvoButton`
- Removing `forwardRef` wrappers (React 19 native ref support)
- Icon provider rename: `EbayIconProvider` → `EvoIconProvider`
- Flag icons: Use Skin class-based sprites instead of SVG components
- Import paths: Single entry point with optimal tree-shaking

## Development

See [Contributing Guide](../../CONTRIBUTING.md) for development setup.

## License

MIT
