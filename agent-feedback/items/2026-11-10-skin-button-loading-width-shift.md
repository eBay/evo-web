---
type: cleanup
impact: low
effort: med
site: packages/skin/src/sass/button/button.scss › .btn__cell
---

# Keep a button's width while it shows the loading spinner

The busy state replaces the button's content with a spinner, so the button resizes as it starts and stops loading and the layout around it shifts. Direction: in Skin, keep the content in place but invisible and overlay the spinner, so `evo-button` (evo-marko) and `EvoButton` (evo-react) only toggle a modifier; checked Skin's busy-state docs and evo-marko's markup.

Check: render `<evo-button>Add to cart</evo-button>` in Storybook (`buttons/evo-button`), set `a11yLoadingText`, and compare the button's width before and after.
