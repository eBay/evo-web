# EbaySnackbarDialog

A snackbar is a non-modal dialog that appears in response to a lightweight user action. It disappears automatically after a minimum of 6 seconds.

The user usually will want to manage the state of the snackbar, and so should provide the open state as a boolean as well as a function to synchronize the app state with the snackbar state when the on-close event occurs.

In the case where the application developer only wants to manage the initial state of the snackbar, the dev can choose to provide only the open state as a boolean. This is useful when a dev wants the snackbar to appear only once on initial render and then disappear.

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/dialogs-ebay-snackbar-dialog--default)

## Import JS

```jsx harmony
import { EbaySnackbarDialog, EbaySnackbarDialogAction } from "@ebay/ui-core-react/ebay-snackbar-dialog";
```

## Import following styles from SKIN

```jsx harmony
import "@ebay/skin/snackbar-dialog";
```

## Usage

```jsx harmony
<EbaySnackbarDialog open>
    <p>Simple snackbar</p>
</EbaySnackbarDialog>
```

```jsx harmony
<EbaySnackbarDialog open>
    <p>Snackbar with action</p>
    <EbaySnackbarDialogAction accessKey="U" aria-label="Undo - Access Key: U">
        Undo
    </EbaySnackbarDialogAction>
</EbaySnackbarDialog>
```

## Attributes

| Name       | Type    | Stateful | Required | Description                                                                                                      |
| ---------- | ------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `open`     | Boolean | Yes      | No       | Whether snackbar is open or not.                                                                                 |
| `layout`   | String  | No       | No       | Direction of row or column for the text and the action button. Default is 'row'. Options are 'row' and 'column'. |
| `animated` | Boolean | Yes      | No       | Renders the dialog with an animation. Note that the dialog will always be present in the DOM                     |

## Events

| Event      | Data | Description             |
| ---------- | ---- | ----------------------- |
| `onOpen`   |      | Snackbar opened         |
| `onClose`  |      | Snackbar closed         |
| `onAction` |      | Snackbar clicked action |

## EbaySnackbarDialogAction Props

| Name        | Type   | Stateful | Required | Description                                                                                                                                                                                                                                 |
| ----------- | ------ | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessKey` | String | No       | No       | [`accesskey`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey) HTML attribute that generated a keyboard shortcut for the action element. Use together with `aria-label` to give more information to the user. |
