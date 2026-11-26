---
type: cleanup
impact: low
effort: low
site: packages/ebayui-core/src/components/ebay-icon/index.marko › <svg focusable>
---

# Stop emitting `focusable="false"` on ebayui-core icons

`<ebay-icon>` writes `focusable="false"` on every icon's `<svg>`, and many ebayui-core components pass it to icon tags again. Only IE and EdgeHTML read the attribute, and no browser in `@ebay/browserslist-config` is one of them, so it is about 16 bytes of dead markup per icon. evo-marko and evo-react icons already omit it. Remove it from `ebay-icon` and from the components that pass it, then update the snapshots; it only touches ebayui-core.

Check: `git grep -n 'focusable' -- packages/ebayui-core/src ':!**/icons/**' ':!**/*.snap'`
