---
name: evo-commands
description: Quick reference for pnpm scripts and testing patterns in the evo-web monorepo.
---

# Evo-Web Development Commands

Quick reference for pnpm scripts and testing patterns in the evo-web monorepo.

## Root-Level Commands

```bash
# Install dependencies (includes Playwright with Chromium)
pnpm install

# Build all packages in dependency order + run tests
pnpm build

# Build site for publishing to _site directory
pnpm deploy

# Lint CSS/SCSS
pnpm lint

# Test (only for individual packages, NOT for validating build)
pnpm test

# Start local development site (Marko-Run docs)
pnpm start

# ⚠️ NEVER RUN THESE - GitHub Actions only:
# pnpm change     # Triggers changeset prompts - agents can't interact
# pnpm run version    # GitHub Actions only - updates versions
# pnpm release    # GitHub Actions only - publishes to npm
```

## Package-Specific Commands

```bash
# Build a specific package (useful for single-package development)
pnpm --filter @ebay/skin build
pnpm --filter @ebay/ebayui-core build
pnpm --filter @evo-web/marko build
pnpm --filter @ebay/ui-core-react build
pnpm --filter @evo-web/react build

# Test a specific package
pnpm --filter @ebay/ebayui-core test

# Update visual snapshots (Marko packages)
pnpm --filter @ebay/ebayui-core update-snapshots

# Start Storybook (per package)
pnpm --filter @ebay/skin storybook
pnpm --filter @ebay/ebayui-core storybook
pnpm --filter @ebay/ui-core-react storybook
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
pnpm exec vitest run packages/ebayui-core/src/components/ebay-button/test/test.browser.js

# React test
pnpm exec vitest run packages/ebayui-core-react/src/ebay-button/__tests__/index.spec.tsx
```
