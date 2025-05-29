# EbayPanelDialog

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/dialogs-ebay-panel-dialog--default)

## Usage

```jsx
<EbayPanelDialog open a11yClosetext="Close">
    <EbayDialogHeader>Heading</EbayDialogHeader>
    <p>Body content</p>
    <EbayCloseButton>X</EbayCloseButton>
</EbayPanelDialog>
```

## Attributes

| Name            | Type    | Stateful | Required | Description                                                                                                                          |
| --------------- | ------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `open`          | Boolean | Yes      | No       | Whether dialog is open.                                                                                                              |
| `position`      | String  | No       | No       | `end` or `start` (default), the position of the panel, either at the start (left side) of the page, or end (right side) of the page. |
| `focus`         | String  | No       | No       | An id for an element which will receive focus when the drawer opens (defaults to close button).                                      |
| `a11yCloseText` | String  | No       | Yes      | A11y text for close button and mask.                                                                                                 |
| `animated`      | Boolean | Yes      | No       | Renders the dialog with an animation. Note that the dialog will always be present in the DOM                                         |

## Events

| Event     | Data | Description                      |
| --------- | ---- | -------------------------------- |
| `onOpen`  |      | Trigggered when dialog is opened |
| `onClose` |      | Triggered when dialog is closed  |

## EbayDialogHeader

Will render a header content for the dialog. Will always render the header element even if this is not present

## EbayCloseButton

If present will render this as the close button content. Otherwise will render a close icon (X). This content will be rendered inside a button tag
