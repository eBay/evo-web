---
type: dx
impact: med
effort: low
site: packages/ebayui-core/src/components/ebay-accordion/test/test.browser.js › should open the clicked section
---

# Refresh or stabilize the accordion browser snapshot

The required root `npm run build` fails after Skin builds because the accordion browser snapshot expects older computed icon styles and animation declarations. The rendered accordion uses the current Skin output, including the open-chevron rotation and current-color fill, so the stale snapshot prevents unrelated component work from completing root verification. Confirm the current visual behavior, then refresh the snapshot or make its assertions target stable semantics rather than generated computed CSS.

Check: Run `npm run build`; the `should open the clicked section` snapshot in the ebay-accordion browser test mismatches on chevron transform, animation, and fill styles.
