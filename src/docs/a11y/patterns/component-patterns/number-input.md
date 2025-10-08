# Number Input Accessibility

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FvXeeTNFYsj8qOuP9XdFS%2Fnumber-input.png?alt=media&#x26;token=d1209eb5-fb93-4f52-99be-a7a86b8f9648" alt="A numeric input field with prominent increase/decrease buttons."><figcaption><p>A numeric input field with prominent increase/decrease buttons.</p></figcaption></figure>

### Introduction

A **number input** allows users to select a number from a range of values. It consists of an input field and two buttons to increase or decrease the value.

The default number type input field in HTML includes two small spin buttons to increase or decrease the input’s value by one. Our number input pattern visually hides these default spin buttons, replacing them with larger increase and decrease buttons that perform the same function while providing more tap affordance for pointer users.

Authors may implement a **quantity input** variant, which builds upon the number input pattern by adding a delete button. This variant can be useful in interfaces like digital carts, where users may prefer to remove items entirely rather than setting their quantity to zero.

### Terminology

* **Input field** - The HTML input field with type=“number”
* **Increase & decrease buttons** - increase or decrease the value by one
* **Quantity-input** - variant of pattern used in a shopping cart
* **Delete button** - shown in quantity-input variant only, when value reaches minimum

### Best Practices

* **Number input:**
  * The decrease button must be disabled when the value is at its minimum. Similarly, the increase button must be disabled when the value is at its maximum.
* **Quantity input:**
  * For fields with a minimum value greater than 0, authors may add a delete button that appears in place of the decrease button when the value reaches its minimum.
  * The delete button must be after the input field in the DOM and tab order, even if it appears visually before it.
  * Pressing the delete button should remove the entire number input.

### Working Examples

See [full working examples in Skin](https://opensource.ebay.com/evo-web/skin/component/number-input/).

### Interaction Design

This section provides interaction guidelines for keyboard, screen reader, and pointing devices.

#### Keyboard

The input field **must** respect all the default keyboard interactions for an HTML input field of type=“number”. With focus on the input field, user can:

* Type a numeric value
* Press UP arrow to increment the value, up to the max value (if one is set)
* Press DOWN arrow to decrement the value, down to the min value (if one is set)
* TAB to next focusable element on the page, SHIFT + TAB to previous focusable element

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

### Developer Guide

We will begin with the default number-input version.

**Input field**

Start with the input field itself, ensuring it has an associated \<label> or aria-label. Specify min and max values as needed:

```html
<span class="number-input">
  <label for="quantity">Quantity</label>
  <input
    id="quantity"
    type="number"
    min="0"
    max="100"
    value="0"
  />
</span>

```

**Increase/decrease buttons**

Add in the custom increase and decrease buttons. Since these are an enhancement for pointer device users, give them each tabIndex=”-1” and aria-hidden=”true” to remove them from the keyboard and screen reader flow. Use CSS to hide the input field’s native spin buttons.

The DOM order of the increase and decrease buttons is not terribly important as they are not in the tab or screen reader order.

```html
<span class="number-input">
  <label for="quantity">Quantity</label>
  <button
    tabindex="-1"
    aria-hidden="true"
    type="button"
  >
    <subtract-icon aria-hidden="true"/>
  </button>
  <input
    id="quantity"
    type="number"
    min="0"
    max="100"
    value="0"
  />
  <button
    type="button"
    tabindex="-1"
    aria-hidden="true"
  >
    <add-icon aria-hidden="true"/>
  </button>
</span>

```

Example CSS

```css
.number-input {
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

```

**Quantity input variant**

If implementing the quantity input variant, include a delete button after the input field in the DOM. The button should have type=”button” to differentiate it from form submit buttons. Ensure that it has an aria-label that indicates what the button does, e.g. “Remove item from cart.”

Use Javascript to display or hide the button depending on the input’s current value; if value is at its minimum, show the button. If not, hide it.

```html
<span class="number-input">
    <label for="quantity">Quantity</label>
    <button
      tabindex="-1"
      aria-hidden="true"
      type="button"
    >
      <subtract-icon aria-hidden="true"/>
    </button>
    <input
      id="quantity"
      type="number"
      min="1"
      value="1"
    />
    <button
      type="button"
      aria-label="Remove item from cart"
    >
      <delete-icon aria-hidden="true"/>
    </button>
    <button
      type="button"
      tabindex="-1"
      aria-hidden="true"
    >
      <add-icon aria-hidden="true"/>
    </button>
</span>

```

#### Further reading

* [MDN web docs: number input](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number)
