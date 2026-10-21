---
"@evo-web/react": minor
---

Remove `EvoFakeLink`; use `<EvoButton variant="link">` instead. The new `link` variant adds `btn--link` to style the button as a text link and drops the priority class. `EvoFakeLink`'s `variant="standalone"` has no replacement, since Skin never styled it on a button. With `href`, `EvoButton` now uses the `btn` classes instead of the deprecated `fake-btn` ones, with no visual change.
