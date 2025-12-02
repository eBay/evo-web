# Radio Accessibility

## Best Practices

Radio buttons **must be** grouped together and a group **must contain** at least two radio buttons.

Each group of radio buttons **must** be labelled. Typically achieved with a `<legend>` tag.

Each individual radio button **must** be labelled.

Other types of interactive control (e.g. a textbox or checkbox) **must not** be nested between radio buttons.

Radio buttons **must** be contained within a form element, and that form element **must** have a submit button.

Toggling a radio button should not trigger a page reload, popup or any change of context until the related form is explicitly submitted by the user. If this kind of behaviour is required, please consider the [switch](switch) pattern or a button-less [menu](menu).

## Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

### Keyboard

Tabbing into the group will set focus on the currently checked radio button. If no button is currently checked, focus will move to the first button or the last depending on whether TAB or SHIFT+TAB was used to enter the group.

**TAB** and **SHIFT+TAB** will leave the radio button group.

**DOWN ARROW** will focus and select the next button in group.

**UP ARROW** will focus and select the previous button in the group.

**ENTER** submits the form that the radio group belongs to.

### Screen Reader

Radio **must** be reachable with screen reader (even when disabled).

Radio **must** be announced as "Radio".

Radio label **must** be announced.

Radio group label **must** be announced.

Radio state **must** be announced (i.e. checked or unchecked).

### Pointer

Clicking radio **must** toggle the checked state.

Clicking radio label **must** toggle the checked state.

## ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of the radio pattern.

| Attribute       | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| **aria-hidden** | Removes the presentational SVG element from the accessibility tree. |
