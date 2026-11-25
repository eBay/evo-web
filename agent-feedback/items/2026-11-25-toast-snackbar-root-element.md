---
type: unclear
impact: low
effort: med
site: packages/skin/src/sass/toast-dialog/stories/toast-dialog.stories.js
---

# Align the toast and snackbar root element across Skin and the frameworks

The Skin Toast and Snackbar stories now use `<div role="dialog">`, because `role="dialog"` is not allowed on `<aside>` (axe `aria-allowed-role`). `ebayui-core` still renders `<aside>` (`ebay-toast-dialog` passes `baseEl="aside"`), evo-marko's `evo-toast-dialog` renders a native `<dialog>`, and the Skin SCSS comments say the `<aside>` support goes away once the components move to `<dialog>`. Decide the target element and align Skin, ebayui-core, evo-marko and the React packages (React not checked).

Check: `grep -n "baseEl" packages/ebayui-core/src/components/ebay-toast-dialog/index.marko` and `grep -n "<dialog" packages/evo-marko/src/tags/evo-toast-dialog/index.marko`.
