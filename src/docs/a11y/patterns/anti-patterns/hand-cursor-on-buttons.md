# Hand Cursor on Buttons

A regular-shaped button does not have the weak affordance issues of text and graphic links. Buttons also do not have any special mouse operations on right-click. These factors explain why the HTML button element was not given any special mouse cursor; it has strong affordance of interactivity on hover and at rest and therefore uses the default system cursor (in the same way as checkbox, radio, details & select).

#### Affordance of Hover

The edges, or boundaries, of text links and graphics links are not well defined. With the default system pointer it can be unclear when the mouse cursor is registering with the hitbox of the element. The change in style of cursor increases affordance of the interactive hover state.

#### Affordance at Rest

The understanding of whether something is a button or not should not depend on the hover interaction, it should be discernible from the rest state. It shouldn't rely on user discovery or guesswork. Not all users are pointer device users so the principle should be easily translated to any screen.

#### Mouse Cursor Styling

Mouse cursor styling provides affordance of any non-default mouse operations available on an element (e.g. text selection, activating help or context menus, copying content, resizing tables).

### Fake Buttons

The elephant in the room is of course *links that are styled to look like buttons, aka fake buttons*. Our recommendation is to retain the elements *default* hand cursor - as it reveals the elements true behaviour and its additional functionality (e.g. right-click actions).

### Summary

* Buttons do not *need* a hand cursor
* All text and graphic links should have a hand cursor
* We recommend keeping the browser's default hand cursor on links that are styled to look like buttons

### Further Reading

* [Buttons Shouldn't Have a Hand Cursor](https://medium.com/simple-human/buttons-shouldnt-have-a-hand-cursor-b11e99ca374b)
* <https://learn.microsoft.com/en-us/windows/win32/uxguide/inter-mouse?redirectedfrom=MSDN#hand-pointers>
