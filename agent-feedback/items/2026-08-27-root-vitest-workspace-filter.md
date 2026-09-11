---
type: dx
impact: low
effort: low
site: packages/evo-react/vite.config.js › test.projects
---

# Make the focused Vitest command work from the repository root

The package browser and server projects are defined only in `packages/evo-react/vite.config.js`, so running Vitest from the repository root with a workspace-relative file path finds no tests. The same command works when launched from `packages/evo-react`, which is easy to miss in the root-level verification instructions. Add root config forwarding or document the required package working directory.

Check: From the repository root, run `npx vitest run packages/evo-react/src/date-input/test/test.browser.tsx packages/evo-react/src/date-range-input/test/test.browser.tsx`; it exits with `No test files found`. Run the same paths from `packages/evo-react` and both browser files execute.
