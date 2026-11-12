---
"@ebay/ebayui-core": patch
---

fix(ebay-menu-button): type `@item` as the `ebay-menu` item it is passed to, so `badgeAriaLabel` is accepted.

fix(ebay-combobox): type `@option` with the HTML attributes it renders on the option (eg `data-*`), except `role`, `tabindex` and `aria-selected`, which the combobox sets.

fix(ebay-list): type `@item` with button and link attributes (eg `href` with `as="a"`), which it renders on its element.

fix(ebay-filter-menu,ebay-filter-menu-button): type `footer` as the `<@footer>` attribute tag it is written as.

fix(ebay-icon,ebay-checkbox,ebay-radio,ebay-tri-state-checkbox,ebay-spark-line): stop rendering obsolete SVG attributes: `focusable="false"` on icons (only Internet Explorer and legacy Edge read it, and neither is supported) and `version="1.1"` on the spark line (removed in SVG 2).
