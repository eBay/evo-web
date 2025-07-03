# ebay-number-input

The `EbayNumberInput` component provides a numeric input field with increment and decrement buttons. It allows users to easily adjust numeric values within defined boundaries.

## Usage

```jsx
import { EbayNumberInput } from '@ebay/ebayui-core-react';

// Basic usage
<EbayNumberInput />

// With custom min/max values
<EbayNumberInput min={1} max={10} value={5} />

// With a label
<EbayNumberInput label="Quantity" />

// With delete functionality
<EbayNumberInput a11yDeleteText="Delete item" />

// With event handlers
<EbayNumberInput
  onChange={(e, { value }) => console.log('Value changed:', value)}
  onIncrement={(e, { value }) => console.log('Incremented to:', value)}
  onDecrement={(e, { value }) => console.log('Decremented to:', value)}
/>
```

## Props

The `EbayNumberInput` component extends most of the props from `EbayTextbox` with some modifications and additions:

| Name             | Type       | Required | Default    | Description                                                                                                                                            |
| ---------------- | ---------- | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`          | `number`   | No       | `1`        | The current value of the input                                                                                                                         |
| `min`            | `number`   | No       | `1`        | The minimum allowed value                                                                                                                              |
| `max`            | `number`   | No       | `Infinity` | The maximum allowed value                                                                                                                              |
| `label`          | `string`   | No       | `''`       | Label text to display with the input                                                                                                                   |
| `a11yDeleteText` | `string`   | No       | `''`       | Accessibility text for the delete button. When provided, the decrement button will be replaced with a delete button when the value reaches the minimum |
| `onChange`       | `Function` | No       | `() => {}` | Called when the value changes (either through direct input or button clicks)                                                                           |
| `onInputChange`  | `Function` | No       | `() => {}` | Called when the input value changes directly                                                                                                           |
| `onFocus`        | `Function` | No       | `() => {}` | Called when the input receives focus                                                                                                                   |
| `onBlur`         | `Function` | No       | `() => {}` | Called when the input loses focus                                                                                                                      |
| `onKeyDown`      | `Function` | No       | `() => {}` | Called on keydown event                                                                                                                                |
| `onKeyPress`     | `Function` | No       | `() => {}` | Called on keypress event                                                                                                                               |
| `onKeyUp`        | `Function` | No       | `() => {}` | Called on keyup event                                                                                                                                  |
| `onDeleteClick`  | `Function` | No       | `() => {}` | Called when the delete button is clicked (only visible when `a11yDeleteText` is provided and value is at minimum)                                      |
| `onIncrement`    | `Function` | No       | `() => {}` | Called when the increment button is clicked                                                                                                            |
| `onDecrement`    | `Function` | No       | `() => {}` | Called when the decrement button is clicked                                                                                                            |

Additionally, this component inherits all other props from the `EbayTextbox` component except those explicitly overridden above.

## Event Handlers

All event handlers receive two arguments:

1. The original event object
2. An object with a `value` property containing the current numeric value

Example:

```jsx
<EbayNumberInput
    onChange={(event, { value }) => {
        console.log("New value:", value);
    }}
/>
```
