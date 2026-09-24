# EvoFilterMenuButton migration

Import `EvoFilterMenuButton`, `EvoFilterMenuItems`, `EvoFilterMenuItem`, and `EvoFilterMenuFooterButton` from `@evo-web/react/filter-menu-button`.

- Wrap choices in `EvoFilterMenuItems`. Each choice needs a distinct, stable `value`; the parent no longer scans children or uses child indices for selection.
- Move item `checked` values into parent `defaultSelected` or controlled `selected`. Checkbox mode uses `string[]`; radio mode uses a single `string | null`. Replace `onChange` with `onSelectedChange`.
- Legacy `selected?: boolean` controlled trigger styling. Use `hasSelection` for that override; `selected` now owns item values, matching `EvoFilterMenu`.
- Use visible `text` or `a11yText` to name the trigger. `countText` remains optional. Rename root `aria-label` to `a11yText`.
- Replace `onExpand` and `onCollapse` with `onOpenChange`; use `open` or `defaultOpen` for visibility. Marko's `disabled` trigger prop is available.
- `onFooterClick` and `onFormSubmit` receive `{ selected: string[] }` and dismiss the menu. Use `footerText` and optional `a11yFooterText` for a simple action, or compose `EvoFilterMenuFooterButton` for custom content.
- Rename `searchHeaderValue` to `searchValue`. `onSearchChange` receives the search string. `defaultSearchValue` supplies initial uncontrolled text.
- React 19 accepts `ref` on the wrapper. Skin and floating positioning are internal.

```tsx
// Before
<EbayFilterMenuButton text="Delivery" selected={hasAppliedFilter} onChange={handleChange}>
  <EbayFilterMenuItem value="free" checked>Free shipping</EbayFilterMenuItem>
</EbayFilterMenuButton>

// After
<EvoFilterMenuButton
  text="Delivery"
  hasSelection={hasAppliedFilter}
  defaultSelected={["free"]}
  onSelectedChange={handleSelectedChange}
>
  <EvoFilterMenuItems>
    <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
  </EvoFilterMenuItems>
</EvoFilterMenuButton>
```
