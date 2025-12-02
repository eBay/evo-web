# Layout Grid Accessibility

## Best Practices

The group of items/elements should be identified for screen readers. For lists that have an on-screen description text, it would look like this:

```html
<h3 id="my-buttons-list-title">My List of Buttons</h3>
<div class="layout-grid">
  <ul aria-labelledby="my-buttons-list-title">
    <li>
      <button class="btn btn--fluid">Button</button>
    </li>
    ...
  </ul>
</div>
```

For instances where on-screen text is not available, an `aria-label` would work as well.

```html
<div class="layout-grid">
  <ul aria-label="My list of button">
    <li>
      <button class="btn btn--fluid">Button</button>
    </li>
    ...
  </ul>
</div>
```

## Interaction Design

### Keyboard Interaction

There are no interactive sections in Layout Grid, so there are no keyboard interaction guidelines.
