# Keyboard Interface

### **Tab sequence**

The TAB and SHIFT+TAB keys move focus from one user interface control to another. The path that the focus follows is known as the tab sequence.

### **Composite widgets**

Some controls themselves contain nested interactive items, only reachable with the ARROW keys. These composite, widget-like controls will have one of two interface types:

| Roving Tabindex                                                                                                                                                   | Active Descendant                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p>Only one item at a given time exists in the page’s tab sequence.</p><p>The arrow keys move this status (and focus) from one item to the next when pressed.</p> | <p>Only the parent/owner is in the page’s tab sequence. </p><p>The arrow keys move pseudo-focus from one child to the next; the parent/owner retains the real keyboard focus.</p> |
| Examples: menu, radio group, tablist.                                                                                                                             | Examples: combobox, listbox.                                                                                                                                                      |

### **Action keys**

Most interactive elements are actioned using the ENTER and/or SPACEBAR keys (e.g. ENTER key activates a link).

### **Escape key**

The ESC key offers a shortcut to cancel, clear or close some step (e.g. ESC key will close a dialog).

### **Scroll keys**

These keys can control the scroll position of the current scrollable region, they are: Left Arrow, Right Arrow, Up Arrow, Down Arrow, Spacebar, Page Up, Page Down, Home & End.

### Keyboard focus indicator

Interactive elements must have a focus indicator that is visible and distinguishable from the background.

\
\
