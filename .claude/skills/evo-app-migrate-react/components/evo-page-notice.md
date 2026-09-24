# ebay-page-notice → evo-page-notice

Import the named page notice components from `@evo-web/react/page-notice`. The main region remains a `div` and must appear after the parent's status header. Keep titles inside the main region and CTA or footer regions after it.

| ebayui-core-react              | evo-react                        | Change                                                                                |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------- |
| `EbayNoticeContent`            | `EvoPageNoticeMain`              | The named main region renders directly without child scanning.                        |
| `EbayPageNoticeTitle`          | `EvoPageNoticeTitle`             | Still defaults to `h2`; `as` selects the heading level.                               |
| `EbayPageNoticeCTA`            | `EvoPageNoticeCTA`               | Still renders a `p`; a parent `onCtaClick` callback now receives action clicks.       |
| `EbayPageNoticeFooter`         | `EvoPageNoticeFooter`            | Still renders a `div`; do not combine it with `a11yDismissText`.                      |
| `aria-label`                   | `a11yText`                       | Names the status icon and notice; `a11yIconText` can override the icon label.         |
| Omitted `status` → `"general"` | Omitted `status` → `"attention"` | Follows the Marko contract. `"general"` is not supported.                             |
| No `dismissed` prop            | `dismissed`                      | Controlled visibility; update it from `onDismiss`. Without it, dismissal is internal. |

```tsx
import {
  EvoPageNotice,
  EvoPageNoticeMain,
  EvoPageNoticeTitle,
  EvoPageNoticeCTA,
} from "@evo-web/react/page-notice";

<EvoPageNotice status="confirmation" a11yText="Order confirmed">
  <EvoPageNoticeMain>
    <EvoPageNoticeTitle>Your order is in</EvoPageNoticeTitle>
    <p>We will email you when it ships.</p>
  </EvoPageNoticeMain>
  <EvoPageNoticeCTA>
    <a href="/orders">View order details</a>
  </EvoPageNoticeCTA>
</EvoPageNotice>;
```
