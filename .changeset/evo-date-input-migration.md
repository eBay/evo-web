---
"@evo-web/marko": minor
---

Add `evo-date-input` and `evo-date-range-input`, the Marko 6 migration of `ebay-date-textbox`. The single component is split in two, matching the evo-react API: a controllable `value` (`YYYY-MM-DD`, or `{ from, to }` for the range), a controllable `open` popover state, `@input` (repeated for range fields) and `@calendar` attribute tags for customization, a required `a11yOpenPopoverText`, `onInvalidDate`, and locale-aware format-as-you-type masking in place of the old keyup separator behavior. `evo-input` now also returns `{ control, postfixButton }` element refs, like `evo-menu`'s returned root ref.
