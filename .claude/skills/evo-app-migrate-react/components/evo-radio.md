# ebay-radio → evo-radio

## Prop changes

| ebayui-core-react          | evo-react                 | Notes                                                                                                                             |
| -------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `size="default"`           | _(omit `size`)_           | `size` now accepts only `"large"`; omission selects the default size.                                                             |
| Legacy event callbacks     | Native React callbacks    | `onChange`, `onFocus`, and `onKeyDown` no longer receive the second `{ value }` argument. Read values from `event.currentTarget`. |
| `EbayLabel` child          | External native `<label>` | The radio no longer scans, clones, or positions child labels. Associate a label with `htmlFor` and the radio `id`.                |
| `children`                 | Removed                   | `EvoRadio` does not accept or render children.                                                                                    |
| `type`                     | Removed                   | `EvoRadio` always renders `type="radio"`.                                                                                         |
| Legacy event handler types | Native React event types  | Use the corresponding native React input event types instead of handlers that add a second event-data argument.                   |
| `ref`                      | `ref`                     | React 19 forwards the ref directly to the native input.                                                                           |

## Basic usage

```diff
- import { EbayRadio } from "@ebay/ui-core-react/ebay-radio";
- import { EbayLabel } from "@ebay/ui-core-react/ebay-field";
+ import { EvoRadio } from "@evo-web/react/radio";

- <EbayRadio id="delivery" size="default">
-   <EbayLabel>Delivery</EbayLabel>
- </EbayRadio>
+ <span className="field">
+   <EvoRadio className="field__control" id="delivery" />
+   <label
+     className="field__label field__label--end"
+     htmlFor="delivery"
+   >
+     Delivery
+   </label>
+ </span>
```

## Native change handler

```diff
- onChange={(event, { value }) => update(value)}
+ onChange={(event) => update(event.currentTarget.value)}
```
