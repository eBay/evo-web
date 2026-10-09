# ebay-filter → evo-filter

Import `EvoFilter` from `@evo-web/react/filter`. It keeps the legacy `filter-button` and `filter-link` markup and selection callback shape. `EvoFilterChip` is a separate control with different Skin classes.

| ebayui-core-react              | evo-react                    | Change                                               |
| ------------------------------ | ---------------------------- | ---------------------------------------------------- |
| `EbayFilter`                   | `EvoFilter`                  | Component and subpath rename.                        |
| `selected` / `defaultSelected` | Same props                   | Controlled or initial selection as before.           |
| `onClick(event, { selected })` | Same callback                | Reports the next selected state.                     |
| Disabled link with `href`      | Disabled link without `href` | Prevents navigation and adds `aria-disabled="true"`. |

```tsx
import { EvoFilter } from "@evo-web/react/filter";

<EvoFilter
  selected={freeShipping}
  onClick={(_, data) => setFreeShipping(data.selected)}
>
  Free shipping
</EvoFilter>;
```
