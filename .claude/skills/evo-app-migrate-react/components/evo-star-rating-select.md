# EvoStarRatingSelect

Replace `EbayStarRatingSelect` with `EvoStarRatingSelect` from `@evo-web/react/star-rating-select`.

## API changes

- `value` changes from a string to a number from `0` to `5`. Use `defaultValue` for an uncontrolled initial selection or `value` with `onValueChange` for controlled selection.
- `onChange(event, { value })` becomes `onValueChange(value)`. It fires for native keyboard selection as well as pointer selection.
- `onFocus(event, { value })` and `onKeyDown(event, { value })` are removed. Native `onFocus` and `onKeyDown` on the root bubble from the radios; read the star from `event.target.value` if needed.
- `a11yText` is required. Pass a specific group name, or `a11yText={null}` with `aria-labelledby` pointing to visible text.
- `a11yStarText` is required and must contain exactly five translated labels, one per star.

```tsx
// Before
<EbayStarRatingSelect
  value="3"
  a11yText="Rate your purchase"
  a11yStarText={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
  onChange={(_, { value }) => setRating(value)}
/>

// After
<EvoStarRatingSelect
  value={rating}
  a11yText="Rate your purchase"
  a11yStarText={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
  onValueChange={setRating}
/>
```
