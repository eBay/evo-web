---
type: dx
impact: low
effort: med
site: packages/evo-marko/src/tags/evo-menu-button/test/test.browser.ts › then clicking the button expands it and moves focus to the first item
---

# Deflake the menu-button focus-on-open browser test

The test intermittently finds `document.activeElement` still on the trigger button instead of the first menu item: focus-on-open waits for `expander.positioned` (floating-ui positioning is async), so the assertion races it. Observed one failure followed by three consecutive clean runs of the same code. Wrap the focus assertion in `vi.waitFor` (or await a positioned signal) instead of asserting immediately after the click.

Check: run `npx vitest run evo-menu-button --browser.headless` in `packages/evo-marko` repeatedly (alongside other suites increases the failure rate).
