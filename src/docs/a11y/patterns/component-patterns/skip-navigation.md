# Skip Navigation Accessibility

![Skip to main content](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcG0pUg0R4d2iuXs8%2Fskipto.png?generation=1548799253737538\&alt=media)

### Introduction

The skip navigation pattern is most commonly used to skip past the main site navigation onto the main landmark element.

It can be used in other scenarios too; skipping past all links inside of a carousel, for example.

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](https://ebay.github.io/mindpatterns/navigation/skip-navigation).

### Best Practices

Link **must** set keyboard focus on target element when activated.

Link can be hidden from view until focused with keyboard.

### Interaction Design

This section provides interaction design for keyboard and screen reader devices.

#### Keyboard

Activating the skip link moves keyboard focus to the target element. Depending on the browser, the keyboard focus indicator may or may not be visible on the focussed target element.

After activating the skip link, pressing TAB key moves keyboard focus to the first interactive element _after_ the target element and restores focus indicator.

#### Screen Reader

Activating the skip link moves virtual cursor to the target element and screen reader will announce the contents of that element.

After activating the skip link, moving screen reader virtual cursor forwards will move virtual cursor to the next element after the target element.

### Developer Guide

Our implementation follows the [Progressive Enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) strategy; we build in a layered fashion that allows **everyone** to access the basic content and functionality of a web page.

The three layers are:

1. Content (HTML)
2. Presentation (CSS)
3. Behaviour (JS)

The skip-to content is fully accessible without CSS and JavaScript.

#### Content (HTML)

Our content contains a source link and a named, target element.

**Target**

In our target element we specify a unique id, and set a tabindex value of -1.

```markup
<main id="mainContent" role="main" tabindex="-1">
    <!-- all of your main page content goes here -->
</main>
```

Without the tabindex, a screen reader's virtual cursor may get left behind on the skipto link after activation. The tabindex of -1 _forces_ the screen reader to move to and read the target element.

**NOTE:** that there are some issues with adding the tabindex permanently, please see the JavaScript section further below for details on how to add it dynamically.

**Source**

Our source link references the target id:

```markup
<a class="skipto" href="#mainContent">Skip to main content</a>
```

**Checkpoint**

Our HTML is now complete, and we have a fully functional skip to link without any JavaScript.

How does this work without JavaScript? If the URL contains a hash fragment, the browser will set keyboard focus on the element with matching ID. The tab index value of negative one also forces the screen reader virtual cursor to move to the target element.

#### Presentation (CSS)

The goal of the presentation layer is to hide the skip to link until it has keyboard focus.

**Hiding Offscreen**

We use a CSS clipping technique to hide the element offscreen:

```css
.skip {    
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px !important;
    overflow: hidden;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
}
```

**Revealing**

To reveal, we update these styles using the `:focus` pseudo selector:

```css
.skip:focus {
    clip: none;
    height: auto;
    width: auto;
}
```

**Hiding Focus Outline**

You may notice that if you click with your mouse on the target area, a focus indicator appears around the element. This is due to the tab index value of -1.

We can remove this outline with CSS:

```css
.skip-target:focus {
    outline: 0 none;
}
```

Note that this is one of the very few times (perhaps the only time?) when it is okay to remove the focus outline of an element.

**Checkpoint**

Our CSS is now complete. The skip to link now only appears when it has keyboard focus.

#### Behaviour (JavaScript)

We have witnessed some edge-case issues caused by the permanent presence of `tabindex="-1"`, especially when on the main content element (i.e. `role="main"`). To workaround these issues, the tab index value can be added and removed dynamically, using JavaScript.

```javascript
skipEl.addEventLisetner('click', function (e) {
    targetEl.setAttribute('tabindex', '-1');

    // remove tabindex on next blur
    targetEl.addEventListener('blur', function(e) {
        targetEl.removeAttribute('tabindex');
    },{ once: true });
}
```

### FAQ

#### Why do we need tabindex="-1"? All modern browsers move keyboard focus without it.

All modern browsers do indeed now move the keyboard focus from the link to the target. This is great news for sighted keyboard users. However, we have found that in certain cases a screen reader will get left behind on the link. A tab index of negative one _forces_ the screen reader to move onto the target element. So we can think of this as some additional "focus management".
