# ebay-file-preview-card-group → evo-file-preview-card-group

The group renders a `<ul>` grid. Each `EvoFilePreviewCardGroupItem` renders an `EvoFilePreviewCard` as `<li>`. The application chooses which items to show and handles pagination or see-more actions.

**Before:**

```tsx
<EbayFilePreviewCardGroup
  a11ySeeMoreText="See more photos"
  onDelete={handleDelete}
>
  {files.map((file) => (
    <EbayFilePreviewCard key={file.name} file={file} />
  ))}
</EbayFilePreviewCardGroup>
```

**After:**

```tsx
import {
  EvoFilePreviewCardGroup,
  EvoFilePreviewCardGroupItem,
} from "@evo-web/react/file-preview-card-group";
import { EvoPreviewCardSeeMore } from "@evo-web/react/file-preview-card";

<EvoFilePreviewCardGroup aria-label="Photos">
  {files.slice(0, visibleCount).map((file) => (
    <EvoFilePreviewCardGroupItem key={file.name} file={file} />
  ))}
  {files.length > visibleCount && (
    <EvoFilePreviewCardGroupItem file={files[visibleCount]}>
      <EvoPreviewCardSeeMore
        count={files.length - visibleCount}
        a11yText="See more photos"
        onClick={() => setVisibleCount(files.length)}
      />
    </EvoFilePreviewCardGroupItem>
  )}
</EvoFilePreviewCardGroup>;
```

The group does not own a visible count or clone cards. Place card action components in each item's children.
