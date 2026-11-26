---
type: cleanup
impact: low
effort: low
site: packages/ebayui-core/src/components/ebay-icon/index.marko › isFirstInRender
---

# Remove the `rendered_ebay_icon_<name>` `$global` key in the next major

`isFirstInRender` records which symbols a server render has inlined as `rendered_ebay_icon_<name>` keys on `$global`, a deprecated name that apps read to skip rendering the icon tag. Removing it is a breaking change for them, so it has to wait for a major. Track inlined names privately instead, e.g. a module-level `WeakMap<$global, Set<name>>` as `evo-icon` does, and update the tests in `ebay-icon/test/test.server.js` that pin the key.

Check: `grep -rn 'rendered_ebay_icon_' packages/ebayui-core/src`
