# Background Icon Accessibility

**NOTE**: we strongly encourage the use of the SVG tag over this background icon technique.

Background icons are placed in their own element. Whilst they can be placed in pseudo content (i.e. `::before` and `::after`) having its own element allows us the the ability to apply ARIA attributes to the icon.

All background icons will either be deemed critical or non-critical.

### Non-Critical Background Icons

An icon is deemed non-critical if it is purely presentational, or if the information can be found in nearby or adjacent text.

```markup
<p>
  <span class=”icon icon--warning”></span>
  <span>Warning: this item is about to expire</span>
</p>
```

The adjacent text clearly contains the word "Warning" and so the icon does not need to be discoverable for screen readers.

### Critical Background Icons

Critical icons are icons with no supplementary text.

```markup
<span class=”icon icon--hamburger” role="img" aria-label="Options"></span>
```

An aria-label is required to convey the meaning of the icon.

Critical icons are most common in buttons:

```markup
<button class=”hamburger” aria-label=”Options”>
  <span class=”icon icon--hamburger”></span>
</button>
```

Note that this time the label is added to the button instead of the icon element.
