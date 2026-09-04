---
type: dx
impact: med
effort: low
site: packages/evo-marko/eslint.config.mjs › globalIgnores
---

# Ignore local Storybook `_site` in ESLint

`packages/evo-marko` gitignores `_site`, but `eslint.config.mjs` `globalIgnores` does not list it. After `npm run build:storybook` in that package, `eslint .` (via `npm run lint` / the husky pre-push `npm run build`) lints generated `sb-manager` files and fails on missing plugin rules. The same `_site` output exists for other Storybook packages. Add `_site` to ESLint ignores next to `dist` and `node_modules`.

Check: from `packages/evo-marko`, run `npm run build:storybook`, then `npx eslint packages/evo-marko/_site/sb-manager/runtime.js` from the package directory (or `npm run lint -w @evo-web/marko`). Lint reports missing-rule errors on the generated file. After adding `_site` to `globalIgnores`, the same command ignores it.
