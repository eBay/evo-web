# Table Accessibility

## Best Practices

In order to be well-formed and appear in the accessibility tree for assistive technology, a table **requires** the table head (`<thead>`) and table body (`<tbody>`) elements.

Every table cell **requires** a logical column header and/or row header.

Columns with string data should be left aligned, while columns with numeric data should be right aligned (vice versa for RTL).

A table accessibility may be enhanced by adding a `<caption>` to relay the subject of the table.

A sortable table is a table that allows users to sort the data in the table by clicking on the column headers. You can make tables sortable by using sort buttons in `thead > th` . Additionally, for accessibility purposes, `aria-sort="ascending"` or `aria-sort="descending"` should be added respectively to the `<th>` to reflect the current sort order.

## Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

### Keyboard

The top-level container element should have a `tabindex="0"`to make it focusable, an `aria-label` or `aria-labeledby` to relay context of the table, and should have a `role="group"` to make it accessible to screen readers. That will also allow the table elements to be scrollable inside the container, both vertically (when overflowing) and horizontally.

Tabbing order for interactive elements inside a table need to follow the natural sequencing of the elements as they appear row by row from top to bottom, and column by column per the respective RTL/LTR modes.

Sortable columns are achieved by adding a tri-state button (at rest, toggled sort descending, toggled sort ascending) as the contents of the table header cell. The three states would be cycled through on click/tap/keyboard as such: Rest > Sort Descending > Sort Ascending > Rest ...

The usual rules for [button](../input/button) apply.

### Screen Reader

Table **must** be listed in screen reader list of tables.

Screen reader **must** be navigable with screen reader table command. For example, in VoiceOver this command is `VO+CMD+T`.

Screen reader **must** announce value of every cell.

Screen reader **must** announce value of column header when instructed to do so. For example, in VoiceOver this command is `VO+C`.

Sortable column **must** be announced by screen reader.

Current sort state of sortable columns **must** be announce by screen reader.

When moving from column to column, screen reader announces new column scope. Typically this scope is the value of the column header.

When moving from row to row, screen reader announces new row scope. Typically this scope is the value of the row header.

### Pointer

The only special consideration for table is sortable columns. Typically this is achieved by adding a toggle button as the contents of the table header cell. The usual rules for [button](../input/button) apply.

## ARIA Reference

| Attribute     | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| **aria-sort** | Applied to column headings to convey descending or ascending sorted stated. |
