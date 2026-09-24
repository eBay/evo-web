# ebay-file-preview-card-group → evo-file-preview-card-group

The group takes card data and renders each card as an `<li>` inside the Skin grid. This follows Evo Marko's `card` collection and avoids scanning or cloning child elements.

**Before:**

```tsx
import { EbayFilePreviewCardGroup } from "@ebay/ui-core-react/ebay-file-preview-card-group";
import { EbayFilePreviewCard } from "@ebay/ui-core-react/ebay-file-preview-card";

<EbayFilePreviewCardGroup
  a11ySeeMoreText="See more photos"
  onDelete={handleDelete}
>
  {files.map((file) => (
    <EbayFilePreviewCard key={file.name} file={file} deleteText="Delete" />
  ))}
</EbayFilePreviewCardGroup>;
```

**After:**

```tsx
import { EvoFilePreviewCardGroup } from "@evo-web/react/file-preview-card-group";
import { EvoFilePreviewCardAction } from "@evo-web/react/file-preview-card";
import { EvoIconDelete16 } from "@evo-web/react/icons/delete-16";

<EvoFilePreviewCardGroup
  a11ySeeMoreText="See more photos"
  cards={files.map((file) => ({
    file,
    deleteAction: (
      <EvoFilePreviewCardAction
        a11yText="Delete photo"
        onClick={() => handleDelete(file)}
      >
        <EvoIconDelete16 />
      </EvoFilePreviewCardAction>
    ),
  }))}
/>;
```

The group shows 15 cards initially and uses the next card as a `+N` preview. `visibleCardCount` / `onVisibleCardCountChange` control how many cards are shown. Use `defaultVisibleCardCount` to set an initial uncontrolled count. For a custom overlay, pass `seeMoreAction={<EvoFilePreviewCardGroupSeeMoreAction a11yText="Show more" />}`; the named action reads the remaining count and expands the group through context. Card callbacks belong to each card's action slots rather than an index-based group callback.
