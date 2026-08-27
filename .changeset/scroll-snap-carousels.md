---
"@ebay/skin": minor
"@evo-web/marko": minor
---

Add two carousel components built on native scrolling and CSS scroll snapping: `evo-carousel` for a strip of items that only moves when the user asks, and `evo-carousel-autoplay` for a rotator that advances on a timer.

`evo-carousel` wraps the existing Skin `carousel` module, extended with additive classes (`carousel__item`, `carousel__list--gap`, and `carousel__list--slides` driven by `--carousel-gap` / `--carousel-items-per-slide`). `evo-carousel-autoplay` gets its own new `carousel-autoplay` module. The browser owns snap alignment, touch inertia and the RTL scroll axis; items-per-slide sizing is a `calc()` on a CSS custom property rather than measured layout.

Control presses are animated by the components rather than by CSS `scroll-behavior` — a critically damped spring at the legacy carousel's 450ms — so that a press arriving mid-move adds to it and keeps the speed already built up. The browser's smooth scrolling restarts from a standstill on every new target, which made repeated presses stall and then race.

`evo-carousel-autoplay` loops by laying the slides end to end three times and parking in the middle run, so there is always a full set of slides to scroll onto in either direction and reaching the end is never a jump backwards. Once the scrolling settles outside the middle run it hops back to the matching slide in it, which is invisible because every run is identical. The runway runs are `aria-hidden` and `inert`.

Also fixes the Skin `carousel` paddles being clickable while invisible: the resting state now sets `pointer-events: none`, restored by every state that reveals them.
