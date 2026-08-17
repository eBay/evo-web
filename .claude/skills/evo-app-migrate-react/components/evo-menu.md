# ebay-menu → evo-menu

EvoMenu uses an explicit compound-component API. Wrap all navigable items in `EvoMenuItems`, and use the item and group component that matches each item's behavior.

## Command menu, badge, separator, and footer

**Before:**

```tsx
import {
  EbayMenu,
  EbayMenuItem,
  EbayMenuSeparator,
} from "@ebay/ui-core-react/ebay-menu";

<EbayMenu onSelect={(_, { index }) => handleSelect(index)}>
  <EbayMenuItem badgeNumber={5} badgeAriaLabel="5 unread messages">
    Messages
  </EbayMenuItem>
  <EbayMenuSeparator />
  <EbayMenuItem>Settings</EbayMenuItem>
</EbayMenu>;
```

**After:**

```tsx
import { EvoButton } from "@evo-web/react/button";
import {
  EvoMenu,
  EvoMenuFooter,
  EvoMenuItem,
  EvoMenuItemBadge,
  EvoMenuItems,
  EvoMenuSeparator,
} from "@evo-web/react/menu";

<EvoMenu>
  <EvoMenuItems a11yText="Actions">
    <EvoMenuItem onSelect={handleMessagesSelect}>
      Messages
      <EvoMenuItemBadge number={5} a11yText="5 unread messages" />
    </EvoMenuItem>
    <EvoMenuSeparator />
    <EvoMenuItem onSelect={handleSettingsSelect}>Settings</EvoMenuItem>
  </EvoMenuItems>
  <EvoMenuFooter>
    <EvoButton priority="tertiary">Apply</EvoButton>
  </EvoMenuFooter>
</EvoMenu>;
```

`EvoMenuFooter` is optional. When footer content is needed, place it next to `EvoMenuItems` and use `EvoButton` directly instead of a menu-specific footer button.

## Radio menu

**Before:**

```tsx
<EbayMenu
  type="radio"
  checked={1}
  onChange={(_, { index }) => handleSortChange(index)}
>
  <EbayMenuItem value="price">Price</EbayMenuItem>
  <EbayMenuItem value="distance">Distance</EbayMenuItem>
</EbayMenu>
```

**After:**

```tsx
<EvoMenu>
  <EvoMenuItems a11yText="Sort by">
    <EvoMenuRadioGroup
      defaultSelected="distance"
      onSelectedChange={handleSortChange}
    >
      <EvoMenuRadioItem value="price">Price</EvoMenuRadioItem>
      <EvoMenuRadioItem value="distance">Distance</EvoMenuRadioItem>
    </EvoMenuRadioGroup>
  </EvoMenuItems>
</EvoMenu>
```

Use `selected` instead of `defaultSelected` when the radio group is controlled. Selection callbacks now receive the selected item value rather than its child index.

## Checkbox menu

**Before:**

```tsx
<EbayMenu
  type="checkbox"
  onChange={(_, { checkedValues }) => handleFilterChange(checkedValues)}
>
  <EbayMenuItem value="shipping" checked>
    Free shipping
  </EbayMenuItem>
  <EbayMenuItem value="returns">Free returns</EbayMenuItem>
</EbayMenu>
```

**After:**

```tsx
<EvoMenu>
  <EvoMenuItems a11yText="Filters">
    <EvoMenuCheckboxGroup
      defaultSelected={["shipping"]}
      onSelectedChange={handleFilterChange}
    >
      <EvoMenuCheckboxItem value="shipping">Free shipping</EvoMenuCheckboxItem>
      <EvoMenuCheckboxItem value="returns">Free returns</EvoMenuCheckboxItem>
    </EvoMenuCheckboxGroup>
  </EvoMenuItems>
</EvoMenu>
```

Use `selected` instead of `defaultSelected` when the checkbox group is controlled. Radio and checkbox item `value` props are required; selection never falls back to child indexes.

## Additional changes

- Use `a11yText` on `EvoMenuItems` for an accessible name, or use `a11yLabelId` when an external element labels the menu. Do not use both.
- Move plain-menu `onSelect` to each `EvoMenuItem`; move parent `onClick` handlers to the applicable items.
- Move `onKeyDown` to `EvoMenuItems` when needed. It receives the native keyboard event without legacy index or checked callback data.
- Remove `baseEl`, `priority`, `autofocus`, `forwardedRef`, and `menuRef`. The root is a span, refs use native React 19 `ref`, and `EvoMenuItems` accepts its own ref.
- `reverse`, `fixed`, `fixWidth`, `classPrefix`, and native HTML attributes remain supported.
