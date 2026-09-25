# EvoStarRating

Replace `EbayStarRating` with `EvoStarRating` from `@evo-web/react/star-rating`.

`value` changes from a string such as `"3-5"` to a number such as `3.5`, matching Evo Marko. Values are clamped to `0`–`5` and rounded to the nearest half star. `a11yText` is required, matching Evo Marko: pass a localized label, or pass `null` only when `aria-labelledby` or other alternative accessibility information names the rating. The div, five star icons, `role="img"`, and Skin data attribute remain.

```tsx
// Before
<EbayStarRating value="3-5" a11yText="Seller rating: 3.5 out of 5" />

// After
<EvoStarRating value={3.5} a11yText="Seller rating: 3.5 out of 5" />
```
