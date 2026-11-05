---
type: bug
impact: med
effort: med
site: packages/evo-react/src/breadcrumbs/breadcrumbs.tsx › EvoBreadcrumbs
---

# Stop shipping the overflow-menu contract in evo-react while the menu is unimplemented

`EvoBreadcrumbsProps` declares `a11yMenuButtonText` but the component never destructures it, so it leaks onto `<nav>` as the unknown attribute `a11ymenubuttontext` via `...rest`. More critically, `EvoBreadcrumbs` emits the `breadcrumb--overflow` modifier that tells Skin to disable its `overflow-x: scroll` escape hatch, while the collapse itself is unimplemented — so a trail wider than its container gets neither mechanism and simply overflows. `evo-marko` and `ebayui-core` apply the same modifier but do implement the collapse; only evo-react is affected. Implementing the menu fixes both at once; interim mitigations (early destructure, dropping the modifier) are throwaway and better skipped.

Check: render `<EvoBreadcrumbs a11yMenuButtonText="More" items={[{ content: "Current" }]} />` and inspect `<nav>` for the leaked `a11ymenubuttontext` attribute. For the overflow, open an evo-react breadcrumbs story (`packages/evo-react/src/breadcrumbs/breadcrumbs.stories.tsx`) and narrow the viewport until the trail exceeds the nav width — it neither scrolls nor collapses, where the evo-marko `Default` story collapses and the Skin `Skin/Breadcrumbs/Links` stories scroll.
