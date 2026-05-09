---
"@evo-web/react": patch
---

Add `EvoAlertDialog` component to `@evo-web/react`.

Uses a native `<dialog>` element with `role="alertdialog"` and `closedby="none"`. Composed with sub-components:

- `EvoAlertDialogHeader` — heading wrapper with automatic `aria-labelledby` wiring
- `EvoAlertDialogMain` — main content area with automatic `aria-describedby` wiring
- `EvoAlertDialogConfirm` — primary confirm button with `autoFocus` and close behaviour

The dialog blocks Escape key dismissal and calls `openChange(false)` when the confirm button is clicked.
