# Listbox Button Accessibility

### Screenshots

![](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-MSkRY_jLwiwOHOYOjuz%2F-MSkSQ8xrJKBKWG9pIzd%2Flistbox-dweb-1.png?alt=media\&token=3d9dab13-7c1c-4ba8-8ade-1469d34e85f0)

### Introduction

The listbox button pattern is a JavaScript widget. It is a button that expands to reveal a [listbox](listbox) in a [popover](../disclosure/popover).

Because it is not a form control, the button value will not automatically be passed to the server. If you require this behaviour, please consider the [select](select) pattern instead.

**Avoid calling a listbox button a "dropdown"!** The term "dropdown" is ambiguous and could be confused with a menu button, combobox, select or any other kind of overlay that "drops down".

### Known Issues

These are all known _serious_ issues with assistive technology in relation to this pattern:

* [https://issues.chromium.org/issues/40260928](https://issues.chromium.org/issues/40260928)
* [https://issues.chromium.org/issues/40945405](https://issues.chromium.org/issues/40945405)

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](https://ebay.github.io/mindpatterns/input/listbox-button/index.html).

Examine the required markup structure in our  [Bones GitHub project](https://github.com/ianmcburnie/bones#user-content-listbox-button).

View a fully styled example in our [eBay Skin CSS framework](https://opensource.ebay.com/skin/component/listbox-button/).

### Terminology

**widget**: the pattern as a whole, comprised of the parts below

**button**: the button that opens the flyout

**popover**: the overlay element that contains the listbox

**listbox**: the list of options

**option**: an option, with state

**label**: internal and/or external text element(s)

### Configuration

See related [listbox](listbox) pattern.

### Best Practices

A listbox button's accessible label must at **all times** reflect its function.

**Care is needed when labelling a listbox button!** A listbox button attempts to mimic the behaviour of an HTML select by displaying the currently selected value in its collapsed state. In HTML however, a _button_ is labelled by its inner text, whereas a _select_ is labelled by an external label tag.&#x20;

All of this leaves us with a conundrum, with three potential solutions outlined below.

#### **Compound Label**

We can use `aria-labelledby` to stitch together an external text element with the internal value, this creating a compound label.

`<span id="el1">Colour</span><button aria-labelledby="el1 el2"><span id="el2">blue</span></button>`

#### **Compact Label**

The button's inner text can be written as a key/value pair, where key denotes purpose and value represents the currently selected option.

`<button>Colour: blue<button>`

#### **Explicit Labels**

We can write our option values such that the context can always be derived from the option value text alone (this isn't always easy or recommended).

`<div role="option">Colour blue</div>`

### Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

Please also see related [listbox](listbox) pattern for best practices of nested listbox.

#### Keyboard

With focus on button, pressing `SPACEBAR` will will toggle the expanded state of button. On expand, keyboard focus should move to the listbox. The listbox implements an [active-descendant](../techniques/active-descendant) keyboard model.

With focus on listbox, `ARROW KEYS` will navigate the options, `ESCAPE` key will collapse listbox and move focus on to button. `TAB` key will collapse listbox and move focus to next interactive page element. `SHIFT-TAB` will move focus back to button and listbox will remain expanded.

#### Screen Reader

With virtual cursor on button, screen reader should announce role, label (see "Best Practices" section above), value & state..

#### Pointer

Clicking or tapping button will toggle expanded state of popover.

Clicking or tapping an option in popover will update button value and collapse the popover.

### Developer Guide

This section is not yet available.
