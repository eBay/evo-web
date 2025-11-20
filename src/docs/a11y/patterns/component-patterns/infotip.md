# Infotip Accessibility

### Working Examples

Experience the pattern in action on our [eBay MIND patterns examples website](http://ebay.github.io/mindpatterns/disclosure/infotip/).

Examine the required markup structure on the [bones GitHub project](https://github.com/ianmcburnie/bones#user-content-fake-tabs).

View a fully styled example on the [eBay Skin website](https://opensource.ebay.com/skin/component/infotip/).

### Terminology

We use the following terminology when discussing this pattern.

* **infotip**: the pattern as a whole, comprised of the following sub-parts
* **button**: the button that hosts the overlay
* **overlay/bubble**: the overlay that contains the tip
* **pointer**: the visual affordance that "points" to the button
* **tip**: the tip content
* **expanded**: an infotip with expanded overlay
* **collapsed**: an infotip with collapsed overlay

### Best Practices

On desktop screens, overlay **must not** be modal. On smaller screens, the overlay may be implemented as a modal dialog.

Button **must not** have overlay content duplicated within an  `aria-describedby` attribute.

Button **must not** have `aria-haspopup` attribute. Despite the name of this property, it is actually intended specifically for a [Menu](https://ebay.gitbook.io/mindpatterns/input/menu).

The infotip **must** remain expanded until explicitly closed with the close button *or* programmatically closed by another component (e.g. when another nearby infotip opens).

Users sometimes have a need to reference the infotip content whilst working on a task (e.g. filling out a form field), this is why we must not collapse the infotip on mouseout, blur or page click.

Overlay *should* be hidden by default. If you wish to display a tip on page load, consider the [Tourtip](https://ebay.gitbook.io/mindpatterns/messaging/tourtip).

Overlay content *should* be no more than one or two paragraphs in length. For lengthier content, consider instead using a [dialog](https://ebay.gitbook.io/mindpatterns/disclosure/lightbox-dialog).

### Interaction Design

This section provides the pattern interaction design for keyboard, screen reader & pointing devices.

#### Keyboard

Button **must** be keyboard focusable.

Activating button **must** toggle the expanded state of the overlay. Keyboard focus should remain on the button.

If overlay contains focusable elements, tab order **must** flow directly from button to first of those elements.

If the overlay has no focusable elements, tab order **must** flow directly to next page control.

#### Screen Reader

Button purpose **must** be announced (e.g. 'Help).

Button state **must** be announced (i.e. expanded or collapsed).

Reading order **must** flow directly from button into overlay.

Expanded state **must** be announced after expanded.

#### Pointer

Invoking button **must** toggle the expanded state of the overlay.

### Developer Guide

This implementation will get us quickly up and running with the accessibility requirements of an infotip.

#### HTML

The goal of our content layer is to add the button and overlay. The structure and DOM positioning of these elements is of utmost importance so that keyboard tabbing order and screen reader both naturally flow into the overlay.

```markup
<span class="infotip" id="infotip-0">
  <button class="infotip__host" aria-controls="infotip-0-overlay" aria-expanded="false" aria-label="Help" type="button"></button>
  <span class="infotip__live-region" aria-live="off">
    <div class="infotip__overlay" id="infotip-0-overlay">
      <!-- overlay content -->
    </div>
  </span>
</span>
```

Notice placement of the button directly before the live-region element. This allows natural tab order flow and screen reading order from the button into the overlay.

The live-region property is set to "off". This is a matter of preference. Some people prefer the new content to announce when it appears, using a setting of "polite". At eBay we have this set to `off`; we rely on the `aria-expanded` state as being the affordance that there is new content in the reading order.

#### CSS

The goal of the CSS layer is to hide or show the overlay depending on the aria-expanded state.

```css
.infotip {
  position: relative;
}
.infotip__overlay {
  display: none;
  position: absolute;
  white-space: nowrap;
  z-index: 1;
}
.infotip__host[aria-expanded=true] ~ .infotip__live-region .infotip__overlay {
  display: block;
}
```

The overlay **must** have `display: none` when in a collapsed state to ensure that screen readers cannot access the overlay content. You may also wish to leverage the `hidden` property instead.

For a progressive enhancement approach, you may choose to have all infotip content visible by default, and then hide it when JavaScript becomes available. This can however result in a flash of unstyled content (**FOUC**).

#### JavaScript

CSS alone cannot change the value of an aria attribute; we require JavaScript. Fortunately, the [makeup-expander](https://github.com/makeup/makeup-js/tree/master/packages/makeup-expander) module can handle this behaviour for us in just a few lines of code.

```javascript
const Expander = require('makeup-expander');

const widget = new Expander(widgetEl, {
      contentSelector: '.infotip__content',
      expandOnClick: true,
      collapseOnClick: true,
      hostSelector: '.infotip__host'
});
```

Clicking the button with mouse or keyboard will now toggle the aria-expanded state of the button.

Animations are also possible of course, but fall outside the scope of this book.

### Utilities

The following JavaScript modules may assist you in creation of an infotip pattern:

* [makeup-expander](https://github.com/makeup/makeup-js/tree/master/packages/makeup-expander): handles some basic accessibility for an element that expands and collapses another element.

### ARIA Reference

#### aria-live

Informs assistive technology to announce the overlay contents whenever the button changes from collapsed to expanded (optional/opinionated).

#### aria-label

Provides an accessible button label/name for the icon button.

#### aria-expanded

Informs assistive technology of the expanded state of the button.

### FAQ

#### What is the difference between Infotip Button and Tooltip?

A [tooltip](https://ebay.gitbook.io/mindpatterns/disclosure/tooltip) provides a tip about the *primary* action of an interactive element (typically a button). For example, the trashcan icon button in your mail application. The tooltip can be thought of as the *secondary* action of the button. It is always triggered by focus and hover.

An infotip button provides a tip about a nearby *static* element or content. It is always triggered by click.

#### This is different to the way BootStrap 'Popovers' work. Why?

The fundamental difference is that the [Bootstrap Popovers](http://getbootstrap.com/javascript/#popovers) get their content from a data attribute, whereas the pattern presented here gets it's content from an actual element. This allows us to more easily place HTML such as hyperlinks & images inside of our popovers and, unlike Bootstrap, the popover content *can* be fully accessible *without* JavaScript (assuming you choose to make the content visible by default).
