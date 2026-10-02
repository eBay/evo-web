# 8. Evo React Notice Composition

**Date:** 2026-09-24

## Status

Accepted

## Context

`ebay-notice-base` is shared by the legacy Marko inline, page, section, and education notices. The React package exports `EbayNoticeContent` and `EbayNoticeTitle` from its base path, but these are not a standalone notice. `EbayNoticeContent` renders nothing by itself: each parent finds it in `children` and renders a notice-specific main element. `EbayNoticeTitle` renders `page-notice__title`, so its output is specific to page notices despite the generic name.

Skin has separate inline, page, section, and education notice modules and BEM classes. The rendered main element is a `span` for inline notices and a `div` for the other notices. There is no shared Skin notice-base module or Evo Marko notice-base contract. The existing [child composition decision](0005-evo-react-child-component-composition.md) calls for named subcomponents instead of scanning `children`.

## Decision

Keep shared notice implementation internal to `@evo-web/react`. Do not publish `@evo-web/react/notice-base`, `EvoNoticeBase`, `EvoNoticeContent`, or `EvoNoticeTitle`.

Each public notice will export its own named content region, such as `EvoInlineNoticeMain`, `EvoPageNoticeMain`, `EvoSectionNoticeMain`, and `EvoEducationNoticeMain`. The region renders the notice-specific element and BEM class. Notice-specific title and footer components likewise carry their own names. Parents may share private code for status icons, dismissal, and labeling, but they must not inspect or clone children. Context supplies parent state or callbacks when a region needs them.

Consumers replace the marker components with the named region from the notice they use. They place the region at the desired point in the notice tree. The notice components must document the required region, preserve the current `span` or `div` main element, and cover the resulting HTML and accessible labeling in their own tests.

## Consequences

- The React API names the notice type at each import and at each region. There is no generic base component for consumers to configure incorrectly.
- Inline, page, section, and education notices can preserve their different Skin markup and accessibility behavior.
- Migration of each notice remains an independent component ticket. The shared internal helpers are implemented only as needed by those tickets.
