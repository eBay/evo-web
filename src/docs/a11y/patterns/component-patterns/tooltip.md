# Tooltip Accessibility

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FAUxUfQWvGgLNUfywpM8l%2FTooltip%20-%20Outlook.png?alt=media&#x26;token=5f1eaf23-b468-4708-a1b2-53646f196bf8" alt=""><figcaption><p>Tooltip for the italic button in Microsoft Outlook</p></figcaption></figure>

### Introduction

Tooltip is a hover and focus-activated [popover](https://ebay.gitbook.io/mindpatterns/disclosure/popover).

A tooltip describes the primary action of an interactive control. This content appears inside of an overlay when the control receives hover or focus.

In desktop software tooltips are most commonly used in relation to toolbar buttons (e.g. the trashcan icon in a mail app). Web tooltips are more commonly experienced in relation to links, buttons and form controls.

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
