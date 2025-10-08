# Toggle Button Accessibility

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FAd2nYjEFKoAAJQViTAwB%2Fimage.png?alt=media&#x26;token=ebf249ce-9cb3-42c9-b2cb-fc4a8738d553" alt="Icon button highlighted without visual text "><figcaption><p>Icon button without visual text</p></figcaption></figure>

### Introduction

A toggle button is a special type of button that conveys a pressed or non-pressed state; this state may be conveyed programmatically via the [aria-pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) attribute _or_ via visible text alone.

### Working Examples

Working examples will be added soon.

### Best Practices

The toggle button **must** be a button (i.e. not a link) when using aria-pressed.

If the state is conveyed via visible text, a link can be used (resulting in a full page reload).

The toggle button **must** have only two states (whether conveyed via aria-pressed or text).

The toggle button that uses visible text to convey state change **must** **not** also use aria-pressed.

### Interaction Design

#### Keyboard

If button has focus, SPACEBAR and ENTER keys should toggle button.&#x20;

If button has focus, TAB and SHIFT-TAB keys should move to the next or previous focusable page element respectively.

### Developer Guide 1

A classic example of a toggle button is an "add to watchlist" button (as seen in the screenshot above), often conveyed with a heart icon that changes between a filled and unfilled visual state.

Adding `aria-pressed` attribute communicates the current state of the toggle button to assistive technology.

```html
// when the button is not pressed
<button type="button" aria-label="Watch - Apple iPhone 11" aria-pressed=“false”>
    <!-- svg icon goes here -->
</button>

// when the button is pressed
<button type="button" aria-label="Watch - Apple iPhone 11" aria-pressed=“true”>
    <!-- svg icon goes here -->
</button>
```

### Developer Guide 2

Remember, if a button state is conveyed via its button text, **do not** use aria-pressed.&#x20;

The screenshot below shows a toggle button with a state that is conveyed via the button text (i.e. "Watch" and "Watching").

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FrKIHRQsROtM6b71q9l4h%2Fimage.png?alt=media&#x26;token=16e3d63e-ac9c-43e9-a5c0-0b4ae19e832a" alt="Standard button with visual text - Watching"><figcaption><p>Standard button with visual text</p></figcaption></figure>

```
// when the button is "not pressed"
<button type="button">
    <!-- svg icon goes here -->
    Watch
</button>

// when the button is "pressed"
<button type="button">
    <!-- svg icon goes here -->
    Watching
</button>
```

### ARIA Reference

**aria-pressed**

Informs AT the current "pressed" state of a toggle button.
