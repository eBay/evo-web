# ebay-filter-input → evo-filter-input

Import `EvoFilterInput` from `@evo-web/react/filter-input`. Give the search box an accessible name and provide the ID of the filtered results element.

| ebayui-core-react                                            | evo-react                 | Change                                                                      |
| ------------------------------------------------------------ | ------------------------- | --------------------------------------------------------------------------- |
| `a11yClearButton`                                            | `a11yClearButtonText`     | Names and enables the clear button.                                         |
| Optional `a11yControlsId`                                    | Required `a11yControlsId` | The results element must have this ID.                                      |
| `onInputChange(event, { value })`                            | `onValueChange(value)`    | Reports typing and clearing.                                                |
| `onClear`                                                    | `onValueChange("")`       | One value callback handles both actions.                                    |
| `inputRef`                                                   | `ref`                     | React 19 passes the native input ref.                                       |
| Legacy `onChange` and other event callbacks with `{ value }` | Native React events       | `onChange` fires while typing; read `event.currentTarget.value`.            |
| Optional `placeholder`                                       | Required `placeholder`    | Supply the search hint explicitly. The runtime fallback remains `"Filter"`. |

`size="small"` and `size="large"` retain their filter classes. The input still renders `type="search"` with a leading search icon; the clear button is present only when named.

```tsx
import { EvoFilterInput } from "@evo-web/react/filter-input";

<EvoFilterInput
  a11yControlsId="filtered-items"
  a11yClearButtonText="Clear filter"
  aria-label="Filter items"
  placeholder="Filter items"
  value={filter}
  onValueChange={setFilter}
/>;
<ul id="filtered-items">...</ul>;
```
