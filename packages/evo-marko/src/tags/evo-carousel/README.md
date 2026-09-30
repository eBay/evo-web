<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-carousel
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A horizontally scrolling list of items with previous and next controls. Continuous by default, where each item sizes itself; discrete with `itemsPerSlide`, where a set number fill the view; and a rotator with `autoplay`, which advances on a timer and goes back to the start after the last slide.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-carousel)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-carousel)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-carousel/examples)

## Items out of view

Items not wholly in view, peeks included, are `inert`: out of the tab order and the accessibility tree, and not clickable. Unlike `ebay-carousel`, tab indexes inside items are left alone, so there is no `data-carousel-tabindex`.

## Reduced motion

Presses jump rather than scroll, and autoplay starts paused, for users who prefer reduced motion.
