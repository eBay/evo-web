# Details Accessibility

![Expandable/collapsible sections](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcJAVpmf01OLDMYbl%2Fexpando.png?generation=1548799264209210\&alt=media)

### Introduction

A region of content that can be expanded and collapsed, forcing any adjacent content to be pushed down  the page.

Details are often used to declutter secondary content (e.g. 'Show more'), navigation links or form options.

HTML provides a details tag by default, however it is not supported in Internet Explorer or Edge browsers.

### Working Examples

You can take a look at the details pattern in action on our [examples](http://ebay.github.io/mindpatterns/disclosure/details/index.html) site.

### Best Practices

**Must** be opened and closed via a summary element.

**Must not** be opened by a link, radio button or checkbox.

Can be closed programmatically via the `open` property.

### Interaction Design

#### Keyboard

Pressing ENTER or SPACE on summary element will expand or collapse content accordingly.

#### Pointer

Clicking or tapping the summary element will expand or collapse the content accordingly.

#### Screen Reader

With virtual cursor on summary element, screen reader will announce current expanded/collapsed status.

When content is expanded, screen reader will announce new expanded state of button or summary element.

### Developer Guide

This guide explains how to "polyfill" the details tag so that it can be used in non-supported browsers.  It also explains how to show a custom icon, using CSS.

#### HTML

Here's an example where we keep a list of "Buying Activity" related links inside of a details pattern:

```markup
<details class="details">
    <summary>Buying Activity</summary>
    <ul>
        <li><a href="http://www.ebay.com">Purchases</a></li>
        <li><a href="http://www.ebay.com">Bids/Offers</a></li>
        <li><a href="http://www.ebay.com">Didn't Win</a></li>
    </ul>
</details>
```

Internet Explorer and Edge will have no idea what to do with the details and summary pattern, and so we will require CSS and JavaScript to fix that.

#### CSS

The first thing we must do, in order to fix layout, is let IE and Edge know that the details tag is a block-level element:

```css
details.details {
    display: block;
}
```

Next we are going to hide the browser's default icon for ALL browsers.

```css
/* Remove details marker for non-webkit */
details.details summary {
    display: list-item;
    list-style-position: inside;
    list-style-type: none;
}

/* Remove details marker for non-webkit */
details.details summary::-webkit-details-marker {
    display: none
}
```

Then show a custom icon. Again for ALL browsers.

```css
/* Custom details marker for closed state */
details.details summary::before {
    content: "\025B8";
    display: inline-block;
    width: 1em;
}

/* Custom details marker for open state */
details.details[open] summary::before {
    content: "\025BE";
}
```

Here we are simply using the `::before` pseudo-selector to create unicode content, but you could also use SVG markup or a span with background image if you prefer.

#### JavaScript

The goal of the JavaScript is to polyfill the functionality of the details tag for browsers that do not support it.&#x20;

We can summarise the requirements as:

1. Support `open` property state
2. Ensure summary element is keyboard focusable
3. Ensure summary element has appropriate role
4. Support toggle on click
5. Support toggle on ENTER and SPACEBAR
6. Ensure that a `toggle` event or custom event is triggered

Fortunately some clever individual has already gone and done that and given it the very excellent name of [details-element-polyfill](https://github.com/javan/details-element-polyfill).&#x20;
