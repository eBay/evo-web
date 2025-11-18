# EbayListboxButton

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/buttons-ebay-listbox-button--default)

## Import JS

```jsx harmony
import { EbayListboxButton, EbayListboxButtonOption } from "@ebay/ui-core-react/ebay-listbox-button";
```

## Import following styles from SKIN

```jsx harmony
import "@ebay/skin/listbox-button";

// Add if you're using floating labels
import "@ebay/skin/floating-label";
```

## Import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/listbox-button.css";

// Add if you're using floating labels
import "@ebay/skin/floating-label.css";
```

## Usage

```
yarn add @ebay/ui-core-react
```

```jsx harmony
<EbayListboxButton defaultValue="BB" onSelect={action(`onSelect triggered`)} fluid borderless>
    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
    <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
</EbayListboxButton>
```

## Attributes

| Name             | Type    | Required | Description                                                                                                                                                          |
| ---------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`          | string  | No       | Allows you to set the selected option to the one with `value`                                                                                                        |
| `selected`       | number  | No       | Allows you to set the selected index option to `selected`                                                                                                            |
| `aria-disabled`  | boolean | No       | Set to true if the field is disabled                                                                                                                                 |
| `aria-invalid`   | boolean | No       | Set to true if the field is invalid                                                                                                                                  |
| `fluid`          | boolean | No       | To make the listbox fluid                                                                                                                                            |
| `borderless`     | boolean | No       | To make the listbox borderless                                                                                                                                       |
| `maxHeight`      | string  | No       | example: 100px, 200px, 10rem                                                                                                                                         |
| `prefixId`       | string  | No       | The id of an external element to use as the a11y prefix label for the listbox button.                                                                                |
| `prefixLabel`    | string  | No       | The label to add before selected option on the button. Cannot be used with `prefixId`                                                                                |
| `floatingLabel`  | string  | No       | Indicates that the listbox is a floating label type and renders it with a label                                                                                      |
| `unselectedText` | string  | No       | The text to be shown when no options are selected. Default is '-'. Cannot be used with `floating-label`                                                              |
| `strategy`       | string  | No       | Swap between `fixed` and `absolute` positioning strategy. Use `fixed` when dropdown is in contained in an overflow and needs to be visible as you scroll the screen. |

## Callbacks

| Name         | Type     | Required | Description           | Data                                                                         |
| ------------ | -------- | -------- | --------------------- | ---------------------------------------------------------------------------- |
| `onChange`   | Function | No       | triggered on change   | `(ChangeEvent, { index: number, selected: string[] , wasClicked: boolean })` |
| `onCollapse` | Function | No       | triggered on collapse | `()`                                                                         |
| `onExpand`   | Function | No       | triggered on expand   | `()`                                                                         |
