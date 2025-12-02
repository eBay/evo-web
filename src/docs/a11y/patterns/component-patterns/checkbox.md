# Checkbox Accessibility

## Best Practices

Checkboxes are form controls and _should_ be inside a form tag. The form _should_ have a submit button.

Individual checkboxes **must** have a visible, onscreen label. Typically we use a label tag to achieve this.

Groups of _related_ checkboxes **must** have a group label. Typically we use fieldset and legend tags to achieve this.

Toggling a checkbox should not cause an app update until the related form is submitted by the user. If instant app updates are required, perhaps consider the [switch](switch) pattern or a button-less [menu](menu).

## Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

### Keyboard

Checkbox **must** be keyboard focusable (unless disabled).

If checkbox has keyboard focus, pressing SPACEBAR **must** toggle the checked state.

If checkbox has keyboard focus, pressing ENTER key **must** submit the form.

If checkbox has keyboard focus, pressing TAB key or SHIFT-TAB key combo moves keyboard focus to next or previous interactive element on page respectively.

### Screen Reader

Checkbox **must** be reachable with screen reader (even when disabled).

Checkbox **must** be announced as "checkbox".

Checkbox label **must** be announced.

Checkbox group label, if applicable, **must** be announced.

Checkbox state **must** be announced.

### Pointer

Clicking checkbox **must** toggle the checked state.

Clicking checkbox label **must** toggle the checked state.

## ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of the checkbox pattern.

| Attribute       | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| **aria-hidden** | Removes the presentational SVG element from the accessibility tree. |
