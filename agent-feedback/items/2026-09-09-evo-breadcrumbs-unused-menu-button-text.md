---
type: bug
impact: med
effort: med
site: packages/evo-react/src/breadcrumbs/breadcrumbs.tsx › EvoBreadcrumbs
---

# Handle the breadcrumbs menu button label without leaking it to the DOM

`EvoBreadcrumbsProps` exposes `a11yMenuButtonText`, but `EvoBreadcrumbs` does not destructure or use it while its overflow menu remains a TODO. The prop therefore passes through `...rest` to `<nav>` as an unknown DOM attribute instead of labeling an overflow control. evo-marko and ebayui-core consume the equivalent prop in their overflow menus; only evo-react was checked as missing the behavior.

Check: render `<EvoBreadcrumbs a11yMenuButtonText="More" items={[{ content: "Current" }]} />` and inspect the `<nav>` for the leaked `a11ymenubuttontext` attribute and the absence of an overflow menu control.
