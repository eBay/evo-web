# Select Accessibility

## Best Practices

Select **must** belong inside of a form element, and that form element **must** have a submit button.

Select **must** support form-autofill behaviour of browser.

The select element is the only element that receives keyboard focus.

Selecting an option _should not_ submit the form. It should only set the option state to selected.

Select can be set to multi-select but the keyboard controls to do multi-selection are not entirely easy or intuitive.

## Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

### Keyboard

With focus on select, pressing UP and DOWN arrow keys will cycle through options.

With focus on select, pressing SPACEBAR will will toggle expanded state of flyout.

With focus on select, pressing ESCAPE key will collapse flyout.

### Screen Reader

With virtual cursor on select, screen reader should announce role, state and value.

With virtual cursor on select, pressing UP and DOWN arrow keys will announce newly selected option value.

### Pointer

Clicking or tapping select will toggle expanded state of flyout.

Clicking or tapping option in flyout will update select to that value.
