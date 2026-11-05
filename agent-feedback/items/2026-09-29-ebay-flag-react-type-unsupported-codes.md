---
type: bug
impact: low
effort: low
site: packages/ebayui-core-react/src/ebay-flag/flag.tsx › EbayFlagProps
---

# Stop typing `EbayFlagProps.flag` with SVG symbol names the sprite lacks

`EbayFlag` renders the `.fflag--{code}` PNG sprite from `@ebay/skin/flag`, but its `flag` prop is typed as `Icon` from the auto-generated `types.ts`, which lists the SVG flag symbol names. 22 of those have no `.fflag--*` rule: `ac bv cefta cp dg ea esCt esGa esPv gbEng gbNir gbSct gbWls gs hm ic io mf pn sj ta tf um xx`. The camelCase ones (`gbEng`) could never match a class, even if Skin added one. These values type-check but produce a class that matches no sprite position, so no correct flag is shown. Either generate the type from the `.fflag--*` selectors, or widen it to `string` as evo-marko's `<evo-flag>` does for `country`. Checked in ebayui-core-react and skin only.

Check: `grep -c "fflag--gb-eng\|fflag--cefta" packages/skin/src/sass/flag/flag.scss` prints `0`, while `grep -c "'cefta'\|'gbEng'" packages/ebayui-core-react/src/ebay-flag/types.ts` prints `2`.
