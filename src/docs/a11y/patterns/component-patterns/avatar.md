# Avatar Accessibility

## Best Practices

Informative avatars (standalone without adjacent text) should use `role="img"` with `aria-label` on the container element to convey the user's identity. The `aria-label` should describe the purpose, such as "Profile picture - [User Name]".

Decorative avatars (adjacent to user names or descriptive text) should omit the `role` and `aria-label` attributes on the container element.

When using an `<img>` element inside an avatar container, it must have an empty `alt=""` attribute. The accessible name is provided by the `aria-label` on the parent container (for informative avatars) or omitted entirely (for decorative avatars).

Sighted users can visually distinguish an avatar based on the image; for non-sighted users the equivalent experience is the name of the user (not a description of the image contents).

## Interaction Design

This section provides detailed instructions for how different input types should navigate and operate the pattern.

### Keyboard

Avatar elements are not interactive by default and therefore should not be keyboard focusable.

If an avatar is placed within an interactive element (such as a button or link), the interactive element must be keyboard accessible via **TAB** key.

### Screen Reader

A screen reader will skip over a decorative avatar (without `role` or `aria-label` attributes).

For informative avatars, a screen reader will announce the `role="img"` and the `aria-label` value (e.g., "Profile picture - Elizabeth, image").

If the avatar is within an interactive element, the screen reader will announce the accessible name of that element, which should include relevant user information.

### Pointer

Avatar elements are not interactive by default and therefore are not clickable.

If an avatar is placed within an interactive element (such as a button or link), clicking the avatar will activate that interactive element.

## ARIA Reference

| Attribute      | Description                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **role="img"** | Applied to the avatar container to identify it as an image element to assistive technologies.                          |
| **aria-label** | Applied to the avatar container with `role="img"` to provide an accessible name (e.g., "Profile picture - User Name"). |

## Further Reading

- [Alternative Text Technique](../accessibility/techniques/alternative-text)
- [Pattern Naming Scheme](../accessibility/appendix/pattern-naming-scheme)
