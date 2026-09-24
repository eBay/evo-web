# ebay-segmented-buttons → evo-segmented-buttons

`EvoSegmentedButtons` uses a stable value for each named `EvoSegmentedButton` child. The parent owns the selection; children no longer receive a `selected` prop.

**Before:**

```tsx
import {
  EbaySegmentedButton,
  EbaySegmentedButtons,
} from "@ebay/ui-core-react/ebay-segmented-buttons";

<EbaySegmentedButtons onChange={(_, { value }) => setView(value)}>
  <EbaySegmentedButton value="grid" selected>
    Grid
  </EbaySegmentedButton>
  <EbaySegmentedButton value="list">List</EbaySegmentedButton>
</EbaySegmentedButtons>;
```

**After:**

```tsx
import {
  EvoSegmentedButton,
  EvoSegmentedButtons,
} from "@evo-web/react/segmented-buttons";

<EvoSegmentedButtons
  a11yText="Listing view"
  defaultSelected="grid"
  onSelectedChange={setView}
>
  <EvoSegmentedButton value="grid">Grid</EvoSegmentedButton>
  <EvoSegmentedButton value="list">List</EvoSegmentedButton>
</EvoSegmentedButtons>;
```

| ebayui-core-react                   | evo-react                                     | Change                                                                                                                |
| ----------------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `selected` on a child               | `defaultSelected` or `selected` on the parent | Selection is identified by the child's required `value`. Use `selected` with `onSelectedChange` for controlled state. |
| `onChange(event, { index, value })` | `onSelectedChange(value)`                     | The callback receives the stable value and fires only when selection changes.                                         |
| Icon among `children`               | `icon={<EvoIcon… />}` on the child            | Text remains in `children`; the icon gets Skin's button cell wrapper.                                                 |
| `size="regular"`                    | Omit `size`                                   | Regular is the default; `"large"` remains available.                                                                  |
| No list label prop                  | `a11yText` or `a11yLabelId`                   | Name the button list for assistive technology.                                                                        |

Each segment still renders a native `<button>` within an `<li>` and uses `aria-current="true"` for the current choice. Native button keyboard behavior is unchanged.
