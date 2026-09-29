# EvoToastDialog migration

`EvoToastDialog` replaces `EbayToast` from `@ebay/ui-core-react/ebay-toast-dialog`. Import it and its named regions from `@evo-web/react/toast-dialog`.

```tsx
// Before
<EbayToast open={open} onClose={() => setOpen(false)} a11yCloseText="Close draft saved message">
  <EbayDialogHeader>Draft saved</EbayDialogHeader>
  <p>Your listing draft is ready to edit later.</p>
  <EbayDialogFooter>...</EbayDialogFooter>
</EbayToast>

// After
<EvoToastDialog open={open} onOpenChange={setOpen}>
  <EvoToastDialogHeader>
    <EvoToastDialogTitle>Draft saved</EvoToastDialogTitle>
    <EvoToastDialogClose a11yText="Close draft saved message" />
  </EvoToastDialogHeader>
  <EvoToastDialogMain>
    <p>Your listing draft is ready to edit later.</p>
  </EvoToastDialogMain>
  <EvoToastDialogFooter>...</EvoToastDialogFooter>
</EvoToastDialog>
```

- The root now uses a native nonmodal `<dialog>` with `aria-live="polite"`, a required title, and a close control. The title automatically labels the dialog.
- `onClose` becomes `onOpenChange(false)`. Use `EvoToastDialogClose.onClick` for effects specific to the close button. `defaultOpen` enables uncontrolled state.
- `a11yCloseText` moves to required `EvoToastDialogClose.a11yText`.
- The parent no longer scans or rearranges children. Place title and close inside `EvoToastDialogHeader`, message content inside `EvoToastDialogMain`, and optional actions inside `EvoToastDialogFooter`.
- The old `animated` prop is removed; Skin handles the close animation. `forwardedRef` becomes the native React 19 `ref` prop.
- Generic dialog-base props such as `baseEl`, `classPrefix`, `buttonPosition`, `isModal`, `windowClass`, `onBackgroundClick`, and `ignoreEscape` are removed. Native dialog behavior and the fixed toast structure replace them.
- Set `id` and `onScroll` directly on `EvoToastDialogMain`. Set custom classes directly on named regions.
