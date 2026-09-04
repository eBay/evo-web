# evo-progress-bar-expressive migration guide

`EbayProgressBarExpressive` becomes `EvoProgressBarExpressive`.

- Import from `@evo-web/react/progress-bar-expressive`.
- Replace `aria-label` with `a11yText`.
- `EbayProgressBarExpressiveMessage` is removed.
- Replace message children with the `messages` descriptor array.
- Move `duration` into each message descriptor.

```tsx
// Before
import {
  EbayProgressBarExpressive,
  EbayProgressBarExpressiveMessage,
} from "@ebay/ui-core-react/ebay-progress-bar-expressive";

<EbayProgressBarExpressive aria-label="Loading">
  <EbayProgressBarExpressiveMessage duration={2000}>
    Processing
  </EbayProgressBarExpressiveMessage>
</EbayProgressBarExpressive>;

// After
import { EvoProgressBarExpressive } from "@evo-web/react/progress-bar-expressive";

<EvoProgressBarExpressive
  a11yText="Loading"
  messages={[{ content: "Processing", duration: 2000 }]}
/>;
```
