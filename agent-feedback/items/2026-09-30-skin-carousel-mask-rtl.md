---
type: a11y
impact: med
effort: low
site: packages/skin/src/sass/carousel/carousel.scss › .carousel__viewport--mask
---

# Fade the trailing edge of a right-to-left carousel

`.carousel__viewport--mask` is a `linear-gradient(to right, …)` in every
direction, so in RTL it fades the leading (right) edge, over the first items,
and leaves the side with more to scroll to hard-edged. It needs a `[dir="rtl"]`
counterpart with `to left`, matching how the file already flips the paddles.
Reaches ebayui-core, which applies the mask to continuous carousels by default,
and ebayui-core-react; evo-carousel does not use the mask. Checked skin and
ebayui-core.

Check: set `dir="rtl"` on `#storybook-root` in
`navigation-disclosure-ebay-carousel--continuous`; the viewport's computed
`mask-image` is still `linear-gradient(to right, …)`.
