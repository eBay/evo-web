# Layout Grid Accessibility

A generic responsive layout grid for repeating UI elements in a container. These could be purely visual elements or interactive. This component will lay out repeating elements based on internal rules per device viewport breakpoint.

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FDLGblecoSLFqet2K2SiI%2Fimage.png?alt=media&#x26;token=af31d6a8-8ffc-4a84-b4e1-b5b36a6d580b" alt=""><figcaption><p>A Layout Grid implementation with a set of buttons.</p></figcaption></figure>

### Developer Guide <a href="#developer-guide" id="developer-guide"></a>

Layout Grid is a grouping of a list of items/elements, typically of the same type. In this example, we're using a set of buttons:

```html
<div class="layout-grid">
  <ul aria-label="My list of button">
    <li>
      <button class="btn btn--fluid">Button</button>
    </li>
    <li>
      <button class="btn btn--fluid">Button</button>
    </li>
    <li>
      <button class="btn btn--fluid">Button</button>
    </li>
    <li>
      <button class="btn btn--fluid">Button</button>
    </li>
    <li>
      <button class="btn btn--fluid">Button</button>
    </li>
    ...
  </ul>
</div>
```

### Accessibility

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

### Keyboard Interaction

There are no interactive sections in Layout Grid, so there are no keyboard interaction guidelines.
