# Tabs Accessibility

![Shipping option tabs](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcFky70O5U8j-JXcn%2Ftabs.png?generation=1548799253367065&alt=media)

### Introduction

A tab is a control that allows the user to select and display a single panel of content from a group of choices. By decluttering the user-interface in this way, we say that tabs follow the principal of progressive disclosure.

Selecting a tab should update the visible panel without a full page reload. If a full page load is required instead (i.e. acting like a link), please see the [fake tabs](https://ebay.gitbook.io/mindpatterns/navigation/fake-tabs) section below for more details.

### Working Examples

Experience the tab pattern in action on our [examples site](http://ebay.github.io/mindpatterns/disclosure/tabs/).

Examine the required markup structure by viewing our [bones site](https://github.com/ianmcburnie/bones#user-content-tabs).

View a fully-style example on our [eBay Skin](https://opensource.ebay.com/skin/component/tabs/) site.

### Terminology

- **tabs**: the composite patterns as a whole, containing a tablist, tabs and tabpanels
- **tabs heading**: the heading that immediately precedes the tabs widget
- **tab list**: contains two or more tabs
- **tab**: a type of button that displays it's associated tabpanel
- **selected tab**: the currently selected tab
- **tab panel**: contains the content related to the tab
- **tab heading**: the offscreen heading that maintains correct heading structure

### Configuration

- **autoSelect**: for keyboard users, tab selection can either follow keyboard focus (known as auto selection), or require an additional `ENTER` or `SPACEBAR` press to set selection (known as manual selection).

### Best Practices

Tab list **must** be preceded by a heading. All tabs **must** be thematically related to this heading. For example, a set of 'Shipping Services' tabs might contain a tab each for USPS, FedEx and UPS.

To maintain correct heading structure, tab panels **should** contain an [offscreen](https://ebay.gitbook.io/mindpatterns/techniques/offscreen-text) heading. The level of this panel heading **must** be exactly one level lower than the heading preceding the tablist. The heading text must match the corresponding tab text.&#x20;

Tab list **must** have exactly one selected tab.

If all tab panel content is rendered on page load, tabs should be configured with `autoSelect` enabled.

If all tab panel content is rendered lazily on client (i.e. using AJAX call), tabs should be configured with `autoSelect` turned off.

### Interaction Design

This section provides guidance for keyboard, screen reader and pointing devices.

#### Keyboard

Only one tab can be keyboard focusable at any time. This is known as a [roving tab index](https://ebay.gitbook.io/mindpatterns/techniques/roving-tabindex).

For tabs with `autoSelect` enabled, `ARROW` keys move keyboard focus to next/previous tab and also select that tab (i.e. `aria-selected="true"`).

For tabs without `autoSelect` enabled, `ARROW` keys move keyboard focus to next/previous tab, but `ENTER` or `SPACEBAR` key is required to set the tab to a selected state.

If tab panel contains focusable element(s), `TAB` key on selected tab **must** move focus to first focusable element in tab panel.

If tab panel does not contain focusable element(s), `TAB` key on selected tab **must** move focus to next focusable element on page.

#### Screen Reader

Tab **must** be announce as "Tab".

Tab label **must** be announced, for example "Select Shipping for me".

Tab selected state **must** be announced.

Virtual cursor navigation can move from tab to tab _without_ changing the active tab selection.

### Developer Guide

Our first example implementation will create a tabs widget with `autoSelect` configuration enabled. All of the tab panel content will be rendered to the DOM on server side load.

The sample follows the [Progressive Enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) strategy; we build in a layered fashion that allows **everyone** to access the basic content and functionality of a web page.

The three layers are:

1. Content (HTML)
2. Presentation (CSS)
3. Behaviour (JS)

The tabs and their related content elements can be fully visible and accessible without CSS and JavaScript as simple hyperlinks and page anchors respectively.

For a tabs widget where content is not rendered on first server side load, using this progressive enhancement type approach is not as applicable.

#### Content (HTML)

The goal of our content layer is to add all of our tabs and their respective panel content to the page.

For the purposes of this example, all panel content will be rendered server-side. You may wish to consider lazy-loading the content of each panel with AJAX. If you do utilise lazy-loading, be aware that your content will not be available in a non-JavaScript scenario.

**Links**

The tabs begin life as simple same-page navigation links, linking to the content anchors (panels) below it on the same page:

```html
<div class="tabs tabs--horizontal">
  <h2>My eBay</h2>
  <ul class="tabs__items">
    <li class="tabs__item"><a href="#buying">Buying</a></li>
    <li class="tabs__item"><a href="#bought">Bought</a></li>
    <li class="tabs__item"><a href="#selling">Selling</a></li>
    <li class="tabs__item"><a href="#sold">Sold</a></li>
  </ul>
  <div class="tabs__content">
    <div class="tabs__panel" id="buying" tabindex="-1">
      <h3>...</h3>
      <p>...</p>
    </div>
    <div class="tabs__panel" id="bought" tabindex="-1">
      <h3>...</h3>
      <p>...</p>
    </div>
    <div class="tabs__panel" id="selling" tabindex="-1">
      <h3>...</h3>
      <p>...</p>
    </div>
    <div class="tabs__panel" id="sold" tabindex="-1">
      <h3>...</h3>
      <p>...</p>
    </div>
  </div>
</div>
```

We call this markup structure our [bones](https://github.corp.ebay.com/f2e/bones); our CSS and JavaScript will be expecting this **exact** DOM structure convention.

This structure has been chosen carefully. It allows us to display tabs horizontally _and_ vertically simply by changing the second class (to tabs--horizontal or tabs--vertical).

**NOTE:** we have found that in some browsers, activating a same page link will only _scroll_ the browser to the target, but the focus is left behind on the link. Adding tabindex="-1" also helps move and set focus on the target element.

**Checkpoint**

That's it! Our content is available and accessible to anyone in a non-CSS and non-JS state.

#### Presentation (CSS)

The goal of our presentation layer is to style the links to look like folder style tabs.

How you choose to style the links is outside the scope of this document, because every website likes to make their tabs look slightly different!

**Flash of Unstyled Content (FOUC)**

[FOUC](http://en.wikipedia.org/wiki/Flash_of_unstyled_content) may occur before JavaScript initialises the widget, i.e. all panel content may be visible briefly. One way to alleviate this is to set a fixed height on the tab panel container:

```css
/* before js init */
.tabs__content {
  height: 150px;
  overflow-y: auto;
}
/* after js init */
.tabs--js .tabs__content {
  height: auto;
}
```

We have chosen an arbitrary value of 150px for our example. After our JavaScript initialises the widget, it's height will grow or shrink to match the content of the currently selected panel. Of course if fixed height is what you desire, then you can leave the fixed value in place.

**Checkpoint**

Our tabs now appear visually like tabs, and the panel content is still fully operable without JavaScript (albeit with ugly vertical scrollbars).

#### Behaviour (JS)

The goal of our JavaScript is to implement our interaction design.

**Plugin Boilerplate**

We start by caching references to our most important elements:

{% code title="tabs.js" %}

```javascript
module.exports = class {
  constructor(widgetEl) {
    this._el = widgetEl;

    const tabList = this._el.querySelector(".tabs__items", this._el);
    const tabs = Util.querySelectorAllToArray(".tabs__item", this._el);
    const panels = Util.querySelectorAllToArray(".tabs__panel", this._el);
    const links = Util.querySelectorAllToArray("a", tabList);
  }
};
```

{% endcode %}

Our selectors are based on our [bones markup convention](https://github.corp.ebay.com/f2e/bones).

**ARIA Roles**

How does a screen reader know this is a tabs widget? We must add ARIA roles to the tab list, tabs, and panels.

{% code title="tabs.js" %}

```javascript
tabList.setAttribute("role", "tablist");
tabs.forEach((el) => el.setAttribute("role", "tab"));
panels.forEach((el) => el.setAttribute("role", "tabpanel"));
```

{% endcode %}

**Remove Link Behaviour**

We currently have links nested inside of our tab elements. To avoid conflicts with our tabs we must remove any semantics and behaviour, effectively turning them into `span` tags.

{% code title="tabs.js" %}

```javascript
function removeLink(el) {
  el.setAttribute("role", "presentation");
  el.removeAttribute("href");
}
```

{% endcode %}

**ARIA States**

How does a screen reader know which tab is currently selected and which panel is visible? We must add `aria-selected` and `hidden` states.

{% code title="tabs.js" %}

```javascript
let initialIndex = this._options.initialIndex;

tabs[initialIndex].setAttribute("aria-selected", "true");

// hide all unselected panels
panels
  .filter((el, i) => i !== initialIndex)
  .forEach((el) => (el.hidden = true));
```

{% endcode %}

**ARIA Properties**

How does a screen reader know which panel belongs to which tab, and the label of each panel? We must add `aria-controls` and `aria-labelledby` properties.

{% code title="tabs.js" %}

```javascript
function linkTabToPanel(widgetID, el, i) {
  el.setAttribute("id", widgetID + "-tab-" + i);
  el.setAttribute("aria-controls", widgetID + "-panel-" + i);
}

function linkPanelToTab(widgetID, el, i) {
  el.setAttribute("id", widgetID + "-panel-" + i);
  el.setAttribute("aria-labelledby", widgetID + "-tab-" + i);
}
```

{% endcode %}

**Roving Tabindex**

If there are many tabs it would require many `TAB` key presses to navigate past the widget, therefore tabs should be navigated with `ARROW` keys instead.

Only one tab can be focussable at any given time. This is always the "selected" tab. When a user tabs away from the widget and then back again, focus will return to this "selected" tab.

This behaviour is known as a [roving tabindex](http://www.w3.org/TR/wai-aria-practices/#kbd_general_within). We provide a sample [makeup-roving-tabindex](https://github.com/makeup-js/makeup-roving-tabindex) module for you to reference.

**State Management**

When the roving tabindex changes, we must update the `aria-selected` and `hidden` states.

{% code title="tabs.js" %}

```javascript
this._el.addEventListener("rovingTabindexChange", function (e) {
  tabs[e.detail.fromIndex].setAttribute("aria-selected", "false");
  panels[e.detail.fromIndex].hidden = true;

  tabs[e.detail.toIndex].setAttribute("aria-selected", "true");
  panels[e.detail.toIndex].hidden = false;
});
```

{% endcode %}

**Prevent Page Scroll**

When the selected tab has focus, we must prevent arrow keys and spacebar from scrolling the page. We provide another module, [makeup-prevent-scroll-keys](https://github.com/makeup-js/makeup-prevent-scroll-keys), to make this trivial.

{% code title="tabs.js" %}

```javascript
const ScrollKeyPreventer = require("makeup-prevent-scroll-keys");

ScrollKeyPreventer.add(tabList);
```

{% endcode %}

**Widget Init**

Finally we can mark our widget as initialised. Now our CSS rules for our progressively enhanced widget will kick in.

{% code title="tabs.js" %}

```javascript
this._el.classList.add("tabs--js");
```

{% endcode %}

**Final Checkpoint**

We have enhanced our markup with ARIA roles, states and properties for screen reader users, and implemented keyboard behaviour.

### Utilities

We have some experimental JavaScript modules that may assist you with creation of an accessible tabs widget:

- [makeup-roving-tabindex](https://github.com/makeup-js/makeup-roving-tabindex) - Useful for implementing the arrow key behaviour to change tabs
- [makeup-prevent-scroll-keys](https://github.com/makeup-js/makeup-prevent-scroll-keys) - Useful for preventing keys from scrolling page while focus is on a widget

### References

- [WAI-ARIA Authoring Practices 1.1: Tabs](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel)
