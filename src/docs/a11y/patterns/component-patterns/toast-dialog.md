# Toast Dialog Accessibility

![Toast dialog on small screen.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-MJiauYJxjbwkTZkWHqK%2F-MJibabBxJBz0rEj6Iue%2Ftoast-mweb.png?alt=media\&token=27b8df76-2447-46a1-892b-41c662ce6109)

![Toast dialog on large screen.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-MJiauYJxjbwkTZkWHqK%2F-MJibhiZsl9UIlEuVTUa%2Ftoast-dweb.png?alt=media\&token=f916e8fd-5b69-44f5-96d2-4d5f9e8b0439)

### Introduction

A toast dialog is a non-modal, non-intrusive dialog containing a system level notification for the user.

### Best Practices

A toast dialog is non-modal and should **not** steal or trap keyboard focus.

When the dialog becomes visible, it **must** be placed immediately after the current active element in the DOM. This ensures a logical reading and tabbing order in the page.&#x20;

### Working Examples

Experience the pattern in action on our companion [eBay MIND patterns examples website](https://ebay.github.io/mindpatterns/messaging/toast-dialog/index.html).

Examine the required markup structure in the [Bones GitHub project](https://github.com/ianmcburnie/bones#user-content-toast-dialog).

View a fully styled example on our [eBay Skin website](https://opensource.ebay.com/skin/component/toast-dialog/).

### Terminology

This section is not yet available.

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

A toast dialog is non-modal and should **not** steal or trap keyboard focus.

The toast should be positioned in the dom so that the next **TAB** key press moves focus from the currently focussed element into the toast dialog element.

#### Screen Reader

A toast dialog is non-modal and should **not** steal or trap screen reader virtual cursor.

The toast should be positioned in the dom so that the virtual cursor moves from the currently focussed element onto the toast dialog element.

The screen reader should announce the title and contents of the toast dialog.

#### Mouse

This section is not yet available.

### Developer Guide

This section is not yet available.

### ARIA Reference

This section gives an overview of ARIA usage within the context of this pattern.

#### role=dialog

Informs the assistive technology that the user is inside of a dialog.

#### aria-modal=false

Informs assistive technology that the dialog is not modal.



