# Fake Menu Button Accessibility

![Screenshot depicting a "menu" of links inside of a popover](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcFLXbXOWR_cv1W_g%2Ffauxmenu.png?generation=1548799253201289&alt=media)

### Introduction

A button that expands a [popover](../disclosure/popover) containing a single column of links. Clicking any link will perform a URL navigation.

The fake menu can also contain buttons. This pattern is useful if your "dropdown" contains a mix of navigation items and items that execute JavaScript.

If you desire a dropdown menu that triggers a partial page reload instead of full page reload, please use the [Menu Button](../input/menu-button) pattern instead.

**The distinction between menuitems and links is important!** A menuitem is a command that executes JavaScript, whereas a link is a command that navigates to a url.

### Best Practices

For mouse users, a fake menu button can be expanded on hover of a link, but we do not recommend doing so. For keyboard users, a fake menu button must always be triggered via a button click. If using a link as the host, a stealth button must be inserted for keyboard users. A stealth button is a button that only appears on keyboard focus.

Avoid using a fake menu for important and/or frequently navigated links. Links in a hidden overlay will not show up in screen reader's list of links until the overlay is visible.

### Interaction Design

This section provides interaction guidelines for keyboard, screen reader, and pointing devices.

#### Keyboard

If host is a link, pressing TAB key while focus is on host **must** move keyboard focus to stealth button host.

ENTER or SPACEBAR on button or stealth button host **must** expand overlay. Keyboard focus can be moved to first fake menu item.

With focus on fake menu item, TAB key **must** move focus to next fake menu item.

With focus on fake menu item, ESC **must** collapse the overlay and **must** return focus to host.

With focus on last fake menu item, TAB key **must** move to next interactive element on page and _should_ collapse overlay.

ENTER key **must** activate any fake menu item with focus (i.e. links).

#### Screen Reader

Expanded state will be announced when focus is on button host or stealth button host.

Fake menu items **must** be identified as links or buttons (e.g. not menuitems).

#### Pointer

Hovering over a link host **must** expand overlay.

Hovering out of a link host **must** collapse overlay.

Clicking button host **must** toggle state of overlay.

### ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of this pattern.

| Attribute         | Description                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **aria-expanded** | This boolean attribute signifies the expanded state of the host button or stealth button (but is not used on a host link). |
