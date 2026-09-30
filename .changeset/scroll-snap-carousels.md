---
"@ebay/skin": minor
"@evo-web/marko": minor
---

Add `evo-carousel`, a carousel built on native scrolling and CSS scroll snapping. It covers the continuous, discrete (`itemsPerSlide`) and autoplaying variants of `ebay-carousel` with the same Skin styles, and moves by native smooth scrolling rather than transforms or scripted animation. Items not wholly in view are `inert`, and autoplay loops round without cloning items.

Skin's `carousel` module gains additive classes for it: `carousel__list--gap` and `carousel__list--slides` (driven by `--carousel-gap` and `--carousel-items-in-view`), and `carousel__item--snap` for the items it can come to rest on. Carousel paddle chevrons now point the right way in right-to-left layouts.
