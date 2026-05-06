# ebay-accordion → evo-accordion

This component has a **new id-based composite API** in evo-react. The old child-scanning `<EbayDetails>` API is replaced by accordion-specific named sub-components.

**Before:**

```tsx
import {
  EbayAccordion,
  EbayDetails,
} from "@ebay/ebayui-core-react/ebay-accordion";

<EbayAccordion autoCollapse onToggle={handler}>
  <EbayDetails text="Item 1">Content 1</EbayDetails>
  <EbayDetails text="Item 2">Content 2</EbayDetails>
</EbayAccordion>;
```

**After:**

```tsx
import {
  EvoAccordion,
  EvoAccordionItem,
  EvoAccordionSummary,
  EvoAccordionLabel,
  EvoAccordionContent,
} from "@evo-web/react/accordion";

{
  /* No autoCollapse → multi-open mode */
}
<EvoAccordion defaultOpen={[]} onOpenChange={handler}>
  <EvoAccordionItem id="0">
    <EvoAccordionSummary>
      <EvoAccordionLabel>Item 1</EvoAccordionLabel>
    </EvoAccordionSummary>
    <EvoAccordionContent>Content 1</EvoAccordionContent>
  </EvoAccordionItem>
  <EvoAccordionItem id="1">
    <EvoAccordionSummary>
      <EvoAccordionLabel>Item 2</EvoAccordionLabel>
    </EvoAccordionSummary>
    <EvoAccordionContent>Content 2</EvoAccordionContent>
  </EvoAccordionItem>
</EvoAccordion>;
```

**Prop changes:**

| ebayui-core-react                   | evo-react                                      | Notes                                                                                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<EbayDetails>` children            | `<EvoAccordionItem id>` sub-components         | Replace each child details with an accordion details and use string ids from the original child order (`"0"`, `"1"`, …) by default                                                                     |
| `autoCollapse` present              | `open` / `defaultOpen` as a single string id   | Single `string` (or `undefined`) means one item open at a time. Omit `open`/`defaultOpen` unless an item was explicitly open on load.                                                                  |
| `autoCollapse` absent               | `defaultOpen={[]}` (or controlled `open={[]}`) | Without `autoCollapse`, the old accordion allowed multiple items open. Use the array form to preserve that behavior. Always set at least `defaultOpen={[]}` so evo-react knows to use multi-open mode. |
| `onToggle(event, { open, index })`  | `onOpenChange(open)` on `<EvoAccordion>`       | Accordion-level callback receives only the new open id or id array, no event                                                                                                                           |
| `onToggle` on `<EbayDetails>` child | `onOpenChange(open)` on `<EvoAccordionItem>`   | Item-level `onToggle` moves to `onOpenChange`; receives `boolean` (the new open state of that item)                                                                                                    |
| `aria-roledescription` default prop | `a11yText`                                     | Rename accessible role description prop; default remains `"accordion"`                                                                                                                                 |
| `size`                              | `size`                                         | Same values: `"regular" \| "large"`                                                                                                                                                                    |

**Important:**

- If `autoCollapse` was **absent**: always use `defaultOpen={[]}` (or `open={[]}` for controlled) to preserve multi-open behavior. Add item ids to the array only if those items were explicitly open on load.
- If `autoCollapse` was **present**: use the single-string form (`defaultOpen` / `open` as `string | undefined`). Only set a value if an item was explicitly open on load; otherwise omit both props.

**Content wrapping:** Only wrap `EvoAccordionContent` children in a `<p>` tag if the original content was already inside a `<p>`. Do not add paragraph tags that were not there before.
