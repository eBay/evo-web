---
"@evo-web/marko": patch
---

`evo-button` gains `variant="link"`, which adds `btn--link` to style the button as a text link and drops the priority class. With `href`, the anchor now uses the `btn` classes instead of the deprecated `fake-btn` ones, with no visual change.
