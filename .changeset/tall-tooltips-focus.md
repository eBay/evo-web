---
"@evo-web/marko": patch
---

Fix `evo-tooltip` not opening on click in Safari and macOS Firefox. The tooltip opens on `focusin`, but those browsers do not give buttons focus on click, so a `noHover` tooltip with a button host could only be opened with the keyboard. The host now focuses itself on click, composing with any consumer-provided `onClick`.
