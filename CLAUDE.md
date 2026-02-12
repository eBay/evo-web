# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Evo-web is eBay's design system monorepo containing:

- **@ebay/skin** - Pure CSS/SCSS framework (foundation layer)
- **@ebay/ebayui-core** - Marko 5 components (legacy, 92 components)
- **@evo-web/marko** - Marko 6 components (new, 43 components migrated)
- **@ebay/ebayui-core-react** (`packages/ebayui-core-react`) - React components with CommonJS (legacy, 86+ components)
- **@evo-web/react** - React 19 ESM components (new, pre-release)

**Layered Architecture:**

```
HTML Semantic Structure (Bones)
    ↓
@ebay/skin (CSS styling with BEM)
    ↓
Marko/React Components (Framework wrappers)
    ↓
MakeupJS (Interactive behaviors)
```

All components wrap Skin CSS modules. CSS is the single source of truth for styling.

## Common Commands

### Root-level commands

```bash
# Install dependencies (also installs Playwright with chromium)
npm install

# Build all packages in correct order
npm run build

# Lint CSS/SCSS
npm run lint

# Run all package tests
npm test

# Start local development site (Marko-Run docs site)
npm start

# Create a changeset for versioning
npm run change

# Version packages and update changelogs
npm run version

# Release packages to npm
npm run release
```

### Working with specific packages

```bash
# Build specific package
npm run build -w packages/skin
npm run build -w packages/ebayui-core
npm run build -w packages/evo-marko
npm run build -w packages/ebayui-core-react
npm run build -w packages/evo-react

# Test specific package
npm test -w packages/ebayui-core

# Update visual snapshots (Marko packages)
npm run update-snapshots -w packages/ebayui-core

# Start Storybook (per package)
cd packages/skin && npm run storybook
cd packages/ebayui-core && npm run storybook
cd packages/ebayui-core-react && npm run storybook
```

### Testing Patterns

**Marko components** have dual test suites:

- `test/test.browser.js` - Browser tests with Playwright (Vitest)
- `test/test.server.js` - Server-side rendering tests (Vitest)

**React components** use jsdom:

- `__tests__/index.spec.tsx` - Vitest with @testing-library/react

Run individual test files:

```bash
# Marko browser test
npx vitest run packages/ebayui-core/src/components/ebay-button/test/test.browser.js

# React test
npx vitest run packages/ebayui-core-react/src/ebay-button/__tests__/index.spec.tsx
```

## Architecture and Patterns

### Component Development Flow

**Always start with CSS first:**

1. Create/modify Skin module in `packages/skin/src/`
2. Build component wrapper (Marko or React) that imports the Skin CSS
3. Add MakeupJS behaviors if interactive (keyboard nav, ARIA management)
4. Components support pass-through HTML attributes to root/control elements

### Marko Component Structure

**ebayui-core (Marko 5):**

```
src/components/ebay-button/
├── index.marko              # Template with TypeScript interfaces
├── component.ts             # Lifecycle and behavior (optional)
├── marko-tag.json          # Attribute validation
├── style.ts                # Imports Skin CSS
├── browser.json            # Build remapping
├── *.stories.ts            # Storybook docs
└── test/
    ├── test.browser.js
    └── test.server.js
```

**Event naming:** kebab-case (`on-click`, `on-expand`)

**Marko 5 vs 6 syntax:**

```marko
// Marko 5 (ebayui-core)
<button onClick("handleClick")>
  <${renderBody}/>
</button>
// Marko 6 (evo-marko)
<button onClick((e) => input.onClick?.(e))>
  <${content}/>
</button>
```

### React Component Structure

**ebayui-core-react / evo-react:**

```
src/ebay-button/
├── button.tsx              # Main component
├── button-cell.tsx         # Sub-components
├── index.ts                # Exports with types
├── types.ts                # TypeScript types
└── __tests__/
    ├── index.spec.tsx
    └── index.stories.tsx
```

**Key differences:**

- `ebayui-core-react`: Uses forwardRef, CommonJS build, external MakeupJS
- `evo-react`: React 19 native (no forwardRef), ESM-only, bundled MakeupJS

React components assume `@ebay/skin` is loaded globally (no CSS imports).

### CSS/SCSS Guidelines (Skin)

**BEM Methodology:**

- Block: `.btn`
- Element: `.btn__cell`
- Modifier: `.btn--primary`

**Key rules from STYLEGUIDE.md:**

- Use ARIA attributes as styling hooks when possible (safeguards accessibility)
- Never chain BEM modifiers (e.g., `.btn--large.btn--primary`)
- Use semantic names (`.btn--secondary` not `.btn--green`)
- Avoid over-nesting SCSS (restrict to pseudo-selectors)
- Use `<svg>` for icons, never `<i>`
- Don't wrap inputs with labels; use explicit `for`/`id` attributes
- Every `<img>` must have `alt` attribute (can be empty string)

**PostCSS pipeline:** Sass → PostCSS → Autoprefixer → cssnano → `dist/`

### Accessibility Requirements

All components must meet **WCAG 2.2 AA** standards:

- Follow eBay MIND Patterns (https://ebay.gitbooks.io/mindpatterns/content/)
- Always prefer native HTML over custom controls
- If ARIA needed, follow "Five Rules of ARIA" (use minimally/correctly)
- Ensure keyboard operability for all interactive elements
- Maintain focus states and sufficient color contrast
- Test in both light and dark modes
- Support RTL (right-to-left) layouts

### Testing Requirements

**Required for all components:**

- Adequate test coverage for new/modified code
- Browser tests (Marko) or jsdom tests (React)
- Visual regression testing via Percy (for CSS changes)

**Storybook requirements:**

- All components must include RTL and Text Spacing stories (unless excluded)
- Stories should demonstrate key variants and states

### Versioning and Releases

**Changesets workflow:**

1. Make changes to packages
2. Run `npm run change` to create a changeset
3. Commit the changeset file (`.changeset/*.md`)
4. On merge to main, changesets bot creates version PR
5. Merge version PR to trigger `npm run release`

**Packages version independently** (no monorepo version linking).

### Site/Documentation Architecture

Root site (`/src/routes/`) uses **Marko-Run** (file-based routing):

- `/src/routes/_index/components/` - Component documentation
- `/src/routes/_index/accessibility/` - A11y guides
- `/src/routes/guide-examples/` - Live examples
- `/src/data/component-metadata.json` - Central component registry

Site embeds package Storybooks and deploys to `_site/` with nested builds.

### Migration Paths

**Marko 5 → 6:**

- From: `@ebay/ebayui-core`
- To: `@evo-web/marko`
- Status: 43/92 components migrated

**React CJS → ESM:**

- From: `@ebay/ui-core-react`
- To: `@evo-web/react`
- Status: Pre-release

Legacy packages maintained for backwards compatibility.

## PR Checklist Highlights

**All PRs:**

- Build must be green
- Changes within scope of linked issue
- Reference issue with "Fixes #[number]"
- Include changeset (unless docs-only)

**Markup changes:**

- BEM naming conventions
- Semantic HTML5 elements
- WCAG 2.2 AA compliance

**CSS/SCSS changes:**

- Regenerate `dist/` folder
- Test in all supported browsers
- Percy visual regression approved
- Verify dark mode and RTL support
- Check responsive breakpoints (320px, 512px, 768px, 1024px, 1280px, 1440px, 1680px, 1920px)

**Breaking changes:**

- Only allowed in major version releases
- Must be clearly documented in changeset

## Browser Support

Defined by `@ebay/browserslist-config` (no IE10 or below).
