# ebay-number-input → evo-number-input

Use `EvoNumberInput` for numeric inputs with increment and decrement controls.

## API changes

- `EbayNumberInput` becomes `EvoNumberInput` from `@evo-web/react/number-input`.
- `aria-label` becomes `a11yText`; `label` remains a string.
- `onDeleteClick` becomes `onDelete`, which receives only the click event.
- `onInputChange` is removed. Use native `onChange`, which fires only for direct input changes.
- `onChange(event, { value })` becomes `onChange(event)`; read the value from `event.currentTarget.value`.
- `onIncrement(event, { value })` becomes `onIncrement(event, value)`.
- `onDecrement(event, { value })` becomes `onDecrement(event, value)`.
- Focus, blur, invalid, and keyboard callbacks now use native React event signatures.
- `value` is controlled; use `defaultValue` for uncontrolled initialization.
- The default value changes from legacy `1` to the resolved minimum.
- `inputSize="default"` becomes `"regular"` or can be omitted.
- Legacy textbox-only props such as `multiline`, `opaqueLabel`, `onFloatingLabelInit`, `onButtonClick`, `forwardedRef`, and `inputRef` are unsupported.
- React 19 `ref` targets the native input.

## Before

```tsx
import { EbayNumberInput } from "@ebay/ui-core-react/ebay-number-input";

<EbayNumberInput
  aria-label="Item quantity"
  value={quantity}
  onChange={(_, { value }) => setQuantity(value)}
  onDeleteClick={handleDelete}
/>;
```

## After

```tsx
import { EvoNumberInput } from "@evo-web/react/number-input";

<EvoNumberInput
  a11yText="Item quantity"
  value={quantity}
  onChange={(event) => setQuantity(Number(event.currentTarget.value))}
  onIncrement={(_event, nextValue) => setQuantity(nextValue)}
  onDecrement={(_event, nextValue) => setQuantity(nextValue)}
  onDelete={handleDelete}
/>;
```

For uncontrolled initialization, replace `value` with `defaultValue`.

## Controlled migration

Paddle callbacks provide the proposed value directly, and paddle clicks do not
fire `onChange`:

```tsx
<EvoNumberInput
  a11yText="Item quantity"
  value={quantity}
  onChange={(event) => {
    setQuantity(Number(event.currentTarget.value));
  }}
  onIncrement={(_event, nextValue) => {
    setQuantity(nextValue);
  }}
  onDecrement={(_event, nextValue) => {
    setQuantity(nextValue);
  }}
/>
```
