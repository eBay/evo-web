---
type: test
impact: medium
effort: medium
site: packages/ebayui-core/src/components/ebay-accordion/test/test.browser.js › should open the clicked section
---

# Stabilize accordion CSS snapshot during the concurrent root build

`npm run build` fails the accordion browser snapshot while package builds run concurrently. The received snapshot differs in the opened `<details>` state and computed icon `fill`, `transform`, and animation styles. In the latest run, the isolated test command reproduced the same mismatch instead of passing, so the failure is not limited to concurrent package builds in this checkout. Investigate whether the snapshot is stale or captures an unstable animation state. This failure is unrelated to education-notice changes and prevents a reliable root-build signal.

Check: `npm exec --workspace=@ebay/ebayui-core -- vitest run --config vite.config.mjs --project browser src/components/ebay-accordion/test/test.browser.js` currently fails with the accordion snapshot mismatch.
