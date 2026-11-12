---
type: dx
impact: low
effort: low
site: packages/evo-react/vite.config.js › defineConfig › test.projects (browser)
---

# Pre-declare the browser tests' dependencies in evo-react's `optimizeDeps.include`

The evo-react config has no `optimizeDeps.include`, so a run against a cold Vite cache discovers `classnames` and `vitest-browser-react` mid-run. Vite reloads and the first run fails with `Failed to import test file …/test.setup.ts`; the second run passes, which reads as a flaky suite. A full-suite run logged the same reload when it reached `@floating-ui/react`. Vitest's own message names the fix: list the discovered dependencies under `optimizeDeps.include`, as `packages/ebayui-core/vite.config.mjs` already does for its browser tests. Checked in `evo-react` only; `evo-marko` also defines a browser project without `optimizeDeps` and was not checked.

Check: In `packages/evo-react`, move `node_modules/.vite` aside, then run `npx vitest run --browser.headless src/select/test/test.browser.tsx` twice. The first run logs `optimized dependencies changed. reloading` and fails; the second passes.
