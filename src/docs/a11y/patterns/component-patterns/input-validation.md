# Input Validation Accessibility

![An invalid textbox entry](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcDXsXrAa24EsIzd2%2Finputvalidation.png?generation=1548799250773699&alt=media)

### Introduction

The input validation pattern notifies users of invalid and missing data _before_ a user has attempted to submit the form.

To validate a field _after_ the user attempts to submit the form, please view the [Form Validation](form-validation) pattern. You may wish to combine both patterns.

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](http://ebay.github.io/mindpatterns/messaging/input-validation/).

Examine the required markup structure in the [Bones GitHub project](https://github.com/ianmcburnie/bones#user-content-input-validation).

### Best Practices

The validation of an input may occur on the client at any of the following points:

1. The input gains focus
   - This method is not recommended, because an input should be in a valid or invalid state _before_ it receives focus.
2. The input changes value
   - This method is an intrusive way of validating an input. Consider it only in certain, exceptional circumstances. It is intrusive because a notification will fire after every key press.
3. The input loses focus
   - This is usually a good time to do validation as the user has finished entering their value and now moves onto their next task. Consider the [input meter](input-meter) pattern for dynamic feedback to the user after each keystroke. The user must receive polite notification of any error.
4. The form gets submitted
   - When a user attempts to submit the form that the input belongs to, the input value may be validated on the client and/or the server. For more details please consult the [Form Validation Pattern](form-validation).

We recommend methods #3 and #4.

We cover method #3 in this pattern, and method #4 as part of the [form validation](form-validation) pattern.

We highly recommend reading [Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/) by the Norman Nielson Group.

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

This pattern inherits all [inline notice](inline-notice) interaction design.

#### Keyboard

Error message text **must** not be keyboard focusable (unless it contains links).

Hyperlinks or buttons inside of error message text **must** be keyboard focusable and in logical tab order.

#### Screen Reader

Error message **must** announce when displayed.

Input **must** declare it's validation state and description.

### Developer Guide

Input validation is a pattern that depends on JavaScript.

Input validation is an _enhancement_. It progressively enhances the [form validation](form-validation) pattern.

#### Content (HTML)

Let's assume we will validate the following input, which expects a numerical value for age. The input will be validated when it loses focus.

```html
<span>
  <label for="age">Age</label>
  <input id="age" name="age" type="text" />
</span>
```

**NOTE**: We don't use HTML5 type="number" due to current cross-browser issues with HTML5 input types.

**Validation State**

Our input is currently in a valid state, we should declare it as valid by applying the `aria-invalid` state with a value of false.

```html
<span>
  <label for="age">Age</label>
  <input aria-invalid="false" id="age" name="age" type="text" />
</span>
```

We will later use JavaScript to manage this state, which is crucial for assistive technology. It is also a handy hook for CSS (more on this later).

**Description**

Our next useful ARIA attribute is `aria-describedby`. This attribute, as you might expect, gives the input a description (which is **not** the same as a label).

```html
<span>
  <label for="age">Age</label>
  <input
    aria-describedby="age-description"
    aria-invalid="false"
    id="age"
    name="age"
    type="text"
  />
</span>
<span>
  <span id="age-description"
    ><!-- message content will be inserted here --></span
  >
</span>
```

This mechanism ensures the description is announced by the screen reader whenever the input receives focus.

Of course the description is empty for now, because there is no error!

**Live Region**

In case you were wondering why the additional span in the last step, it was preparation for the live region:

```html
<span>
  <label for="age">Age</label>
  <input aria-describedby="age-description" id="age" name="age" type="text" />
</span>
<span aria-live="polite" role="status">
  <span id="age-description"
    ><!-- message content will be inserted here --></span
  >
</span>
```

The creation of a live-region ensures that the error message will be announce as soon as it appears, even while focus remains on the input.

NOTE: The live region structure does not have to be created server-side, it can be created lazily on the client with JavaScript.

#### Presentation (CSS)

In terms of CSS and accessibility there's not a great deal we need to cover. Error messages should be styled according to the design system. Usually some shade of red will do the trick!

**Border Highlight**

It's good practice to visually highlight an error field with a border. Again, red is always a good choice!

```css
.input-validation input[aria-invalid="true"] {
  border: 1px solid red;
}
```

JavaScript must maintain the `aria-invalid` state.

#### Behaviour (JS)

Our pattern truly comes alive with JavaScript. Our goal is to validate on the client and give immediate feedback to the user _without_ refreshing the page.

If JavaScript is unavailable, the [form validation](form-validation) pattern should be in place as fallback.

**Validation**

The actual validation of input values is outside the scope of the document, but suffice to say you will need to listen to the 'input' event (or 'keydown' for IE8 and under) and call your validation routine accordingly.

If an error is found we insert our error message content and update the aria-invalid state to true. Likewise, if an error is fixed, we remove the error message and flip the aria-invalid state back to false.

Again, we cannot yet use HTML5 client-side validation, so remember to add the 'novalidate' attribute to your HTML5 forms.

### ARIA Reference

This section gives an overview of our use of ARIA in this pattern.

| Attribute            | Description                                                                                                                                                                                                            |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **aria-invalid**     | Applied to the input element to notify screen reader of validation state (true or false).                                                                                                                              |
| **aria-describedby** | Applied to the input element to create a description. Do not confuse "description" with "label" - they are two different things in terms of accessibility.                                                             |
| **aria-live**        | Creates a live region. Assistive technology will react accordingly to any dynamic change of visibility or content. A setting of 'polite' means any content changes get appended to the screen reader event queue.      |
| **novalidate**       | Not an ARIA attribute, but very important to apply this on your forms to disable built in validation. Why? Because the built-in validation messages are not accessible and conflict with our design system guidelines. |

### The Future

ARIA 1.1 also offers us a new `aria-errormessage` property, designed as a replacement for `aria-describedby` in these situations. However, it is not currently well supported.

HTML5 also promises us built-in validation on the client for a number of new input types (number, date, url, etc). However, at the time of writing - support across devices is not good enough for us to consider using them and they should be avoided for now until further notice.

### Related Articles

- [Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/) (Norman Nielson Group)
