# EvoStarRatingSelect

Replace `EbayStarRatingSelect` with `EvoStarRatingSelect` from `@evo-web/react/star-rating-select`.

`value` changes from a string to a number from `0` to `5`. Use `defaultValue` for an uncontrolled initial selection or `value` with `onChange` for controlled selection. `onChange(event, { value })`, `onFocus(event, { value })`, and `onKeyDown(event, { value })` keep their event and data arguments. `onChange` now fires for native keyboard selection as well as pointer selection. Each radio gets a default English label; translate with `a11yStarText` when needed. `a11yText` defaults to `"Rating"`; pass a specific group name or use `a11yText={null}` with `aria-labelledby` pointing to visible text.

```tsx
// Before
<EbayStarRatingSelect
  value="3"
  a11yText="Rate your purchase"
  a11yStarText={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
/>

// After
<EvoStarRatingSelect
  defaultValue={3}
  a11yText="Rate your purchase"
/>
```
