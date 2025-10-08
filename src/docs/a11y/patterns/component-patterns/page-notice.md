# Page Notice Accessibility

![Page notice requiring users attention.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-MJmfnCyi6cADHhV_RQk%2F-MJmjFyF_iT1oRutE__7%2Fpage-notice-dweb.png?alt=media\&token=e4310480-5ad3-4797-a21d-0589bd01f2f7)

### Introduction

User notification which appears prominently at the top of the page, above the main content.

In order of priority, from high to low, a page notice is classified as either:

* attention
* confirmation
* information

Page-notices may be rendered server-side and visible at page load time or, in a single page app environment, they might instead be triggered on the client after some user action.

Composite patterns containing Page Notices are:

* [Form Validation (server-side)](form-validation)

### Working Examples

Experience the pattern in action on our companion [eBay MIND patterns examples website](http://ebay.github.io/mindpatterns/messaging/page-notice/index.html).

Examine the required markup structure in the [Bones GitHub project](https://github.com/ianmcburnie/bones#page-notice).

View a fully styled example on our [eBay Skin website](https://opensource.ebay.com/skin/component/page-notice/).

### Best Practices

A page notice **must** appear above the main page content, and _above_ the fold if possible.

A page **must** have only one page notice visible at any time.

Page notice **must not** rely on colour alone to convey meaning or tone.

Page notice _should_ use an icon to further assist conveying meaning & tone.

Page notice may _optionally_ contain a button to dismiss and hide the notice.

Page notice may _optionally_ contain any number of call to action links or buttons.

### Interaction Design

#### Keyboard

An attention notice **must** receive keyboard focus if rendered on the server. In some cases we do this for client-side rendered notices too (e.g. if the notice contains a call to action link or button).

#### Screen Reader

Critical error notices **must** be announced on page load (achieved via focus management).

All client-side changes **must** be announced (achieved via live-region for non critical notices).

Page notice **must** be available in screen reader list of regions or landmarks.

### Developer Guide

A page notice has 4 key pieces of content: icon, heading, copy and call to action link or button (optional).

#### Landmark Region

To aid discoverability of such important content for assistive technology, we make the page notice a landmark, using the `<section>` tag and  `region` role.

```markup
<section class="page-notice page-notice--attention" role="region">
    <!-- content -->
</section>
```

The page notice will not appear in the screen reader's list of landmarks until we assign it an accessible label. We will fix that in a little while.

#### Programmatically Focusable

Adding a tabindex value of -1 allows programmatic keyboard focus on a high-priority page notice.

```markup
<section class="page-notice page-notice--attention" role="region" tabindex="-1">
    <!-- content -->
</section>
```

**NOTE**: You may wish to apply the tabindex attribute in a progressively enhanced manner with JavaScript instead.

#### Live Region

Notices rendered or updated on the client must exist within a "live-region".

```markup
<div aria-live="polite">
    <section aria-labelledby="page-notice-title" class="page-notice page-notice--attention" role="region">
        <!-- content -->
    </section>
</div>
```

Assistive technology will now announce any client-side changes to content within the live-region element.

#### Structure

We will begin by structuring the notice into 3 parts: header, main & footer.

```markup
<section class="page-notice page-notice--attention" role="region">
    <div class="page-notice__header">
        <!-- header content -->
    </div>
    <div class="page-notice__main">
        <!-- main content -->
    </div>
    <div class="page-notice__footer">
        <!-- footer content -->
    </div>
</section>
```

#### Icon

The SVG icon fits into the header slot. It has an `aria-label` value of "Attention", "Confirmation" or "Information".

```markup
<section class="page-notice page-notice--attention" role="region">
    <div class="page-notice__header">
        <svg focusable="false" height="24" width="24" role="img" aria-label="Attention">
            <use xlink:href="#icon-attention"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <!-- main content -->
    </div>
    <div class="page-notice__footer">
        <!-- footer content -->
    </div>
</section>
```

#### Title & Copy

The heading element can be used to as the label for the landmark region, fixing the issue mentioned previously.

```markup
<section aria-labelledby="page-notice-title" class="page-notice page-notice--attention" role="region">
    <div class="page-notice__header">
        <svg focusable="false" height="24" width="24" role="img" aria-label="Attention">
            <use xlink:href="#icon-attention"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title" id="page-notice-title">Update bank info</h2>
        <p>Please update your bank details by [due date] to get you account back in good standing.</p>
    </div>
    <div class="page-notice__footer">
        <!-- footer content -->
    </div>
</section>
```

#### Call to Action

Finally, any call to action link or button can be placed into the footer slot.

```markup
<section aria-labelledby="page-notice-title" class="page-notice page-notice--attention" role="region">
    <div class="page-notice__header">
        <svg focusable="false" height="24" width="24" role="img" aria-label="Attention">
            <use xlink:href="#icon-attention"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title" id="page-notice-title">Update bank info</h2>
        <p>Please update your bank details by [due date] to get you account back in good standing.</p>
    </div>
    <div class="page-notice__footer">
        <a href="https://www.ebay.com" class="page-notice__cta">Update Info</a>
    </div>
</section>
```

### FAQ

#### When do I set keyboard focus on a page notice?

Low priority notices such as confirmation and information should never receive keyboard focus.

All high-priority page notices rendered on the server should receive keyboard focus.

Some high-priority notices rendered on the client should receive keyboard focus. Typically these are notices that contain an interactive call to action that helps resolve the issue.
