---
type: test
impact: medium
effort: medium
site: packages/ebayui-core/src/components/ebay-accordion/test/test.browser.js › should open the clicked section
---

# Stabilize accordion CSS snapshot during the concurrent root build

`npm run build` intermittently fails the accordion browser snapshot while package builds run concurrently. The received snapshot omitted expected animation declarations and had different computed `fill` and `transform` styles. The same test passed immediately afterward in isolation:

```sh
npm exec --workspace=@ebay/ebayui-core -- vitest run --config vite.config.mjs --project browser src/components/ebay-accordion/test/test.browser.js
```

Investigate whether concurrent Skin/package output changes the styles available to `initialHTML`, or whether the snapshot is capturing styles before animation state settles. The failure is unrelated to number-input changes but prevents a reliable root-build signal.
