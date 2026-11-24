---
"@evo-web/marko": minor
"@ebay/skin": minor
---

Date inputs edit dates as plain text, so selection, undo, copy and paste work as in any textbox, and a range shows both dates in one field separated by an em dash, moving on to the end date once the start date is filled in. Clicking anywhere in the field's box focuses the nearer date. While typing, the rest of the format shows past the text, separators are added as each part is completed (a month of 2–9 or a day of 4–9 is complete at one digit), Backspace at the end removes a separator with the digit before it while Backspace and Delete elsewhere step over separators, and phones show a numeric keypad. A date is read when its input commits (blur or Enter) from parts with any separators, in the locale's order or as an ISO date, then shown in the locale's format.

Breaking for `evo-date-input` and `evo-date-range-input`: `@input` is replaced by `floatingLabel` and `name` (`startName` and `endName` for a range), which submit the `YYYY-MM-DD` value, and `id` goes on the (start) date's input so an outside `<label for>` can name it. The range adds `a11yStartText` and `a11yEndText` to name each date's input.
