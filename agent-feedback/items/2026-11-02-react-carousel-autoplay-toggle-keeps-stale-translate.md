---
type: bug
impact: low
effort: low
site: packages/ebayui-core-react/src/ebay-carousel/carousel-list.tsx › CarouselList
---

# Re-apply the scroll mode in CarouselList when autoplay is toggled at runtime

`CarouselList` applies `offset` through either `scrollTransition` (native scrolling) or `translateLeft` (autoplay) only from its offset effect. When `autoplay` is turned off while the carousel sits at a non-zero offset, the offset does not change, so the list keeps the obsolete `translate3d(-offset)` transform and is never scrolled to the offset. Turning autoplay on mid-scroll leaves the scroll position in place in the same way. The effect should also run when `nativeScrolling` changes: clear `translateLeft` when switching to native scrolling, and reset `scrollLeft` when switching to transforms. Only `ebayui-core-react` was checked. `ebayui-core` rebuilds its state on every input, so it is probably not affected, but it was not verified for this case.

Check: in `packages/ebayui-core-react/src/ebay-carousel/__tests__/index.spec.tsx` ("measuring with ResizeObserver"), render `<EbayCarousel itemsPerSlide={1} autoplay>` with a stable `items` array, call `notifyResize()`, click Next, then rerender without `autoplay` and call `notifyResize()`. The list still has `transform: translate3d(-216px, 0, 0)` and `scrollTransition` is never called (`cd packages/ebayui-core-react && npx vitest run src/ebay-carousel`).
