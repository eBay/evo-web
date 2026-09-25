# ebay-panel-dialog → evo-panel-dialog

`EvoPanelDialog` uses a native modal `<dialog>` and the controlled `open` / `onOpenChange` or uncontrolled `defaultOpen` pattern from `EvoDialog`. Its panel window remains inside the dialog, with named header, title, main, footer, close, and previous components.

```tsx
import {
  EvoPanelDialog,
  EvoPanelDialogClose,
  EvoPanelDialogHeader,
  EvoPanelDialogMain,
  EvoPanelDialogTitle,
} from "@evo-web/react/panel-dialog";

<EvoPanelDialog open={open} onOpenChange={setOpen} position="end">
  <EvoPanelDialogHeader>
    <EvoPanelDialogTitle>Order details</EvoPanelDialogTitle>
    <EvoPanelDialogClose a11yText="Close order details" />
  </EvoPanelDialogHeader>
  <EvoPanelDialogMain>Review the order.</EvoPanelDialogMain>
</EvoPanelDialog>;
```

- Replace `onClose` with `onOpenChange(false)` and `onOpen` with application state handling.
- Replace `a11yCloseText` with `a11yText` on `EvoPanelDialogClose`.
- Replace `EbayDialogHeader` with `EvoPanelDialogHeader` and `EvoPanelDialogTitle`; place body content in `EvoPanelDialogMain`.
- Replace `EbayDialogCloseButton` and previous/footer slots with the matching named panel components.
- Remove `focus`, `isModal`, `ignoreEscape`, and base element overrides. Native modal focus and Escape handling come from `EvoDialog`.
