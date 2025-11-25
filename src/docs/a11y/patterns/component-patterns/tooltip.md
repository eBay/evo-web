# Tooltip Accessibility

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FAUxUfQWvGgLNUfywpM8l%2FTooltip%20-%20Outlook.png?alt=media&#x26;token=5f1eaf23-b468-4708-a1b2-53646f196bf8" alt=""><figcaption><p>Tooltip for the italic button in Microsoft Outlook</p></figcaption></figure>

### Introduction

Tooltip is a hover and focus-activated [popover](https://ebay.gitbook.io/mindpatterns/disclosure/popover).

A tooltip describes the primary action of an interactive control. This content appears inside of an overlay when the control receives hover or focus.

In desktop software tooltips are most commonly used in relation to toolbar buttons (e.g. the trashcan icon in a mail app). Web tooltips are more commonly experienced in relation to links, buttons and form controls.

### Working Examples

You can take a look at the tooltip pattern in action on our [examples site](http://ebay.github.io/mindpatterns/disclosure/tooltip/).

### Terminology

We use the following terminology when discussing this pattern.

- **tooltip**: the composite pattern as a _whole_, containing a host and overlay
- **host**: the control that hosts the overlay
- **overlay**: the overlay that contains the tip
- **tip**: the content inside of the overlay

### Best Practices

First of all, the HTML title attribute is **not** an accessible tooltip. Read the [title tooltip anti-pattern](https://ebay.gitbook.io/mindpatterns/antipatterns/title-tooltip) for more details.

Secondly, the tooltip **must** describe the host element only. Do not create a host element (e.g. a button) purely for the sake of displaying an overlay. If that is your wish, consider the [Infotip](https://ebay.gitbook.io/mindpatterns/disclosure/infotip) pattern instead.

Tooltip **must not** be applied to static elements. See the [non-interactive hover](https://ebay.gitbook.io/mindpatterns/antipatterns/non-interactive-hover) anti-pattern.

Tooltip **must not** use the `aria-haspopup` attribute. Tooltips are not considered 'popups' in this context.

Tooltip _should not_ be more than one sentence. Consider using the [Infotip](https://ebay.gitbook.io/mindpatterns/disclosure/infotip) pattern for longer content.

Tooltip _should_ follow the principal of [progressive disclosure](http://en.wikipedia.org/wiki/Progressive_disclosure) - revealing the right information, at the right time.

_If_ the tooltip conveys crucial information, overlay content _should_ be visible in a no-JavaScript state (i.e. use progressive enhancement).

### Interaction Design

This section provides the pattern interaction design for keyboard, screen reader, mouse & touch.

#### Keyboard

Host **must** be keyboard focusable.

Overlay **must** appear after short delay when host receives focus.

Keyboard focus order **must** move from host to first focusable control in overlay.

Overlay **must** disappear when focus leaves popover or when \`ESC key is pressed.

Focus _should not_ move to overlay element itself, only its focusable children.

#### Screenreader

Assistive technology that supports tooltip role will announce the overlay content after a short delay. This delay is configurable in most screen readers.

Reading order **must** flow directly from host into overlay.

#### Mouse

Overlay **must** appear after short delay whenever host receives mouseover.

Overlay **must** disappear when neither the host or overlay have mouseover.

#### Touch

Many touch devices do not support hover interactions!

You _should_ consider using the click-activated [Bubble Help](https://ebay.gitbook.io/mindpatterns/disclosure/infotip) pattern instead.

### Developer Guide 1 - Progressive Enhancement

Our first guide follows the [Progressive Enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) strategy. Building in a layered fashion allows **everyone** to access the basic content and functionality of a web page.

The three layers are:

1. Content (HTML)
2. Presentation (CSS)
3. Behaviour (JS)

The tooltip content is fully visible and accessible without CSS and JavaScript.

#### Content (HTML)

The goal of our content layer is to add helpful, advisory content (our "tip") to an existing page control.

**Identify Element**

First we identify the host that requires a tooltip We will use the "Add to Cart" submit button in a form.

```html
<form>
  <input type="submit" value="Add to Cart" />
</form>
```

This button is a form submit button and does not require client-side script to operate. The request can be processed by the server.

**Add Content**

We place our content element directly after the submit button.

```html
<form>
  <input type="submit" value="Add to Cart" />
  <span
    >Your cart contains
    <a href="http://cart.payments.ebay.com/sc/view">6 items</a></span
  >
</form>
```

The content sits in a new span element which will later act as the overlay.

Notice that our tooltip content contains a nested hyperlink. We must also ensure that any content _inside_ of the overlay is accessible too.

**The Tooltip Role**

ARIA defines a [tooltip role](https://www.w3.org/TR/wai-aria-1.1/#tooltip). We add this role not to the host, but the element hosting the content.

```html
<form>
  <input type="submit" value="Add to Cart" aria-describedby="tooltip1" />
  <span id="tooltip1" role="tooltip"
    >Your cart contains
    <a href="http://cart.payments.ebay.com/sc/view">6 items</a></span
  >
</form>
```

The span element now has `role=tooltip` and a unique `id`. The unique ID is essential so that the button can reference the tooltip in its `aria-describedby` attribute.

**Widget Root**

We wrap our host and overlay elements together in a new parent element to form the root element for our tooltip widget:

```html
<form>
  <span class="tooltip">
    <input type="submit" value="Add to Cart" aria-describedby="tooltip1" />
    <span id="tooltip1" role="tooltip"
      >(Your cart contains
      <a href="http://cart.payments.ebay.com/sc/view">6 items</a>)</span
    >
  </span>
</form>
```

We give our widget a class of 'tooltip'; our hook for CSS and JavaScript.

**Checkpoint**

Our markup is now complete. The button, its hint content and the link inside of the hint content are all functional and accessible.

#### Presentation (CSS)

We _could_ use pure CSS and display the hint using the `:hover` and `:focus` pseudo selectors. However, we would soon run into accessibility issues. When keyboard users tab away from the button, the tooltip overlay would disappear. This behaviour prevents focus on any links _inside_ of the tooltip overlay. We **need** to use JavaScript to prevent this behaviour.

**Positioning**

To be able to position the overlay with JavaScript, we set either absolute or fixed positioning:

```css
.tooltip--js [role="tooltip"] {
  display: none;
  position: absolute;
  white-space: nowrap;
  z-index: 1;
}
```

Notice we are using the `tooltip--js` selector. JavaScript can add this modifier class when the widget has fully initialised. Our tooltip isn't hidden _until_ that time. This ensures that the tooltip content is readable and accessible without JavaScript.

**Checkpoint**

Our presentation is now complete. At this point, the content remains fully visible and accessible.

#### Behaviour (JS)

The goal of our JavaScript layer is control the visibility of the tooltip content.

**Visibility**

The overlay must be visible only while mouse remains hovered over the host element, or while keyboard focus remains on the element.

Fortunately, the [makeup-expander](https://github.com/makeup-js/makeup-expander) module handles this behaviour for us in just a few lines of code.

```javascript
this.expander = new Expander(widgetEl, {
  autoCollapse: true,
  contentSelector: ".tooltip__content",
  hostSelector: ".tooltip__host",
  expandOnFocus: true,
  expandOnHover: true,
});
```

Also don't forget to add a keyboard event handler for the ESC key. This event should dismiss the tooltip overlay.

This pattern lays the foundation for creating an accessible tooltip.

### Developer Guide 2

Our second developer guide focuses on a _non_-progressive enhancement scenario.

This is actually a common scenario for most button-based tooltips. Often the tooltip content relates to a behaviour or action performed by a button. For example, toolbar buttons on an inline HTML editor. Without JavaScript, the button is non-operable and so the tooltip is redundant.

Developer guide coming soon, in the meantime please read the progressive enhancement guide.

### FAQ

#### What is the difference between Infotip Button and Tooltip?

A tooltip provides a tip about the _primary_ action of an interactive element (typically a button). For example, the trashcan icon button in your mail application. The tooltip can be thought of as the _secondary_ action of the button. It is always triggered by focus and hover.

An [infotip button](https://ebay.gitbook.io/mindpatterns/disclosure/infotip) provides a tip about a nearby static element or content. It is always triggered by click.

#### This is different to the way Bootstrap Tooltip works. Why?

The fundamental difference is that the [Bootstrap Tooltip](http://getbootstrap.com/javascript/#tooltips) get it's content from the title attribute, whereas the pattern presented here gets it's content from an element's innerHTML. This allows us to more easily place HTML such as hyperlinks inside of our tooltips and, unlike Bootstrap, the tooltip content will be fully accessible _without_ JavaScript.

#### Why do we need JavaScript at all? Can't we do a tooltip with just CSS?

A pure CSS solution only gets us so far, it could not cover the following situations:

- Delay before showing overlay
- Keyboard focus management
- Overlay re-positioning logic when scrolling or near edge of screen

### Utilities

- [makeup-expander](https://github.com/makeup/makeup-js/tree/master/packages/core/makeup-expander): creates the basic accessibility for an element that expands and collapses another element (e.g. a popover).
