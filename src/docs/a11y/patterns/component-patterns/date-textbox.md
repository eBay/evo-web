# Date Textbox Accessibility

## Best Practices

A date textbox should have a layout familiar with other popular systems and conventions. A data table works well.

Dates may be disabled if they are outside of the allowed time range.

## Interaction Design

This section provides interaction design for keyboard, screen reader, voice & pointing devices.

### Keyboard

The date textbox exposes 3 keyboard focusable areas with TAB key:

- The previous month button
- The next month button
- A date button\*

_\*Which date button receives focus can change depending on certain factors._

When a date button inside of the grid receives focus, keyboard interaction switches to a [roving tabindex](../techniques/roving-tabindex) based style, using the ARROW keys, e.g. RIGHT-ARROW moves to the button in the next cell to the right, DOWN-ARROW moves to the button in the cell below.

SPACEBAR or ENTER key will start or end a date range selection

ESC key will close the date textbox, retaining any date selection.

### Screen Reader

Date buttons are announced with the day of month, e.g. "12, button". The day of week and month are available on the containing table cell element (see below).

When navigating calendar in table mode, month is announced via table _caption_ semantics.

When navigating calendar in table mode, days of week are announced via table _column header_ semantics.

### Voice

Date button can be activated via visual label, e.g. "Click button 12".

Picker can be closed via, "Press Escape".

### Pointer

This section is not yet available.

## ARIA Reference

| Attribute            | Description                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------- |
| **aria-label**       | Previous and next month icon buttons require a programmatic label for assistive technology. |
| **role-description** | The main calendar table can be given a custom description, such as "Calendar".              |
