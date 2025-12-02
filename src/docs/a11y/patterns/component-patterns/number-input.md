# Number Input Accessibility

## Best Practices

- **Number input:**
  - The decrease button must be disabled when the value is at its minimum. Similarly, the increase button must be disabled when the value is at its maximum.
- **Quantity input:**
  - For fields with a minimum value greater than 0, authors may add a delete button that appears in place of the decrease button when the value reaches its minimum.
  - The delete button must be after the input field in the DOM and tab order, even if it appears visually before it.
  - Pressing the delete button should remove the entire number input.

## Interaction Design

This section provides interaction guidelines for keyboard, screen reader, and pointing devices.

### Keyboard

The input field **must** respect all the default keyboard interactions for an HTML input field of type=“number”. With focus on the input field, user can:

- Type a numeric value
- Press UP arrow to increment the value, up to the max value (if one is set)
- Press DOWN arrow to decrement the value, down to the min value (if one is set)
- TAB to next focusable element on the page, SHIFT + TAB to previous focusable element

The increase and decrease buttons _should_ not be keyboard accessible.

For quantity input, the delete button **must** follow [all standard button keyboard interactions](https://ebay.gitbook.io/mindpatterns/input/button#interaction-design). After deleting an entry, focus must move to the nearest focusable element.

### Screen Reader

The input field **must** be reachable with a screen reader (even when disabled).

The input field **must** be announced as an input of type number.

The input field’s label **must** be announced.

The increase and decrease buttons _should_ be hidden from the screen reader to avoid redundancy.

For quantity input, the delete button **must** convey its accessible label, e.g. "Delete item."

### Pointer

Clicking the increase or decrease buttons **must** adjust the value by one and return focus to the input field, so that the user can easily switch between pointer and keyboard input as desired.
