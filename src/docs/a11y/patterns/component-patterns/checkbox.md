# Checkbox Accessibility

![Custom checkbox style](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcGLYCqUcCFwkuBYV%2Fcheckbox.png?generation=1548799254043735&alt=media)

### Introduction

Allows selection of zero or more items in a group of options.

HTML gives us native checkboxes that are fully accessible by default. Unfortunately, the look-and-feel of these controls is often at odds with a web site's design system or branding guidelines. This issue is compounded by the fact that native HTML checkboxes are traditionally very difficult to re-style with CSS.

Our pattern shows how modern CSS and SVG can be used to create a custom _facade_ over the native checkboxes, while maintaining accessibility requirements.

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](http://ebay.github.io/mindpatterns/input/checkbox/).

Examine the required markup structure in our [Bones GitHub project](https://github.com/ianmcburnie/bones#user-content-checkbox).

View a fully styled example on our [Skin CSS Framework](https://opensource.ebay.com/skin/component/checkbox/).

### Best Practices

Checkboxes are form controls and _should_ be inside a form tag. The form _should_ have a submit button.

Individual checkboxes **must** have a visible, onscreen label. Typically we use a label tag to achieve this.

Groups of _related_ checkboxes **must** have a group label. Typically we use fieldset and legend tags to achieve this.

Toggling a checkbox should not cause an app update until the related form is submitted by the user. If instant app updates are required, perhaps consider the [switch](switch) pattern or a button-less [menu](menu).

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

Checkbox **must** be keyboard focusable (unless disabled).

If checkbox has keyboard focus, pressing SPACEBAR **must** toggle the checked state.

If checkbox has keyboard focus, pressing ENTER key **must** submit the form.

If checkbox has keyboard focus, pressing TAB key or SHIFT-TAB key combo moves keyboard focus to next or previous interactive element on page respectively.

#### Screen Reader

Checkbox **must** be reachable with screen reader (even when disabled).

Checkbox **must** be announced as "checkbox".

Checkbox label **must** be announced.

Checkbox group label, if applicable, **must** be announced.

Checkbox state **must** be announced.

#### Pointer

Clicking checkbox **must** toggle the checked state.

Clicking checkbox label **must** toggle the checked state.

### Developer Guide

Our sample implementation follows the Progressive Enhancement strategy; we build in a layered fashion that allows everyone to access the basic content and functionality of a web page.

The three layers are:

1. Content (HTML)
2. Presentation (CSS)
3. Behaviour (JS) (not required)

Our checkboxes will be fully visible and operable in an HTML-only state, an HTML+CSS state, and an HTML+CSS+JavaScript state.

#### Native HTML

Native HTML checkboxes are 100% accessible by default and support features such as form data, form reset and form complete.

Native HTML checkboxes should **always** be your baseline starting point.

```html
<fieldset>
  <legend>Auction Type</legend>
  <span>
    <input id="at_freeshipping" type="checkbox" name="at_freeshipping" />
    <label for="at_freeshipping">Free Shipping</label>
  </span>
  <span>
    <input id="at_endssoon" type="checkbox" name="at_endssoon" />
    <label for="at_endssoon">Ends soon</label>
  </span>
  <span>
    <input id="at_zerobids" type="checkbox" name="at_zerobids" />
    <label for="at_zerobids">Zero bids</label>
  </span>
</fieldset>
```

The fieldset creates the grouping semantics. The legend creates the group label.

Each input and label pair are further grouped inside a span container. This span container can be replaced with a div for vertical stacking of checkboxes.

#### Custom Checkbox

Native HTML checkboxes are 100% accessible by default, but may not match your design system look & feel.

We will now show how CSS and inline SVG can give you the visuals you desire, _without_ any JavaScript.

We are going to:

1. _Hide_ the native checkbox
2. Display one of two custom icons (checked or unchecked) in it's place
3. Assign a focus outline to the custom icon

#### Markup Changes

We need to create a new container element that will host each checkbox and it's icon. We give it a class of `checkbox`:

```html
<span class="checkbox">
  <input
    class="checkbox__control"
    id="at_freeshipping"
    type="checkbox"
    name="at_freeshipping"
  />
  <!-- custom icon goes here -->
</span>
```

For convenience, we also add a `.checkbox__control` BEM element modifier to each input tag.

#### Invisible Input

We make the native input invisible, and keep it in place, using opacity and absolute positioning:

```css
.checkbox__control {
  opacity: 0;
  position: absolute;
  z-index: 1;
}
```

We keep the checkbox in place, so that we can continue to click on it. Although invisible, it is still this native input that receives click and focus events. This is important so that the underlying input maintains all built-in event handling and state.

Remember, clicking the label of a checkbox will also toggle the checked state.

#### Custom Icon

We need two icons: checked and unchecked.

We have mentioned that SVG will be used to create the icon. We actually have two implementation choices when it comes to our SVG:

- background SVG
- foreground SVG

Here's how the markup will look with background SVG:

```html
<span class="checkbox">
  <input
    class="checkbox__control"
    id="at_freeshipping"
    type="checkbox"
    name="at_freeshipping"
  />
  <span class="checkbox__icon"></span>
</span>
```

And here's how the markup will look with foreground SVG:

```html
<span class="checkbox">
  <input
    class="checkbox__control"
    id="at_freeshipping"
    type="checkbox"
    name="at_freeshipping"
  />
  <span class="checkbox__icon" hidden>
    <svg aria-hidden="true" class="checkbox__unchecked" focusable="false">
      <use xlink:href="#icon-checkbox-unchecked"></use>
    </svg>
    <svg aria-hidden="true" class="checkbox__checked" focusable="false">
      <use xlink:href="#icon-checkbox-checked"></use>
    </svg>
  </span>
</span>
```

This markup assumes that the symbol definitions for `#icon-checkbox-unchecked` and `#icon-checkbox-checked` exist on the page.

The hidden attribute ensures that the SVG icon is not visible if the page is in a non-CSS state; it also helps prevent a flash of unstyled content (FOUC).

As you can see, the background SVG markup is more concise, however it has two issues to be aware of:

- the color of the icon is not changeable with CSS
- alternate variations are needed for windows high contrast mode

On the other hand, foreground SVG has neither of these issues.

#### Custom Focus Outline

Remember that the keyboard will always focus on the real, native input. However, we cannot see the _real_ focus indicator because the element has 0 opacity. To workaround this, we can create a custom focus outline around the icon element:

```css
.checkbox__control:focus + .checkbox__icon {
  outline: 1px dotted #767676;
}
```

A dotted border is a good choice, mimicking that of various browsers (such as Firefox).

### ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of the checkbox pattern.

| Attribute       | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| **aria-hidden** | Removes the presentational SVG element from the accessibility tree. |
