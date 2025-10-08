# Form Validation Accessibility

![Page notice showing form validation errors.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcDjeT1gbAxkHBXPR%2Fformvalidation.png?generation=1548799250795256\&alt=media)

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

### Developer Guide

Our implementation follows the [Progressive Enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) strategy. We build in a layered fashion that allows **everyone** to access the basic content and functionality of a web page.

The three layers are:

1. Content (HTML)
2. Presentation (CSS)
3. Behaviour (JS)

#### Content (HTML)

We should never depend solely on client-side JavaScript to validate an important form. Our baseline functionality must be to submit the form to the server for processing, which will display any results _after_ a full page reload.

We will be assuming that the following form has been submitted by the user:

```markup
<form action="/processform">
    <span>
        <label for="age">Age</label>
        <input type="text" name="age" id="age" value="foo" />
    </span>
    <span>
        <label for="size">Shoe Size</label>
        <input type="text" name="size" id="size" value="bar" />
    </span>
</form>
```

**Full Page Reload**

We can use a [page notice](page-notice) to display a prominent error message at the top of the page:

```markup
<section aria-labelledby="page-notice-title" class="page-notice page-notice--attention" role="region">
    <div class="page-notice__header">
        <svg focusable="false" height="24" width="24" role="img" aria-label="Attention">
            <use xlink:href="#icon-attention"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title" id="page-notice-title">Error!</h2>
    </div>
</section>
```

Using the region role and aria-label ensures that the page notice is listed as a custom "Priority" landmark in assistive technology.

This is one of the few occasions where it is appropriate to create a custom landmark on eBay.

**Error Links**

It's not enough to just say "Error!" of course! The page notice must also contain descriptive error links to all invalid inputs.

```markup
<section aria-labelledby="page-notice-title" class="page-notice page-notice--attention" role="region">
    <div class="page-notice__header">
        <svg focusable="false" height="24" width="24" role="img" aria-label="Attention">
            <use xlink:href="#icon-attention"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title" id="page-notice-title">Error! Please correct the following fields:</h2>
        <ol>
            <li>
                <a href="#age">Age - please enter a valid age (for example, 35)</a>
            </li>
            <li>
                <a href="#size">Shoe-size - please enter a valid shoe size (for example, 8.5)</a>
            </li>
        </ol>
    </div>
</section>
```

Note that Safari has an issue with setting focus on the input after clicking an internal link (it seems to set focus, but typing is not possible), and so some additional JavaScript is needed to set focus properly.

**Invalid Inputs**

Use `aria-invalid="true"` to mark inputs as invalid to assistive technology.

```markup
<span>
    <label for="age">Age</label>
    <input aria-describedby="age-description" aria-invalid="true" id="age" name="age" type="text" />
</span>
```

**Inline Notices**

In addition to the main notice, each invalid input must display an [inline error notice](inline-notice):

```markup
<span>
    <label for="age">Age</label>
    <input aria-describedby="age-description" aria-invalid="true" id="age" name="age" type="text" />
    <span id="age-description">Please enter a correct age</span>
</span>
```

#### Presentation (CSS)

There is not much to say in terms of CSS, other than the page notice and all errors **must** be fully visible while the form remains in an invalid state.

Also, we can leverage ARIA states in our CSS.

```css
input[type=text][aria-invalid=true] {
    border: 1px solid red;
}
```

The `aria-invalid` state styles invalid fields with a red border. No need to create a class!

#### Behaviour (JS)

JavaScript enhances our baseline experience by doing everything mentioned above, but all without a full page reload.

We create the exact same notice as in our baseline experience, only now we render the HTML immediately on the client.

```markup
<section aria-labelledby="page-notice-title" class="page-notice page-notice--attention" role="region" tabindex="-1">
    <div class="page-notice__header">
        <svg focusable="false" height="24" width="24" role="img" aria-label="Attention">
            <use xlink:href="#icon-attention"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title" id="page-notice-title">Error! Please correct the following fields:</h2>
        <ol>
            <li>
                <a href="#age">Age - please enter a valid age (for example, 35)</a>
            </li>
            <li>
                <a href="#size">Shoe-size - please enter a valid shoe size (for example, 8.5)</a>
            </li>
        </ol>
    </div>
</section>
```

With JavaScript available, we can also set focus directly on the page notice. This use of focus management is a crucial enhancement for screen reader users.

### ARIA Reference

This section gives an overview of our use of ARIA in this pattern.

#### aria-required

Applied to the input element to denote a required field.

We can also use this attribute as a CSS hook.

#### aria-invalid

Applied to the input element to denote an invalid field.

We can also use this attribute as a CSS hook.

#### aria-describedby

Applied to the input element to denote the element containing the error description.

### Related Articles

* [Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/) (Norman Nielson Group)
