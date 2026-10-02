# EvoListboxButton

Import `EvoListboxButton` from `@evo-web/react/listbox-button` and pass an `options` array instead of `EbayListboxButtonOption` children. Each option needs a stable `value` and visible `text`, with optional `icon`, `description`, and `disabled` fields.

```diff
- <EbayListboxButton value="CA" onChange={handleChange}>
-   <EbayListboxButtonOption value="US">United States</EbayListboxButtonOption>
-   <EbayListboxButtonOption value="CA">Canada</EbayListboxButtonOption>
- </EbayListboxButton>
+ <EvoListboxButton
+   prefixLabel="Shipping region"
+   a11ySelectedText="selected"
+   options={[
+     { value: "US", text: "United States" },
+     { value: "CA", text: "Canada" },
+   ]}
+   defaultSelected="CA"
+   onSelectedChange={(value) => setRegion(value)}
+ />
```

`selected` now holds an option value, rather than a zero-based index. `defaultSelected` initializes uncontrolled selection. `onSelectedChange(value)` replaces `onChange(event, { index, selected, wasClicked })`. `open` and `onOpenChange` replace `onExpand` and `onCollapse`; `defaultOpen` initializes uncontrolled visibility. `a11ySelectedText` is required.

`aria-invalid` replaces Marko's `invalid` styling prop and is applied to the native button. `hasError` remains a visual override. `collapseOnSelect` defaults to `true`, preserving the legacy close behavior. The outer wrapper is a `<div>` when `truncate` is true without `fluid`, matching Evo Marko; otherwise it is a `<span>`.

`maxHeight` moves to CSS on `.listbox-button__listbox`. `name` belongs to the hidden select; `buttonName` names the visible button. `prefixId`, `prefixLabel`, `postfixLabel`, `floatingLabel`, `unselectedText`, `listSelection`, `fluid`, `borderless`, `variant`, `strategy`, `split`, `truncate`, and `a11yDescribedBy` remain available. Supply an accessible name through `a11yText`, `prefixLabel`, `floatingLabel`, or `prefixId`.
