---
"@ebay/skin": minor
"@evo-web/marko": minor
---

Add `evo-carousel`, a carousel built on native scrolling and CSS scroll snapping. It covers the continuous, discrete (`itemsPerSlide`) and autoplaying variants of `ebay-carousel` with the same Skin styles, leaving the motion, snapping and reduced-motion handling to the browser and CSS. Items not wholly in view are `inert`.

Skin's `carousel` module gains additive classes for it: `carousel__list--snap` (every item is a mandatory snap point, spaced by `--carousel-gap`, with no smooth scrolling under reduced motion) and `carousel__list--slides` (sized by `--carousel-items-in-view`). Carousel paddle chevrons now point the right way in right-to-left layouts.
