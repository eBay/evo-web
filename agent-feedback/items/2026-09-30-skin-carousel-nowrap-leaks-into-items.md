---
type: bug
impact: low
effort: low
site: packages/skin/src/sass/carousel/carousel.scss › .carousel__container
---

# Keep `.carousel__container`'s `white-space: nowrap` out of item content

`.carousel__container` sets `white-space: nowrap`, which only mattered for the
transform fallback's `inline-block` items; the list is a flex container now. It
inherits into every item, so text inside a carousel item never wraps unless the
consumer resets it. Moving the declaration onto the element that needs it, or
resetting it with `.carousel__list > li { white-space: normal }`, fixes it, but
changes wrapping for existing consumers that have come to rely on it. Reaches
every package that wraps the Skin carousel; checked skin and ebayui-core.

Check: in `navigation-disclosure-ebay-carousel--discrete`,
`getComputedStyle(document.querySelector(".carousel__list li")).whiteSpace` is
`"nowrap"`.
