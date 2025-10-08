# Combobox Accessibility



![Select phone model item specifics](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcEF1Sjh9adTHwYti%2Fcombobox.png?generation=1548799252047216\&alt=media)

### Introduction

A combobox serves the exact same _purpose_ as a textbox - allowing text to be input and submitted via a form. The combobox's main additional _feature_ is a listbox of suggestions that will update the textbox with the corresponding value when chosen.

A combobox typically also offers _autocomplete_ behavour - whereby the list of suggestions is filtered based on the current textbox value (i.e. while the user is typing in the textbox) .

### Terminology

* **combobox**: the pattern as a whole, comprised of the following distinct parts
* **textbox**: stores and displays the form value
* **popover**: the overlay that contains a listbox
* **listbox**: [listbox](listbox) containing options
* **option/suggestion**: a suggestion inside of the listbox and/or directly after the textbox value
* **autocomplete**: the autocomplete type (optional)
* **filter**: the filtering criteria (optional)

### Configuration

* **autoSelect**: a combobox with `autoSelect` will automatically select and fill the textbox value when user cycles through listbox options. Otherwise, `ENTER` key is required to manually select an option. Typically autoSelect will be `true` for a combobox with autocomplete behaviour.

### Working Example

Experience the pattern in action on our companion [eBay MIND Patterns examples website](http://ebay.github.io/mindpatterns/input/combobox/).

Examine the required markup structure in our [Bones GitHub project](https://opensource.ebay.com/skin/component/combobox/).

View a fully styled example in our [eBay Skin CSS framework](https://opensource.ebay.com/skin/#combobox).

### Best Practices

Each row in the list of options performs only a singular action: setting the value of the textbox. It is not possible, at the time of writing, to have additional actions per row, e.g. add, edit or delete.

The combobox listbox is **not** intended for storing or display kind of single-select or multi-select state. Again, the purpose of each option is to simply set the value of the textbox.

A combobox is an enhancement of textbox. Likewise, **autocomplete** is an enhancement of combobox. Suggestions provided will _update_ _dynamically_ based on user input. The suggested values may appear inline within the textbox, in a list, or both places at once.

Examples of autocomplete are the URL bar in browsers, and the main search field in search engines.

### Interaction Design

#### Keyboard

When the combobox receives focus, the listbox should expand to show all options.

With listbox expanded, pressing `DOWN-ARROW` and `UP-ARROW` keys **must** navigate through the list of options. The keyboard focus will _appear_ to be in two places at the same time - the textbox _and_ the listbox. In actual fact, keyboard focus always stays on the textbox. The [aria-activedescendant](http://www.w3.org/TR/wai-aria/states_and_properties#aria-activedescendant) property controls the _pseudo-focus_ inside of the listbox.

Pressing `SPACEBAR` **must always** enter a blank space in the textbox.

For a combobox with `autoSelect`, changing the highlighted option will automatically fill the textbox with that option.

For a combobox without `autoSelect`, changing the highlighted option **must** **not** automatically fill the textbox; `ENTER` key is required to manually select the option.

Pressing `ENTER` key while an option is highlighted **must** collapse the listbox. For a combobox with `autoSelect` the form will be submitted. For a combobox without `autoSelect` the form **must not** be submitted.

Pressing `ESC` key while an option is highlighted **must** collapse the listbox.

**For autocomplete type "list":**

The listbox remains but the options change based on the custom filtering criteria.

With focus in the empty combobox, type any letter. Any suggestions that match the filter will appear as options in the listbox popover.

**For autocomplete type "inline":**

The listbox is removed. The entire combobox value will update as the user types, with the suggested portion highlighted as a _selection_ range.

**For autocomplete type "both":**

This section is under development.

#### Screen Reader

The screen reader will announce the input as "text edit", "combobox" or words to those effect, depending on level of ARIA support.

The screen reader will announce "expanded" or "collapsed", depending on level of ARIA support.

The screen reader will announce any additional programmatic description, depending on level of ARIA support.

The screen reader will announce the current value of the textbox.

#### Mouse and Touch

When the combobox receives focus, via click or tap, the listbox should expand to show all options.

Clicking or tapping an option will fill the textbox with that value and collapse the listbox **without** triggering a form submit.

### Developer Guide

Combobox is a good example of progressive enhancement. Until JavaScript is loaded or initalised, the textbox operates as a regular textbox. For example, a user can still enter and submit a value using the plain old textbox. The ability to choose a value from a list of pre-defined options is considered the _enhancement_ that will be available with JavaScript.

Our combobox follows the ARIA 1.0 specification, as it has less issues than the ARIA 1.1 version. See [Resolving ARIA 1.1 Combobox Issues](https://github.com/w3c/aria/wiki/Resolving-ARIA-1.1-Combobox-Issues) for more information.

#### Textbox

We start with a label and textbox.

```markup
<span class="combobox" id="combobox-0">
  <label for="combobox-0-input">Game Console</label>
  <input id="combobox-0-input" name="console" type="text" placeholder="Playstation 4, Xbox One, etc."/>
  <!-- listbox options will go here -->
</span>
```

We have added our elements inside of a `.combobox` wrapper element. This wrapper acts as our module root and hook for CSS & JavaScript.

Remember: the textbox does not yet have a role of combobox, it is added later with JavaScript.

A listbox element will be appended to this wrapper. It is up to you whether you wish to render this server-side or client-side. There are pros and cons to both approaches, which we will discuss below.

#### Listbox

The listbox may render on the server or the client. It is wise to put the listbox in a hidden state if rendering on the server. To do so, use the `hidden` attribute.

```markup
<div class="combobox__overlay" hidden>
  <ul id="combobox_0-listbox" role="listbox">
    <li role="option" id="nid-0">Playstation 3</li>
    <li role="option" id="nid-1">Playstation 4</li>
    <li role="option" id="nid-2">Xbox 360</li>
    <li role="option" id="nid-3">Xbox One</li>
    <li role="option" id="nid-4">Wii</li>
    <li role="option" id="nid-5">Wii U</li>
  </ul>
</div>
```

Using JavaScript we now begin converting the textbox to a combobox, by adding `role=combobox`. We also create the properties and state that connect the combobox to the listbox:

```markup
<input id="combobox-0-input" name="console0" type="text" placeholder="Playstation 4, Xbox One, etc." role="combobox" aria-expanded="false" autocomplete="off" aria-owns="combobox_0-listbox">
```

The new attributes are `role`, `aria-expanded`, `autocomplete` and `aria-owns`.

#### Keyboard and Screen Reader Navigation

Our elements are now in place, but how does a keyboard user navigate to the options? We cannot use TAB key because focus must stay on the combobox (so that user can type and enter their own value). As with most complex widgets, the answer lies in the arrow keys. Up and down arrow keys are the way to select our combobox options.

If focus must remain on the combobox, how then do we also have focus on the listbox options? The answer is that we don't. Focus always remains on the combobox and instead we have a kind of _pseudo-focus_ on the options.

How does the screen reader know where this pseudo-focus is?

#### Active Descendant

We call the option with pseudo-focus the "active descendant". And guess what, there is an ARIA attribute for this called `aria-activedescendant`. This attribute is placed on the combobox element. The attribute value is the ID of the currently active (pseudo-focussed) option. This allows assistive technology such as a screen reader to programmatically determine

To make all of this easier, we recommend using a plugin such as [makeup-active-descendant](https://github.com/makeup-js/makeup-active-descendant). After your HTML structure is in place, simply initialise the plugin on the widget and up/down arrow keys will update the necessary states. Use CSS to style the active descendant in any way you like.

### ARIA Reference

This section gives an overview of ARIA usage, _within the context of this pattern_.

#### role=combobox

This attribute changes the role of the text input from `textbox` to `combobox`. We recommend applying this attribute on the client-side with JavaScript.

#### role=listbox

The list of suggestions has a role of listbox.

#### role=option

Each listbox item has a role of option.

#### aria-owns

This property creates a programmatic hierarchy in the accessibility tree for the combobox and the listbox.

#### aria-expanded

Conveys the expanded state of the combobox.

#### aria-label

Provides the expand/collapse button with an accessible label, in the case where it has no visible text (i.e. an icon button).

### Further Reading

* [https://github.com/w3c/aria/wiki/Resolving-ARIA-1.1-Combobox-Issues](https://github.com/w3c/aria/wiki/Resolving-ARIA-1.1-Combobox-Issues)
