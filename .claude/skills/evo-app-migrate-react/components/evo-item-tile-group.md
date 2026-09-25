# ebay-item-tile-group → evo-item-tile-group

EvoItemTileGroup takes tile data and renders each tile inside a semantic `<li>`. This follows Marko's item collection and keeps the Skin grid wrapper without scanning or cloning children.

**Before:**

```tsx
import { EbayItemTileGroup } from "@ebay/ui-core-react/ebay-item-tile-group";
import {
  EbayItemTile,
  EbayItemTileTitle,
} from "@ebay/ui-core-react/ebay-item-tile";

<EbayItemTileGroup layout="list" onAction={handleAction}>
  {listings.map((listing) => (
    <EbayItemTile key={listing.id} file={listing.file}>
      <EbayItemTileTitle href={listing.href}>{listing.title}</EbayItemTileTitle>
    </EbayItemTile>
  ))}
</EbayItemTileGroup>;
```

**After:**

```tsx
import { EvoItemTileGroup } from "@evo-web/react/item-tile-group";
import { EvoItemTileTitle } from "@evo-web/react/item-tile";

<EvoItemTileGroup
  layout="list"
  items={listings.map((listing) => ({
    id: listing.id,
    href: listing.href,
    file: listing.file,
    title: <EvoItemTileTitle>{listing.title}</EvoItemTileTitle>,
  }))}
/>;
```

The group applies `layout` to every tile and passes through native `<div>` attributes and `ref`. To handle media actions, put an `EvoItemTileAction` in each item's `action` slot with its own `onClick`; the group no longer sends index-based action callbacks.
