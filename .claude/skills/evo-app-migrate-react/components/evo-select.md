# ebay-select → evo-select

Import `EvoSelect`, `EvoSelectOption`, and (when needed) `EvoSelectOptionGroup` from `@evo-web/react/select`. The native `<select>` and option markup remain in place.

| ebayui-core-react                      | evo-react                                       | Change                                                                                                         |
| -------------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `inputSize="default"`                  | `size="regular"` or omit                        | The visual size follows Evo Marko's name.                                                                      |
| `inputSize="large"`                    | `size="large"`                                  | The large Skin treatment remains.                                                                              |
| `invalid`                              | `aria-invalid="true"`                           | Skin styles the native invalid attribute.                                                                      |
| `forwardedRef`                         | `ref`                                           | React 19 passes the native select ref.                                                                         |
| `onChange(event, { selected, index })` | `onChange(event)` and/or `onValueChange(value)` | Native `onChange` receives only the event. `onValueChange` reports a string, or a string array for `multiple`. |
| `EbaySelectOption optgroup="..."`      | `EvoSelectOptionGroup label="..."`              | Wrap related options in an explicit native group.                                                              |

```tsx
import {
  EvoSelect,
  EvoSelectOption,
  EvoSelectOptionGroup,
} from "@evo-web/react/select";

<EvoSelect floatingLabel="Shipping method" onValueChange={setShipping}>
  <EvoSelectOption value="">Choose</EvoSelectOption>
  <EvoSelectOptionGroup label="Domestic">
    <EvoSelectOption value="standard">Standard</EvoSelectOption>
    <EvoSelectOption value="express">Express</EvoSelectOption>
  </EvoSelectOptionGroup>
</EvoSelect>;
```

`className` and `style` still apply to the outer `select` wrapper. Native select and option attributes pass through to their elements.
