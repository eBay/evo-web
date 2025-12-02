# Listbox Button Accessibility

## Best Practices

A listbox button's accessible label must at **all times** reflect its function.

**Care is needed when labelling a listbox button!** A listbox button attempts to mimic the behaviour of an HTML select by displaying the currently selected value in its collapsed state. In HTML however, a _button_ is labelled by its inner text, whereas a _select_ is labelled by an external label tag.

All of this leaves us with a conundrum, with three potential solutions outlined below.

### Compound Label

We can use `aria-labelledby` to stitch together an external text element with the internal value, this creating a compound label.

`<span id="el1">Colour</span><button aria-labelledby="el1 el2"><span id="el2">blue</span></button>`

### Compact Label

The button's inner text can be written as a key/value pair, where key denotes purpose and value represents the currently selected option.

`<button>Colour: blue<button>`

### Explicit Labels

We can write our option values such that the context can always be derived from the option value text alone (this isn't always easy or recommended).

`<div role="option">Colour blue</div>`

## Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

Please also see related [listbox](listbox) pattern for best practices of nested listbox.

### Keyboard

With focus on button, pressing `SPACEBAR` will will toggle the expanded state of button. On expand, keyboard focus should move to the listbox. The listbox implements an [active-descendant](../techniques/active-descendant) keyboard model.

With focus on listbox, `ARROW KEYS` will navigate the options, `ESCAPE` key will collapse listbox and move focus on to button. `TAB` key will collapse listbox and move focus to next interactive page element. `SHIFT-TAB` will move focus back to button and listbox will remain expanded.

### Screen Reader

With virtual cursor on button, screen reader should announce role, label (see "Best Practices" section above), value & state..

### Pointer

Clicking or tapping button will toggle expanded state of popover.

Clicking or tapping an option in popover will update button value and collapse the popover.

## Known Issues

These are all known _serious_ issues with assistive technology in relation to this pattern:

- [https://issues.chromium.org/issues/40260928](https://issues.chromium.org/issues/40260928)
- [https://issues.chromium.org/issues/40945405](https://issues.chromium.org/issues/40945405)
