# Details Accessibility

## Best Practices

**Must** be opened and closed via a summary element.

**Must not** be opened by a link, radio button or checkbox.

Can be closed programmatically via the `open` property.

## Interaction Design

### Keyboard

Pressing ENTER or SPACE on summary element will expand or collapse content accordingly.

### Pointer

Clicking or tapping the summary element will expand or collapse the content accordingly.

### Screen Reader

With virtual cursor on summary element, screen reader will announce current expanded/collapsed status.

When content is expanded, screen reader will announce new expanded state of button or summary element.
