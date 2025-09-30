# EbayCheckbox

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-input-ebay-checkbox--default-checkbox-button)

## Usage

```
yarn add @ebay/ui-core-react
```

### Import JS

```jsx harmony
import {
    EbayCheckbox,
    type CheckboxChangeHandler,
    type CheckboxFocusHandler,
    type CheckboxKeyDownHandler
} from '@ebay/ui-core-react/ebay-checkbox'
```

## Import following styles from Skin

```jsx harmony
import "@ebay/skin/checkbox";
```

## ...or using SCSS/CSS

```jsx harmony
import "@ebay/skin/checkbox.css";
```

```jsx
import { EbayLabel } from "@ebay/ui-core-react/ebay-field";

<EbayCheckbox id="checkbox-1">
    <EbayLabel>Remember me!</EbayLabel>
</EbayCheckbox>;
```

## Attributes

| Name             | Type     | Stateful | Description                                                                                                                                                                        | Data                                                          |
| ---------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | --- |
| `size`           | String   | No       | Either `large` or `regular` (default). Sets the checkbox icon size. For mweb this should be set to `large`. (Note: The dimensions of the radio will not change, but only the icon) |
| `disabled`       | Boolean  | No       |                                                                                                                                                                                    |
| `checked`        | Boolean  | No       | indicates the checked value of the input element, required for a controlled component.                                                                                             |
| `defaultChecked` | Boolean  | No       | indicates the default checked input element value. Use when the component is not controlled.                                                                                       |
| `onChange`       | Function | -        | Callback fired on change                                                                                                                                                           | `(event: ChangeEvent, { value: string, checked: Boolean })`   |     |
| `onFocus`        | Function | -        | Callback fired when button is focused                                                                                                                                              | `(event: FocusEvent, { value: string, checked: Boolean })`    |     |
| `onKeyDown`      | Function | -        | Callback fired when key is pressed                                                                                                                                                 | `(event: KeyboardEvent, { value: string, checked: Boolean })` |     |

It supports all the events supported by an input element (e.g. `onClick`)
Note: For this component, `className`/`style` are applied to the root tag, while all other HTML attributes are applied to the `input` tag.
