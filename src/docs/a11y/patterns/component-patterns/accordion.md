# Accordion Accessibility

## Best Practices

Each header will be in the natural tabindex, courtesy of the details pattern. This natural tabindex must not be removed or tampered with.

By default, all panels can be in an open, expanded state.

Optionally, the accordion may be restricted to only show one content panel at a time (i.e. opening a panel will close any other open panel). This is known as an auto-collapsing accordion. Note that auto-collapse on accordion should be used cautiously, as it prevents users from comparing content and may disrupt the user experience.

## Interaction Design

This section provides detailed instructions for how different input types should navigate and operate the pattern.

### Keyboard

Pressing **TAB** key **must** move keyboard focus from one header to the next. It will also move focus through any interactive elements inside open panels.

Likewise, pressing **SHIFT-TAB** keys moves focus _backwards_ through headers and interactive panel content.

Pressing **SPACEBAR** or **ENTER** key on a header with keyboard focus **must** open the panel. For _auto-collapse_ accordions, any other open panel **must** close.

### Screen Reader

Virtual cursor **must** be able to move from one header to the next.

With virtual cursor on header, it **must** be able to open panel via click event simulation. For _auto-collapse_ accordions, any other open panel **must** close, but this should not be announced.

### Pointer

Tapping or clicking a header **must** open the related content panel. For _auto-collapse_ accordions, any other open panel **must** close.

## ARIA Reference

| Attribute                | Description                                                                                                                                                                                                          | Support                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **aria-roledescription** | Defines a human-readable, **author-localized** description for the [role](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element). In this case, "accordion". | [View AT support](https://a11ysupport.io/tech/aria/aria-roledescription_attribute) |

## Further Reading

- [APG accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [APG disclosure pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
