# ebay-tri-state-checkbox → evo-tri-state-checkbox

Import `EvoTriStateCheckbox` from `@evo-web/react/tri-state-checkbox`. Give the native checkbox a visible label or another accessible name.

| ebayui-core-react                                          | evo-react                                          | Change                                                                                 |
| ---------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `size="default"`                                           | `size="regular"` or omit                           | The base size follows Evo Marko's name.                                                |
| `inputRef`                                                 | `ref`                                              | React 19 passes the native input ref.                                                  |
| `onChange(event, { checked })`                             | `onCheckedChange(checked)`                         | Receives the next state directly. `onChange` now receives the native React event only. |
| Legacy `onFocus` and `onKeyDown` with `{ checked, value }` | Native `onFocus` and `onKeyDown`                   | Read native event values from `event.currentTarget`.                                   |
| No bulk selection props                                    | `values`, `checkedValues`, `onCheckedValuesChange` | Derive and update the parent checkbox from a selected group.                           |

`checked` and `defaultChecked` remain the `"false" | "mixed" | "true"` state strings. `skipMixed` still skips the mixed step for a standalone checkbox. The input now sets its native `indeterminate` property while mixed.

```tsx
import { EvoTriStateCheckbox } from "@evo-web/react/tri-state-checkbox";

<label>
  <EvoTriStateCheckbox
    values={["Camera", "Lens", "Tripod"]}
    checkedValues={selectedItems}
    onCheckedValuesChange={setSelectedItems}
  />
  Select inventory
</label>;
```
