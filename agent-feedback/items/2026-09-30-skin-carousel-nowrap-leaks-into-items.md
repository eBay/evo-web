---
type: bug
impact: low
effort: low
site: packages/skin/src/sass/carousel/carousel.scss › .carousel__container
---

# Keep `.carousel__container`'s `white-space: nowrap` out of ebay-carousel items

`.carousel__container` sets `white-space: nowrap`, which only mattered for the
transform fallback's `inline-block` items; the list is a flex container now. It
inherits into every `ebay-carousel` item, so text inside an item never wraps
unless the consumer resets it. evo-carousel already resets it on
`.carousel__list--snap > li`. Doing the same for the legacy markup
(`.carousel__list > li`) changes wrapping for ebay-carousel consumers who may
rely on nowrap, so it wants a check of those consumers or a major. Reaches
ebayui-core and ebayui-core-react; checked ebayui-core.

Check: in `navigation-disclosure-ebay-carousel--discrete`,
`getComputedStyle(document.querySelector(".carousel__list li")).whiteSpace` is
`"nowrap"`.
