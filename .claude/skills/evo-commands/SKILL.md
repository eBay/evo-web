---
name: evo-commands
description: Quick reference for npm scripts and testing patterns in the evo-web monorepo.
---

# Evo-Web Development Commands

Quick reference for npm scripts and testing patterns in the evo-web monorepo.

## Root-Level Commands

```bash
# Install dependencies (includes Playwright with chromium)
npm install

# Build all packages in correct order + run tests
npm run build

# Build site for publishing to _site directory
npm run deploy

# Lint CSS/SCSS
npm run lint

# Test (only for individual packages, NOT for validating build)
npm test

# Start local development site (Marko-Run docs)
npm start

# ⚠️ NEVER RUN THESE - GitHub Actions only:
# npm run change     # Triggers changeset prompts - agents can't interact
# npm run version    # GitHub Actions only - updates versions
# npm run release    # GitHub Actions only - publishes to npm
```

## Package-Specific Commands

```bash
# Build specific package (useful for single-package development)
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
npm run storybook -w packages/skin
npm run storybook -w packages/ebayui-core
npm run storybook -w packages/ebayui-core-react
```

## Test File Locations & Patterns

**Marko component test structure:**
- `test/test.browser.js` - Browser tests with Playwright (Vitest)
- `test/test.server.js` - Server-side rendering tests (Vitest)

**React component test structure:**
- `__tests__/index.spec.tsx` - Vitest with @testing-library/react (jsdom)

### Run Individual Test Files

```bash
# Marko browser test
npx vitest run packages/ebayui-core/src/components/ebay-button/test/test.browser.js

# React test
npx vitest run packages/ebayui-core-react/src/ebay-button/__tests__/index.spec.tsx
```
