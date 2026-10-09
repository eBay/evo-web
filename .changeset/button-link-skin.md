---
"@ebay/skin": minor
---

`.btn` and its modifiers now style `<a>` as well as `<button>`, and a new `btn--link` modifier styles a button to look like a text link. Deprecate `fake-btn` (use `<a class="btn">`) and `fake-link` (use `<button class="btn btn--link">`). Both still render as before, and notice, dialog and tourtip styles that target `fake-link` also target `btn--link`; the deprecated classes will be removed in the next major version.
