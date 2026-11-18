---
"@evo-web/marko": minor
"@ebay/skin": minor
---

Date inputs now edit each part of a date in its own input: month, day and year are separate spinbuttons in the locale's order, each a tab stop, and a range shows both dates in one field separated by an em dash. Typing pads and moves to the next part, and the arrow keys step and move between parts.

Breaking for `evo-date-input` and `evo-date-range-input`: `@input` is replaced by `floatingLabel` and `name` (`startName` and `endName` for a range), and `onInvalidDate` is removed; a date that doesn't exist is marked invalid instead. The range adds `a11yStartText` and `a11yEndText` to name each date's parts.
