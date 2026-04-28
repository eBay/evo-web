---
"@ebay/ebayui-core-react": patch
---

fix(ebay-star-rating-select): do not select star on focus

Tabbing to the first star auto-selected it because `handleFocus` (and
`handleKeyDown`) called `setChecked` unconditionally. Selection now only
happens on click (or the click event browsers synthesize from keyboard
activation of native radio inputs), matching the Marko fix from #394.
