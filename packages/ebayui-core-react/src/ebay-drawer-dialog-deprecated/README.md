# EbayDrawerDialogDeprecated

**Deprecated will be removed next major** (Use `EbayLightboxDialog` instead)

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/deprecated-ebay-drawer-dialog-deprecated--default)

## Usage

### Import JS

```jsx harmony
import { EbayDrawerDialogDeprecated } from "@ebay/ui-core-react/ebay-drawer-dialog-deprecated";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/drawer-dialog";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/drawer-dialog.css";
```

### Simple opened dialog

```jsx
<EbayDrawerDialogDeprecated open a11yClosetext="Close Drawer">
    Hello World
</EbayDrawerDialogDeprecated>
```

## Props

| Name               | Type    | Stateful | Required | Description                                                                                                                                       |
| ------------------ | ------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`         | Boolean | No       | No       | Whether the drawer is expanded to full height or max 50%. Controlled.                                                                             |
| `open`             | Boolean | Yes      | No       | Whether drawer is open. Controlled.                                                                                                               |
| `noHandle`         | Boolean | Yes      | No       | Whether handle will be shown or not.                                                                                                              |
| `focus`            | String  | No       | No       | An id for an element which will receive focus when the drawer opens (defaults to close button).                                                   |
| `a11yCloseText`    | String  | No       | No\*     | A11y text for close button and mask. Required only when close button exists.                                                                      |
| `a11yMinimizeText` | String  | No       | No\*     | A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer. Required only when draggable handle exists. |
| `a11yMaximizeText` | String  | No       | No\*     | A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer. Required only when draggable handle exists. |
| `animated`         | Boolean | Yes      | No       | Renders the dialog with an animation. Note that the dialog will always be present in the DOM                                                      |

## Events

| Event         | Data             | Description                                                                                                                                                    |
| ------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onOpen`      | `(event: Event)` | drawer opened                                                                                                                                                  |
| `onClose`     | `(event: Event)` | drawer closed. Triggered also when user drags down on handle (touch only) when dialog is not expanded                                                          |
| `onExpanded`  | `(event: Event)` | drawer expanded to full page height. Event is triggered on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded |
| `onCollapsed` | `(event: Event)` | drawer collapsed back to max 50%. Event is triggered on drags do                                                                                               |

## Child components

### EbayDialogHeader

Will render a header content for the dialog. Will always render the header element even if this is not present

### EbayDialogFooter

Will render the footer content for the dialog. If not present then will not have any footer.

```jsx
<EbayDrawerDialogDeprecated>
    <EbayDialogHeader>Title</EbayDialogHeader>
    Some text
    <EbayDialogFooter>(c)2021 eBay Inc.</EbayDialogFooter>
</EbayDrawerDialogDeprecated>
```
