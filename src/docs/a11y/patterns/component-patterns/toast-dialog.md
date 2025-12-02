# Toast Dialog Accessibility

## Best Practices

A toast dialog is non-modal and should **not** steal or trap keyboard focus.

When the dialog becomes visible, it **must** be placed immediately after the current active element in the DOM. This ensures a logical reading and tabbing order in the page.

## Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

### Keyboard

A toast dialog is non-modal and should **not** steal or trap keyboard focus.

The toast should be positioned in the dom so that the next **TAB** key press moves focus from the currently focussed element into the toast dialog element.

### Screen Reader

A toast dialog is non-modal and should **not** steal or trap screen reader virtual cursor.

The toast should be positioned in the dom so that the virtual cursor moves from the currently focussed element onto the toast dialog element.

The screen reader should announce the title and contents of the toast dialog.

### Mouse

This section is not yet available.

## ARIA Reference

This section gives an overview of ARIA usage within the context of this pattern.

| Attribute            | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| **role=dialog**      | Informs the assistive technology that the user is inside of a dialog. |
| **aria-modal=false** | Informs assistive technology that the dialog is not modal.            |
