# ebay-menu-button → evo-menu-button

Use named trigger, menu, and menu-items components. Menu choices follow `EvoMenu`'s value-based groups; select callbacks belong to items or groups.

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
  EvoMenu,
  EvoMenuItems,
  EvoMenuItem,
  EvoMenuFooter,
} from "@evo-web/react/menu-button";

<EvoMenuButton collapseOnSelect>
  <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
  <EvoMenu>
    <EvoMenuItems>
      <EvoMenuItem onSelect={handleEdit}>Edit</EvoMenuItem>
      <EvoMenuItem onSelect={handleEnd}>End</EvoMenuItem>
    </EvoMenuItems>
    <EvoMenuFooter>...</EvoMenuFooter>
  </EvoMenu>
</EvoMenuButton>;
```

Non-default presentation variants belong on the root:

```tsx
<EvoMenuButton variant="form">
  <EvoMenuButtonTrigger onClick={(event) => handleTriggerClick(event)}>
    Sort by
  </EvoMenuButtonTrigger>
  <EvoMenu>
    <EvoMenuItems>
      <EvoMenuItem>Best match</EvoMenuItem>
    </EvoMenuItems>
  </EvoMenu>
</EvoMenuButton>

<EvoMenuButton variant="icon">
  <EvoMenuButtonTrigger a11yText="More actions" />
  <EvoMenu>
    <EvoMenuItems>
      <EvoMenuItem>Share</EvoMenuItem>
    </EvoMenuItems>
  </EvoMenu>
</EvoMenuButton>

<EvoMenuButton variant="filter">
  <EvoMenuButtonTrigger
    hasSelection
    onClick={(event) => handleFilterClick(event)}
  >
    Delivery
  </EvoMenuButtonTrigger>
  <EvoMenu>
    <EvoMenuItems>
      <EvoMenuItem>Free shipping</EvoMenuItem>
    </EvoMenuItems>
  </EvoMenu>
</EvoMenuButton>
```

For selection, wrap `EvoMenuRadioItem` in `EvoMenuRadioGroup` or `EvoMenuCheckboxItem` in `EvoMenuCheckboxGroup`. Groups use `selected` / `defaultSelected` and `onSelectedChange` with values. `EvoMenuItems` uses the trigger as its accessible name by default; pass `a11yText` or `a11yLabelId` to override it. `EvoMenuSeparator` divides groups, and `EvoMenuFooter` is an explicit child after `EvoMenuItems`.

Set `variant` only on `EvoMenuButton`; it controls both trigger and popup presentation. Neither `EvoMenuButtonTrigger` nor the popup accepts a separate variant. Use `variant="icon"` with `a11yText` on the trigger for an icon-only control, or `variant="filter"` with `hasSelection` on the trigger for an applied filter.

Trigger appearance props such as `priority`, `size`, and `transparent` belong on `EvoMenuButtonTrigger`. Its `onClick` receives only the native event, never an extra `{ open }` argument. Use root `open` / `onOpenChange` for open-state control instead of legacy expand and collapse callbacks. `collapseOnSelect` closes the popup and restores trigger focus. Native `ref` is supported on the wrapper and trigger.

Replace `EbayMenuButtonLabel` with plain trigger text or a native span; there is no `EvoMenuButtonLabel`. Replace legacy menu-button items and separators with `EvoMenuItem`, `EvoMenuRadioItem`, `EvoMenuCheckboxItem`, and `EvoMenuSeparator` as appropriate, rather than applying the global prefix rename.
