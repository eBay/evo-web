# CLAUDE.md

AI configuration for eBay's evo-web components monorepo.

---

<agent_constraints>

- Never auto-commit or push without explicit user request
- Always run `npm run build` before marking component work complete
- Prefer reading existing patterns over introducing new ones
  </agent_constraints>

## <architecture_rules>

### Layered Architecture (Non-Negotiable)

```
HTML Semantic Structure → @ebay/skin (CSS/BEM) → Framework Components → Interactive Behaviors
```

**CSS is the single source of truth.** All components wrap Skin CSS modules.

### Package Structure

- `@ebay/skin` - Pure CSS/SCSS (foundation layer)
- `@ebay/ebayui-core` - Marko 5 (legacy)
- `@evo-web/marko` - Marko 6 (new, under migration)
- `@ebay/ebayui-core-react` - React CJS (legacy)
- `@evo-web/react` - React 19 ESM (new, under migration)

### Component Development Flow (MANDATORY)

1. Create/modify Skin component in `packages/skin/src/` (HTML + SCSS)
2. Write semantic HTML following BEM + a11y guidelines
3. Build framework wrapper (Marko/React) importing Skin CSS
4. Add JS interaction layer (keyboard nav, ARIA) if needed
5. Support pass-through HTML attributes to root/control elements

</architecture_rules>

---

## <accessibility_guardrails>

**All components MUST meet WCAG 2.2 AA standards:**

- Follow eBay accessibility standards and patterns
- Prefer native HTML over custom controls
- If ARIA needed: follow "Five Rules of ARIA" (minimal/correct usage)
- Ensure keyboard operability, focus states, sufficient contrast
- Test in light/dark modes
- Test zoom up to 400% and with assistive technologies (screen readers, keyboard-only)
- Support RTL (right-to-left) layouts

</accessibility_guardrails>

---

## <css_methodology>

**BEM Strict Enforcement:**

- Block: `.btn` or `.chips-combobox` (for multi-word)
- Element: `.btn__cell`
- Modifier: `.btn--primary`

**Build Pipeline:** Sass → PostCSS → Autoprefixer → cssnano → `dist/`

**Style Conventions:** See `./packages/skin/STYLEGUIDE.md`

</css_methodology>

---

## <correctness_guards>

**Version-Specific Syntax (Prevent Hallucination):**

**Marko 6 Syntax:**

- ✅ Use: `<let/x=0>` or `<const/y=x*2>`
- ❌ Never: `$ let x = 0;` (Marko 5 deprecated)
- ✅ Events: `onClick() { /* code */ }` or `onClick=handler`
- ❌ Never: `onClick("handleClick")` (Marko 5 deprecated)

**React Package Differences:**

- `ebayui-core-react`: Requires `React.forwardRef` wrapper
- `evo-react`: Use native `ref` (React 19, no forwardRef needed)

**BEM Syntax:**

- Block: `.btn` or `.chips-combobox` (for multi-word)
- Element: `.btn__cell` (double underscore, NOT single)
- Modifier: `.btn--primary` (double dash, NOT single)
- ❌ Modifiers or Children Never: `.btn-primary` or `.btn_cell`

</correctness_guards>

---

## Component Patterns

Follow existing component structures:

- **Skin components:** Follow `packages/skin/src/components/ebay-button/` structure
- **Marko components:** Follow `packages/ebayui-core/src/components/ebay-button/` structure
- **React components:** Follow `packages/ebayui-core-react/src/ebay-button/` structure

### Component Storybooks

### Skin Components

**Non-obvious conventions:**

- BEM naming strictly enforced
- SCSS modules imported in component files
- Tests in `test/` directory: `test.browser.js` (Playwright) and `test.server.js` (SSR)

### Marko Components

**Non-obvious conventions:**

- Event naming: kebab-case (`on-click`, `on-expand`)
- Tests in `test/` directory: `test.browser.js` (Playwright) and `test.server.js` (SSR)
- `browser.json` for build remapping (client-only code)

**Marko 5→6 Syntax (CRITICAL - prevents hallucination):**

- Tag variables: Use `<let/x=0>` or `<const/y=x*2>` (NOT `$ let x = 0;`)
- Style tags: Use `<style>` with standard CSS (NOT `style { ... }` blocks)
- Events: Use `onClick() { /* code */ }` or `onClick=handler` (NOT `onClick("handleClick")`)
- `<script>` tags: Similar to React effects, use sparingly (NOT for state/functions)

### React Components

**Non-obvious conventions:**

- Tests in `__tests__/` directory (not `test/`)
- Stories colocated with tests (`*.stories.tsx` in `__tests__/`)
- Multi-file components split into `-cell.tsx`, `-text.tsx`, etc.

**CRITICAL package differences:**

- `@ebay/ebayui-core-react`:
  - Requires `React.forwardRef` wrapper for ref forwarding
  - CommonJS build target
  - External MakeupJS dependency
  - Assumes global `@ebay/skin` SCSS/CSS

- `@evo-web/react`:
  - Use native `ref` prop (React 19, no forwardRef needed)
  - ESM-only build target
  - Bundled MakeupJS utilities
  - Imports Skin CSS directly in component files

---

## Testing Requirements

**Mandatory for all components:**

- Adequate test coverage for new/modified code
- Browser tests (Marko via Playwright) or jsdom tests (React)
- Visual regression via Percy (CSS changes)

**Storybook requirements:**

- Skin storybook is required to include all the visual permutations of the component
- Skin storybook is required to include RTL + Text Spacing stories (unless excluded)
- Marko/React storybooks should have the high-level permutations only since they include interactive options that allow users to see the component in different states without needing separate stories for each permutation.

---

## PR Checklist

**All PRs:**

- ✅ Build must be green
- ✅ Changes within scope of linked issue
- ✅ Reference issue: `Fixes #[number]`
- ✅ Include changeset (unless docs-only, in `/src/routes/`)

**CSS/SCSS changes:**

- Regenerate `dist/` folder via `npm run build`
- Test in all supported browsers
- Percy visual regression approved
- Verify dark mode + RTL support
- Check responsive breakpoints: 320px, 512px, 768px, 1024px, 1280px, 1440px, 1680px, 1920px

**Breaking changes:**

- Only in major version releases
- Must be documented in changeset

---

## Common Development Commands

**Root-level (frequently used):**

```bash
npm run build    # Build all packages + run tests
npm test         # Test (for individual packages only)
npm start        # Start local dev site (Marko-Run)
npm run lint     # Lint CSS/SCSS
```

**Testing patterns:**

- Marko: `test/test.browser.js` (Playwright) + `test/test.server.js` (SSR)
- React: `__tests__/index.spec.tsx` (Vitest + @testing-library/react)

**Run specific test:**

```bash
npx vitest run packages/ebayui-core/src/components/ebay-button/test/test.browser.js
```

---

## Repository Metadata

**Site Architecture:**

- Root site: Marko-Run (file-based routing at `/src/routes/`)
- `/src/routes/_index/components/` - Component docs
- `/src/routes/_index/accessibility/` - A11y guides
- `/src/data/component-metadata.json` - Component registry
- Deploys to `_site/` with nested Storybook builds
- New components need documentation in `/src/routes/_index/components/` with Overview, Accessibility, CSS tabs.
- New components also need tab links to Marko and React components storybooks as well as the Design System Playbook page for the component.

**Versioning:**

- Changesets workflow (packages version independently) - see `/evo-release-workflow` skill
- No monorepo version linking

**Browser Support:**

- Defined by `@ebay/browserslist-config` (no IE10 or below)

---

## Skills

For specialized workflows:

- `/evo-release-workflow` - Changesets versioning and release procedure (invoke when creating releases)

For comprehensive command reference (less frequently used commands):

- `/evo-commands` - Full npm scripts reference, package-specific builds, Storybook setup
