# Input Validation Accessibility

![An invalid textbox entry](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcDXsXrAa24EsIzd2%2Finputvalidation.png?generation=1548799250773699&alt=media)

### Introduction

The input validation pattern notifies users of invalid and missing data _before_ a user has attempted to submit the form.

To validate a field _after_ the user attempts to submit the form, please view the [Form Validation](form-validation) pattern. You may wish to combine both patterns.

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
