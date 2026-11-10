---
type: a11y
impact: med
effort: med
site: packages/evo-marko/src/tags/evo-button/index.marko › <if=a11yLoadingText>
---

# Announce evo-button's loading state and block repeat clicks

Setting `a11yLoadingText` swaps the button's `aria-label` and content for a spinner, but a label change on a focused button usually isn't announced, and the button still fires clicks while loading, so double submits are possible. ebay-button's removed `reset` state hinted at an aria-live approach that was never implemented. Direction: decide on an announcement pattern (a live region, or `aria-disabled` plus a status message) and whether loading should suppress clicks.

Check: with VoiceOver on, focus `<evo-button>` in Storybook (`buttons/evo-button`), set `a11yLoadingText`, and listen for an announcement; then click it while loading and check whether `onClick` fires.
