# evo-alert-dialog migration

## Import path

```diff
- import { EbayAlertDialog } from "@ebay/ui-core-react/ebay-alert-dialog";
- import { EbayDialogHeader, EbayDialogFooter } from "@ebay/ui-core-react/ebay-dialog-base";
- import { EbayButton } from "@ebay/ui-core-react/ebay-button";
+ import {
+   EvoAlertDialog,
+   EvoAlertDialogHeader,
+   EvoAlertDialogMain,
+   EvoAlertDialogFooter,
+   EvoAlertDialogConfirm,
+ } from "@evo-web/react/alert-dialog";
```

## Composition change (breaking)

`@evo-web/react` uses the sub-component pattern instead of children scanning. The API is completely different from `ebayui-core-react`.

### Before

```tsx
<EbayAlertDialog
  open={open}
  confirmText="OK"
  onConfirm={handleConfirm}
  a11yCloseText="Close Dialog"
>
  <EbayDialogHeader>Heading</EbayDialogHeader>
  <p>Content here.</p>
</EbayAlertDialog>
```

### After

```tsx
<EvoAlertDialog open={open} onOpenChange={setOpen}>
  <EvoAlertDialogHeader>Heading</EvoAlertDialogHeader>
  <EvoAlertDialogMain>
    <p>Content here.</p>
  </EvoAlertDialogMain>
  <EvoAlertDialogFooter>
    <EvoAlertDialogConfirm onClick={handleConfirm}>OK</EvoAlertDialogConfirm>
  </EvoAlertDialogFooter>
</EvoAlertDialog>
```

## Removed props

| Prop            | Reason                                                            |
| --------------- | ----------------------------------------------------------------- |
| `confirmText`   | Replaced by `EvoAlertDialogConfirm` children                      |
| `confirm`       | Replaced by `EvoAlertDialogConfirm` sub-component                 |
| `onConfirm`     | Pass `onClick` directly to `EvoAlertDialogConfirm`                |
| `a11yCloseText` | No close button — alert dialogs can only be dismissed via confirm |
| `animated`      | Animation is CSS-driven; use `dialog--close` class transition     |
| `focus`         | `EvoAlertDialogConfirm` auto-focuses via `autoFocus`              |
| `onOpen`        | Not available — control open state externally via `open` prop     |
| `onClose`       | Not available — use `onOpenChange` callback                       |

## Renamed / changed props

| ebayui-core-react | evo-react      | Notes                                                                                       |
| ----------------- | -------------- | ------------------------------------------------------------------------------------------- |
| `open`            | `open`         | Controlled open state — pair with `onOpenChange`                                            |
| _(none)_          | `defaultOpen`  | New — initial open state for uncontrolled usage                                             |
| _(none)_          | `onOpenChange` | New — callback `(open: boolean) => void`; replaces `onConfirm` pattern for state management |

## New sub-components

| Component               | Purpose                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| `EvoAlertDialogHeader`  | Heading wrapper; supports `as` prop to override element (default: `h2`) |
| `EvoAlertDialogMain`    | Main content area; wraps body content in `dialog__main`                 |
| `EvoAlertDialogFooter`  | Footer wrapper; wraps buttons in `dialog__footer`; accepts `className`  |
| `EvoAlertDialogConfirm` | Primary confirm button; must be placed inside `EvoAlertDialogFooter`    |

## Implementation note

The underlying element changed from a custom `<div role="alertdialog">` implementation to a native `<dialog>` element. The dialog is opened via `showModal()` and closed via `dialog.close()` after the CSS animation ends. Escape key is blocked at the browser level via `onCancel` + `e.preventDefault()`.
