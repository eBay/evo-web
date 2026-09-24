# EvoStarRating

Replace `EbayStarRating` with `EvoStarRating` from `@evo-web/react/star-rating`.

`value` changes from a string such as `"3-5"` to a number such as `3.5`, matching Evo Marko. Values are clamped to `0`–`5` and rounded to the nearest half star. `a11yText` is optional because the component now supplies a rating label; override it for context. The div, five star icons, `role="img"`, and Skin data attribute remain.

```tsx
// Before
<EbayStarRating value="3-5" a11yText="Seller rating: 3.5 out of 5" />

// After
<EvoStarRating value={3.5} a11yText="Seller rating: 3.5 out of 5" />
```
