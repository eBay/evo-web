---
type: dx
impact: med
effort: med
site: packages/ebayui-core/src/components/ebay-carousel/utils/on-scroll-debounced/test/test.browser.js › scroll-debounced
---

# scroll-debounced timing test is flaky and blocks pre-push

The browser test "calls a handler at most every 600ms" fails intermittently (and reproducibly on some machines even in isolation) with "expected vi.fn() to be called 1 times, but got 2 times" plus a 15s timeout, without any change to ebayui-core. Because the husky pre-push hook runs the full `npm run build`, this single timing-sensitive assertion blocks pushing unrelated work. The test should use fake timers or tolerate scheduler jitter instead of asserting exact call counts against wall-clock debounce windows.

Check: `cd packages/ebayui-core && npx vitest run --browser.headless src/components/ebay-carousel/utils/on-scroll-debounced/test/test.browser.js` on a loaded machine fails without local modifications.
