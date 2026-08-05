# evo-dialog migration

`EvoDialog` replaces `EbayLightboxDialog` and its `ebay-dialog-base` composition helpers.

## Import path

```diff
- import { EbayLightboxDialog } from "@ebay/ui-core-react/ebay-lightbox-dialog";
- import {
-   EbayDialogFooter,
-   EbayDialogHeader,
-   EbayDialogPreviousButton,
- } from "@ebay/ui-core-react/ebay-dialog-base";
+ import {
+   EvoDialog,
+   EvoDialogBanner,
+   EvoDialogClose,
+   EvoDialogFooter,
+   EvoDialogHeader,
+   EvoDialogTitle,
+   EvoDialogMain,
+   EvoDialogPrevious,
+ } from "@evo-web/react/dialog";
```

## Composition change (breaking)

```tsx
<EvoDialog open={open} onOpenChange={setOpen}>
  <EvoDialogHeader>
    <EvoDialogPrevious a11yText="Back" />
    <EvoDialogTitle>Heading</EvoDialogTitle>
    <EvoDialogClose a11yText="Close Dialog" />
  </EvoDialogHeader>
  <EvoDialogMain>Content</EvoDialogMain>
  <EvoDialogFooter>Footer content</EvoDialogFooter>
</EvoDialog>
```

Compose `EvoDialogPrevious`, `EvoDialogTitle`, and `EvoDialogClose` inline within `EvoDialogHeader`. Body content must be wrapped in `EvoDialogMain`; the component no longer scans and rearranges children.

## Renamed or changed props

| ebayui-core-react   | evo-react                              | Notes                                                                      |
| ------------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| `open`              | `open`                                 | Controlled state; pair with `onOpenChange`.                                |
| `onClose`           | `onOpenChange`                         | Receives the requested boolean state rather than an event.                 |
| `a11yCloseText`     | `EvoDialogClose.a11yText`              | Accessible text moves to the required close sub-component.                 |
| `bannerImgSrc`      | `banner={<EvoDialogBanner src="…" />}` | Banner composition is now explicit.                                        |
| `bannerImgPosition` | `EvoDialogBanner.position`             | Uses the same CSS `background-position` values.                            |
| `ariaLabelledby`    | `aria-labelledby`                      | Native dialog attribute; the generated title ID is appended automatically. |
| `mainId`            | `EvoDialogMain.id`                     | Set the ID directly on the main sub-component.                             |
| `onScroll`          | `EvoDialogMain.onScroll`               | Set the handler directly on the scrollable main region.                    |
| `ignoreEscape`      | `closedby="none"`                      | Use native close-request semantics.                                        |
| `closeButtonClass`  | `EvoDialogClose.className`             | Set the class directly on the close action.                                |
| `top`               | `banner`                               | Pass custom top content with `EvoDialogBanner`.                            |
| _(none)_            | `defaultOpen`                          | Initial state for uncontrolled usage.                                      |
| _(none)_            | `closedby`                             | Accepts `"any"`, `"closerequest"`, or `"none"`; defaults to `"any"`.       |

`size="wide"`, `size="narrow"`, and `size="large"` remain available. `size="fullscreen"` is no longer supported.

## Removed props

| Prop                                                                                        | Reason                                                                                                                      |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                      | The generic Skin dialog has no mini variant.                                                                                |
| `animated`                                                                                  | Animation is CSS-driven through `dialog--close`.                                                                            |
| `focus`                                                                                     | Native dialog focus behavior applies; use `autoFocus` on the desired descendant when needed.                                |
| `onOpen`                                                                                    | Control or observe state through `open` and `onOpenChange`.                                                                 |
| `isModal`                                                                                   | `EvoDialog` always opens with native `showModal()`.                                                                         |
| `baseEl`, `classPrefix`, `windowClass`, `windowType`, `buttonPosition`, `transitionElement` | Legacy dialog-base implementation details do not apply to the native dialog.                                                |
| `onCloseBtnClick`, `onBackgroundClick`                                                      | Close requests are consolidated into `onOpenChange(false)`; use `EvoDialogClose.onClick` for close-button-specific effects. |
| `closeButton`, `previousButton`, `header`, `footer`, `actions`                              | Replaced by the named dialog sub-components.                                                                                |

## New sub-components

| Component           | Purpose                                                                  |
| ------------------- | ------------------------------------------------------------------------ |
| `EvoDialogHeader`   | Structural header wrapper for inline previous, title, and close actions. |
| `EvoDialogTitle`    | Dialog heading; supports `as` to override the default `h2`.              |
| `EvoDialogPrevious` | Optional previous or back icon button.                                   |
| `EvoDialogClose`    | Close icon button; requires `a11yText`.                                  |
| `EvoDialogMain`     | Scrollable main content region.                                          |
| `EvoDialogFooter`   | Optional footer region.                                                  |

## Behavior differences

- The root is a native modal `<dialog>` instead of a custom `<div role="dialog">`.
- Escape and backdrop behavior are controlled by `closedby`; the default `"any"` allows both.
- The dialog remains mounted while its CSS closing animation runs and calls native `close()` when that animation ends.
- `EvoDialogClose` and `EvoDialogPrevious` use the standard Evo icon-button implementation and fixed Skin icons.
