# Inline Notice Accessibility

![Highest bidder notice](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcDyYJQOLTemZe960%2Finlinenotice.png?generation=1548799251668838&alt=media)

### Introduction

A notification that appears next to an individual element or control.

In order of priority, from high to low, the status of an inline notice is classified as either:

- attention
- confirmation
- information

### Working Examples

Experience the pattern in action on our companion [eBay MIND patterns examples website](http://ebay.github.io/mindpatterns/messaging/inline-notice/).

View a fully styled example on [eBay Skin](https://opensource.ebay.com/skin/component/inline-notice/).

### Best Practices

Avoid having more than one high-priority notice visible at any time.

Avoid rendering high-priority inline notices on the server. For better discoverability, use a [page notice](page-notice) instead. If you cannot use a page notice, then focus **must** be set on the inline notice.

Avoid using progress bars and spinners in conjunction with client-side notice.

Displaying a notice for a success or confirmation may not always be necessary. In the absence of an error message, a user can imply success (opinionated).

### Interaction Design

#### Keyboard

Nested interactive elements (such as links) **must** be keyboard focusable.

#### Screen Reader

Screen reader **must** not announce low-priority server-side notices.

Screen reader **must** announce client-side content changes to any type of notice.

Screen reader **must** announce client-side visibility change of a hidden notice.

If the notice is related to a control, the notice **must** be announced as the description of that control.

### Developer Guide 1 - Client Side Notice

Our implementation follows the [Progressive Enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) strategy. We build in a layered fashion that allows **everyone** to access the basic content and functionality of a web page.

The three layers are:

1. Content (HTML)
2. Presentation (CSS)
3. Behaviour (JS)

For our first example, we are going to mock up an implementation based on a typical "Add to Cart" button you might find on any eCommerce site these days. This button will render a high-priority notice whenever an error occurs.

#### Content (HTML)

Let's make it work on the server first, without any JavaScript or client-side rendering.

**Form**

We'll need a form, a hidden form input, and a submit button:

```html
<form>
  <input name="item" type="hidden" value="iphone12345" />
  <input type="submit" value="Add to Cart" />
</form>
```

Clicking this button will submit the form. When the page reloads the server will take care of rendering any applicable success or error message.

At this stage, without JavaScript, any error message should be a server-side [page notice](page-notice), not an inline notice. Refer to the page notice developer guide for details.

**Landmark Region**

For our client side enhancement, let's create our error message inside of a landmark region, with an initial state of `hidden` . When the hidden state is removed, the region will be discoverable via a screen reader's list of landmarks.

```html
<form>
  <input name="item" type="hidden" value="iphone12345" />
  <input type="submit" value="Add to Cart" />
  <span class="inline-notice" role="region" aria-label="Attention" hidden>
    <p>Add to cart action failed. Please try again later.</p>
  </span>
</form>
```

**Live Region**

Of course, we do not want to have to rely on a user opening up their list of landmarks to discover if an action was successful or not! We want to announce any error immediately. We do so by adding a live region inside of our landmark region.

```html
<form>
  <input name="item" type="hidden" value="iphone12345" />
  <input type="submit" value="Add to Cart" />
  <div class="inline-notice" role="region" aria-label="Attention" hidden>
    <div role="alert">
      <p>Add to cart action failed. Please try again later.</p>
    </div>
  </div>
</form>
```

**Button Description**

If the user leaves the button, and then returns back to it, it would be nice to remind the user of any error message. This is achieved this with the `aria-describedby` property.

```html
<form>
  <input name="item" type="hidden" value="iphone12345" />
  <input type="submit" value="Add to Cart" aria-describedby="msg" />
  <div class="inline-notice" role="region" aria-label="Attention" hidden>
    <div id="msg" role="alert">
      <p>Add to cart action failed. Please try again later.</p>
    </div>
  </div>
</form>
```

#### Presentation (CSS)

You can style the button and inline notice according to your design system guide.

#### Behaviour (JS)

The goal of JavaScript is to:

1. Prevent the form submit action
2. Perform the service call using AJAX
3. Display the error message next to our button

Step 3 is of most interest to us. We must ensure the error message is accessible while the user remains on the button.

**Display Message**

Assuming there was an error, we update the `hidden` state of the live region content.

```javascript
document.getElementById("add-to-cart-error").hidden = false;
```

When the `hidden` state is removed, assistive technology detects a visibility change in the subtree of the live region, and the content will be announced.&#x20;

Keyboard focus remains on the button. Do **not** set focus to the inline-notice! That would defeat the purpose of the live region.

### FAQ

#### When do I use role="region" with an inline notice?

For all notices. It creates a landmark region. All landmark regions should be labelled (e.g. "Confirmation", "Information", "Attention").

#### When do I use role="alert" with an inline notice?

For high-priority notices rendered and updated on the client only. The alert must be nested inside of the landmark region element.

#### When do I set keyboard focus on an inline notice?

Always set keyboard focus on high priority notices rendered by the server and visible at page load time. Again, these situations should be rare. Use a [page notice](page-notice) instead.
