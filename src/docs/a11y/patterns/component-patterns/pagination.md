# Pagination Accessibility

## Best Practices

Pagination may update the results immediately on the client via AJAX, or on the server via a full page reload. In both cases, the browser's URL will be updated to reflect the new, book-markable page of results.

Do not use buttons for URL based pagination. Because the URL is updated, and the browser history stack updated, a link is the correct tag to use.

Pagination **must** have a heading element. For example "Results Pagination". This heading can be hidden offscreen for sighted users.

Items **must** be marked up as a list of links (not buttons).

Bookends **must** be marked up as links (not buttons).

Bookend icons _should_ be created using SVG.

## Interaction Design

This section provides the pattern interaction design for keyboard, screen reader & pointing devices.

### Keyboard

The bookend and item links **must** be keyboard focusable at all times (even when visually disabled).

If _Previous_ bookend has keyboard focus, pressing TAB key **must** move focus to first pagination link.

If pagination item has keyboard focus, pressing TAB key **must** move focus to next pagination item.

If last pagination item has keyboard focus, pressing TAB key **must** move focus to _Next_ bookend link.

For client-side pagination, keyboard focus **must** remain on the previous, next or item link after activation.

### Screen Reader

Bookend link text **must** be announced (i.e. "Previous page" and "Next page").

_If_ bookend links are visually disabled, they **must** also be announced as disabled.

_If_ a pagination item is visually displayed as the _current_ page, it **must** also be announced as the current page.

For client-side pagination, the new page index **must** be announced after previous, next or item link activation.

### ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of this pattern.

| Attribute           | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| **role=navigation** | Creates a navigation landmark for assistive technology.                              |
| **role=img**        | Applied to bookend SVG tags to reinforce image semantics.                            |
| **aria-labelledby** | Use this property to label the navigation landmark with the text of the heading tag. |
| **aria-disabled**   | Use this property on the bookend anchor to convey when it is "greyed-out"            |
| **aria-label**      | Use this property to label the bookend anchors.                                      |
| **aria-current**    | Refers to the current item in the pagination (i.e. the current dataset index).       |
