# Menu Accessibility

### Screenshots

![Screenshot of menu used for filtering on mobile web](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LexISm2uybKtLNUWrsT%2F-LexIXrfv1JMrjkrwdpg%2Fmenu-mweb.png?alt=media&token=747fb45a-fce7-40a5-8a89-9eb0512d2326)

### Introduction

A menu may contain [menu item](http://www.w3.org/TR/wai-aria/roles#menuitem), [menu item radio](http://www.w3.org/TR/wai-aria/roles#menuitemradio) or [menu item checkbox](http://www.w3.org/TR/wai-aria/roles#menuitemcheckbox) commands.

A menu is appropriate when requiring a partial page re-render _without_ using a form or full page reload. For example: filtering and sorting of search results.

A menu is not appropriate for a full page reload. For that, please use links instead (see the [Fake Menu](../navigation/fake-menu-button) pattern). The distinction between menu items and links is important! A menu item is a command that executes JavaScript, whereas a link is a command that navigates to a url.

If your menu must contain a _mix_ of JavaScript behaviour and links behaviour, please use a list of buttons and links. Do no mix menu items and links.

### Best Practices

On desktop, a menu is typically opened with a [menu button](menu-button). On mobile it is common to see a menu embedded directly inside of a filter or refine panel.

Remember, a menu is not a form control. Its purpose is **not** to store or submit data via form submission. A menu, like a button, is a mechanism to execute JavaScript, and therefore is 100% dependent on JavaScript.

If you are concerned that the functionality of the menu must be available in a non-JavaScript state, then perhaps a menu is not the best choice. Consider form controls instead.

Adding, modifying or deleting records (e.g. CRUD) could be considered critical functionality. Filtering and sorting search results could be considered non-critical.

Selecting a command _should not_ fully reload the page (use a [fake menu](../navigation/fake-menu-button) instead).

Selecting a command **must** perform a JavaScript action on the client (e.g. AJAX request then partial page re-render).

### Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

#### Keyboard

The menu itself does not receive focus; focus **must** go to the first item in the menu.

`UP-ARROW` and `DOWN-ARROW` keys **must** navigate keyboard focus through commands via roving tabindex mechanism (skipping any that are disabled).

If focus is on a command, `ENTER` or `SPACEBAR` keys **must** activate that command.

`TAB` key must move keyboard focus off menu, and onto next interactive element in the page.

#### Screen Reader

Commands **must** be announced as "menu item", "menu item radio" or "menu item checkbox" role.

Checkbox and radio command state **must** be announced as checked or unchecked.

Disabled commands must be announced as disabled.

#### Pointer

Clicking any menu item **must** activate that command.

### ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of the menu pattern.

| Attribute                 | Description                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **role=menu**             | Informs assistive technology that this is a menu containing menuitems, menuitemradios or menuitemcheckboxes.                                             |
| **role=presentation**     | Informs assistive technology that the divs around groups of menu items are for presentation purposes only and should not be added to accessibility tree. |
| **role=menuitem**         | Informs assistive technology that this menu command has button behaviour.                                                                                |
| **role=menuitemradio**    | Informs assistive technology that this menu command has radio button behaviour.                                                                          |
| **role=menuitemcheckbox** | Informs assistive technology that this menu command has checkbox behaviour.                                                                              |
| **aria-checked**          | Informs assistive technology whether the menuitemradio or menuitemcheckbox is checked or not. Notice we do not use aria-selected.                        |
