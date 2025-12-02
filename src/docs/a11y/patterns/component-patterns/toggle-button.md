# Toggle Button Accessibility

## Best Practices

The toggle button **must** be a button (i.e. not a link) when using aria-pressed.

If the state is conveyed via visible text, a link can be used (resulting in a full page reload).

The toggle button **must** have only two states (whether conveyed via aria-pressed or text).

The toggle button that uses visible text to convey state change **must** **not** also use aria-pressed.

## Interaction Design

### Keyboard

If button has focus, SPACEBAR and ENTER keys should toggle button.

If button has focus, TAB and SHIFT-TAB keys should move to the next or previous focusable page element respectively.

## ARIA Reference

| Attribute        | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| **aria-pressed** | Informs AT the current "pressed" state of a toggle button. |
