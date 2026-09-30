---
type: a11y
impact: low
effort: low
site: packages/skin/src/sass/carousel/carousel.scss › .carousel__playback
---

# Mirror the carousel playback control in right-to-left layouts

`.carousel__playback` is placed with `right: 0` and `margin-right: 19px`, so in
RTL it stays bottom-right while the rest of the carousel mirrors (the paddles
already swap sides under `[dir="rtl"]`). Using `inset-inline-end` and
`margin-inline-end` puts it bottom-left in RTL. Reaches every package that wraps
the Skin carousel; checked skin and ebayui-core.

Check: set `dir="rtl"` on `#storybook-root` in
`navigation-disclosure-ebay-carousel--autoplay`; the playback button sits 19px
from the carousel's right edge.
