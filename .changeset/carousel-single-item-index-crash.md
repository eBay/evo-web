---
"@ebay/ui-core-react": patch
---

fix(carousel): don't crash when `index` is out of range for the item count

`getOffset` indexed directly into the measured items array with
whatever `index` was passed, with no bounds check. A carousel with a
single item, given an `index` prop of 1 or higher (e.g. left over from
a previous render with more items, or just an out-of-range default),
threw `Cannot read properties of undefined (reading 'left')` during
mount. Falls back to the last available item when the requested index
is out of range instead of crashing.
