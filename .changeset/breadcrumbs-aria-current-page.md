---
"@ebay/skin": patch
"@evo-web/marko": patch
"@evo-web/react": patch
"@ebay/ebayui-core": patch
"@ebay/ui-core-react": patch
---

fix(breadcrumbs): use `aria-current="page"` for the current breadcrumb

The last breadcrumb now exposes `aria-current="page"` instead of
`aria-current="location"`.
