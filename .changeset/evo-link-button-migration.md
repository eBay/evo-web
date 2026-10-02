---
"@evo-web/marko": patch
---

Add `evo-link-button`, the Marko 6 migration of `ebay-fake-link`, matching the evo-react `EvoFakeLink` API. Native `<button>` attributes and event handlers pass through, so handlers such as `onClick`, `onFocus` and `onBlur` now receive the native DOM event instead of `{ originalEvent }`. The custom `on-escape` event is removed; bind `onKeyDown` instead.
