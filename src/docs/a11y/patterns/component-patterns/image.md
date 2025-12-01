# Image Accessibility

There are two types of image:

1. content images
2. decoration images

### Working Examples

The content for this page is not yet available.

### Best Practices

Every image can be classed as important _content_ or non-important _decoration_.

Every image **must** have an alt attribute. There are no exceptions.

Decoration images **must** have an empty alt attribute value. This informs screen reader to skip over this element, otherwise the long, ugly URL/filename of image will be read.

Content images **must** have a meaningful, descriptive alt attribute value that should be defined by your content team.

If a content image is adjacent to descriptive text, for example in the case of an item title right before or after the item image, then the alt text of the image can be left blank.

If possible, always try and use CSS background images or generated content (e.g. font icons) for decoration images.

Avoid using CSS background images for content images because they are disabled by default in Windows high contrast mode (this setting can be overridden in your application CSS however).

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

Image tags are not interactive by default and therefore should not be keyboard focusable.

#### Screen Reader

A screen reader will skip over a decoration image (with empty alt text) and will read the alt text of content images.

#### Pointer

Image tags are not interactive by default and therefore are not clickable.

### ARIA Reference

The content for this section is not yet available.
