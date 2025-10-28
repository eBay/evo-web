# Badge Accessibility

## Best Practices

Badges must use `role="img"` with `aria-label` to convey their meaning to assistive technologies.

Badges are typically non-interactive visual indicators. If a badge needs to be interactive, it should be placed within an interactive element (such as a button or link) that has an appropriate accessible name.

Do not rely solely on color to convey the meaning or status of a badge. Ensure that the badge's purpose is clear through its label and context.

## Interaction Design

This section provides detailed instructions for how different input types should navigate and operate the pattern.

### Keyboard

Badge elements are not interactive by default and therefore should not be keyboard focusable.

If a badge is placed within an interactive element (such as a button or link), the interactive element must be keyboard accessible via **TAB** key.

### Screen Reader

A screen reader will announce the badge as an image along with its `aria-label` value (e.g., "2 notifications, image").

### Pointer

Badge elements are not interactive by default and therefore are not clickable.

If a badge is placed within an interactive element (such as a button or link), clicking the badge will activate that interactive element.

## ARIA Reference

| Attribute      | Description                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------ |
| **role="img"** | Applied to the badge element to identify it as an image to assistive technologies.                           |
| **aria-label** | Applied to the badge with `role="img"` to provide an accessible name with context (e.g., "2 notifications"). |

## Further Reading

- [Background Icon Technique](../accessibility/techniques/background-icon)
- [Pattern Naming Scheme](../accessibility/appendix/pattern-naming-scheme)
