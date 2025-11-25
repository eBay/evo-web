# Chips Combobox Accessibility

### Terminology

- **combobox**: the pattern as a whole, comprised of the following distinct parts
- **textbox**: stores and displays the form value
- **flyout**: the overlay that contains a listbox
- **listbox**: [listbox](https://ebay.gitbook.io/mindpatterns/input/listbox) containing options
- **option/suggestion**: a suggestion inside of the listbox and/or directly after the textbox value
- **autocomplete**: the autocomplete type (optional)
- **filter**: the filtering criteria (optional)
- **chip**: the individual items inside that can be added and removed

### Working Example

View a fully styled example in our [eBay Skin CSS framework](https://opensource.ebay.com/skin/component/chips-combobox/).

### Best Practices

Since `chips-combobox` is a composite component and includes a `combobox` , it automatically inherits its pattern. For the sake of completion, here's that pattern quoted from its own page:

> Each row in the list of options performs only a singular action: setting the value of the textbox. It is not possible, at the time of writing, to have additional actions per row, e.g. add, edit or delete.
>
> The combobox listbox is **not** intended for storing or display kind of single-select or multi-select state. Again, the purpose of each option is to simply set the value of the textbox.
>
> A combobox is an enhancement of textbox. Likewise, **autocomplete** is an enhancement of combobox. Suggestions provided will _update_ _dynamically_ based on user input. The suggested values may appear inline within the textbox, in a list, or both places at once.
>
> Examples of autocomplete are the URL bar in browsers, and the main search field in search engines.

#### Chips

Since `chips-combobox` manages the addition and removal of `chip(s)` , they require some key elements. A `chip` can be static of interactive. Static chips are extremely simple and don't require much guidance. Here, we will only be looking at interactive `chips`. Here's the markup for each `chip`:&#x20;

```html
<span class="chip">
  <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
  <button
    class="chip__button"
    type="button"
    aria-label="Remove"
    aria-describedby="chip-interactive-1-1-text"
  >
    <svg class="icon icon--close-12" width="13" height="12" aria-hidden="true">
      <use href="#icon-close-12"></use>
    </svg>
  </button>
</span>
```

Each `chip` has a `button` inside that removes the chip from the `chips-combobox` . The `chip__text` needs an `id` that is used by the `button` via `aria-describedby` to link the `button` removal to the specific chip.&#x20;

The close `svg` icon for each chip needs to have `aria-hidden="true"` since its function is conveyed by the `button`.

### Interaction Design

Since chips combobox is a composite component and includes a `combobox` , it automatically inherits its interaction design. Once again, here's that pattern quoted from its own page:

> **Keyboard**
>
> When the combobox receives focus, the listbox should expand to show all options.
>
> With listbox expanded, pressing `DOWN-ARROW` and `UP-ARROW` keys **must** navigate through the list of options. The keyboard focus will _appear_ to be in two places at the same time - the textbox _and_ the listbox. In actual fact, keyboard focus always stays on the textbox. The [aria-activedescendant](http://www.w3.org/TR/wai-aria/states_and_properties#aria-activedescendant) property controls the _pseudo-focus_ inside of the listbox.
>
> Pressing `SPACEBAR` **must always** enter a blank space in the textbox.
>
> For a combobox with `autoSelect`, changing the highlighted option will automatically fill the textbox with that option.
>
> For a combobox without `autoSelect`, changing the highlighted option **must** **not** automatically fill the textbox; `ENTER` key is required to manually select the option.
>
> Pressing `ENTER` key while an option is highlighted **must** collapse the listbox. For a combobox with `autoSelect` the form will be submitted. For a combobox without `autoSelect` the form **must not** be submitted.
>
> Pressing `ESC` key while an option is highlighted **must** collapse the listbox.
>
> **For autocomplete type "list":**
>
> The listbox remains but the options change based on the custom filtering criteria.
>
> With focus in the empty combobox, type any letter. Any suggestions that match the filter will appear as options in the listbox flyout.
>
> **For autocomplete type "inline":**
>
> The listbox is removed. The entire combobox value will update as the user types, with the suggested portion highlighted as a _selection_ range.
>
> **For autocomplete type "both":**
>
> This section is under development.
>
> **Screen Reader**
>
> The screen reader will announce the input as "text edit", "combobox" or words to those effect, depending on level of ARIA support.
>
> The screen reader will announce "expanded" or "collapsed", depending on level of ARIA support.
>
> The screen reader will announce any additional programmatic description, depending on level of ARIA support.
>
> The screen reader will announce the current value of the textbox.
>
> **Mouse and Touch**
>
> When the combobox receives focus, via click or tap, the listbox should expand to show all options.
>
> Clicking or tapping an option will fill the textbox with that value and collapse the listbox **without** triggering a form submit.

In addition, there is interaction between the `combobox` and `chip` items.

#### Chip Creation with Keyboard and Mouse

As the user has gained focus of the textbox, the listbox will display to show all available options. As the user types, the listbox will be filtered to display only items meeting the criteria of the entered text. Consistent with a typical combobox, the user would then use the arrow keys to navigate to the item they'd like to add. Pressing `ENTER` when the indicator is on a specific item, will create a `chip` with that item. Utilizing a mouse, when the user clicks on any of the items in the listbox, a chip will be created for that item.

#### Custom Chip Creation

A custom `chip` can be created only with the keyboard. As the user types inside the textbox, at any given moment, pressing `ENTER` will create a `chip` with/for the text present in the textbox.

#### Patterns to Avoid: Comma

There may be a tendency to consider using a comma(`,`) to fire off the creation of a chip. The current guidance is to avoid doing so. Commas are too specific in usage on certain platforms and do not have as wide of an intuitive base of accepted usage patterns. Conversely, `ENTER` is a universally accepted pattern for submission of an entry.

### States

**Rest State**

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FHYZKpV9Zan761zDsIM3l%2Fimage.png?alt=media&#x26;token=6389c9c6-8ad3-4a84-b734-12953f586a17" alt=""><figcaption></figcaption></figure>

**Open State**

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FPqWPIp2qnqprUCMyd26S%2Fimage.png?alt=media&#x26;token=b7a6f343-f8dc-4ab6-9df0-0a833dd2921b" alt=""><figcaption></figcaption></figure>

**Filled State**

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FElGf41IggBOitiIxoPAl%2Fimage.png?alt=media&#x26;token=16865283-c8b2-47ec-a320-08845322e76d" alt=""><figcaption></figcaption></figure>

**Disabled State**

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FyyFecf1s3QYW4LUEBIyq%2Fimage.png?alt=media&#x26;token=5f6556d7-5c33-4494-b1b9-6979711e3697" alt=""><figcaption></figcaption></figure>

**Error State**

Usage of the error state requires the addition of the `field` [error state](https://opensource.ebay.com/skin/#chips-combobox).

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FlWjjAkAIzHBhBIQdbRNX%2Fimage.png?alt=media&#x26;token=846a0b9f-d595-4527-aaf8-d1c45926a88f" alt=""><figcaption></figcaption></figure>

### Developer Guide

For the sake of comprehensive coverage, once again, the portions relevant to the `combobox` are quoted from its developer guide:

> **Textbox**
>
> We start with a label and textbox.
>
> ```
> <span class="combobox" id="combobox-0">
>   <label for="combobox-0-input">Game Console</label>
>   <input id="combobox-0-input" name="console" type="text" placeholder="Playstation 4, Xbox One, etc."/>
>   <!-- listbox options will go here -->
> </span>
> ```
>
> We have added our elements inside of a `.combobox` wrapper element. This wrapper acts as our module root and hook for CSS & JavaScript.
>
> Remember: the textbox does not yet have a role of combobox, it is added later with JavaScript.
>
> A listbox element will be appended to this wrapper. It is up to you whether you wish to render this server-side or client-side. There are pros and cons to both approaches, which we will discuss below.
>
> **Listbox**
>
> The listbox may render on the server or the client. It is wise to put the listbox in a hidden state if rendering on the server. To do so, use the `hidden` attribute.
>
> ```
> <div class="combobox__overlay" hidden>
>   <ul id="combobox_0-listbox" role="listbox">
>     <li role="option" id="nid-0">Playstation 3</li>
>     <li role="option" id="nid-1">Playstation 4</li>
>     <li role="option" id="nid-2">Xbox 360</li>
>     <li role="option" id="nid-3">Xbox One</li>
>     <li role="option" id="nid-4">Wii</li>
>     <li role="option" id="nid-5">Wii U</li>
>   </ul>
> </div>
> ```
>
> Using JavaScript we now begin converting the textbox to a combobox, by adding `role=combobox`. We also create the properties and state that connect the combobox to the listbox:
>
> ```
> <input id="combobox-0-input" name="console0" type="text" placeholder="Playstation 4, Xbox One, etc." role="combobox" aria-expanded="false" autocomplete="off" aria-owns="combobox_0-listbox">
> ```
>
> The new attributes are `role`, `aria-expanded`, `autocomplete` and `aria-owns`.
>
> **Description**
>
> At the time of writing, screen readers don't do a good job of conveying the combobox role or how to interact with it. To solve this problem, we can add a description via `aria-roledescription`.
>
> ```
> <input aria-roledescription="Use up and down arrow keys to navigate combobox options" id="combobox-0-input" name="console0" type="text" placeholder="Playstation 4, Xbox One, etc." role="combobox" aria-expanded="false" autocomplete="off" aria-owns="combobox_0-listbox">
> ```
>
> Now the screen reader announces the description whenever focus lands on the combobox.
>
> If the number of options will change based on the value of the combobox (i.e. filtering occurs), the description should also make the user aware of this:
>
> ```
> <input aria-roledescription="Use up and down arrow keys to navigate combobox options. Combobox options may change based on input." id="combobox-0-input" name="console0" type="text" placeholder="Playstation 4, Xbox One, etc." role="combobox" aria-expanded="false" autocomplete="off" aria-owns="combobox_0-listbox"/>
> ```
>
> **Keyboard and Screen Reader Navigation**
>
> Our elements are now in place, but how does a keyboard user navigate to the options? We cannot use TAB key because focus must stay on the combobox (so that user can type and enter their own value). As with most complex widgets, the answer lies in the arrow keys. Up and down arrow keys are the way to select our combobox options.
>
> If focus must remain on the combobox, how then do we also have focus on the listbox options? The answer is that we don't. Focus always remains on the combobox and instead we have a kind of _pseudo-focus_ on the options.
>
> How does the screen reader know where this pseudo-focus is?
>
> **Active Descendant**
>
> We call the option with pseudo-focus the "active descendant". And guess what, there is an ARIA attribute for this called `aria-activedescendant`. This attribute is placed on the combobox element. The attribute value is the ID of the currently active (pseudo-focussed) option. This allows assistive technology such as a screen reader to programmatically determine
>
> To make all of this easier, we recommend using a plugin such as [makeup-active-descendant](https://github.com/makeup-js/makeup-active-descendant). After your HTML structure is in place, simply initialise the plugin on the widget and up/down arrow keys will update the necessary states. Use CSS to style the active descendant in any way you like.

### ARIA Reference

This section gives an overview of ARIA usage, _within the context of this pattern_.

| Attribute                | Description                                                                                                                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **role=combobox**        | This attribute changes the role of the text input from `textbox` to `combobox`. We recommend applying this attribute on the client-side with JavaScript.                                                    |
| **aria-roledescription** | Gives additional instructions on how to operate the combobox options.                                                                                                                                       |
| **role=listbox**         | The list of suggestions has a role of listbox.                                                                                                                                                              |
| **role=option**          | Each listbox item has a role of option.                                                                                                                                                                     |
| **aria-owns**            | This property creates a programmatic hierarchy in the accessibility tree for the combobox and the listbox.                                                                                                  |
| **aria-expanded**        | Conveys the expanded state of the combobox.                                                                                                                                                                 |
| **aria-label**           | Provides the expand/collapse button with an accessible label, in the case where it has no visible text (i.e. an icon button). It also provides an accessible label for the `chips-combobox` unordered list. |
| **aria-labeledby**       | In instances where a heading or label is provided before the chips-combobox, it can link to the element for its aria label.                                                                                 |

```html
<h2 id="sports-chips-combobox">Sports</h2>
<span class="chips-combobox">
  <ul class="chips-combobox__items" aria-labeledby="sports-chips-combobox"></ul>
  <span class="combobox combobox--js chips-combobox__combobox">
    <span class="combobox__control chips-combobox_combobox__control">
      <input
        id="chips-combobox-1-input"
        role="combobox"
        type="text"
        placeholder="Add Sport"
        aria-haspopup="listbox"
        aria-owns="listbox-chips-combobox-1"
      />
      <svg
        class="icon icon--chevron-down-16"
        height="16"
        width="16"
        aria-hidden="true"
      >
        <use href="#icon-chevron-down-16"></use>
      </svg>
    </span>
    <div class="combobox__listbox">
      <div
        id="listbox-chips-combobox-1"
        class="combobox__options"
        role="listbox"
      >
        <div class="combobox__option" role="option">
          <span>Soccer</span>
        </div>
        <div class="combobox__option" role="option">
          <span>Hockey</span>
        </div>
        <div class="combobox__option" role="option">
          <span>Tennis</span>
        </div>
      </div>
    </div>
  </span>
</span>
```
