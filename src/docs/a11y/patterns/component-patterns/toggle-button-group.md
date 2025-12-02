# Toggle Button Group Accessibility

## Best Practices

The toggle button group is not a form control; although it can be used within a form - like all buttons - it does not store and submit form data.

The toggle button group is not a drop-in replacement for radios or checkboxes, nor does it operate like those.

## Interaction Design

Even though a toggle button group is single-select or multi-select, like radios and checkboxes respectively, they do not share the exact same interactions as radios and checkboxes..

In a single select toggle group, pressing one button will unpress any currently pressed button in the group.

In a multi select toggle group, pressing a button will have no effect on any of the other buttons in the group.

## ARIA Reference

| Attribute        | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| **aria-pressed** | Conveys whether the button is pressed or not (i.e true or false) |
