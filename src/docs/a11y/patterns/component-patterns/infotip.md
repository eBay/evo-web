# Infotip Accessibility

### Best Practices

On desktop screens, overlay **must not** be modal. On smaller screens, the overlay may be implemented as a modal dialog.

Button **must not** have overlay content duplicated within an `aria-describedby` attribute.

Button **must not** have `aria-haspopup` attribute. Despite the name of this property, it is actually intended specifically for a [Menu](https://ebay.gitbook.io/mindpatterns/input/menu).

The infotip **must** remain expanded until explicitly closed with the close button _or_ programmatically closed by another component (e.g. when another nearby infotip opens).

Users sometimes have a need to reference the infotip content whilst working on a task (e.g. filling out a form field), this is why we must not collapse the infotip on mouseout, blur or page click.

Overlay _should_ be hidden by default. If you wish to display a tip on page load, consider the [Tourtip](https://ebay.gitbook.io/mindpatterns/messaging/tourtip).

Overlay content _should_ be no more than one or two paragraphs in length. For lengthier content, consider instead using a [dialog](https://ebay.gitbook.io/mindpatterns/disclosure/lightbox-dialog).

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

### Utilities

The following JavaScript modules may assist you in creation of an infotip pattern:

- [makeup-expander](https://github.com/makeup/makeup-js/tree/master/packages/makeup-expander): handles some basic accessibility for an element that expands and collapses another element.

### ARIA Reference

| Attribute         | Description                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **aria-live**     | Informs assistive technology to announce the overlay contents whenever the button changes from collapsed to expanded (optional/opinionated). |
| **aria-label**    | Provides an accessible button label/name for the icon button.                                                                                |
| **aria-expanded** | Informs assistive technology of the expanded state of the button.                                                                            |

### FAQ

#### What is the difference between Infotip Button and Tooltip?

A [tooltip](https://ebay.gitbook.io/mindpatterns/disclosure/tooltip) provides a tip about the _primary_ action of an interactive element (typically a button). For example, the trashcan icon button in your mail application. The tooltip can be thought of as the _secondary_ action of the button. It is always triggered by focus and hover.

An infotip button provides a tip about a nearby _static_ element or content. It is always triggered by click.

#### This is different to the way BootStrap 'Popovers' work. Why?

The fundamental difference is that the [Bootstrap Popovers](http://getbootstrap.com/javascript/#popovers) get their content from a data attribute, whereas the pattern presented here gets it's content from an actual element. This allows us to more easily place HTML such as hyperlinks & images inside of our popovers and, unlike Bootstrap, the popover content _can_ be fully accessible _without_ JavaScript (assuming you choose to make the content visible by default).
