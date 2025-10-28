# Lightbox Dialog Accessibility

## Best Practices

A lightbox-dialog is typically opened in one of two ways:

* **Click-activated**: explicitly opened and closed by clicking the button
* **System-activated**: automatically opened by the system/application on page load or at some other arbitrary time

Opening modal dialogs that are not requested by user (i.e. system-activated) are a violation of [WCAG Guideline 3.2.5 (Level AAA)](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F22) and therefore should be reserved for exceptional circumstances only.

Lightbox dialog **must not** be opened on hover or focus of button.

Lightbox dialog **must** be opened on click-event of button or via an application event.

Lightbox dialog **must** contain a dismiss button.

Lightbox dialog **must** contain at least one interactive element (this can be the dismiss button).

Lightbox dialog **must** be clearly labelled by an onscreen heading/title

Lightbox dialog **must** start heading hierarchy at level 2.

## Interaction Design

This section provides detailed instructions for how different input types should navigate and operate the pattern.

### Keyboard

If dialog button has focus, `ENTER` or `SPACE` key **must** open lightbox dialog.

When lightbox dialog opens, focus **must** move to the dismiss button.

Lightbox dialog **must** confine `TAB` and `SHIFT-TAB` to focusable elements of child window.

Pressing `ESC` key **must** close lightbox dialog (unless the currently focussed element has existing `ESC` key behaviour) with no changes applied (effectively acting as a "cancel").

Dialog button **must** receive focus when lightbox dialog is closed.

### Screen Reader

Dialog button **must not** announce 'has popup'. A dialog is not considered a popup (i.e `aria-haspopup="true"` is not valid in this context).

Focussed element *should* be announced when child window opens (via focus management).

Title **must** be announced when lightbox dialog opens.

Virtual cursor **must** be confined within child window.

Assistive technology *might* announce "Entering/leaving dialog" (or words to those affect) when focus enters or leaves the lightbox dialog respectively.

### Pointer

Clicking dialog button **must** open lightbox dialog.

Clicking mask **must** dismiss lightbox dialog with no changes applied (effectively acting as a "cancel").

## ARIA Reference

| Attribute            | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| **role=dialog**      | Informs the assistive technology that the user is inside of a dialog.                        |
| **aria-modal**       | Conveys that the dialog is modal                                                             |
| **aria-labelledby**  | Use onscreen text to name the dialog (typically an h2 heading element).                      |
| **aria-label**       | Explicitly name the dialog, if no suitable onscreen text exists.                             |
| **aria-hidden**      | While the dialog is in an open state, aria-hidden is used to hide all non-dialog elements from assistive technology. |
