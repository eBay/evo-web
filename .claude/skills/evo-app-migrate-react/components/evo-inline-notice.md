# ebay-inline-notice → evo-inline-notice

Import `EvoInlineNotice` and `EvoInlineNoticeMain` from `@evo-web/react/inline-notice`. The parent renders the status icon; put the main region after it to retain the Skin structure. The main region remains a `span`, so give it phrasing content rather than block elements such as `<p>`.

| ebayui-core-react              | evo-react                        | Change                                                              |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------------- |
| `EbayNoticeContent`            | `EvoInlineNoticeMain`            | A named region renders the main span without child scanning.        |
| `aria-label`                   | `a11yText`                       | Labels the status icon; the English status name is the fallback.    |
| Omitted `status` → `"general"` | Omitted `status` → `"attention"` | Follows the available Marko contract. `"general"` is not supported. |
| `onNoticeShow`                 | `onNoticeShow`                   | Still runs when the notice appears or becomes visible.              |
| `hidden`                       | `hidden`                         | Still removes the notice from the DOM.                              |

```tsx
import {
  EvoInlineNotice,
  EvoInlineNoticeMain,
} from "@evo-web/react/inline-notice";

<EvoInlineNotice status="confirmation" a11yText="Order confirmed">
  <EvoInlineNoticeMain>Payment received.</EvoInlineNoticeMain>
</EvoInlineNotice>;
```
