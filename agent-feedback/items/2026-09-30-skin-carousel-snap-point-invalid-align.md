---
type: bug
impact: med
effort: low
site: packages/skin/src/sass/carousel/carousel.scss › .carousel__snap-point
---

# Give `.carousel__snap-point` a valid `scroll-snap-align`

`.carousel__snap-point` declares `scroll-snap-align: flex-start`, which is not a
valid value (`none | start | end | center`), so browsers drop it and no item is
ever a snap point. The list still sets `scroll-snap-type: x proximity`, but with
nothing to snap to, `ebay-carousel` (Marko and legacy React, both of which emit
the class on the first item of each slide) scrolls freely and a discrete
carousel can come to rest mid-slide. Changing it to `start` enables the snapping
the markup already asks for; the old `-webkit-`/`-ms-scroll-snap-coordinate`
lines beside it can go too. It changes scrolling behaviour for every legacy
consumer, so it wants its own review. Checked in skin and ebayui-core;
ebayui-core-react emits the same class.

Check: in the `navigation-disclosure-ebay-carousel--discrete` story,
`getComputedStyle(document.querySelector(".carousel__snap-point")).scrollSnapAlign`
is `"none"`.
