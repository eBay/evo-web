# Link Accessibility

### Working Examples

You can take a look at the link in action on our [examples site](http://ebay.github.io/mindpatterns/navigation/link/).

### Best Practices

Link text **must not** be "click here".

Link text **must** adequately communicate the destination.

Links that share the same link text **must all** go to the same URL.

HREF attribute **must always** contain a valid URL.

HREF attribute **must never** be "javascript". Please read the [JavaScript HREF anti-pattern](../antipatterns/javascript-href) for more information and examples.

For links with labels that are not unique to the page (e.g. 'Add to Cart', 'Edit' or 'Delete', see the [Ambiguous Label](../techniques/ambiguous-label) technique.

Link **must** warn user if it will open in a new window or tab. An icon with alternative text is the recommended approach. Please read the [Open New Window anti-pattern](../antipatterns/open-new-window) for more information and examples.

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

Link **must** activate with ENTER key (not SPACEBAR).

Link **must not** prevent default scrolling behaviour of SPACEBAR and ARROW keys.

#### Screen Reader

Link **must** announce with role of "link".

Link **must** announce state of "current" if the HREF matches the current window URL.

Link **must** invoke using virtual cursor command (e.g. VO+SPACE in Voiceover).

Link **must** announce "new window or tab" behaviour.

### Developer Guide

There are two types of link that need extra care and attention:

1. [Ambiguous Links](../techniques/ambiguous-label)
2. [Links that Open in a New Window or Tab](../antipatterns/open-new-window)

### ARIA Reference

| Attribute        | Description                                                                        |
| ---------------- | ---------------------------------------------------------------------------------- |
| **aria-current** | Used to indicate that this link represents the current page (aria-current="page"). |

### FAQ

#### Should I use offscreen text or aria-label?

If adding context to an ambiguous link, use [offscreen text](../techniques/offscreen-text).

If link tag is empty (e.g. if it displays an icon and has no inner text), use aria-label. However, Voiceover on iOS has problems with empty link tags. Thus, for now, we recommend always using offscreen text.

If the link contains an image with embedded text, the image must have alt text.&#x20;

### Further Reading

- [http://webaim.org/techniques/hypertext/hypertext_links](http://webaim.org/techniques/hypertext/hypertext_links)
- [https://www.scottohara.me/blog/2021/05/28/disabled-links.html](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)
