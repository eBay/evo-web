---
"@ebay/skin": minor
"@evo-web/marko": minor
---

Add `evo-carousel`, a carousel built on native scrolling and CSS scroll snapping. It covers the continuous, discrete (`itemsPerSlide`) and autoplaying variants of `ebay-carousel` with the same Skin styles. Snapping and scrolling by hand are the browser's own; paddle presses are animated by the component, so that pressing again mid-move keeps its speed instead of restarting. Items not wholly in view are `inert`, and autoplay goes round from the last slide to the first without cloning items.

Skin's `carousel` module gains additive classes for it: `carousel__list--snap` (every item is a mandatory snap point, spaced by `--carousel-gap`, with no smooth scrolling under reduced motion) and `carousel__list--slides` (sized by `--carousel-items-in-view`). Carousel paddle chevrons now point the right way in right-to-left layouts, and the carousel scrollbar, which was black at 40% opacity, now uses `--color-border-medium` so it shows in dark mode.
