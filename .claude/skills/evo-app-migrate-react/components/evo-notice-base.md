# ebay-notice-base → notice-specific Evo components

There is no public `@evo-web/react/notice-base` export. The legacy React `EbayNoticeContent` is a marker that renders no HTML on its own; each notice parent turns it into a notice-specific main region. `EbayNoticeTitle` renders the page-notice title class. Evo React uses named regions for each notice, following [ADR 0008](../../../../docs/adr/0008-evo-react-notice-composition.md).

| Legacy import or component                       | Evo React replacement                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------------------- |
| `EbayNoticeContent` inside `EbayInlineNotice`    | `EvoInlineNoticeMain` from `@evo-web/react/inline-notice`                         |
| `EbayNoticeContent` inside `EbayPageNotice`      | `EvoPageNoticeMain` from `@evo-web/react/page-notice`                             |
| `EbayNoticeContent` inside `EbaySectionNotice`   | `EvoSectionNoticeMain` from `@evo-web/react/section-notice`                       |
| `EbayNoticeContent` inside `EbayEducationNotice` | `EvoEducationNoticeMain` from `@evo-web/react/education-notice`                   |
| `EbayNoticeTitle`                                | The title component exported by the specific notice, such as `EvoPageNoticeTitle` |

For example, after the inline notice migration is available:

```tsx
import {
  EvoInlineNotice,
  EvoInlineNoticeMain,
} from "@evo-web/react/inline-notice";

<EvoInlineNotice status="information">
  <EvoInlineNoticeMain>Shipping dates have changed.</EvoInlineNoticeMain>
</EvoInlineNotice>;
```

Until a specific notice migration is published, keep using its `@ebay/ui-core-react` component. Migrate each notice's props using that component's guide when available.
