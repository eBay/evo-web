# Offscreen Text

Offscreen text (also known as "screen reader text", "visually-hidden text" or "clipped text") allows us to add additional context or helpful information about an element. This content is not visible on the screen; it is only visible to screen readers.

**NOTE**: `aria-label` can also achieve the same result as offscreen text in certain situations (e.g. on links and buttons).

Offscreen text helps in the following situations:

- [Link opens in new window or tab](https://ebay.gitbook.io/mindpatterns/techniques/offscreen-text#link-opens-in-new-window-or-tab)
- [Link text without nearby context](https://ebay.gitbook.io/mindpatterns/techniques/offscreen-text#link-text-without-nearby-context)
- [Ambiguous link text](https://ebay.gitbook.io/mindpatterns/techniques/offscreen-text#ambiguous-link-text)
- [Offscreen headings](https://ebay.gitbook.io/mindpatterns/techniques/offscreen-text#offscreen-headings)
- [Strikethrough price](https://ebay.gitbook.io/mindpatterns/techniques/offscreen-text#strikethrough-price)

All of the examples in this page make use of the `.clipped` class to create offscreen text.

```css
/* clip element visibility, making it accessible to screen reader only */
.clipped {
  border: 0 !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px !important;
  overflow: hidden;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
}
```

All scenarios also include an additional `aria-label` example.

**IMPORTANT**: When adding offscreen text to any kind of label (e.g. the inner text of a button, or the label of a textbox), aways _append_ it after the visible text. The same rule applies when using `aria-label` - always ensure the beginning of the `aria-label` matches the visual label.

### Link opens in new window or tab

Launching a new browser window can be a source of frustration for users of assistive technology. Offscreen text helps to set expectations in advance.

```html
<a href=”http://www.ebay.com/help” target=”_blank”>Help<span class=”clipped> - opens in new window or tab</span></a>
```

Usage of `aria-label` is also supported:

```
<a href=”http://www.ebay.com/help” target=”_blank” aria-label="Help - opens in new window or tab">Help</a>
```

### Link text without nearby context

A link whose context is difficult to find (e.g. no nearby text or heading), and can only be determined visually or with an unreasonable amount of manual effort. Offscreen text provides the context of the link in place.

```html
<a href="http://www.ebay.com"
  >Buy it Now<span class="”clipped”"> - iPhone 4</span></a
>
```

Usage of `aria-label` is also supported:

```
<a href="http://www.ebay.com" aria-label="Buy it Now - iPhone 4">Buy it Now</a>
```

### Ambiguous link text

Link text that is used and repeated many times on the same page, each with a different context and URL. Again, offscreen text provides the unique context of the link in place.&#x20;

```html
<a href="http://www.ebay.com/camera"
  >Shop Now<span class="”clipped”"> - Cameras</span></a
>
```

Additionally, when a screen reader displays the list of controls on the page, it is now possible to determine one from the other.

Again, we can use `aria-label` instead of clipped text, like so:

```
<a href="http://www.ebay.com/camera" aria-label="Shop Now - Cameras">Shop Now</a>
```

**NOTE**: The scenario presented is technically a WCAG AAA ("triple A") requirement.

### Offscreen headings

If the page design does not incorporate a visible heading for every section, the document heading structure can be compromised. In order to correct the structure, the headings can be provided offscreen.

```html
<h2 class="”clipped”">Search refinements</h2>
```

When do we provide offscreen headings? A good rule of thumb is that every _visually_ significant module or section of the page should have a heading.

#### Strikethrough price

The HTML `<s>` tag is often used to visually represent a sale price, or "strikethrough" price. Unfortunately, the semantics of this tag are not announced by most screen readers. This means that a user may have difficulty in comprehending the current price & sale price.

The easiest solution is for the design and content to provide this additional context for all users. In the screenshot below, the word "was" is added before the original price.

![Strikethrough price with visible prefix](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LrPkPTv0QmLAD6o_3ZD%2F-LrPmw-2fMKxt1qOab9N%2Fstrikethrough-price-visible.png?alt=media&token=1cfd418c-2567-47ba-a462-fd5d28e039a3)

If however, the design does not provide for this context (which is often the case for smaller, mobile screens), offscreen text is required.

```html
<span>$149.99</span>
<span>
  <span class="clipped">Was: </span>
  <s>$499.99</s>
</span>
```

![Strikethrough price without visible prefix](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LrPkPTv0QmLAD6o_3ZD%2F-LrPq2zBa46eXlVKaVBx%2Fstrikethrough-price-offscreen.png?alt=media&token=e0cf071c-b8a7-4742-aa79-358c4a2ce05c)
