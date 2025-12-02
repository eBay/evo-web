# Menu Button Accessibility

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
