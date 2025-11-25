# Radio Accessibility

![Screenshot depicting radio buttons for user feedback rating](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcFnZxkxHARzGs8aS%2Fradiobutton.png?generation=1548799253769744&alt=media)

### Introduction

Allows selection of a single item in a group of options.

If requiring multi-selection, please consider checkboxes or listbox instead.

HTML gives us native radio buttons that are fully accessible by default. Unfortunately, the look-and-feel of these controls is often at odds with a web site's design system or branding guidelines. This issue is compounded by the fact that native radio buttons are traditionally very difficult to re-style.

Our pattern shows how modern CSS and SVG can be used to create a custom _facade_ over the native radio buttons, while maintaining accessibility requirements.

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](https://ebay.github.io/mindpatterns/input/radio/index.html).

Examine the required markup structure in our [Bones GitHub project](https://github.com/ianmcburnie/bones#radio).

View a fully styled example in our [eBay Skin CSS framework](https://opensource.ebay.com/skin/component/radio/).

### Best Practices

Radio buttons **must be** grouped together and a group **must contain** at least two radio buttons.

Each group of radio buttons **must** be labelled. Typically achieved with a `<legend>` tag.

Each individual radio button **must** be labelled.

Other types of interactive control (e.g. a textbox or checkbox) **must not** be nested between radio buttons.

Radio buttons **must** be contained within a form element, and that form element **must** have a submit button.

Toggling a radio button should not trigger a page reload, popup or any change of context until the related form is explicitly submitted by the user. If this kind of behaviour is required, please consider the [switch](switch) pattern or a button-less [menu](menu).

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

Tabbing into the group will set focus on the currently checked radio button. If no button is currently checked, focus will move to the first button or the last depending on whether TAB or SHIFT+TAB was used to enter the group.

**TAB** and **SHIFT+TAB** will leave the radio button group.

**DOWN ARROW** will focus and select the next button in group.

**UP ARROW** will focus and select the previous button in the group.

**ENTER** submits the form that the radio group belongs to.

#### Screen Reader

Radio **must** be reachable with screen reader (even when disabled).

Radio **must** be announced as "Radio".

Radio label **must** be announced.

Radio group label **must** be announced.

Radio state **must** be announced (i.e. checked or unchecked).

#### Pointer

Clicking radio **must** toggle the checked state.

Clicking radio label **must** toggle the checked state.

### Developer Guide

Our sample implementation follows the Progressive Enhancement strategy; we build in a layered fashion that allows everyone to access the basic content and functionality of a web page.

The three layers are:

1. Content (HTML)
2. Presentation (CSS)
3. Behaviour (JS) (not required)

Our radio buttons will be fully visible and operable in an HTML-only state, an HTML+CSS state, and an HTML+CSS+JavaScript state.

#### Native HTML

Native HTML radio buttons are 100% accessible by default and support features such as form data, form reset and form complete.

Native HTML radio buttons should **always** be your baseline starting point.

```html
<fieldset>
  <legend>Listing Format</legend>
  <span>
    <input id="lf_all" type="radio" name="lf" value="all" />
    <label for="lf_all">All Listings</label>
  </span>
  <span>
    <input id="lf_auction" type="radio" name="lf" value="auction" />
    <label for="lf_auction">Auction</label>
  </span>
  <span>
    <input id="lf_bin" type="radio" name="lf" value="bin" />
    <label for="lf_bin">Buy it Now</label>
  </span>
</fieldset>
```

The fieldset creates the grouping semantics. The legend creates the group label.

Each input and label pair are further grouped inside a span container. This span container can be replaced with a div for vertical stacking of radio buttons.

#### Custom Radio

Native HTML radio buttons are 100% accessible by default, but may not match your design system look & feel.

We will now show how CSS and SVG can give you the visuals you desire, without any JavaScript.

We are going to:

1. _Hide_ the native radio button
2. Display one of two custom icons (checked or unchecked) in it's place
3. Assign a focus outline to the custom icon

#### Markup Changes

We need to create a new container element that will host each radio button and its icon. We give it a class of `radio`:

```html
<span class="radio">
  <input
    class="radio__control"
    id="lf_all"
    type="radio"
    name="lf"
    value="all"
  />
  <!-- icon goes here -->
</span>
```

For convenience, we also add a `.radio__control` class to each input tag.

#### Invisible Input

We make the native input invisible, and keep it in place, using opacity and absolute positioning:

```css
.radio__control {
  opacity: 0;
  position: absolute;
  z-index: 1;
}
```

We keep the radio in place, so that we can continue to click on it. Although invisible, it is still the native input that receives click and focus events. This is important so that the underlying input maintains all built-in event handling and state.

Remember, clicking the label of a radio button will also toggle the checked state.

#### Custom Icon

We need two icons: checked and unchecked.

We have mentioned that SVG will be used to create the icon. We actually have two implementation choices when it comes to our SVG:

- background SVG
- foreground SVG

Here's how the markup will look with background SVG:

```html
<span class="checkbox">
  <input id="lf_all" type="radio" name="lf" value="all" />
  <span class="radio__icon"></span>
</span>
```

And here's how the markup will look with foreground SVG:

```html
<span class="radio">
  <input id="lf_all" type="radio" name="lf" value="all" />
  <span class="radio__icon" hidden>
    <svg aria-hidden="true" class="radio__unchecked" focusable="false">
      <use xlink:href="#icon-radio-unchecked"></use>
    </svg>
    <svg aria-hidden="true" class="radio__checked" focusable="false">
      <use xlink:href="#icon-radio-checked"></use>
    </svg>
  </span>
</span>
```

This markup assumes that the symbol definitions for `#icon-radio-unchecked` and `#icon-radio-checked` exist on the page.

The hidden attribute ensures that the SVG icon is not visible if the page is in a non-CSS state; it also helps prevent a flash of unstyled content (FOUC).

As you can see, the background SVG markup is more concise, however it has two major issues to be aware of:

- the color of the icon is not changeable with CSS
- alternate variations are needed for windows high contrast mode

On the other hand, foreground SVG has neither of these issues, and therefore is our preferred approach.

#### Custom Focus Outline

Remember that the keyboard will always focus on the _real_, native input. However, we cannot see the real focus indicator because the element has 0 opacity. To workaround this, we can create a custom focus outline around the SVG element:

```css
.radio__control:focus + .radio__icon {
  outline: 1px dotted #767676;
}
```

A dotted border is a good choice, mimicking that of various browsers (such as Firefox).

### ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of the radio pattern.

| Attribute       | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| **aria-hidden** | Removes the presentational SVG element from the accessibility tree. |
