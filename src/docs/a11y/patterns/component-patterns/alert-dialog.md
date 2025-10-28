# Alert Dialog Accessibility

## Best Practices

Alert dialogs are always modal and require a mask.

Avoid opening an alert dialog on page load.

Alert dialogs should be opened as a result of a user action or critical system event.

Avoid stacking of alert dialogs.

## Interaction Design

This section provides detailed instructions for how different input types should navigate and operate the pattern.

### Keyboard

Initial keyboard focus should be placed on the _acknowledgement_ button.

The keyboard should be confined to the interactive elements within the dialog (i.e. modal behaviour).

Activating the acknowledgment button will close the dialog and return focus to the main page.

### Screen Reader

Initial screen reader focus will be placed on the _acknowledgement_ button.

When opened, the screen reader should announce the title of the dialog, its role (alert dialog) and the label, role and state of the currently focussed element (the acknowledgment button).

The screen reader should be confined to the elements within the dialog (i.e. modal behaviour).

### Pointer

Clicking the mask **must not** close the alert dialog (an explicit acknowledgement is required).

## ARIA Reference

| Attribute              | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| **role="alertdialog"** | Informs the assistive technology that the user is inside of an alert dialog.  |
| **aria-modal**         | Conveys that the dialog is modal                                              |
| **aria-labelledby**    | Use onscreen text to name the alert dialog (typically an h2 heading element). |
| **aria-label**         | Explicitly name the alert dialog, if no suitable onscreen text exists.        |
| **aria-describedby**   | References the element containing the alert message content.                  |
