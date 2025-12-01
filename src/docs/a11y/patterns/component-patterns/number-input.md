# Number Input Accessibility

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FvXeeTNFYsj8qOuP9XdFS%2Fnumber-input.png?alt=media&#x26;token=d1209eb5-fb93-4f52-99be-a7a86b8f9648" alt="A numeric input field with prominent increase/decrease buttons."><figcaption><p>A numeric input field with prominent increase/decrease buttons.</p></figcaption></figure>

### Introduction

A **number input** allows users to select a number from a range of values. It consists of an input field and two buttons to increase or decrease the value.

The default number type input field in HTML includes two small spin buttons to increase or decrease the input’s value by one. Our number input pattern visually hides these default spin buttons, replacing them with larger increase and decrease buttons that perform the same function while providing more tap affordance for pointer users.

Authors may implement a **quantity input** variant, which builds upon the number input pattern by adding a delete button. This variant can be useful in interfaces like digital carts, where users may prefer to remove items entirely rather than setting their quantity to zero.

### Best Practices

- **Number input:**
  - The decrease button must be disabled when the value is at its minimum. Similarly, the increase button must be disabled when the value is at its maximum.
- **Quantity input:**
  - For fields with a minimum value greater than 0, authors may add a delete button that appears in place of the decrease button when the value reaches its minimum.
  - The delete button must be after the input field in the DOM and tab order, even if it appears visually before it.
  - Pressing the delete button should remove the entire number input.

### Interaction Design

This section provides interaction guidelines for keyboard, screen reader, and pointing devices.

#### Keyboard

The input field **must** respect all the default keyboard interactions for an HTML input field of type=“number”. With focus on the input field, user can:

- Type a numeric value
- Press UP arrow to increment the value, up to the max value (if one is set)
- Press DOWN arrow to decrement the value, down to the min value (if one is set)
- TAB to next focusable element on the page, SHIFT + TAB to previous focusable element

The increase and decrease buttons _should_ not be keyboard accessible.

For quantity input, the delete button **must** follow [all standard button keyboard interactions](https://ebay.gitbook.io/mindpatterns/input/button#interaction-design). After deleting an entry, focus must move to the nearest focusable element.

#### Screen Reader

The input field **must** be reachable with a screen reader (even when disabled).

The input field **must** be announced as an input of type number.

The input field’s label **must** be announced.

The increase and decrease buttons _should_ be hidden from the screen reader to avoid redundancy.

For quantity input, the delete button **must** convey its accessible label, e.g. “Delete item.”

#### Pointer

Clicking the increase or decrease buttons **must** adjust the value by one and return focus to the input field, so that the user can easily switch between pointer and keyboard input as desired.
