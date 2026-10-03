# ebay-chips-combobox → evo-chips-combobox

`EvoChipsCombobox` composes `EvoCombobox` and `EvoChip`. It accepts named `EvoChipsComboboxOption` children, which hide themselves when selected. It uses `selected` / `defaultSelected` and `onSelectedChange` for chip values. Typing text and pressing Enter adds a custom value.

```tsx
import {
  EvoChipsCombobox,
  EvoChipsComboboxOption,
} from "@evo-web/react/chips-combobox";

<EvoChipsCombobox
  aria-label="Item features"
  selected={selected}
  onSelectedChange={setSelected}
  a11yDeleteButtonText="Remove"
>
  <EvoChipsComboboxOption text="Free shipping" />
  <EvoChipsComboboxOption text="Local pickup" />
</EvoChipsCombobox>;
```

- Replace `EbayComboboxOption` with `EvoChipsComboboxOption`.
- Replace legacy `onChange(event, { selected })` with `onSelectedChange(selected)`.
- Replace `error` with native `aria-invalid` for both input validity and Skin error styling.
- `ref` points to the native input. The outer `<span>` retains the selected chip list and combobox.
