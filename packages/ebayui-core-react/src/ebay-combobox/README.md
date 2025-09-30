# EbayCombobox

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/form-input-ebay-combobox--docs)

## Usage

### Import JS

```jsx harmony
import { EbayCombobox, EbayComboboxOption, EbayComboboxButton } from "@ebay/ui-core-react/ebay-combobox";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/combobox";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/combobox.css";
```

```jsx harmony
<EbayCombobox>
    <EbayComboboxButton>
        <EbayIconClear16 />
    </EbayComboboxButton>
    <EbayComboboxOption>Option 1</EbayComboboxOption>
    <EbayComboboxOption>Option 2</EbayComboboxOption>
    <EbayComboboxOption>Option 3</EbayComboboxOption>
</EbayCombobox>
```

## Attributes

| Name                  | Type     | Required | Description                                                                                                                                                                                   | Data                                                            |
| --------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `borderless`          | Boolean  | No       | whether button has borders                                                                                                                                                                    |                                                                 |
| `disabled`            | Boolean  | No       | sets the disabled attribute of the input                                                                                                                                                      |                                                                 |
| `expanded`            | Boolean  | No       | sets whether the listbox is expanded                                                                                                                                                          |                                                                 |
| `autocomplete`        | String   | No       | default is `none`; available values are `none` or `list`. For list, will automatically filter results while typing.                                                                           |                                                                 |
| `listSelection`       | Boolean  | No       | default is `automatic`; available values are `automatic`, `manual`. If set to automatic will automatically fill in the input with the currently highlighted item when using the up/down keys. |                                                                 |
| `floatingLabel`       | Boolean  | No       | The label to show on the combobox which moves up when focused                                                                                                                                 |                                                                 |
| `fluid`               | Boolean  | No       | If true, combobox will span the entire width of it's container                                                                                                                                |                                                                 |
| `onCollapse`          | Function | No       | Collapsed content                                                                                                                                                                             |                                                                 |
| `onExpand`            | Function | No       | Expanded content                                                                                                                                                                              |                                                                 |
| `onFloatingLabelInit` | Function | No       | when floating label finishes initializing                                                                                                                                                     |                                                                 |
| `onChange`            | Function | No       | same as the `onChange` event, which fires on blur                                                                                                                                             | `event, { currentInputValue, selectedOption: { text, value } }` |
| `onInputChange`       | Function | No       | same as the `onInpuChanget` event, which fires with every keypress                                                                                                                            | `event, { currentInputValue, selectedOption: { text, value } }` |
| `onSelect`            | Function | No       | similar to a `<select>`, which fires when an option is clicked or selected                                                                                                                    | `event, { currentInputValue, selectedOption: { text, value } }` |
| `onFocus`             | Function | No       | same as the `onFocus` event, which fires on focus                                                                                                                                             | `event, { currentInputValue, selectedOption: { text, value } }` |
