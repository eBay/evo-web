# ebay-details → evo-details

This component has a **new composite API** in evo-react. The flat-prop approach is replaced by named sub-components.

**Before:**

```tsx
import { EbayDetails } from "@ebay/ebayui-core-react/ebay-details";

<EbayDetails
  text="Show me the details!"
  size="small"
  alignment="center"
  leading={<Icon />}
  onToggle={handler}
>
  Content here
</EbayDetails>;
```

**After:**

```tsx
import {
  EvoDetails,
  EvoDetailsSummary,
  EvoDetailsLeading,
  EvoDetailsLabel,
  EvoDetailsContent,
} from "@evo-web/react";

<EvoDetails size="small" alignment="center" onToggle={handler}>
  <EvoDetailsSummary>
    <EvoDetailsLeading>
      <Icon />
    </EvoDetailsLeading>
    <EvoDetailsLabel>Show me the details!</EvoDetailsLabel>
  </EvoDetailsSummary>
  <EvoDetailsContent>Content here</EvoDetailsContent>
</EvoDetails>;
```

**Prop changes:**

| ebayui-core-react        | evo-react                           | Notes                                                                        |
| ------------------------ | ----------------------------------- | ---------------------------------------------------------------------------- |
| `text: string`           | `<EvoDetailsLabel>` sub-component   | Move label text into `<EvoDetailsLabel>` inside `<EvoDetailsSummary>`        |
| `leading?: ReactElement` | `<EvoDetailsLeading>` sub-component | Move leading element into `<EvoDetailsLeading>` inside `<EvoDetailsSummary>` |
| `as?: ElementType`       | `as` prop on `<EvoDetailsContent>`  | Move to the content sub-component                                            |
| `onToggle`               | `onToggle`                          | Same signature: `(event, { open: boolean }) => void`                         |
| `children`               | `<EvoDetailsContent>` children      | Wrap children in `<EvoDetailsContent>`                                       |

**Important:** `<EvoDetailsLeading>` must appear before `<EvoDetailsLabel>` inside `<EvoDetailsSummary>` — order is not enforced by the component.
