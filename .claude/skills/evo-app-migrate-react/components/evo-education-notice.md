# ebay-education-notice → evo-education-notice

Use the named header, icon, title, main, and footer regions from `@evo-web/react/education-notice`. `EvoEducationNoticeHeader` does not render an icon. Place `EvoEducationNoticeIcon` inside the header to show the default lightbulb, pass a custom Evo icon through its `icon` prop, or omit the icon component for an iconless notice. Put link or button actions in `EvoEducationNoticeFooter`. Skin styles footer links, but a plain footer `button` needs `className="fake-link"` to get the footer action style. The notice region's accessible name is `a11yText`; the default lightbulb uses that label unless `EvoEducationNoticeIcon` receives its own `a11yText`.

| ebayui-core-react                               | evo-react                                                                                    | Change                                                                                                                                             |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EbayEducationNoticeTitle` directly in the root | `EvoEducationNoticeHeader` containing `EvoEducationNoticeIcon` and `EvoEducationNoticeTitle` | Keep the title inside the named header. The icon is opt-in: include `EvoEducationNoticeIcon` for the lightbulb.                                    |
| String `educationIcon` name                     | `EvoEducationNoticeIcon icon={<EvoIcon* />}`                                                 | Custom icons supply their own accessible label and prominent style.                                                                                |
| `a11yIconText`                                  | `EvoEducationNoticeIcon a11yText`                                                            | Overrides the default lightbulb label without changing the region's `a11yText`. Custom icons carry their own accessible label.                     |
| `iconVariant="prominent"`                       | `EvoEducationNoticeIcon prominent`                                                           | `iconVariant="none"` maps to the default, non-prominent lightbulb. Custom icons set `prominent` on their Evo icon.                                 |
| `iconClass`                                     | Removed                                                                                      | Set `prominent` or `className` on a custom Evo icon. Set `prominent` or `a11yText` on `EvoEducationNoticeIcon` to configure the default lightbulb. |
| `EbayNoticeContent`                             | `EvoEducationNoticeMain`                                                                     | Explicit main region.                                                                                                                              |
| `EbayEducationNoticeFooter`                     | `EvoEducationNoticeFooter`                                                                   | Explicit footer region.                                                                                                                            |
| `aria-label`                                    | `a11yText`                                                                                   | Required accessible name for the notice region. The default lightbulb inherits it unless its `a11yText` is overridden.                             |
| `aria-roledescription`                          | `a11yRoleDescription`                                                                        | English default is `"Notice"`. Pass a translation for other locales.                                                                               |
| `dismissed` as an initial state                 | `dismissed` as a controlled prop                                                             | Update it in `onDismiss`, or omit it for internal dismissal.                                                                                       |
| No icon component                               | Omit `EvoEducationNoticeIcon`                                                                | No icon renders. Do not use a root `icon="none"` prop.                                                                                             |

There is no `status` prop. Marko's `ebay-education-notice` declares `@status` but never renders it, and Skin has no status styling. Marko's `icon="none"` also behaves differently at runtime: it drops the whole header, including the title and dismiss button.

Place the icon and title inside the named header and the content inside the main region:

```tsx
import { EvoIconLightningBolt24 } from "@evo-web/react/icons/lightning-bolt-24";
import {
  EvoEducationNotice,
  EvoEducationNoticeFooter,
  EvoEducationNoticeHeader,
  EvoEducationNoticeIcon,
  EvoEducationNoticeMain,
  EvoEducationNoticeTitle,
} from "@evo-web/react/education-notice";

<EvoEducationNotice a11yText="Listing guidance">
  <EvoEducationNoticeHeader>
    <EvoEducationNoticeIcon />
    <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
  </EvoEducationNoticeHeader>
  <EvoEducationNoticeMain>
    Describe the item and its condition.
  </EvoEducationNoticeMain>
  <EvoEducationNoticeFooter>
    <a href="/seller-center">Read listing tips</a>
  </EvoEducationNoticeFooter>
</EvoEducationNotice>;
```

For a custom icon, pass the configured Evo icon to `EvoEducationNoticeIcon`:

```tsx
<EvoEducationNoticeHeader>
  <EvoEducationNoticeIcon
    icon={
      <EvoIconLightningBolt24
        a11yText="Listing insight"
        a11yVariant="label"
        prominent
      />
    }
  />
  <EvoEducationNoticeTitle>Improve your listing</EvoEducationNoticeTitle>
</EvoEducationNoticeHeader>
```

If you passed `dismissed={false}` only to set the initial state, omit it in Evo React so the notice dismisses itself:

```diff
- <EbayEducationNotice dismissed={false} a11yDismissText="Dismiss guidance" onDismiss={moveFocus}>
+ <EvoEducationNotice a11yText="Listing guidance" a11yDismissText="Dismiss guidance" onDismiss={moveFocus}>
```

If the app controls `dismissed`, update it in `onDismiss` instead. Move focus to an element that remains on the page before the notice unmounts.
