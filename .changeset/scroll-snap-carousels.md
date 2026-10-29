---
"@ebay/skin": minor
"@evo-web/marko": minor
---

Add `evo-carousel`, a carousel built on native scrolling and CSS scroll snapping. It covers the continuous, discrete (`itemsPerSlide`) and autoplaying variants of `ebay-carousel` with the same Skin styles. Snapping and scrolling by hand are the browser's own; paddle presses are animated by the component, so that pressing again mid-move keeps its speed instead of restarting. As in `ebay-carousel`, items not wholly in view are hidden from assistive technology and the tab order but can still be clicked, and `data-carousel-tabindex` is honoured. Autoplay keeps `ebay-carousel`'s look and pace, can be swiped, and goes round from the last slide to the first without cloning items.

Skin's `carousel` module gains additive classes for it: `carousel__list--snap` (every item is a mandatory snap point, spaced by `--carousel-gap`, with no smooth scrolling under reduced motion, and native scrolling even under `carousel__autoplay`) and `carousel__list--slides` (sized by `--carousel-items-in-view`). In carousels with a `carousel__list--snap` list, paddle chevrons point the right way in right-to-left layouts, the playback control mirrors there too, paddles can no longer be clicked while invisible, the scrollbar uses `--color-border-medium` so it shows in dark mode, and item text wraps normally. `ebay-carousel`'s styles are unchanged.
