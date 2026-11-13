---
type: a11y
impact: med
effort: med
site: packages/evo-marko/src/tags/evo-button/index.marko › <Root>
---

# Mark evo-button unavailable to assistive tech while loading

While `a11yLoadingText` is set, `evo-button` ignores clicks but does not set `aria-disabled`, so screen readers announce a button that does nothing when pressed. Setting `aria-disabled="true"` makes Skin draw the button as disabled (primary turns grey); only tertiary is exempt, through a `[aria-live="polite"][aria-disabled="true"]` selector. Direction: add a busy state to Skin's button module that keeps the normal look, then set `aria-disabled` while loading. evo-react's `EvoButton` and ebay-button set neither; checked all three.

Check: render `<evo-button appearance="primary" a11yLoadingText="Loading" partiallyDisabled>` in Storybook (`buttons/evo-button`) and see it turn grey; without `aria-disabled`, inspect it in the accessibility tree and see no disabled state.
