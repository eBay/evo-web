# ebay-education-notice → evo-education-notice

Use the named header, title, main, footer, and CTA regions from `@evo-web/react/education-notice`. The header now owns the icon and dismiss button, so place `EvoEducationNoticeTitle` inside `EvoEducationNoticeHeader`.

| ebayui-core-react                               | evo-react                                                       | Change                                                                                       |
| ----------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `EbayEducationNoticeTitle` directly in the root | `EvoEducationNoticeHeader` containing `EvoEducationNoticeTitle` | Keeps the legacy header structure without child scanning. A title is optional, as in Marko.  |
| `EbayNoticeContent`                             | `EvoEducationNoticeMain`                                        | Explicit main region.                                                                        |
| `EbayEducationNoticeFooter`                     | `EvoEducationNoticeFooter`                                      | Explicit footer region.                                                                      |
| String `educationIcon` name                     | An `EvoIcon*` element in `educationIcon`                        | Custom icons supply their own `a11yText` and prominent style.                                |
| `iconClass`                                     | Removed                                                         | Set `prominent` or `className` on a custom Evo icon; use `iconVariant` for the default icon. |
| `aria-label`                                    | `a11yText`                                                      | Names the notice or its default icon.                                                        |
| `aria-roledescription`                          | `a11yRoleDescription`                                           | Defaults to the localized equivalent of `"Notice"`.                                          |
| `dismissed` as an initial state                 | `dismissed` as a controlled prop                                | Update it in `onDismiss`, or omit it for internal dismissal.                                 |
| No `status`, `icon`, or CTA callback            | `status`, `icon="none"`, `EvoEducationNoticeCTA`, `onCtaClick`  | Matches the declared Marko notice options.                                                   |

```tsx
import {
  EvoEducationNotice,
  EvoEducationNoticeHeader,
  EvoEducationNoticeMain,
  EvoEducationNoticeTitle,
} from "@evo-web/react/education-notice";

<EvoEducationNotice a11yText="Listing guidance">
  <EvoEducationNoticeHeader>
    <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
  </EvoEducationNoticeHeader>
  <EvoEducationNoticeMain>
    Describe the item and include its condition.
  </EvoEducationNoticeMain>
</EvoEducationNotice>;
```
