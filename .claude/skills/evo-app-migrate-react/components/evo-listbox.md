# EvoListbox

Import `EvoListbox` and its option type from `@evo-web/react/listbox`.

Replace `EbayListboxOption` children and `EbayListboxOptionDescription` with an `options` array. Each option needs a stable `value` and `text`; add `icon`, `description`, or `disabled` as needed.

```diff
- <EbayListbox name="destination" onChange={handleChange}>
-   <EbayListboxOption value="CA" text="Canada">
-     <EbayListboxOptionDescription>International</EbayListboxOptionDescription>
-   </EbayListboxOption>
- </EbayListbox>
+ <EvoListbox
+   name="destination"
+   a11yText="Shipping destination"
+   a11ySelectedText="selected"
+   options={[{ value: "CA", text: "Canada", description: "International" }]}
+   onSelectedChange={(value) => setDestination(value)}
+ />
```

`selected` or `defaultSelected` replaces an option's boolean `selected`. `onSelectedChange(value)` replaces `onChange(event, { index, selected, wasClicked })`. `a11ySelectedText` is required. `a11yText` names the listbox; `aria-labelledby` can reference a visible label instead.

The legacy `maxHeight` prop moves to `style={{ maxHeight }}`. Use the root's `className` for styling; `selectClassName` is removed. `onEscape`, `listSelection`, and `typeaheadTimeoutLength` remain available. Option `onClick` may be placed on the option object.
