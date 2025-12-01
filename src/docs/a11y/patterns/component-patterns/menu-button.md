# Menu Button Accessibility

### Screenshots

![Screenshot of expanded delivery options menu button.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LexISm2uybKtLNUWrsT%2F-LexKci97JEX6CM7SoFJ%2Fmenu-dweb.png?alt=media&token=171032b9-7390-4e20-a8b9-941f2bbc9959)

### Introduction

The menu button pattern is a JavaScript widget. It is a button that expands to reveal a [menu](menu) in a [popover](../disclosure/popover).

A menu is appropriate when requiring a partial page re-render _without_ using a form or full page reload. For example: filtering and sorting of search results.

A menu is not appropriate for a full page reload. For that, please use links instead (see the [Fake Menu](../navigation/fake-menu-button) pattern). The distinction between menu items and links is important. A menu item is a command that executes JavaScript, whereas a link is a command that navigates to a url.

If your menu must contain a _mix_ of JavaScript behaviour and link behaviour, please use a regular list of buttons and links. Do no mix menu items with links.

**TIP**: Do not call a menu button a "dropdown"! The term "dropdown" is ambiguous and could be confused with a listbox, combobox select or any other kind of overlay that "drops down". If you must, call it a dropdown menu.

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
