# Popover Accessibility

![Popover overlays with pointers](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcGd-PekMAyECo7PR%2Fflyout.png?generation=1548799254223918&alt=media)

### Introduction

**\*NOTE**: This pattern was previously known as "flyout".\*

Popover is a composite pattern containing an element (typically a button) that _hosts_ a non-modal overlay element. The overlay discloses contextually relevant secondary content and/or actions.

Popover forms the basis of the following composite patterns:

- [Comboxbox](https://ebay.gitbook.io/mindpatterns/input/combobox)
- [Fake Menu Button](https://ebay.gitbook.io/mindpatterns/navigation/fake-menu-button)
- [Infotip Button](https://ebay.gitbook.io/mindpatterns/disclosure/infotip)
- [Listbox Button](https://ebay.gitbook.io/mindpatterns/input/listbox-button)
- [Menu Button](https://ebay.gitbook.io/mindpatterns/input/menu-button)
- [Tooltip](https://ebay.gitbook.io/mindpatterns/disclosure/tooltip)
- [Tourtip](https://ebay.gitbook.io/mindpatterns/messaging/tourtip)

The pattern discussed here in this document is a more generic use-case, where the popover may contain _any_ kind of content.

### Working Examples

You can take a look at a generic popover on our [examples site](http://ebay.github.io/mindpatterns/disclosure/popover/).

### Terminology

- **popover**: the composite pattern as a \*whole\*, containing an overlay and its host
- **host**: the element that _hosts_ the overlay
- **overlay**: the non-modal overlay that contains the content related to its host
- **content**: the actual content of the overlay
- **expanded/collapsed**: the overlay state (visible or hidden)

### Best Practices

The overlay can hold any kind of content, but for an overlay that demands user acknowledgement or input, or with additional rich interactions, consider using a [dialog](https://ebay.gitbook.io/mindpatterns/disclosure/lightbox-dialog) instead.

The overlay expands or collapses via any combination of the following events:

- **Click** event of host
- **Hover** event of host (discouraged)
- **Focus** event of host (discouraged)
- **System** event at page load or after some arbitrary time

A link **must not** be the host of a click-activated popover. Clicking the host should always navigate to the URL in this case.

Overlay **must** be non-modal (i.e. must not trap keyboard focus or mask page background). For modal behaviour please consider the [dialog](https://github.com/ebay/mindpatterns/tree/6c14ac7802634b97b44038d80935b912adbcd5cf/discolosure/dialog.md) pattern instead.

Overlay **must** be placed directly after the host in DOM. This ensures natural tab order and reading order without JavaScript.

_If_ system-activated (e.g. a [Tourtip](https://ebay.gitbook.io/mindpatterns/messaging/tourtip)), overlay **must** remain onscreen until explicitly dismissed by the user.

_If_ focus-activated, overlay _should_ _not_ contain long blocks of interactive elements. This measure prevents keyboard users from having to tab through secondary or tertiary content inside of the overlay.

### Interaction Design

This section provides interaction guidelines for keyboard, screen reader, and pointing devices.

#### Keyboard

Tab order **must** flow directly from host into first focusable element inside overlay. If the overlay has no focusable element, tab order flows to next page control instead.

_If_ not system-activated, host **must** be keyboard focus-able.

_If_ click-activated, popover **must** expand overlay when host receives keyboard click.

_If_ focus-activated (discouraged), popover **must** expand when host receives keyboard focus.

_If_ focus-activated (discouraged), popover **must** collapse when flyout loses keyboard focus.

#### Screen Reader

Reading order **must** flow directly from host into overlay.

Overlay must not be conveyed as a dialog.

_If_ system-activated _and_ high-priority, screen reader **must** announce presence and/or content overlay.

#### Mouse

_If_ hover-activated (discouraged), popover **must** expand when host receives mouse hover.

_If_ hover-activated (discouraged), popover **must** collapse when mouse leaves flyout.

_If_ click-activated, popover **must** expand when host receives mouse click.

_If_ system-activated, popover **must** collapse when clicking close button.

### Touch

Hover behaviour can be problematic or impossible for touch. You may wish to consider using the [Infotip](https://ebay.gitbook.io/mindpatterns/disclosure/infotip) pattern instead.

_If_ click-activated, popover **must** expand when host receives tap.

_if_ system-activated, popover **must** close when tapping close button.

### ARIA Reference

| Attribute         | Description                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| **aria-expanded** | This boolean attribute signifies the expanded state of the host element.                                 |
| **aria-live**     | If wishing to announce the content of the popover when it expands, set aria live to polite or assertive. |

### FAQ

#### Didn't this pattern used to be called Flyout?

Yes it did! In most practical senses, the term flyout is synonomous with popover; they are both used to describe transient (i.e. non-modal) overlays of content.
