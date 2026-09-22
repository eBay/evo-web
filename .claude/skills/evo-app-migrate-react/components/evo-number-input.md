# ebay-number-input → evo-number-input

Use `EvoNumberInput` for numeric inputs with increment and decrement controls.

## API changes

- `EbayNumberInput` becomes `EvoNumberInput` from `@evo-web/react/number-input`.
- `aria-label` becomes `a11yText`; `label` remains a string.
- `onDeleteClick` becomes `onDelete`, which receives only the click event.
- `onInputChange` is removed.
- `onChange(event, { value })` becomes `onChange(value)`.
- `onIncrement` and `onDecrement` are removed; direct input and paddle changes all call `onChange(value)`.
- Focus, blur, invalid, and keyboard callbacks now use native React event signatures.
- `value` is controlled; use `defaultValue` for uncontrolled initialization.
- The default value changes from legacy `1` to the resolved minimum.
- `inputSize="default"` becomes `"regular"` or can be omitted.
- Legacy textbox-only props such as `multiline`, `opaqueLabel`, `onFloatingLabelInit`, `onButtonClick`, `forwardedRef`, and `inputRef` are unsupported.
- React 19 `ref` targets the native input.

## Basic migration

### Before

```tsx
import { EbayNumberInput } from "@ebay/ui-core-react/ebay-number-input";

<EbayNumberInput
  aria-label="Item quantity"
  value={quantity}
  onChange={(_, { value }) => setQuantity(value)}
  onDeleteClick={handleDelete}
/>;
```

### After

```tsx
import { EvoNumberInput } from "@evo-web/react/number-input";

<EvoNumberInput
  a11yText="Item quantity"
  value={quantity}
  onChange={setQuantity}
  onDelete={handleDelete}
/>;
```

For uncontrolled initialization, replace `value` with `defaultValue`.

## Replacing `onIncrement` and `onDecrement`

When the directional callbacks only synchronized state, replace both with the
single `onChange` callback shown above. When they performed direction-specific
work, compare the next value with the current controlled value.

### Before

```tsx
<EbayNumberInput
  aria-label="Item quantity"
  value={quantity}
  onInputChange={(_, { value }) => setQuantity(value)}
  onIncrement={(_, { value }) => {
    reportQuantityIncrease(value);
    setQuantity(value);
  }}
  onDecrement={(_, { value }) => {
    reportQuantityDecrease(value);
    setQuantity(value);
  }}
/>
```

### After

```tsx
<EvoNumberInput
  a11yText="Item quantity"
  value={quantity}
  onChange={(nextQuantity) => {
    if (nextQuantity > quantity) {
      reportQuantityIncrease(nextQuantity);
    } else if (nextQuantity < quantity) {
      reportQuantityDecrease(nextQuantity);
    }

    setQuantity(nextQuantity);
  }}
/>
```

This detects the direction of any value change, including direct text entry. It
does not identify whether the increment or decrement paddle caused the change.
There is no paddle-specific replacement callback; migrate paddle analytics or
business logic to value-change semantics rather than inferring the input source.
