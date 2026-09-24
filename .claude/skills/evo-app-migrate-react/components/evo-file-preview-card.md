# ebay-file-preview-card → evo-file-preview-card

EvoFilePreviewCard keeps the legacy preview body, asset, optional link, info badge, and footer. Use named action slots. Each slot receives an already configured component, avoiding child scanning and index-based menu callbacks.

**Before:**

```tsx
import {
  EbayFilePreviewCard,
  EbayFilePreviewCardAction,
} from "@ebay/ui-core-react/ebay-file-preview-card";
import { EbayIconHeart16 } from "@ebay/ui-core-react/ebay-icon/icons/ebay-icon-heart-16";

<EbayFilePreviewCard file={file} onAction={favorite}>
  <EbayFilePreviewCardAction icon={<EbayIconHeart16 />} aria-label="Favorite" />
</EbayFilePreviewCard>;
```

**After:**

```tsx
import {
  EvoFilePreviewCard,
  EvoFilePreviewCardAction,
} from "@evo-web/react/file-preview-card";
import { EvoIconHeart16 } from "@evo-web/react/icons/heart-16";

<EvoFilePreviewCard
  file={file}
  action={
    <EvoFilePreviewCardAction a11yText="Favorite" onClick={favorite}>
      <EvoIconHeart16 />
    </EvoFilePreviewCardAction>
  }
/>;
```

Use `deleteAction` or `cancelAction` with the same `EvoFilePreviewCardAction` wrapper and the appropriate icon. `cancelAction` appears while `status="uploading"`; `menu`, `action`, and `deleteAction` apply otherwise, in that order. `a11yUploadingText` localizes the progress spinner.

For multiple actions, pass `menu={<EvoFilePreviewCardMenu a11yText="More file actions">...</EvoFilePreviewCardMenu>}` and put `EvoMenuButtonItem` children inside. Each item gets its own `onSelect`, consistent with EvoMenuButton. This replaces the legacy `menuActions` array and index-based `onMenuAction` callback.

For an additional-file overlay, use `seeMore={count}` with `a11ySeeMoreText` and `onSeeMore`, or supply `seeMoreAction={<EvoFilePreviewCardSeeMoreAction count={count} a11yText="See more" onClick={openGallery} />}`. `footerTitle`, `footerSubtitle`, `href`, `a11yExternalLinkText`, `infoText`, and `as` remain available.
