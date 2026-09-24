# EvoField

Replace `EbayField`, `EbayLabel`, and `EbayFieldDescription` imports with `EvoField`, `EvoLabel`, and `EvoFieldDescription` from `@evo-web/react/field`.

No prop changes. Global renames from Step 2 are sufficient. Native React 19 refs and pass-through attributes are now available on the field and description wrappers. The field supplies layout only: connect `EvoLabel` with `htmlFor` and the control's `id`, and connect `EvoFieldDescription` with `aria-describedby`.

```tsx
<EvoField layout="block">
  <EvoLabel htmlFor="listing-title" stacked required>
    Listing title
  </EvoLabel>
  <input id="listing-title" required aria-describedby="title-help" />
  <EvoFieldDescription id="title-help">
    Include the brand and model.
  </EvoFieldDescription>
</EvoField>
```
