# EbaySelect

This component is used to create a native `<select>` form element with default browser styling.

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-input-ebay-select--basic)

## Import JS

```jsx harmony
import { EbaySelect, EbaySelectOption } from "@ebay/ui-core-react/ebay-select";
```

## Import following styles from SKIN

```jsx harmony
import "@ebay/skin/select";

// Add if you're using floating labels
import "@ebay/skin/floating-label";
```

## Import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/select.css";

// Add if you're using floating labels
import "@ebay/skin/floating-label.css";
```

## Usage

When no selected option is specified:

```jsx harmony
<EbaySelect name="formSelect">
    <EbaySelectOption value="1">Option 1</EbaySelectOption>
    <EbaySelectOption value="2">Option 2</EbaySelectOption>
    <EbaySelectOption value="3">Option 3</EbaySelectOption>
</EbaySelect>
```

When a selected option is specified:

```jsx harmony
<EbaySelect name="formSelect" value="2">
    <EbaySelectOption value="1">Option 1</EbaySelectOption>
    <EbaySelectOption value="2">Option 2</EbaySelectOption>
    <EbaySelectOption value="3">Option 3</EbaySelectOption>
</EbaySelect>
```

Please look at this documentation as to the recommended way in React to pre-select a value:
https://reactjs.org/docs/forms.html#the-select-tag. Notice that the selected value is set right in the props of `<EbaySelect/>`.

## EbaySelect Attributes

| Name            | Type    | Required | Description                                                                       |
| --------------- | ------- | -------- | --------------------------------------------------------------------------------- |
| `name`          | String  | Yes      | passed to the `<select>` element                                                  |
| `value`         | String  | No       | Set the value of the `<select>` element. Use this for **controlled component**.   |
| `defaultValue`  | String  | No       | Set the initial value for `<select>` elemtn, only for **uncontrolled component**. |
| `disabled`      | String  | No       | passed to the `<select>` element, default is `false`                              |
| `className`     | String  | No       | passed to the wrapper-element of the `<select>` element                           |
| `borderless`    | String  | No       | whether button has borders, default is `false`                                    |
| `floatingLabel` | String  | No       | Indicates that the select is a floating label type and renders it as a label      |
| `inputSize`     | String  | No       | `default` (default), `large`                                                      |
| `invalid`       | Boolean | No       | Indicates a field-level error with red border if true                             |

## Callbacks

| Name       | Type     | Required | Description                                                                                   |
| ---------- | -------- | -------- | --------------------------------------------------------------------------------------------- |
| `onChange` | Function | No       | Called on option change with arguments: `(ChangeEvent, { index: number, selected: string[] }` |

## EbaySelectOption Attributes

| Name       | Type    | Required | Description                      |
| ---------- | ------- | -------- | -------------------------------- |
| `value`    | String  | Yes      | passed to the `<option>` element |
| `disabled` | Boolean | No       | disables the option              |

It supports all the supported aria attributes (e.g. `aria-label`, `aria-invalid`)
