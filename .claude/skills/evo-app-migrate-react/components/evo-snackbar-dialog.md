# ebay-snackbar-dialog → evo-snackbar-dialog

Import the named components from `@evo-web/react/snackbar-dialog`. The dialog remains an `aside` with a window, main region, and optional action region. It closes six seconds after opening or after focus and hover leave.

| ebayui-core-react                                             | evo-react                                                       | Change                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message directly in `EbaySnackbarDialog`                      | `EvoSnackbarDialogMain`                                         | Explicit main region replaces child scanning.                                                                                                                                                                                                                                                                                                                       |
| `EbaySnackbarDialogAction`                                    | `EvoSnackbarDialogActions` containing `EvoSnackbarDialogAction` | Explicit action region preserves the legacy wrapper and button.                                                                                                                                                                                                                                                                                                     |
| No accessible name by default                                 | `a11yText`                                                      | Names the nonmodal dialog; English default is `"Notification"`. Translate it for the locale.                                                                                                                                                                                                                                                                        |
| `aria-label` on the action                                    | `a11yText` on `EvoSnackbarDialogAction`                         | Maps to the action button's accessible name. Visible text normally supplies the name.                                                                                                                                                                                                                                                                               |
| `open`, `layout`, `animated`, `onOpen`, `onClose`, `onAction` | Same props                                                      | Timed dismissal and action callbacks remain available.                                                                                                                                                                                                                                                                                                              |
| Dialog base configuration props                               | Removed                                                         | `baseEl`, `classPrefix`, `windowClass`, `windowType`, `buttonPosition`, `ariaLabelledby`, `a11yCloseText`, `onCloseBtnClick`, `onBackgroundClick`, `mainId`, `ignoreEscape`, `closeButton`, `previousButton`, `focus`, `transitionElement`, `isModal`, `top`, `header`, `footer`, and `actions` were internal dialog base controls. Use the named snackbar regions. |

```tsx
import {
  EvoSnackbarDialog,
  EvoSnackbarDialogAction,
  EvoSnackbarDialogActions,
  EvoSnackbarDialogMain,
} from "@evo-web/react/snackbar-dialog";

<EvoSnackbarDialog
  open={open}
  onClose={() => setOpen(false)}
  a11yText="Watchlist update"
>
  <EvoSnackbarDialogMain>
    Item removed from your watchlist.
  </EvoSnackbarDialogMain>
  <EvoSnackbarDialogActions>
    <EvoSnackbarDialogAction onClick={undoRemoval}>
      Undo
    </EvoSnackbarDialogAction>
  </EvoSnackbarDialogActions>
</EvoSnackbarDialog>;
```
