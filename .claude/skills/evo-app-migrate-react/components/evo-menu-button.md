# ebay-menu-button → evo-menu-button

Use named trigger and menu components. Menu button choices follow EvoMenu's value-based groups; select callbacks belong to items or groups.

**Before:**

```tsx
import {
  EbayMenuButton,
  EbayMenuButtonItem,
} from "@ebay/ui-core-react/ebay-menu-button";

<EbayMenuButton onSelect={(_, { index }) => handleAction(index)}>
  <EbayMenuButtonItem>Edit</EbayMenuButtonItem>
  <EbayMenuButtonItem>End</EbayMenuButtonItem>
</EbayMenuButton>;
```

**After:**

```tsx
import {
  EvoMenuButton,
  EvoMenuButtonTrigger,
  EvoMenuButtonMenu,
  EvoMenuButtonItem,
} from "@evo-web/react/menu-button";

<EvoMenuButton collapseOnSelect>
  <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
  <EvoMenuButtonMenu>
    <EvoMenuButtonItem onSelect={handleEdit}>Edit</EvoMenuButtonItem>
    <EvoMenuButtonItem onSelect={handleEnd}>End</EvoMenuButtonItem>
  </EvoMenuButtonMenu>
</EvoMenuButton>;
```

For selection, wrap `EvoMenuButtonRadioItem` in `EvoMenuRadioGroup` or `EvoMenuButtonCheckboxItem` in `EvoMenuCheckboxGroup`. Groups use `selected` / `defaultSelected` and `onSelectedChange` with values. `EvoMenuButtonSeparator` divides groups; `EvoMenuButtonMenu` accepts `footer` for an `EvoMenuFooter` containing an ordinary `EvoButton`.

Use `variant="icon"` with `a11yText` for an icon-only trigger, or `variant="filter"` with `hasSelection` to style an applied filter. `open` / `onOpenChange` replace legacy expand and collapse callbacks. Use `collapseOnSelect` when activation should close the menu and restore trigger focus. Native `ref` is supported on the wrapper and trigger.
