# Listbox Accessibility

## Best Practices

This section is not yet available.

## Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

### Keyboard

If the listbox has no owner, the listbox **must** be keyboard focusable.

If a listbox has keyboard focus, `UP-ARROW` and `DOWN-ARROW` keys must change the highlighted option (skipping any that are disabled).

For a focusable listbox, keyboard focus will _appear_ to be at two places at the same time (the listbox and the options). In actual fact, keyboard focus always stays on the listbox. The [aria-activedescendant](http://www.w3.org/TR/wai-aria/states_and_properties#aria-activedescendant) property controls the pseudo-focus inside of the listbox and we can use CSS to style the active descendant.

For a listbox with `autoSelect` configuration, highlighting an option **must** also select that option (i.e. `aria-checked="true"`).

For a listbox without `autoSelect` configutation, a highlighted option must be manually selected using the `SPACEBAR` or `ENTER` key.

### Screen Reader

With virtual cursor on listbox, screen reader should announce role of listbox.

The checked state of an option **must** be announced.

Disabled options must be announced as disabled.

### Pointer

Clicking or tapping button will toggle expanded state of flyout.

Clicking or tapping option in flyout will update button to that value.

## Known Issues

These are all known _serious_ issues with assistive technology in relation to this pattern:

- [https://issues.chromium.org/issues/40260928](https://issues.chromium.org/issues/40260928)
- [https://issues.chromium.org/issues/40945405](https://issues.chromium.org/issues/40945405)
