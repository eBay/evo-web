---
type: dx
impact: med
effort: med
site: packages/ebayui-core/src/components/ebay-carousel/test/test.browser.js › waitForCarouselUpdate
---

# Stabilize the carousel autoplay wraparound test

The discrete-carousel autoplay scenario can time out waiting for one `move` event when the full repository build runs package tests concurrently. The same file passes in isolation, so the assertion depends on timing or shared browser load rather than a deterministic state transition. Drive the autoplay clock explicitly or wait on the final rendered state without relying on a short real-time event window.

Check: Run `npm run build`; the scenario `when auto play runs at the end > then it is displaying the first item` may report zero `move` events, while `cd packages/ebayui-core && npx vitest run src/components/ebay-carousel/test/test.browser.js --browser.headless` passes all 53 tests.
