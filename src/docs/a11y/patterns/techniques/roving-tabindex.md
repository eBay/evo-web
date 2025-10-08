# Roving Tabindex

A roving tab index is a technique whereby only one collection element is in the sequential tab order and can have focus at any given time (i.e. has a tabindex value of zero). All other elements have a negative tabindex. We can say the collection is now more widget-like, as it takes one TAB key press to enter the widget, and one TAB key press to exit the widget. A user changes the roving tabindex state and focus by using the ARROW keys.

Compare this to [active-descendant](active-descendant) based navigation where focus always remains on one element (usually a textbox), but has the _appearance_ of moving elsewhere when using the arrow keys.

Patterns that utilize a roving tab index are: grid, [menu](https://github.com/ebay/mindpatterns/tree/6c14ac7802634b97b44038d80935b912adbcd5cf/input/menu/README.md) and [tabs](https://github.com/ebay/mindpatterns/tree/6c14ac7802634b97b44038d80935b912adbcd5cf/disclosure/tabs/README.md).

### Code Example

Todo

### Utilities

* [makeup-roving-tabindex](https://github.com/makeup/makeup-js/tree/master/packages/makeup-roving-tabindex)
