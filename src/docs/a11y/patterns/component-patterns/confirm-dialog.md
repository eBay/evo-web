# Confirm Dialog Accessibility

### Best Practices

Confirm dialogs are always modal and require a mask.

Avoid opening a confirm dialog on page load.

Confirm dialogs should be opened as a result of a user action or critical system event.

Avoid stacking of confirm dialogs.

### Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

#### Keyboard

Keyboard focus should be placed on the _affirmative_ button (e.g. "Ok", "Yes", "Agree").

The keyboard should be confined to the interactive elements within the dialog (i.e. modal behaviour).

Pressing `ESC` key **must** close confirm dialog, acting as a cancel/non-affirmative response.

Activating any button will close the dialog and return focus to the main page.

#### Screen Reader

Initial screen reader focus will be placed on the _affirmative_ button.

When opened, the screen reader should announce the title of the dialog, its role (dialog) and the label, role and state of the currently focussed element (the _affirmative_ button).

The screen reader should be confined to the elements within the dialog (i.e. modal behaviour).

#### Pointer

Clicking the mask **must** close the confirm dialog, acting as a cancel/non-affirmative response.
