# ebay-item-tile → evo-item-tile

EvoItemTile uses named slots for media action and listing sections. Put the corresponding named subcomponent in each slot. The tile keeps the legacy header and body structure, and uses EvoFilePreviewCard for media.

**Before:**

```tsx
import {
  EbayItemTile,
  EbayItemTileTitle,
  EbayItemTileDescription,
} from "@ebay/ui-core-react/ebay-item-tile";

<EbayItemTile file={file} href="/listing">
  <EbayItemTileTitle>Phone</EbayItemTileTitle>
  <EbayItemTileDescription>$29.99</EbayItemTileDescription>
</EbayItemTile>;
```

**After:**

```tsx
import {
  EvoItemTile,
  EvoItemTileTitle,
  EvoItemTileDescription,
} from "@evo-web/react/item-tile";

<EvoItemTile
  file={file}
  href="/listing"
  title={<EvoItemTileTitle>Phone</EvoItemTileTitle>}
  description={<EvoItemTileDescription>$29.99</EvoItemTileDescription>}
/>;
```

The tile's `href` names the preview link and supplies the title destination by default. `EvoItemTileTitle` may override it with its own `href`. Use `supertitle={<EvoItemTileSupertitle>...</EvoItemTileSupertitle>}`, `subtitle={<EvoItemTileSubtitle>...</EvoItemTileSubtitle>}`, and a fragment of `EvoItemTileDescription` elements for more details. `EvoItemTileDescription` defaults to `<p>` and accepts `as` for another element.

For a media action, use `action={<EvoItemTileAction a11yText="Save" onClick={save}><EvoIconHeart16 /></EvoItemTileAction>}`. Callbacks belong on the action instead of the tile. `layout="list"` keeps the horizontal layout, and `a11yExternalLinkText` announces when the preview opens in a new tab.
