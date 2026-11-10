---
type: bug
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-button/index.marko › <Root>
---

# Block activation while evo-button is loading

While `a11yLoadingText` is set, `evo-button` still fires `onClick` (and an `href` button still navigates), so a second click can submit twice and every caller has to guard against it. Direction: while loading, set `aria-disabled="true"` and ignore clicks (`preventDefault` for anchors), rather than setting native `disabled`, which drops focus as the label changes. ebay-button (it only checks `disabled`) and evo-react's `EvoButton` behave the same today; checked all three.

Check: render `<evo-button a11yLoadingText="Loading" onClick() { console.log("click") }>` in Storybook (`buttons/evo-button`), click it, and confirm it logs.
