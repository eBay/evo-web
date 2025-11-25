# Menu Button Accessibility

### Screenshots

![Screenshot of expanded delivery options menu button.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LexISm2uybKtLNUWrsT%2F-LexKci97JEX6CM7SoFJ%2Fmenu-dweb.png?alt=media&token=171032b9-7390-4e20-a8b9-941f2bbc9959)

### Introduction

The menu button pattern is a JavaScript widget. It is a button that expands to reveal a [menu](menu) in a [popover](../disclosure/popover).

A menu is appropriate when requiring a partial page re-render _without_ using a form or full page reload. For example: filtering and sorting of search results.

A menu is not appropriate for a full page reload. For that, please use links instead (see the [Fake Menu](../navigation/fake-menu-button) pattern). The distinction between menu items and links is important. A menu item is a command that executes JavaScript, whereas a link is a command that navigates to a url.

If your menu must contain a _mix_ of JavaScript behaviour and link behaviour, please use a regular list of buttons and links. Do no mix menu items with links.

**TIP**: Do not call a menu button a "dropdown"! The term "dropdown" is ambiguous and could be confused with a listbox, combobox select or any other kind of overlay that "drops down". If you must, call it a dropdown menu.

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples](http://ebay.github.io/mindpatterns/input/menu/) website.

Examine the required markup structure on our [Bones project](https://github.com/ianmcburnie/bones#user-content-popup-menu) on GitHub.

View a fully styled example in our [eBay Skin CSS framework](https://opensource.ebay.com/skin/component/menu-button/).

### Terminology

**widget**: the pattern as a \*whole\*, comprising the parts listed below

**button**: expands or collapses the overlay

**collapsed/expanded**: state of overlay

**overlay**: contains menu

**menu**: a [menu](menu) that contains commands

**command**: individual menu item, menu item checkbox or menu item radio commands

### Best Practices

See [menu best practices](menu).

**Care is needed when labelling a menu button!**

If attempting to mimic the behaviour of an HTML select inside of a form, please use the [Listbox Button](listbox-button).

A menu button's accessible label must at **all times** reflect its function. By default, this label is provided by the butto&#x6E;**'**&#x73; inner text (i.e. buttons are not intended to work with `<label>` elements).

If a menu button's inner text is intended to also convey some state (i.e. single select) then please consider the following options.

#### **Internally Labelled Menu Button**

The button's inner text can be written as a key/value pair, where key denotes purpose and value represents the current selection.

`<button>Colour: blue<button>`

#### **Additionally Labelled Menu Button**

We can use `aria-labelledby` to stitch together an external text element with the internal value.

`<span id="el1">Colour</span><button aria-labelledby="el1 el2"><span id="el2">blue</span></button>`

### Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

Please also see related [menu](menu) pattern for best practices of nested menu.

#### Keyboard

The button **must** be keyboard focusable.

`SPACEBAR` or `ENTER` key on button **must** expand the menu.

When menu is expanded, keyboard focus **must** go to the first item in the menu.

`UP-ARROW` and `DOWN-ARROW` keys **must** navigate keyboard focus through commands via a roving tabindex.

If focus is on a command, `ENTER` or `SPACEBAR` keys **must** activate that command.

`ESC` key must collapse menu and return focus to button.

Activating any menu item _should_ collapse menu (typically after a very short delay/transition).

`TAB` key must move keyboard focus off widget, and onto next interactive element in the page.

When widget loses focus, menu _should_ collapse.

#### Screen Reader

Button label **must** be announced (e.g. 'Options').

Button state **must** be announced (e.g. expanded or collapsed).

#### Pointer

Clicking any menu item _should_ collapse menu (typically after a very short delay/transition).

### Developer Guide

While it is _technically_ feasible for a menu to fallback to a set of form controls (i.e. button, checkbox and radio) while in a non-JavaScript state. However, as mentioned, this defeats the true purpose of a menu (which is to run JavaScript). Therefore our menu will be dependent on JavaScript.

#### Content (HTML)

For our developer guide we will create a menu that filters search results. The menu will be opened via a button.

**Button**

First we add our button:

```html
<div class="button-menu">
  <button type="button">Search Options</button>
  <!-- overlay will go here -->
</div>
```

**Ungrouped Menu**

The simplest kind of menu contains just regular menu items. You can think of the `menuitem` role as similar to a button.

```html
<div class="menu-button">
  <button
    aria-controls="menu-1"
    aria-expanded="false"
    aria-haspopup="true"
    type="button"
  >
    Search Options
  </button>
  <div class="menu" hidden>
    <div id="menu-1" role="menu">
      <div role="menuitem">Show Less Results</div>
      <div role="menuitem">Show More Results</div>
    </div>
  </div>
</div>
```

Notice the addition of ARIA on the button. If you ever wondered what `aria-haspop` is for, well now is the time to use it! To clear up confusion over this attribute, ARIA 1.1 introduced new values such as `menu`, `dialog` and `listbox`.

**Grouped Menu**

Menus can also contain groups of different _types_ of menu item. For example: a group of menu items, a group of menu item radios, and a group of menu item checkboxes.

Each group must be separated with a separator tag (implicit role="separator").

**NOTE**: We have encountered issues when trying to use `role="separator"` on a list tag. It is for this reason that use div-based markup, rather than list-base markup, in the examples.

```html
<div class="menu-button">
  <button
    aria-controls="menu-1"
    aria-expanded="false"
    aria-haspopup="true"
    type="button"
  >
    Search Options
  </button>
  <div hidden>
    <div id="menu-1" role="menu">
      <div role="presentation">
        <div role="menuitem">More Results</div>
        <div role="menuitem">Less Results</div>
      </div>
      <hr />
      <div role="presentation">
        <div aria-checked="true" role="menuitemradio">Sort by Name</div>
        <div aria-checked="false" role="menuitemradio">Sort by Price</div>
        <div aria-checked="false" role="menuitemradio">Sort by Date</div>
      </div>
      <hr />
      <div role="presentation">
        <div aria-checked="true" role="menuitemcheckbox">Show Buy It Now</div>
        <div aria-checked="true" role="menuitemcheckbox">Show Auction</div>
      </div>
    </div>
  </div>
</div>
```

We use ARIA to set the role and state of each command.

**NOTE:** A div tag already has an implicit role of presentation, so why have we specified it again explicitly? When testing in various screen readers, more consistent behaviour was noted with the role specified explicitly.

**Checkpoint**

At this point we have our server-side markup with ARIA states.

You could also choose to render the overlay markup on the client, or even lazy-load it when the button is clicked.

#### Presentation (CSS)

The goal of our presentation layer is to add the hooks for hiding and showing the overlay.

The guidance here is actually identical to the [popover](../disclosure/popover) pattern, but we repeat it again here in the context of a menu.

The overlay is always hidden by default. The overlay must be absolute or fixed position with z-index.

```css
.menu-button__menu {
  display: none;
  position: absolute;
  z-index: 1;
}
```

We can display the menu utilising the ARIA state of the button and the general sibling selector:

```css
.menu-button__button[aria-expanded="true"] ~ .menu-button__menu {
  display: block;
}
```

Or leverage a class if necessary (i.e. if the button is not an adjacent sibling):

```css
.menu-button--expanded .menu-button__menu {
  display: block;
}
```

The overlay will only be visible when the aria-expanded state is true (or if the expanded class is present, if you choose). It is the job of JavaScript to toggle this state.

#### Behaviour (JS)

The goals of the behaviour layer are to:

1. state management: toggle the `aria-expanded` and/or `.menu-button--expanded` state on click
2. focus management: implement roving-tabindex keyboard navigation on menu items

**Toggling State**

CSS alone cannot change the value of an HTML attribute; JavaScript is required. Fortunately, the [makeup-expander](https://github.com/makeup-js/makeup-expander) module can handle this behaviour in just a few lines of code.

```javascript
const Expander = require("makeup-expander");

const widget = new Expander(widgetEl, {
  contentSelector: ".menu-button__menu",
  expandOnClick: true,
  collapseOnClick: true,
  collapseOnFocusOut: true,
  expandedClass: "menu-button--expanded",
  hostSelector: ".menu-button__button",
  focusManagement: "focusable",
});
```

When the menu opens, focus should move to the first menu item. This is handled by the `focusManagement` option.&#x20;

**Keyboard Navigation**

Menu Button now begins to deviate from the base popover pattern. A base popover pattern makes no assumption about the contents of the overlay. We expect to use `TAB` key to move focus through any focusable children of the overlay. However, a _menu_ has a very specific kind of content - menu items - and these menu items are navigated with the `UP-ARROW` and `DOWN-ARROW` keys.

We have another JavaScript module that helps, the [makeup-roving-tabindex](https://github.com/makeup-js/makeup-roving-tabindex) module.

```javascript
const RovingTabIndex = require("makeup-roving-tabindex");

this._rovingTabIndex = RovingTabIndex.createLinear(
  widgetEl,
  "[role^=menuitem]",
  {
    autoReset: 0,
  },
);
```

View the [roving tabindex technique](../techniques/roving-tabindex) for further details.

### Utilities

We have some JavaScript modules that may assist you with creation of an accessible menu button widget:

- [makeup-expander](https://github.com/makeup-js/makeup-expander) - Useful for implementing a button that opens a non-modal overlay
- [makeup-roving-tabindex](https://github.com/makeup-js/makeup-roving-tabindex) - Useful for implementing the arrow key behaviour to change menu items

### ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of the menu button pattern.

| Attribute                 | Description                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **role=menu**             | Informs assistive technology that this is a menu containing menuitems, menuitemradios or menuitemcheckboxes.                                             |
| **role=presentation**     | Informs assistive technology that the divs around groups of menu items are for presentation purposes only and should not be added to accessibility tree. |
| **role=menuitem**         | Informs assistive technology that this menu command has button behaviour.                                                                                |
| **role=menuitemradio**    | Informs assistive technology that this menu command has radio button behaviour.                                                                          |
| **role=menuitemcheckbox** | Informs assistive technology that this menu command has checkbox behaviour.                                                                              |
| **aria-haspopup=true**    | Informs assistive technology that the button controls a _popup_ _menu_                                                                                   |
| **aria-controls**         | Inform assistive technology of which menu this button controls.                                                                                          |
| **aria-expanded**         | Informs assistive technology whether the popup menu is expanded or not. And yes, this state goes on the button, not the menu.                            |
| **aria-checked**          | Informs assistive technology whether the menuitemradio or menuitemcheckbox is checked or not. Notice we do not use aria-selected.                        |
