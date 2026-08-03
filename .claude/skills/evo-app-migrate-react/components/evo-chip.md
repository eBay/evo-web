# ebay-chip → evo-chip

## Import path

```diff
- import { EbayChip } from "@ebay/ui-core-react/ebay-chip";
+ import {
+   EvoChip,
+   EvoChipDeleteButton,
+   EvoChipText,
+ } from "@evo-web/react/chip";
```

## Composition and prop changes

```diff
- <EbayChip
-   a11yDeleteButtonText="Delete Football"
-   onDelete={handleDelete}
-   disabled={disabled}
- >
-   Football
- </EbayChip>
+ <EvoChip>
+   <EvoChipText>Football</EvoChipText>
+   <EvoChipDeleteButton
+     a11yText="Delete Football"
+     onClick={handleDelete}
+     disabled={disabled}
+   />
+ </EvoChip>
```

- Wrap chip text in `EvoChipText`.
- Add `EvoChipDeleteButton` only when the chip is deletable.
- Move `a11yDeleteButtonText` to `EvoChipDeleteButton.a11yText`; it defaults to `"delete"`.
- Rename `onDelete` to `EvoChipDeleteButton.onClick`.
- Move `disabled` to `EvoChipDeleteButton.disabled`.
- Pass delete-button HTML attributes to `EvoChipDeleteButton`; root span attributes remain on `EvoChip`.
