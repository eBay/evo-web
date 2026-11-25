---
type: a11y
impact: med
effort: low
site: packages/skin/src/sass/carousel/stories/carousel.stories.js
---

# Decide how keyboard users scroll carousel and progress-stepper overflow regions

Axe `scrollable-region-focusable` fails on all 11 Carousel stories and on Progress Stepper `smallScreens` and `customSize`: each has a scrolling container with no focusable content, so a keyboard user cannot scroll it. In real use carousel slides usually contain links, which fixes it, but the Skin stories and the docs examples do not. Neither evo-marko nor ebayui-core makes the container focusable. Decide whether Skin documents `tabindex="0"` with a label on the container, or always shows focusable slide content.

Check: run axe-core on `skin-carousel--continuous` in Skin Storybook; the rule `scrollable-region-focusable` fails.
