---
type: a11y
impact: low
effort: low
site: packages/skin/src/sass/carousel/carousel.scss › .carousel__list
---

# Drop the carousel list's smooth scrolling under reduced motion

The native-scrolling rules give `.carousel__list` `scroll-behavior: smooth`
unconditionally, so keyboard scrolling and any script that scrolls it without an
explicit `behavior` animate even for users who ask for reduced motion. Wrapping
the declaration in `@media (prefers-reduced-motion: no-preference)` fixes it.
Reaches ebayui-core and ebayui-core-react; evo-carousel's
`.carousel__list--snap` already turns it off. Checked skin and ebayui-core.

Check: with reduced motion emulated (Playwright `reducedMotion: "reduce"`),
`getComputedStyle(document.querySelector(".carousel__list")).scrollBehavior` in
`navigation-disclosure-ebay-carousel--continuous` is `"smooth"`.
