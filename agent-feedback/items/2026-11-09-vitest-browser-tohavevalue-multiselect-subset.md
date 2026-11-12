---
type: dx
impact: med
effort: low
site: packages/evo-react/eslint.config.js › vitest.configs.recommended.rules
---

# Ban `toHaveValue([...])` on multi-selects in browser tests

`expect.element(select).toHaveValue(["a", "b"])` on a `<select multiple>` passes whenever the received selection is a subset of the expected values, including an empty selection. The array tester behind `toHaveValue` in `@vitest/browser` only checks that every received value is in the expected set, so a test that asserts a multi-select was kept, restored or reset cannot fail. Assert `Array.from(select.selectedOptions, (option) => option.value)` with `toEqual` (or `expect.poll(...).toEqual`) instead. A `no-restricted-syntax` selector for `toHaveValue` calls with an array-literal argument would stop the next author. No test in `packages/` uses the pattern today, so this is preventive; only evo-react's lint config was inspected.

Check: in `packages/evo-react`, run a browser test that sets `document.body.innerHTML = '<select multiple><option value="a">a</option><option value="b">b</option></select>'` and awaits `expect.element(document.querySelector("select")).toHaveValue(["a", "b"])`. It passes with no option selected (`npx vitest run --browser.headless <file>`).
