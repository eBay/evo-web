# EbayTriStateCheckbox

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-input-ebay-tri-state-checkbox--default)

## Usage

```
yarn add @ebay/ui-core-react
```

### Import JS

```jsx harmony
import {
    EbayTriStateCheckbox,
    type TriStateCheckboxChangeHandler,
    type TriStateCheckboxFocusHandler,
    type TriStateCheckboxKeyDownHandler
} from '@ebay/ui-core-react/ebay-tri-state-checkbox'
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
import { EbayLabel } from '@ebay/ui-core-react/ebay-field';

<EbayTriStateCheckbox id="checkbox-1" size="large">
```

## Attributes

| Name        | Type          | Stateful | Description                                                                                                                                                                        | Data                                                                |
| ----------- | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | --- |
| `size`      | String        | No       | Either `large` or `regular` (default). Sets the checkbox icon size. For mweb this should be set to `large`. (Note: The dimensions of the radio will not change, but only the icon) |
| `disabled`  | Boolean       | No       |                                                                                                                                                                                    |
| `checked`   | CheckboxState | No       | indicates the checked value of the input element, which can be either "true", "false" or "mixed"                                                                                   |                                                                     |
| `onChange`  | Function      | -        | Callback fired on change                                                                                                                                                           | `(event: ChangeEvent, { value: string, checked: CheckboxState })`   |     |
| `onFocus`   | Function      | -        | Callback fired when button is focused                                                                                                                                              | `(event: FocusEvent, { value: string, checked: CheckboxState })`    |     |
| `onKeyDown` | Function      | -        | Callback fired when key is pressed                                                                                                                                                 | `(event: KeyboardEvent, { value: string, checked: CheckboxState })` |     |

It supports all the events supported by an input element (e.g. `onClick`)
Note: For this component, `className`/`style` are applied to the root tag, while all other HTML attributes are applied to the `input` tag.
