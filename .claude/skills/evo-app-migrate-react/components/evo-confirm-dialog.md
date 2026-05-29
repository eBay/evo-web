# evo-confirm-dialog migration

## Import path

```diff
- import { EbayConfirmDialog } from "@ebay/ebayui-core-react/ebay-confirm-dialog";
- import { EbayDialogHeader } from "@ebay/ebayui-core-react/ebay-dialog-base";
+ import {
+   EvoConfirmDialog,
+   EvoConfirmDialogHeader,
+   EvoConfirmDialogMain,
+   EvoConfirmDialogFooter,
+   EvoConfirmDialogReject,
+   EvoConfirmDialogConfirm,
+ } from "@evo-web/react/confirm-dialog";
```

## Composition change (breaking)

`@evo-web/react` uses the sub-component pattern instead of flat props for button text and handlers.

### Before

```tsx
<EbayConfirmDialog
  open={open}
  confirmText="Delete"
  rejectText="Cancel"
  onConfirm={() => setOpen(false)}
  onReject={() => setOpen(false)}
  a11yCloseText="Close Dialog"
>
  <EbayDialogHeader>Delete Address?</EbayDialogHeader>
  <p>You will permanently lose this address.</p>
</EbayConfirmDialog>
```

### After

```tsx
<EvoConfirmDialog open={open} onOpenChange={setOpen}>
  <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
  <EvoConfirmDialogMain>
    <p>You will permanently lose this address.</p>
  </EvoConfirmDialogMain>
  <EvoConfirmDialogFooter>
    <EvoConfirmDialogReject onClick={handleReject}>
      Cancel
    </EvoConfirmDialogReject>
    <EvoConfirmDialogConfirm onClick={handleConfirm}>
      Delete
    </EvoConfirmDialogConfirm>
  </EvoConfirmDialogFooter>
</EvoConfirmDialog>
```

## Removed props

| Prop            | Reason                                                        |
| --------------- | ------------------------------------------------------------- |
| `confirmText`   | Replaced by `EvoConfirmDialogConfirm` children                |
| `rejectText`    | Replaced by `EvoConfirmDialogReject` children                 |
| `confirm`       | Replaced by `EvoConfirmDialogConfirm` sub-component           |
| `reject`        | Replaced by `EvoConfirmDialogReject` sub-component            |
| `onConfirm`     | Pass `onClick` directly to `EvoConfirmDialogConfirm`          |
| `onReject`      | Pass `onClick` directly to `EvoConfirmDialogReject`           |
| `a11yCloseText` | No close button in the evo pattern                            |
| `animated`      | Animation is CSS-driven; use `dialog--close` class transition |
| `focus`         | `EvoConfirmDialogConfirm` auto-focuses via `autoFocus`        |
| `onOpen`        | Not available — control open state externally via `open` prop |
| `onClose`       | Not available — use `onOpenChange` callback                   |

## Renamed / changed props

| ebayui-core-react | evo-react      | Notes                                                                                          |
| ----------------- | -------------- | ---------------------------------------------------------------------------------------------- |
| `open`            | `open`         | Controlled open state — pair with `onOpenChange`                                               |
| _(none)_          | `defaultOpen`  | New — initial open state for uncontrolled usage                                                |
| _(none)_          | `onOpenChange` | New — callback `(open: boolean) => void`; replaces `onConfirm`/`onReject` for state management |

## New sub-components

| Component                 | Purpose                                                                 |
| ------------------------- | ----------------------------------------------------------------------- |
| `EvoConfirmDialogHeader`  | Heading wrapper; supports `as` prop to override element (default: `h2`) |
| `EvoConfirmDialogMain`    | Main content area; wraps body content in `dialog__main`                 |
| `EvoConfirmDialogFooter`  | Footer wrapper; wraps buttons in `dialog__footer`; accepts `className`  |
| `EvoConfirmDialogReject`  | Secondary reject button; call `onClick` for additional side effects     |
| `EvoConfirmDialogConfirm` | Primary confirm button; must be placed inside `EvoConfirmDialogFooter`  |

## Behavior differences

- **Escape key**: closes the dialog via `onOpenChange(false)` but does **not** invoke `EvoConfirmDialogReject`'s `onClick`. In `ebayui-core-react`, Escape fired `onReject`.
- **`closedby`**: uses `"closerequest"` (Escape allowed to close) vs. `"none"` on alert-dialog.
- The underlying element changed from a custom `<div role="dialog">` to a native `<dialog role="alertdialog">` opened via `showModal()` and closed via `dialog.close()` after the CSS animation ends.
