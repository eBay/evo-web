# Phone Input Accessibility

## Best Practices

Phone input group **could** have an accessible label.

Listbox button label must have an accessible label. Check [listbox button](listbox-button) best practices.

Textbox must have an accessible label.

Textbox should **not** be split to multiple input boxes.

Textbox can have an attribute `autocomplete=tel-national`. While `autocomplete` is a promising technique for supporting personalization in HTML, support for this in AT is fairly limited.

## Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

### Keyboard

The button **must** be keyboard focusable.

Listbox button and textbox sit in the page's natural tab sequence.

When Listbox button has focus, `TAB` key must move keyboard focus to textbox.

When textbox has focus, `TAB` key moves focus to the next interactive element in the page.

### Screen Reader

Field set (group label) **must** be announced (e.g. Phone number).

Listbox button label **must** be announced (e.g. Country code USA +1, Country code UK +44).

Listbox button state **must** be announced (e.g. expanded or collapsed).

Textbox label **must** be announced (e.g. 'phone number').

### Pointer

Clicking any listbox item **must** activate that item.
