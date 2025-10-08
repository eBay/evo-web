# Active Descendant

Active descendant is a technique whereby keyboard focus remains on an element (usually a textbox) but has the _appearance_ of moving elsewhere when using the arrow keys. This technique is useful so that users can continue to input text, whilst also controlling another element (usually a grid or listbox).

Compare this to a [roving tabindex](roving-tabindex) technique, where focus is explicitly moved to a new element each time an ARROW key is pressed.

Patterns that utilize the active descendant technique are: grid, [combobox](https://github.com/ebay/mindpatterns/tree/6c14ac7802634b97b44038d80935b912adbcd5cf/input/combobox/README.md) and [autocomplete](https://github.com/ebay/mindpatterns/tree/6c14ac7802634b97b44038d80935b912adbcd5cf/input/autocomplete/README.md).

### Code Example

Todo

### Utilities

We provide two useful JavaScript utilities for initiating active-descendant navigation on a collection of elements:

* [jquery-active-descendant](https://github.com/makeup-jquery/jquery-active-descendant)
* [makeup-active-descendant](https://github.com/makeup-js/makeup-active-descendant)
