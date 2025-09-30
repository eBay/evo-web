# EbayTextbox

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-input-ebay-textbox--default-textbox)

## Usage

```
yarn add @ebay/ui-core-react
```

### Import JS

```jsx harmony
import { EbayTextbox } from "@ebay/ui-core-react/ebay-textbox";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/textbox";

// Add if you're using floating labels
import "@ebay/skin/floating-label";
```

### or if using CSS/SCSS

```jsx
import "@ebay/skin/textbox.css";

// Add if you're using floating labels
import "@ebay/skin/floating-label.css";
```

```jsx harmony
<EbayTextbox value="Search for anything" />
```

## Props

| Name            | Type    | Stateful | Required | Description                                                                                                                            |
| --------------- | ------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `fluid`         | Boolean | No       | No       | Takes the full width of the container                                                                                                  |
| `multiline`     | Boolean | No       | No       | Renders a multi-line textbox if true                                                                                                   |
| `opaqueLabel`   | Boolean | No       | No       | Only works with floating label. If set, then background is obscured of the floating label. Used with textarea to prevent label overlap |
| `invalid`       | Boolean | No       | No       | Indicates a field-level error with red border if true                                                                                  |
| `type`          | String  | No       | No       | Default: `text`, can be `password` if needed                                                                                           |
| `value`         | String  | No       | No       | Indicates the value of the input element, required for a controlled component.                                                         |
| `defaultValue`  | String  | No       | No       | Indicates the default input element value. Use when the component is not controlled.                                                   |
| `inputSize`     | String  | No       | No       | `default` (default), `large`                                                                                                           |
| `floatingLabel` | String  | No       | No       | Indicates that the input is a floating label type and renders it as a label                                                            |

## Callbacks

| Name                  | Required | Description                                                                                                          | Arguments                            |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `onChange`            | No       | Triggered when focus leaves and value is changed.                                                                    | `(ChangeEvent, { value: string })`   |
| `onInputChange`       | No       | Triggered when the value of the input is changed.                                                                    | `(ChangeEvent, { value: string })`   |
| `onFocus`             | No       | Called when input gets focus                                                                                         | `(FocusEvent, { value: string })`    |
| `onBlur`              | No       | Called when input loses focus                                                                                        | `(FocusEvent, { value: string })`    |
| `onKeyPress`          | No       | Called on key press                                                                                                  | `(KeyboardEvent, { value: string })` |
| `onKeyUp`             | No       | Called on key up                                                                                                     | `(KeyboardEvent, { value: string })` |
| `onKeyDown`           | No       | Called on key down                                                                                                   | `(KeyboardEvent, { value: string })` |
| `onInvalid`           | No       | Triggered when value is invalid                                                                                      | `(ChangeEvent, { value: string })`   |
| `onFloatingLabelInit` | No       | Triggered when floating label is initialized                                                                         | `()`                                 |
| `onButtonClick`       | No       | Triggers when clicking on postfix-icon-button. Requires `buttonAriaLabel` to be present in order to attach correctly | `(MouseEvent, { value: string })`    |

It supports all the events supported by an input element (e.g. `onInput`, `onPaste`)

## EbayTextboxPrefixIcon

| Name   | Type   | Required | Description              |
| ------ | ------ | -------- | ------------------------ |
| `name` | String | No       | Name of the icon to show |

## EbayTextboxPostfixIcon

| Name              | Type   | Required | Description                                                                    |
| ----------------- | ------ | -------- | ------------------------------------------------------------------------------ |
| `name`            | String | No       | Name of the icon to show                                                       |
| `buttonAriaLabel` | String | No       | Aria-label for postfix icon/button. Required in order to render postfix button |

### EbayTextboxPrefixIcon example

```jsx
import { EbayTextbox, EbayTextboxPrefixIcon } from "@ebay/ui-core-react/ebay-textbox";

<EbayTextbox placeholder="email">
    <EbayTextboxPrefixIcon icon={<EbayTextMessaging16Icon />} />
</EbayTextbox>;
```
