# Fake Menu Button Accessibility

![Screenshot depicting a "menu" of links inside of a popover](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcFLXbXOWR_cv1W_g%2Ffauxmenu.png?generation=1548799253201289&alt=media)

### Introduction

A button that expands a [popover](../disclosure/popover) containing a single column of links. Clicking any link will perform a URL navigation.

The fake menu can also contain buttons. This pattern is useful if your "dropdown" contains a mix of navigation items and items that execute JavaScript.

If you desire a dropdown menu that triggers a partial page reload instead of full page reload, please use the [Menu Button](../input/menu-button) pattern instead.

**The distinction between menuitems and links is important!** A menuitem is a command that executes JavaScript, whereas a link is a command that navigates to a url.

### Working Examples

You can take a look at the fake menu pattern in action on our [examples site](http://ebay.github.io/mindpatterns/navigation/fake-menu-button/).

You can get an idea of the required markup structure by viewing our [bones site](https://github.com/ianmcburnie/bones#user-content-fake-menu).

### Terminology

- **fake menu button**: the pattern as a whole, comprised of the following sub-parts
- **host**: a link, button or stealth button that \*hosts\* the overlay
- **overlay**: the non-modal overlay that contains the fake menu items
- **fake menu:** the list of fake menu items
- **fake menu item**: a link or button
- **expanded/collapsed**: the state of the overlay (i.e. visible or hidden)
- **hover-activated**: the overlay expands on hover of host (implies host is a link)
- **click-activated**: the overlay expands on click of host (implies host is a button)

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

### Developer Guide

Placement of the host (the button) must go directly _before_ the overlay element. This allows natural keyboard flow and reading order from the host into the overlay.

```html
<span class="fake-menu">
  <button class="fake-menu__host" type="button">Categories</button>
  <span class="fake-menu__overlay">
    <!-- fake menu items go here -->
  </span>
</span>
```

You may also notice that this structure is almost identical to the [popover](../disclosure/popover). This is because the fake menu pattern is an extension of the popover pattern. In essence it is just a button that opens an overlay of _content_; the content in this case being a list of links (buttons are permissible too).

```html
<span class="fake-menu">
  <button class="fake-menu__host" type="button">Categories</button>
  <span class="fake-menu__overlay">
    <ul>
      <li><a href="http://www.ebay.com">Fake-Menu Item 1</a></li>
      <li><a href="http://www.ebay.com">Fake-Menu Item 2</a></li>
      <li><a href="http://www.ebay.com">Fake-Menu Item 3</a></li>
    </ul>
  </span>
</span>
```

### ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of this pattern.

| Attribute         | Description                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **aria-expanded** | This boolean attribute signifies the expanded state of the host button or stealth button (but is not used on a host link). |
