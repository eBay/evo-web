# ebay-filter-chip → evo-filter-chip

## Import path

```diff
- import { EbayFilterChip } from "@ebay/ui-core-react/ebay-filter-chip";
+ import { EvoFilterChip } from "@evo-web/react/filter-chip";
```

## Prop changes

| ebayui-core-react                        | evo-react                                        | Notes                                                                                                 |
| ---------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `expanded`                               | `open`                                           | Controlled open state for the menu variant.                                                           |
| `defaultExpanded`                        | `defaultOpen`                                    | Initial uncontrolled open state for the menu variant.                                                 |
| `a11ySelectedText`                       | `a11ySelectedText`                               | No longer defaults to `"Filter Applied"` and is required with `href`; pass localized text explicitly. |
| `onClick(event, { selected, expanded })` | `onClick(event, data)`                           | Menu variants receive `{ open }`; default, expressive, and anchor variants receive `{ selected }`.    |
| `FilterChipEvent`                        | `FilterChipSelectedEvent \| FilterChipOpenEvent` | Narrow event data using `"selected" in data` or `"open" in data`.                                     |
