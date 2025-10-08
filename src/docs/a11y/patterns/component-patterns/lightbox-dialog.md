# Lightbox Dialog Accessibility

![Screenshot of lightbox dialog on desktop screen.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-MKvRAByTNZEgrstQazn%2F-MKvRtVjc3KwiJmUKF1n%2Flightbox-dialog-dweb.png?alt=media\&token=2c6f85d6-771c-43a1-95f9-61002bc8a804)

### Introduction

In traditional desktop operating systems, a lightbox dialog is a child-window that typically exists to communicate information to the user, display a prompt for input, or allow the user to verify or cancel an action.

Whilst these specific cases are also valid and true on the web, we also see a wide variety of other custom uses. For example, a dialog itself might contain an entire full page-like experience, a video, image gallery, navigation or settings.

There are various ways to visually present a dialog. The version here is the "lightbox" version. A dialog that visibly dims out the rest of the page while the dialog is open.

### Working Examples

Experience the pattern in action on our [eBay MIND patterns examples website](https://ebay.github.io/mindpatterns/disclosure/lightbox-dialog/index.html).

View the required markup structure by viewing the [bones GitHub project](https://github.com/ianmcburnie/bones#user-content-dialog).

### Terminology

* **lightbox-dialog**: the pattern as a whole, comprised of the following sub parts
* **parent window**: the page containing the button that opens the dialog
* **dialog button**: the button that opens the child window
* **child window**: the overlay containing the dialog content
* **title**: the title of the child window
* **modality**: modal or non-modal, dialogs with a mask are always modal&#x20;
* **mask**: CSS effect that visibly dims out the parent window content
* **dismiss button**: button that dismisses and hides the lightbox

### Best Practices

A lightbox-dialog is typically opened in one of two ways:

* **Click-activated**: explicitly opened and closed by clicking the button
* **System-activated**: automatically opened by the system/application on page load or at some other arbitrary time

Opening modal dialogs that are not requested by user (i.e. system-activated) are a violation of [WCAG Guideline 3.2.5 (Level AAA)](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F22) and therefore should be reserved for exceptional circumstances only.

Lightbox dialog **must not** be opened on hover or focus of button.

Lightbox dialog **must** be opened on click-event of button or via an application event.

Lightbox dialog **must** contain a dismiss button.

Lightbox dialog **must** contain at least one interactive element (this can be the dismiss button).

Lightbox dialog **must** be clearly labelled by an onscreen heading/title

Lightbox dialog **must** start heading hierarchy at level 2.

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

If dialog button has focus, `ENTER` or `SPACE` key **must** open lightbox dialog.

When lightbox dialog opens, focus **must** move to the dismiss button.

Lightbox dialog **must** confine `TAB` and `SHIFT-TAB` to focusable elements of child window.

Pressing `ESC` key **must** close lightbox dialog (unless the currently focussed element has existing `ESC` key behaviour) with no changes applied (effectively acting as a "cancel").

Dialog button **must** receive focus when lightbox dialog is closed.

#### Screen Reader

Dialog button **must not** announce 'has popup'. A dialog is not considered a popup (i.e `aria-haspopup="true"` is not valid in this context).

Focussed element *should* be announced when child window opens (via focus management).

Title **must** be announced when lightbox dialog opens.

Virtual cursor **must** be confined within child window.

Assistive technology *might* announce "Entering/leaving dialog" (or words to those affect) when focus enters or leaves the lightbox dialog respectively.

#### Pointer

Clicking dialog button **must** open lightbox dialog.

Clicking mask **must** dismiss lightbox dialog with no changes applied (effectively acting as a "cancel").

### Developer Guide

HTML does provide a [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) tag, but at the time of writing this tag does not have good [cross browser support](https://caniuse.com/dialog).

#### Content (HTML)

**Button**

We are going to add a button element that opens the lightbox dialog when clicked.

```markup
<button class="dialog-button" data-dialog="my-dialog" type="button">Open Dialog</button>
```

We have added a custom data attribute called `data-dialog`. The value of this attribute references the ID of the dialog element and will be used by JavaScript (more on that later).

**Dialog Role**

The root element of the lightbox dialog must have a role of "dialog".

```markup
<div id="my-dialog" role="dialog">

</div>
```

**Hidden State**

The lightbox dialog must have a property of `hidden` to prevent it from being displayed on page load.

```markup
<div id="my-dialog" role="dialog" hidden>

</div>
```

To display the dialog, simply remove this property. This property can be used as a hook for CSS transitions.

**Child Window**

The child window element contains the actual dialog content.

```markup
<div id="my-dialog" role="dialog" hidden>
    <div class="dialog__window">
        <!-- dialog content goes here -->
    </div>
</div>
```

**Header and Body**

Next we create header and main structure, mimicking the structure of the main parent window.&#x20;

```markup
<div id="my-dialog" role="dialog" hidden>
    <div class="dialog__window">
        <div class="dialog__header">
            <!-- dialog header content goes here -->
        </div>
        <div class="dialog__main">
            <!-- dialog main content goes here -->
        </div>
    </div>
</div>
```

**Title**

Every dialog must be labelled. We can use aria-labelledby to point to a suitable labelling element inside of our dialog.

```markup
<div id="my-dialog" role="dialog" aria-labelledby="dialog-title" hidden>
    <div class="dialog__window">
        <div class="dialog__header">
          <h2 id="dialog-title">Dialog Example</h2>
        </div>
        <div class="dialog__main">
            <!-- dialog main content goes here -->
        </div>
    </div>
</div>
```

Alternatively, if no suitable heading or labelling element exists, we can specify the label in an aria-label property instead:

```markup
<div id="my-dialog" role="dialog" aria-label="Dialog Example" hidden>
```

**Close Button**

Every dialog requires some form of close/dismiss button. For a lightbox dialog, this button should be placed in the header.

```markup
<div id="my-dialog" role="dialog" aria-labelledby="dialog-title" hidden>
    <div class="dialog__window">
        <div class="dialog__header">
            <button aria-label="Close Dialog">
                <svg aria-hidden="true" focusable="false" height="16" width="16">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
            <h2 id="dialog-title">Dialog Example</h2>
        </div>
        <div class="dialog__main">
            <!-- dialog contents go here -->
        </div>
    </div>
</div>
```

#### Presentation (CSS)

There are many different ways to visually, and uniquely, style a lightbox dialog. The most important aspects for accessibility are the mask and the hidden state.

**Dialog Mask**

The mask creates a visual distinction between the overlay content in the foreground, and the page content in the background. It  also prevents pointing devices from interacting with the page content behind the window.

```css
.lightbox-dialog {
    background-color: rgba(51,51,51,0.7);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
}
```

The mask **does not** prevent keyboard or screen reader from accessing the page content behind the window - we will need JavaScript for that.&#x20;

#### Behaviour (JS)

**Hide and Show**

A dialog is made visible simply by toggling its `hidden` attribute.

```javascript
function onDialogButtonClick() {
    dialogEl.hidden = false;
}
```

CSS animation of the dialog and mask is outside the scope of this guide.

**Modality for Keyboard**

A lightbox dialog is always modal. A modal dialog must prevent keyboard focus moving from the child window to the parent window. In addition, keyboard focus must wrap from the last interactive element in the child window back to the first, and vice versa.

There are several different JavaScript techniques to achieve such behaviour. We provide an example JavaScript module, called  [makeup-keyboard-trap](https://github.com/makeup/makeup-js/tree/master/packages/makeup-keyboard-trap).

**Modality for Screen Reader**

While in an open state, any content that is not inside of the child window **must** be hidden from screen reader users. This can be achieved by applying `aria-hidden="true"` to any non direct-ancestor nodes in the DOM.

Remember to *unhide* these elements when the lightbox dialog is closed, otherwise the main page will be completely hidden & inaccessible to screen readers.

Again, we provide an example module, called [makeup-screenreader-trap](https://github.com/makeup/makeup-js/tree/master/packages/makeup-screenreader-trap), to assist with this behaviour.

**Prevent Page Scroll**

It is desirable to prevent the background page from scrolling when interacting with the foreground dialog content. This can be achieved with a class that applies `overflow:hidden` to the html body.

```css
body.has-modal-dialog {
    overflow: hidden;
}
```

The presence of this class would be toggled by our JavaScript on dialog hide/show event.

**ESC Key**

Pressing the `ESC` key while focus is on the dismiss button, or any other interactive element that does not already have `ESC` key behaviour, should close the dialog.

```javascript
windowEl.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        // hide the dialog
    }
});
```

Any nested widgets should take care to prevent `ESC` event from bubbling.

**Returning Focus**

When the lightbox dialog is closed, keyboard focus should return to the dialog button in the main page.

```javascript
dialogWidget.addEventListener('dialog-close', function () {
    dialogButtonEl.focus();
});
```

**NOTE**: `dialog-close` is a custom event fired by the lightbox dialog widget.

### JavaScript Modules

We have some experimental JavaScript modules that may assist you with creation of an accessible dialog widget:

* [makeup-keyboard-trap](https://github.com/makeup/makeup-js/tree/master/packages/core/makeup-keyboard-trap)
  * Useful for implementing modal behaviour for keyboard
* [makeup-screenreader-trap](https://github.com/makeup/makeup-js/tree/master/packages/core/makeup-screenreader-trap)
  * Useful for implementing modal behaviour for screen reader
* [makeup-modal](https://github.com/makeup/makeup-js/tree/master/packages/core/makeup-modal)
  * Combines keyboard-trap and screenreader-trap
* [makeup-focusables](https://github.com/makeup/makeup-js/tree/master/packages/core/makeup-focusables)
  * Useful for finding the list of focusable elements inside of the dialog

### ARIA Reference

This section gives an overview of ARIA usage within the context of this pattern.

#### role=dialog

Informs the assistive technology that the user is inside of a dialog.

#### aria-modal=true

Conveys that the dialog is modal

#### aria-labelledby

Informs the assistive technology of the onscreen text used to label the dialog.

#### aria-labelledby

Use onscreen text to name the dialog (typically an h2 heading element).

#### aria-label

Explicitly name the dialog, if no suitable onscreen text exists.

#### aria-hidden

While the dialog is in an open state, aria-hidden is used to hide all non-dialog elements from assistive technology.
