# Form Validation Accessibility

![Page notice showing form validation errors.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcDjeT1gbAxkHBXPR%2Fformvalidation.png?generation=1548799250795256&alt=media)

### Introduction

Form validation notifies users of invalid and missing data _after_ a user has attempted to submit the form.

To validate a field _before_ the user attempts to submit the form, please view the [input validation](input-validation) pattern.&#x20;

After attempting to submit a form, the validation results can either be rendered immediately on the client, or rendered after a full page reload.

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](http://ebay.github.io/mindpatterns/messaging/form-validation/).

### Terminology

**Form Validation**: The pattern as a whole, containing the following sub parts.

**Notice landmark**: page notice or section notice containing list of error links

**Error link**: internal link that moves focus to invalid input.

**Invalid input**: a form control with an invalid value

**Inline notice**: displayed next to an invalid input

### Best Practices

Immediate client-side results **must** be rendered using a section notice directly _above_ the form.

A full-page reload **must** render a [page notice](page-notice) at the top of the page.

The notice **must** contain a list of errors that link directly to their respective invalid inputs.

The errors **must** be visible to all users. Do not try and hide the errors from sighted users!

We highly recommend reading [Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/) by the Norman Nielson Group.

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

The notice landmark **must** receive programmatic focus when rendered.

The notice landmark should not be in tab order (i.e it should have tabindex="-1").

Activating an error link **must** move focus to the invalid input.

Inline errors **must** **not** be focusable (they are static text).

#### Screen Reader

User **must** receive notification of all errors preventing progress.

An invalid input **must** notify user of the invalid state **and** the error description.

Notice landmark **must** be listed as custom landmark and labelled appropriately.

#### Pointer

Awaiting content for this section.

### ARIA Reference

This section gives an overview of our use of ARIA in this pattern.

| Attribute            | Description                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| **aria-required**    | Applied to the input element to denote a required field. We can also use this attribute as a CSS hook. |
| **aria-invalid**     | Applied to the input element to denote an invalid field. We can also use this attribute as a CSS hook. |
| **aria-describedby** | Applied to the input element to denote the element containing the error description.                   |

### Related Articles

- [Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/) (Norman Nielson Group)
