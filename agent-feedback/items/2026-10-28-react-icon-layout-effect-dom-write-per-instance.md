---
type: perf
impact: med
effort: low
site: packages/ebayui-core-react/src/ebay-icon/icon.tsx › EbayIcon (useLayoutEffect moving <symbol> to #ebayui-svg-symbols)
---

# Stop every EbayIcon instance from writing to the DOM in its layout effect

On a client-only mount, `lookup` is empty during render, so every icon instance renders its own `<defs><symbol>` and its `useLayoutEffect` then appends that symbol into `#ebayui-svg-symbols` (and calls `setHideDefsElement`). That is one DOM write per icon instance during the layout phase, even for the 2nd..Nth instance of the same symbol. Any sibling component that reads layout in its own layout effect (e.g. ebayui-core-react carousel items via `useImperativeHandle`) then pays a forced style recalc + layout per icon/component boundary. Only append when `!lookup.has(name)` at effect time (add to `lookup` synchronously before appending), and skip the write for duplicates. Only ebayui-core-react checked; evo-react icon not checked.

Check: render 10 `<EbayCarousel>` in Storybook, record a Chrome trace with `disabled-by-default-devtools.timeline.invalidationTracking`; the forced `UpdateLayoutTree` in `getRelativeRects` is preceded by "Node was inserted into tree svg id='ebayui-svg-symbols'" invalidations from `icon.tsx` layout effects.
