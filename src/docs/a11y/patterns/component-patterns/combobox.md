# Combobox Accessibility

![Select phone model item specifics](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcEF1Sjh9adTHwYti%2Fcombobox.png?generation=1548799252047216&alt=media)

### Introduction

A combobox serves the exact same _purpose_ as a textbox - allowing text to be input and submitted via a form. The combobox's main additional _feature_ is a listbox of suggestions that will update the textbox with the corresponding value when chosen.

A combobox typically also offers _autocomplete_ behavour - whereby the list of suggestions is filtered based on the current textbox value (i.e. while the user is typing in the textbox) .

### Configuration

- **autoSelect**: a combobox with `autoSelect` will automatically select and fill the textbox value when user cycles through listbox options. Otherwise, `ENTER` key is required to manually select an option. Typically autoSelect will be `true` for a combobox with autocomplete behaviour.

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

### ARIA Reference

This section gives an overview of ARIA usage, _within the context of this pattern_.

| Attribute         | Description                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **role=combobox** | This attribute changes the role of the text input from `textbox` to `combobox`. We recommend applying this attribute on the client-side with JavaScript. |
| **role=listbox**  | The list of suggestions has a role of listbox.                                                                                                           |
| **role=option**   | Each listbox item has a role of option.                                                                                                                  |
| **aria-owns**     | This property creates a programmatic hierarchy in the accessibility tree for the combobox and the listbox.                                               |
| **aria-expanded** | Conveys the expanded state of the combobox.                                                                                                              |
| **aria-label**    | Provides the expand/collapse button with an accessible label, in the case where it has no visible text (i.e. an icon button).                            |

### Further Reading

- [https://github.com/w3c/aria/wiki/Resolving-ARIA-1.1-Combobox-Issues](https://github.com/w3c/aria/wiki/Resolving-ARIA-1.1-Combobox-Issues)
