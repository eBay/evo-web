# Alert Dialog Accessibility

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](https://ebay.github.io/mindpatterns/messaging/alert-dialog).

Examine the required markup structure on our [Bones GitHub Project.](https://github.com/ianmcburnie/bones#user-content-alert-dialog)

View a fully styled example on our [eBay Skin](https://opensource.ebay.com/skin/component/lightbox-dialog/) website.

### Terminology

**Acknowledgement Button**: The button that must be clicked to acknowledge and dismiss the alert dialog.

**Mask**: The semi-opaque layer that sits between the dialog and the main page.

### Best Practices

Alert dialogs are always modal and require a mask.

Avoid opening an alert dialog on page load.

Alert dialogs should be opened as a result of a user action or critical system event.

Avoid stacking of alert dialogs.

### Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

#### Keyboard

Initial keyboard focus should be placed on the _acknowledgement_ button.

The keyboard should be confined to the interactive elements within the dialog (i.e. modal behaviour).

Activating the acknowledgment button will close the dialog and return focus to the main page.

#### Screen Reader

Initial screen reader focus will be placed on the _acknowledgement_ button.

When opened, the screen reader should announce the title of the dialog, its role (alert dialog) and the label, role and state of the currently focussed element (the acknowledgment button).

The screen reader should be confined to the elements within the dialog (i.e. modal behaviour).

#### Pointer

Clicking the mask **must not** close the alert dialog (an explicit acknowledgement is required).

### Developer Guide

This section is not yet available.
