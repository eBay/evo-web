# ebay-fake-menu → evo-fake-menu

EvoFakeMenu uses the same explicit compound-component API as EvoMenu. Add `EvoFakeMenuItems` around all items, badges, and separators.

**Before:**

```tsx
import {
  EbayFakeMenu,
  EbayFakeMenuItem,
  EbayFakeMenuSeparator,
} from "@ebay/ui-core-react/ebay-fake-menu";

<EbayFakeMenu
  itemMatchesUrl={false}
  onSelect={(_, { index }) => handleSelect(index)}
>
  <EbayFakeMenuItem
    href="/messages"
    current
    badgeNumber={5}
    badgeAriaLabel="5 unread messages"
  >
    Messages
  </EbayFakeMenuItem>
  <EbayFakeMenuSeparator />
</EbayFakeMenu>;
```

**After:**

```tsx
import {
  EvoFakeMenu,
  EvoFakeMenuItem,
  EvoFakeMenuItemBadge,
  EvoFakeMenuItems,
  EvoFakeMenuSeparator,
} from "@evo-web/react/fake-menu";

<EvoFakeMenu>
  <EvoFakeMenuItems>
    <EvoFakeMenuItem
      href="/messages"
      current
      itemMatchesUrl={false}
      onClick={handleMessagesSelect}
    >
      Messages
      <EvoFakeMenuItemBadge number={5} a11yText="5 unread messages" />
    </EvoFakeMenuItem>
    <EvoFakeMenuSeparator />
  </EvoFakeMenuItems>
</EvoFakeMenu>;
```

## Additional changes

- Add the required `EvoFakeMenuItems` list wrapper.
- Move root `itemMatchesUrl` to each applicable `EvoFakeMenuItem`.
- Replace parent `onSelect` with native `onClick` handlers on individual items; callbacks no longer receive child indexes.
- Move `onKeyDown` to `EvoFakeMenuItems` or an individual item. It now receives only the native keyboard event.
- Replace `badgeNumber` and `badgeAriaLabel` with `EvoFakeMenuItemBadge`. Rename the accessible label to `a11yText`.
- Replace `forwardedRef` with the native React 19 `ref`. The root ref now targets a `<span>` instead of a `<div>`; `EvoFakeMenuItems` accepts a list ref.
- Button item `type` now supports both `"button"` and `"submit"`.
- Disabled links no longer retain `href`; they receive `aria-disabled="true"`.
- Anchor items accept `as` for framework link adapters, such as `as={({ href, ...rest }) => <Link {...rest} to={href} />}` for React Router.
- `classPrefix`, `reverse`, `fixed`, and `fixWidth` are now available to match evo-marko embedding behavior.
