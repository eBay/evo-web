---
"@evo-web/react": patch
"@ebay/ebayui-core": patch
---

Fix test noise and flaky carousel scroll test.

- `@evo-web/react`: Guard `EvoIcon`'s missing-provider `console.warn` with `process.env.NODE_ENV === 'development'` so it is silent in Vitest (`NODE_ENV=test`) without removing the warning from development builds.
- `@ebay/ebayui-core`: Fix flaky `ebay-carousel` browser test — "when it is scrolled to the second slide" `beforeEach` was calling `waitForCarouselUpdate()` which resolved immediately from the init render's `move` event, before the 640 ms scroll debounce fired. Replaced with `vi.advanceTimersByTimeAsync(700)` to deterministically trigger the debounce and flush the resulting Marko re-render.
