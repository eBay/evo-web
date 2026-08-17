# ebay-checkbox → evo-checkbox

## Prop changes

| ebayui-core-react                                                                      | evo-react                 | Notes                                                                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `inputRef`                                                                             | `ref`                     | React 19 forwards the native input ref directly.                                                                                           |
| `size="default"`                                                                       | _(omit `size`)_           | `size` now accepts only `"large"`; omission selects the default size.                                                                      |
| Legacy event callbacks                                                                 | Native React callbacks    | `onChange`, `onFocus`, and `onKeyDown` no longer receive the second `{ value, checked }` argument. Read values from `event.currentTarget`. |
| `EbayLabel` child                                                                      | External native `<label>` | The checkbox no longer scans, clones, or positions child labels. Associate a label with `htmlFor` and the checkbox `id`.                   |
| `type`                                                                                 | Removed                   | `EvoCheckbox` always renders `type="checkbox"`.                                                                                            |
| `CheckboxChangeHandler`, `CheckboxFocusHandler`, `CheckboxKeyDownHandler`, `EventData` | Removed                   | Use the corresponding native React input event types.                                                                                      |

## Basic usage

```diff
- import { EbayCheckbox } from "@ebay/ui-core-react/ebay-checkbox";
- import { EbayLabel } from "@ebay/ui-core-react/ebay-field";
+ import { EvoCheckbox } from "@evo-web/react/checkbox";

- <EbayCheckbox id="remember-me" inputRef={inputRef} size="default">
-   <EbayLabel>Remember me</EbayLabel>
- </EbayCheckbox>
+ <span className="field">
+   <EvoCheckbox
+     className="field__control"
+     id="remember-me"
+     ref={inputRef}
+   />
+   <label
+     className="field__label field__label--end"
+     htmlFor="remember-me"
+   >
+     Remember me
+   </label>
+ </span>
```

## Native change handler

```diff
- onChange={(event, { value, checked }) => update(value, checked)}
+ onChange={(event) => {
+   update(event.currentTarget.value, event.currentTarget.checked);
+ }}
```
