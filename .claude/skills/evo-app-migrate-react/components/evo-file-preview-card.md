# ebay-file-preview-card → evo-file-preview-card

`EvoFilePreviewCard` keeps the legacy preview body, asset, optional link, info badge, and footer. Place one named action child in the card body. The card shares its upload state with action children through context; no child scanning is needed.

```tsx
import {
  EvoFilePreviewCard,
  EvoFilePreviewCardAction,
} from "@evo-web/react/file-preview-card";
import { EvoIconHeart16 } from "@evo-web/react/icons/heart-16";

<EvoFilePreviewCard file={file}>
  <EvoFilePreviewCardAction a11yText="Favorite" onClick={favorite}>
    <EvoIconHeart16 />
  </EvoFilePreviewCardAction>
</EvoFilePreviewCard>;
```

Replace legacy `onAction`, `onDelete`, and `deleteText` with an `EvoFilePreviewCardAction` child, its `onClick`, accessible `a11yText`, and an icon child. `EvoFilePreviewCardCancelAction` appears only while `status="uploading"`; it replaces `onCancel` and `a11yCancelUploadText` and defaults to the close icon. `a11yUploadingText` localizes the progress spinner.

For multiple commands, use an `EvoFilePreviewCardMenu` child with `EvoMenuButtonItem` children and item-level `onSelect` callbacks. This replaces `menuActions`, `onMenuAction`, and `a11yMenuButtonText`.

Replace numeric `seeMore`, `a11ySeeMoreText`, and `onSeeMore` with an `EvoPreviewCardSeeMore` child. Its `count`, `a11yText`, and `onClick` produce the same +N overlay. Skin fades the image when this child is present.

`footerTitle`, `footerSubtitle`, `href`, `a11yExternalLinkText`, `infoText`, and `as` remain available.
