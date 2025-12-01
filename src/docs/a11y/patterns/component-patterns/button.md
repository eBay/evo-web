# Button Accessibility

## Interaction Design

### Pointer

Buttons should **not** have a hand cursor. See [Hand Cursor on Buttons](../antipatterns/hand-cursor-on-buttons).

### Keyboard

If button has focus, `SPACEBAR` and `ENTER` keys should activate button.

If button has focus, `TAB` and `SHIFT-TAB` keys should move to the next or previous focusable page element respectively.

### Screenreader

If virtual cursor is on button, it must be invokable by virtual cursor (e.g. VO+SPACE in VoiceOver).

Role of 'button' **must** be announced.

Label **must** be announced.

Any state **must** be announced (e.g. expanded, haspopup).

Any description **must** be announced (i.e. via aria-describedby).

Any change in label (e.g. a waiting/loading state) _may_ be announced by the screen reader (**NOTE**: a live-region should not be used for this).

### ARIA Reference

This section lists all relevant ARIA roles, states and properties for a button.

| Attribute            | Description                                                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **aria-haspopup**    | Informs AT that the button opens a [menu](menu) or [dialog](../disclosure/lightbox-dialog) etc. when clicked.                                                   |
| **aria-controls**    | Informs AT that the button controls another element.                                                                                                            |
| **aria-expanded**    | Informs AT of the expanded state of any associated element or content                                                                                           |
| **aria-label**       | Creates a label for the button. **Warning!** This label will override any inner text that may be present. This property is most commonly used for icon buttons. |
| **aria-describedby** | Informs AT of any extended description or context related to the button. Note that this property has no effect on the accessible label of the button.           |
