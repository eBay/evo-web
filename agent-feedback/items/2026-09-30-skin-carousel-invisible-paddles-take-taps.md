---
type: bug
impact: med
effort: low
site: packages/skin/src/sass/carousel/carousel.scss › @mixin carousel-paddle-mixin-base
---

# Stop invisible carousel paddles from taking taps

Below the SM breakpoint, and anywhere hover is unavailable, the paddles rest at
`opacity: 0` but stay hit-testable, so a tap near either edge of a carousel
pages it instead of reaching the item underneath (often a link). Setting
`pointer-events: none` in the resting state and `pointer-events: auto` in
`@mixin show-control` fixes the tap, but the paddles stay focusable and in the
accessibility tree, so confirm iOS VoiceOver can still activate a hidden paddle
before shipping it (its activation may hit-test). Reaches skin, ebayui-core,
ebayui-core-react and evo-marko's `evo-carousel`; checked skin and ebayui-core.

Check: at a 375px viewport in `navigation-disclosure-ebay-carousel--continuous`,
the next paddle has computed `opacity: 0` and `document.elementFromPoint` at its
centre returns the paddle.
