# Switch Accessibility

![Refinement Switch](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcFbkVKWbNaSkVhq1%2Fswitch.png?generation=1548799253302997&alt=media)

### Introduction

A switch typically executes JavaScript on the client when toggled rather than storing form data to be sent to the server. If you require the switch to store data inside of a form, you may wish to consider using an actual checkbox instead.

### Best Practices

Individual switch **must** have a visible, onscreen label.

Groups of _related_ switch controls **must** have a group label.

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

Switch **must** be keyboard focusable (unless disabled).

If switch has keyboard focus, pressing SPACEBAR **must** toggle the checked state.

If switch has keyboard focus, pressing ENTER key toggle the checked state (optional).

If switch has keyboard focus, pressing TAB key or SHIFT-TAB key combo moves keyboard focus to next or previous interactive element on page respectively.

#### Screen Reader

Switch **must** be reachable with screen reader (even when disabled).

Switch **must** be announced as "switch".

Switch label **must** be announced.

Switch group label, if applicable, **must** be announced.

Switch state **must** be announced.

#### Pointer

Clicking switch **must** toggle the checked state.

Clicking switch label **must** toggle the checked state.

### ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of the switch pattern.

| Attribute        | Description                                           |
| ---------------- | ----------------------------------------------------- |
| **role=switch**  | Informs AT that this control has switch behavior.     |
| **aria-checked** | Informs AT the current "checked" state of the switch. |
