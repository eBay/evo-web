# Accordion Accessibility

## Interaction Design

This section provides detailed instructions for how different input types should navigate and operate the pattern.

### Keyboard

Pressing **TAB** key **must** move keyboard focus from one header to the next. It will also move focus through any interactive elements inside open panels.

Likewise, pressing **SHIFT-TAB** keys moves focus *backwards* through headers and interactive panel content.

Pressing **SPACEBAR** or **ENTER** key on a header with keyboard focus **must** open the panel. For *auto-collapse* accordions, any other open panel **must** close.

### Screen Reader

Virtual cursor **must** be able to move from one header to the next.

With virtual cursor on header, it **must** be able to open panel via click event simulation. For *auto-collapse* accordions, any other open panel **must** close, but this should not be announced.

### Pointer

Tapping or clicking a header **must** open the related content panel. For *auto-collapse* accordions, any other open panel **must** close.

## ARIA Reference

* **aria-roledescription**: defines a human-readable, author-localized description for the [role](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element). In this case, "accordion".