---
type: a11y
impact: med
effort: med
site: packages/evo-react/src/tooltip/tooltip-host.tsx › EvoTooltipHost
---

# Reconsider `aria-expanded` on non-button tooltip hosts

`EvoTooltipHost` always sets `aria-expanded` on the component passed to `as`. With `as={EvoInput}` that attribute lands on the inner `<input>`, because `EvoInput` forwards unknown props to the control while keeping `className` on the `.textbox` wrapper. A plain textbox announcing collapsed/expanded implies a combobox that does not exist, and ARIA 1.2 moved `aria-expanded` off `textbox` to `combobox`. The split also means `.tooltip__host` and the ARIA state end up on different elements for input hosts, which is easy to misread when writing tests. Decide whether a tooltip host needs `aria-expanded` at all, given the tooltip is described through `aria-describedby`, and scope the attribute to hosts where it is valid. Checked in `evo-react` only; `evo-marko`'s `<evo-tooltip>` puts `aria-expanded` on the `<@host>` tag it renders, so confirm that case separately.

Check: `npx vitest run --browser.headless src/tooltip/test/test.browser.tsx` from `packages/evo-react` and read the "opens when a nested input host receives focus" test. Asserting `aria-expanded` on `.tooltip__host` fails, while asserting it on the element returned by `getByPlaceholder("Email address")` passes.
