# Select Accessibility

![Select a search category](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcEgOBcF4Eo5q_gfN%2Fselect.png?generation=1548799252119387&alt=media)

## Introduction

The select pattern is a form control. It allows _selection_ of one or more items from a list of options.

Like all form controls, the value (or values) make up the form data that is passed to the server. If you require similar behaviour, but without the need for form data, please consider the [menu](menu) pattern instead.

HTML already gives us a native select control that is 100% accessible. However, it is difficult to style and it's options do not support inner HTML.

**Do not call a select a "dropdown"!** The term "dropdown" is ambiguous and could be confused with a menu, combobox, listbox or any other kind of overlay that "drops down".

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
