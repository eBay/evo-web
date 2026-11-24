---
"@ebay/skin": minor
---

feat(skin): Signal V2

- Added tone modifiers `signal--information`, `signal--positive`, `signal--warning` and `signal--attention`. The base `.signal` (or `.signal--neutral`) is the neutral tone.
- Added emphasis modifiers `signal--strong` (solid fill) and `signal--subtle` (text only). Bare `.signal` is the default emphasis (tinted fill with border).
- Added an optional leading 12px icon: `<svg class="icon icon--12" aria-hidden="true">` as a direct child of `.signal`.
- Added 12 local tokens: `--color-background-{accent,success,warning,attention}-subtle`, `--color-foreground-on-{accent,success,warning,attention}-subtle` and `--color-border-{accent,success,warning,attention}-subtle`, with light and dark values.
- Deprecated `signal--trustworthy`, `signal--recent` and `signal--time-sensitive`. They render the V2 layout and combine with emphasis modifiers. Use `signal--information`, `signal--positive` and `signal--attention` instead. They will be removed in a future major release. `signal--neutral` is not deprecated.
- Visual change for every Signal: the text is no longer uppercase, bold or letter-spaced (it renders in the source case, so use sentence case), the outline becomes a tinted fill with a border, the height is 20px (16px for subtle), the corner radius is 8px, and the vertical margin is removed. Long labels truncate with an ellipsis on a single line.
