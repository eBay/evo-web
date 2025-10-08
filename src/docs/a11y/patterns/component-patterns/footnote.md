# Popover Accessibility

![Popover overlays with pointers](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcGd-PekMAyECo7PR%2Fflyout.png?generation=1548799254223918\&alt=media)

### Introduction

***NOTE**: This pattern was previously known as "flyout".*

Popover is a composite pattern containing an element (typically a button) that *hosts* a non-modal overlay element. The overlay discloses contextually relevant secondary content and/or actions.

Popover forms the basis of the following composite patterns:

* [Comboxbox](https://ebay.gitbook.io/mindpatterns/input/combobox)
* [Fake Menu Button](https://ebay.gitbook.io/mindpatterns/navigation/fake-menu-button)
* [Infotip Button](https://ebay.gitbook.io/mindpatterns/disclosure/infotip)
* [Listbox Button](https://ebay.gitbook.io/mindpatterns/input/listbox-button)
* [Menu Button](https://ebay.gitbook.io/mindpatterns/input/menu-button)
* [Tooltip](https://ebay.gitbook.io/mindpatterns/disclosure/tooltip)
* [Tourtip](https://ebay.gitbook.io/mindpatterns/messaging/tourtip)

The pattern discussed here in this document is a more generic use-case, where the popover may contain *any* kind of content.

### Working Examples

You can take a look at a generic popover on our [examples site](http://ebay.github.io/mindpatterns/disclosure/popover/).

### Terminology

* **popover**: the composite pattern as a \*whole\*, containing an overlay and its host
* **host**: the element that *hosts* the overlay
* **overlay**: the non-modal overlay that contains the content related to its host
* **content**: the actual content of the overlay
* **expanded/collapsed**: the overlay state (visible or hidden)

### Best Practices

The overlay can hold any kind of content, but for an overlay that demands user acknowledgement or input, or with additional rich interactions, consider using a [dialog](https://ebay.gitbook.io/mindpatterns/disclosure/lightbox-dialog) instead.

The overlay expands or collapses via any combination of the following events:

* **Click** event of host
* **Hover** event of host (discouraged)
* **Focus** event of host (discouraged)
* **System** event at page load or after some arbitrary time

A link **must not** be the host of a click-activated popover. Clicking the host should always navigate to the URL in this case.

Overlay **must** be non-modal (i.e. must not trap keyboard focus or mask page background). For modal behaviour please consider the [dialog](https://github.com/ebay/mindpatterns/tree/6c14ac7802634b97b44038d80935b912adbcd5cf/discolosure/dialog.md) pattern instead.

Overlay **must** be placed directly after the host in DOM. This ensures natural tab order and reading order without JavaScript.

*If* system-activated (e.g. a [Tourtip](https://ebay.gitbook.io/mindpatterns/messaging/tourtip)), overlay **must** remain onscreen until explicitly dismissed by the user.

*If* focus-activated, overlay *should* *not* contain long blocks of interactive elements. This measure prevents keyboard users from having to tab through secondary or tertiary content inside of the overlay.

### Interaction Design

This section provides interaction guidelines for keyboard, screen reader, and pointing devices.

#### Keyboard

Tab order **must** flow directly from host into first focusable element inside overlay. If the overlay has no focusable element, tab order flows to next page control instead.

*If* not system-activated, host **must** be keyboard focus-able.

*If* click-activated, popover **must** expand overlay when host receives keyboard click.

*If* focus-activated (discouraged), popover **must** expand when host receives keyboard focus.

*If* focus-activated (discouraged), popover **must** collapse when flyout loses keyboard focus.

#### Screen Reader

Reading order **must** flow directly from host into overlay.

Overlay must not be conveyed as a dialog.

*If* system-activated *and* high-priority, screen reader **must** announce presence and/or content overlay.

#### Mouse

*If* hover-activated (discouraged), popover **must** expand when host receives mouse hover.

*If* hover-activated (discouraged), popover **must** collapse when mouse leaves flyout.

*If* click-activated, popover **must** expand when host receives mouse click.

*If* system-activated, popover **must** collapse when clicking close button.

### Touch

Hover behaviour can be problematic or impossible for touch. You may wish to consider using the [Infotip](https://ebay.gitbook.io/mindpatterns/disclosure/infotip) pattern instead.

*If* click-activated, popover **must** expand when host receives tap.

*if* system-activated, popover **must** close when tapping close button.

### Developer Guide

Let's examine a click-activated popovers. Click-activated popovers typically occur with buttons, where clicking the button expands the popover.

The key things to consider are:

1. Server-side rendering or client-side rendering of overlay content (or both)
2. Placement of overlay element in relation to host
3. Using aria-expanded state to toggle CSS display
4. Determining the live-region property

#### Content

Content rendered by the server will be visible by default before & without CSS or JavaScript. If the content is secondary in nature, you may wish to render the content on the client instead.&#x20;

Whatever progressive enhancement strategy you choose, the following structure is the goal:

```markup
<span class="popover popover--click">
    <button class="popover__host" type="button" disabled>Toggle Popover</button>
    <span aria-live="off">
        <div class="popover__overlay">
            <!-- popover content -->
        </div>
    </span>
</span>
```

Notice placement of the host (the button) directly before the overlay element. This allows natural keyboard and reading order from the host into the overlay.

An optional live-region element wraps the overlay. The live-region property may be set to "off", "polite" or "assertive".

#### Presentation

The overlay can be absolute or fixed positioned:

```css
.popover__overlay {
    display: none;
    position: absolute;
    z-index: 1;
}
```

We have hidden the overlay by default (display: none). We use the aria-expanded state of the host to control the display of the overlay:

```css
.popover__host[aria-expanded=true] ~ [aria-live] .popover__overlay {
    display: block;
}
```

#### Behaviour

CSS alone cannot trigger the expanded state, so we require a small amount of Javascript to handle this behaviour:

```javascript
document.querySelector('.popover__host').addEventListener('click', function() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';

  this.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
});
```

Clicking the button with mouse, keyboard or touch will now toggle the aria-expanded state of the button.

### ARIA Reference

#### aria-expanded

This boolean attribute signifies the expanded state of the host element.

#### aria-live

If wishing to announce the content of the popover when it expands, set aria live to polite or assertive.&#x20;

### FAQ

#### Didn't this pattern used to be called Flyout?

Yes it did! In most practical senses, the term flyout is synonomous with popover; they are both used to describe transient (i.e. non-modal) overlays of content.
