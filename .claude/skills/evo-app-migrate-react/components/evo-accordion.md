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

<EvoAccordion open="0" onOpenChange={handler}>
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

| ebayui-core-react                   | evo-react                                 | Notes                                                                                                                           |
| ----------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `<EbayDetails>` children            | `<EvoAccordionItem id>` sub-components    | Replace each child details with an accordion item and use string ids from the original child order (`"0"`, `"1"`, …) by default |
| `autoCollapse`                      | `open` / `defaultOpen` as a single id     | Single `string` open value means one item may be open at a time                                                                 |
| no equivalent                       | `open` / `defaultOpen` as an array of ids | `string[]` open value enables multiple open items                                                                               |
| `onToggle(event, { open, index })`  | `onOpenChange(open)`                      | Callback receives only the new open id/id array, no event                                                                       |
| `aria-roledescription` default prop | `a11yText`                                | Rename accessible role description prop; default remains `"accordion"`                                                          |
| `size`                              | `size`                                    | Same values: `"regular" \| "large"`                                                                                             |

**Important:** `open` is for controlled usage and `defaultOpen` is for uncontrolled usage. During migration, use string ids from the original child order (`"0"`, `"1"`, …) by default. If the app already has stable domain string ids, those may be used instead.
