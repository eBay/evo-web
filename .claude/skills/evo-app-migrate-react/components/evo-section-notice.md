# ebay-section-notice → evo-section-notice

Import the named section notice components from `@evo-web/react/section-notice`. The main region is a `span`, following Marko's structure, and follows the parent's status header when there is one. Keep titles inside the main region and CTA or footer regions after it.

| ebayui-core-react                         | evo-react                   | Change                                                                                         |
| ----------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| `EbayNoticeContent`                       | `EvoSectionNoticeMain`      | The named main region renders directly without child scanning.                                 |
| `EbaySectionNoticeTitle`                  | `EvoSectionNoticeTitle`     | Still defaults to `h2`; `as` selects the heading level.                                        |
| `EbaySectionNoticeCTA`                    | `EvoSectionNoticeCTA`       | Still renders a `p`; a parent `onCtaClick` callback now receives action clicks.                |
| `EbaySectionNoticeFooter`                 | `EvoSectionNoticeFooter`    | Still renders a `div`; do not combine it with `a11yDismissText`.                               |
| `aria-label`                              | `a11yText`                  | Names the status icon and notice; `a11yIconText` can override the icon label.                  |
| Omitted `status` → `"general"`            | Omitted `status` → iconless | Follows the chosen Marko contract. `"general"`, `"none"`, and `"education"` are not supported. |
| `educationIcon`, `prominent`, `iconClass` | Removed                     | Education status is excluded; icon styling follows Skin.                                       |
| No `dismissed` prop                       | `dismissed`                 | Controlled visibility; update it from `onDismiss`. Without it, dismissal is internal.          |

```tsx
import {
  EvoSectionNotice,
  EvoSectionNoticeMain,
  EvoSectionNoticeTitle,
  EvoSectionNoticeCTA,
} from "@evo-web/react/section-notice";

<EvoSectionNotice status="confirmation" a11yText="Order confirmed">
  <EvoSectionNoticeMain>
    <EvoSectionNoticeTitle>Your order is in</EvoSectionNoticeTitle>
    We will email you when it ships.
  </EvoSectionNoticeMain>
  <EvoSectionNoticeCTA>
    <a href="/orders">View order details</a>
  </EvoSectionNoticeCTA>
</EvoSectionNotice>;
```
