# Mouse Hover on Static Elements

Do not add mouse hover behaviour to static text and icons. The behaviour will not be fully accessible to keyboard and screen reader users.

To "workaround" this issue, a common mistake is for a developer to add tabindex="0" to the static element in order to make it "keyboard accessible"; however the problem is that static elements have no implicit role that programmatically connects the element to the additional content or behaviour.

The classic example is misuse of the tooltip pattern. Tooltips are used to provide information about *interactive* elements (such as buttons) - yet we often see designs that try to apply them to static text and icons.

**See also**: [Tabindex-itis](https://ebay.gitbook.io/mindpatterns/antipatterns/tabindexitis)
