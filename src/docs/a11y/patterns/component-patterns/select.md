# Select Accessibility

![Select a search category](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcEgOBcF4Eo5q_gfN%2Fselect.png?generation=1548799252119387&alt=media)

### Introduction

The select pattern is a form control. It allows _selection_ of one or more items from a list of options.

Like all form controls, the value (or values) make up the form data that is passed to the server. If you require similar behaviour, but without the need for form data, please consider the [menu](menu) pattern instead.

HTML already gives us a native select control that is 100% accessible. However, it is difficult to style and it's options do not support inner HTML.

**Do not call a select a "dropdown"!** The term "dropdown" is ambiguous and could be confused with a menu, combobox, listbox or any other kind of overlay that "drops down".

### Working Example

Experience the pattern in action on our companion [eBay MIND Patterns examples website](http://ebay.github.io/mindpatterns/input/listbox).

Examine the required markup structure in our [Bones GitHub project](https://github.com/ianmcburnie/bones#radio).

View a fully styled example in our [eBay Skin CSS framework](https://opensource.ebay.com/skin/component/select/).

### Terminology

- **select**: the pattern as a \*whole\*, comprised of the following sub parts
- **label**: the labelling element or text for the control
- **flyout**: contains the full view of options
- **options**: each option available for selection
- **multiple**: boolean, indicating if multi-select is allowed

### Best Practices

Select **must** belong inside of a form element, and that form element **must** have a submit button.

Select **must** support form-autofill behaviour of browser.

The select element is the only element that receives keyboard focus.

Selecting an option _should not_ submit the form. It should only set the option state to selected.

Select can be set to multi-select but the keyboard controls to do multi-selection are not entirely easy or intuitive.

### Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

#### Keyboard

With focus on select, pressing UP and DOWN arrow keys will cycle through options.

With focus on select, pressing SPACEBAR will will toggle expanded state of flyout.

With focus on select, pressing ESCAPE key will collapse flyout.

#### Screen Reader

With virtual cursor on select, screen reader should announce role, state and value.

With virtual cursor on select, pressing UP and DOWN arrow keys will announce newly selected option value.

#### Pointer

Clicking or tapping select will toggle expanded state of flyout.

Clicking or tapping option in flyout will update select to that value.

### Developer Guide

HTML gives us a native select control that is 100% keyboard and screenreader accessible without any need for JavaScript:

```html
<label for="car">Choose a car</label>
<select id="car" name="car">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
```

However, whilst the native HTML control _can_ be styled to some extent in it's collapsed state, the expanded overlay state cannot.

This conundrum is the source of many custom solutions on the web. There are however, several pitfalls when it comes to accessibility.

#### Pitfall Number 1

Like all form controls, a select **must** support the autofill behaviour of the browser (see best practices above).

The only way to achieve this is to use a real `<select>` tag under-the-hood (hidden away, but acting as our model), and present a facade widget on top of it (acting as our "view"). The model and view must be kept in sync using JavaScript.

#### Pitfall Number 2

Perhaps a deeper rooted issue is that a custom styled select does not breed familiarity with users. Whilst not pretty, the native select is utilitarian; users find it both practical and familiar.
