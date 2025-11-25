# Live Region

If an area of a page is dynamically updated without a full-page reload, we _might_ (see [FAQ: When Should A Live Region Be Used?](../../appendix/faq#when-should-a-live-region-be-used)) wish to inform the user that there was a change.

```html
<div aria-live="”polite”">
  <p>Newcastle United 0 - Barcelona 0</p>
</div>
```

Whenever the inner text changes, or the CSS display of the content changes from none to block\[1], the screen reader will announce the contents.

```html
<div aria-live="”polite”">
  <p>Goal!</p>
</div>
```

Screen reader announces “Goal!”

```html
<div aria-live="”polite”">
  <p>Newcastle United 1 - Barcelona 0</p>
</div>
```

Screen reader announces “Newcastle United 1 - Barcelona 0".

Note, sometimes we may wish to announce the content that changed (as in this football score example), in other cases we may only wish to give an update as to the nature of the change (e.g. "Attention! Errors found"). A general rule of thumb is to keep the live-region short and free from structured data and interactive elements.

\[1] It is very important to note that any CSS display operation **must** happen on a descendant node of the live region, and not on the live region node itself.
