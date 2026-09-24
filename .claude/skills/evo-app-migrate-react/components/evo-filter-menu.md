# EvoFilterMenu

Import `EvoFilterMenu`, `EvoFilterMenuItems`, `EvoFilterMenuItem`, and `EvoFilterMenuFooterButton` from `@evo-web/react/filter-menu`.

- Move items into `EvoFilterMenuItems` and place the footer button after it. The parent no longer scans or clones children.
- Give each item a distinct `value`. The parent owns selection through `selected` / `defaultSelected` and `onSelectedChange`. Remove item `checked` and parent `onChange`; these props depended on child position. `onSelect` on an item reports the next selection.
- The parent accepts `a11yText` or `a11yLabelId` to name its menu. These replace raw `aria-label` and `aria-labelledby` on the parent.
- Rename `searchHeaderValue` to `searchValue`; `defaultSearchValue` supplies an initial uncontrolled value. `onSearchChange` receives the search string.
- `onFooterClick` and `onFormSubmit` receive `{ selected: string[] }`. The previous payload included child indices, which are unstable when items are filtered or reordered.
- `variant="form"` uses native inputs and submits through `EvoFilterMenuFooterButton`. The non-form menu uses arrow navigation and typeahead.
- Remove `forwardedRef`; React 19 accepts `ref` directly.

```tsx
// Before
<EbayFilterMenu onChange={handleChange} aria-label="Delivery filters">
  <EbayFilterMenuItem value="free" checked>Free shipping</EbayFilterMenuItem>
  <EbayFilterMenuFooterButton>Apply</EbayFilterMenuFooterButton>
</EbayFilterMenu>

// After
<EvoFilterMenu
  a11yText="Delivery filters"
  defaultSelected={["free"]}
  onSelectedChange={handleSelectedChange}
>
  <EvoFilterMenuItems>
    <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
  </EvoFilterMenuItems>
  <EvoFilterMenuFooterButton>Apply filters</EvoFilterMenuFooterButton>
</EvoFilterMenu>
```
