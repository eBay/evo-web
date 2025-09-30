# EbayRadio

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-input-ebay-radio--default)

## Install

```
yarn add @ebay/ui-core-react
```

## Usage

### Import JS

```jsx harmony
import { EbayRadio } from "@ebay/ui-core-react/ebay-radio";
```

### Import LESS from SKIN

```jsx harmony
import "@ebay/skin/radio";
```

### or SCSS/CSS

```jsx harmony
import "@ebay/skin/radio.css";
```

## EbayRadio with EbayLabel

```jsx harmony
import { EbayLabel } from "@ebay/ui-core-react/ebay-field";

<EbayRadio value="1" id="radio-1">
    <Ebaylabel>Choice 1</Ebaylabel>
</EbayRadio>;
```

## Attributes

| Name             | Type    | Description                                                                                             |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`       | boolean | Disabled when true                                                                                      |
| `value`          | string  | The value of radio button component. For the radio checked/unchecked state, please use `checked` props. |
| `checked`        | boolean | Set the radio button state to checked/unchecked. Use this for **controlled component**.                 |
| `defaultChecked` | boolean | Set the radio button initial state to checked/unchecked. Use this for **uncontrolled component**.       |
| `size`           | string  | No                                                                                                      | No  | Either `large` or `regular` (default). Sets the radio icon size. For mweb this should be set to `large`. (Note: The dimensions of the radio will not change, but only the icon) |

## Callbacks

| Name        | Data                         | Description                                          |
| ----------- | ---------------------------- | ---------------------------------------------------- |
| `onChange`  | `(ChangeEvent, { value })`   | Callback fired when selected radio button is changed |
| `onFocus`   | `(FocusEvent, { value })`    | Callback fired when radio button is focused          |
| `onKeydown` | `(KeyboardEvent, { value })` | Callback fired when key is down                      |

Note: For this component, `className`/`style` are applied to the container, while all other HTML attributes are applied to the input.
