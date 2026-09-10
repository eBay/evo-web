---
type: bug
impact: med
effort: med
site: packages/skin/src/sass/date-textbox › `.date-textbox`
---

# Use a flow-content root for date textbox popovers

The canonical date textbox structure uses a `<span class="date-textbox">`, but its calendar popover is a `<div>` containing flow content; `<span>` permits only phrasing content. The invalid structure exists in the Skin docs, `ebayui-core` Marko 5, `ebayui-core-react`, and the new `evo-react` range component; the Skin range stories omit the popover but should adopt the corrected root so they remain the canonical examples. Change the root to `<div>` across those layers, update React intrinsic props and ref types, and require the future `evo-marko` date-input implementation to use the same structure; `evo-marko` currently has no date-input component.

Check: `rg -n '(<span|<div).*date-textbox|date-textbox__popover' packages/skin/src/sass/date-textbox/stories/date-textbox.stories.js src/routes/_index/components/date-textbox/css+page.marko packages/ebayui-core/src/components/ebay-date-textbox/index.marko packages/ebayui-core-react/src/ebay-date-textbox/date-textbox.tsx packages/evo-react/src/date-range-input/date-range-input-group.tsx packages/evo-react/src/date-input/date-input-popover.tsx`
