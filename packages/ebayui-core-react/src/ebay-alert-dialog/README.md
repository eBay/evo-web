# EbayAlertDialog

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/dialogs-ebay-alert-dialog--default)

## Usage

```jsx
<EbayAlertDialog open a11yClosetext="Close">
    <EbayDialogHeader>Heading</EbayDialogHeader>
    <p>Body content</p>
</EbayAlertDialog>
```

## Attributes

| Name            | Type    | Stateful | Required | Description                                                                                     |
| --------------- | ------- | -------- | -------- | ----------------------------------------------------------------------------------------------- |
| `open`          | Boolean | Yes      | No       | Whether dialog is open.                                                                         |
| `focus`         | String  | No       | No       | An id for an element which will receive focus when the drawer opens (defaults to close button). |
| `a11yCloseText` | String  | No       | Yes      | A11y text for close button and mask.                                                            |
| `confirmText`   | String  | No       | No       | Text for confirm button                                                                         |
| `confirm`       | Node    | No       | No       | Custom confirm button (if you need to pass additional props)                                    |
| `animated`      | Boolean | Yes      | No       | Renders the dialog with an animation. Note that the dialog will always be present in the DOM    |

## Events

| Event       | Data | Description                              |
| ----------- | ---- | ---------------------------------------- |
| `onOpen`    | ()   | triggered when dialog is opened          |
| `onConfirm` | ()   | triggered when confirm button is clicked |

## EbayDialogHeader

Will render a header content for the dialog. Will always render the header element even if this is not present

## EbayDialogFooter

Will render the footer content for the dialog. If not present then will not have any footer.
