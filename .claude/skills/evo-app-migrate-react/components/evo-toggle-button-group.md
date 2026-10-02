# EvoToggleButtonGroup

Replace `EbayToggleButtonGroup` with `EvoToggleButtonGroup` from `@evo-web/react/toggle-button-group`. Replace each `EbayToggleButton` child with an `EvoToggleButtonGroupItem` and give it a stable `value`. The item renders the same `<li><button>` structure and owns its group's pressed state without child scanning.

`variant` stays `"checkbox"`, `"radio"`, or `"radio-toggle"`. Use `defaultSelected` for initial pressed values and `selected` with `onSelectedChange` for controlled selection. In checkbox mode these values are arrays; in radio and radio-toggle modes they are one value or `null`. The old `onChange(event, { pressedButtonsIndex })` callback is replaced by `onSelectedChange(selected)` with stable item values. `a11yText`, `a11yLabelId`, layout, and column props keep their roles.

```tsx
// Before
<EbayToggleButtonGroup
  variant="radio"
  a11yText="Listing condition"
  onChange={(event, { pressedButtonsIndex }) => update(pressedButtonsIndex)}
>
  <EbayToggleButton title="New" />
  <EbayToggleButton title="Used" />
</EbayToggleButtonGroup>

// After
<EvoToggleButtonGroup
  variant="radio"
  a11yText="Listing condition"
  onSelectedChange={(selected) => update(selected)}
>
  <EvoToggleButtonGroupItem value="new" title="New" />
  <EvoToggleButtonGroupItem value="used" title="Used" />
</EvoToggleButtonGroup>
```
