# Breadcrumbs Accessibility

![Screenshot depicting breadcrumb hierarchy on eCommerce site.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcGwP7tzUxDOIQG1F%2Fbreadcrumbs.png?generation=1548799255109842\&alt=media)

### Introduction

Breadcrumbs are a navigational landmark that let the user discover their current position in the site hierarchy and provide a means to navigate upwards through that hierarchy.

The term 'breadcrumbs' comes from the trail of breadcrumbs left by Hansel and Gretel in the popular fairytale.

### Working Examples

Experience the breadcrumbs pattern in action on our companion [eBay MIND patterns examples website](http://ebay.github.io/mindpatterns/navigation/breadcrumbs/).

Examine the required markup structure in our [Bones GitHub project](https://github.com/ianmcburnie/bones#user-content-breadcrumbs).

View a fully styled example on our [eBay Skin website](https://opensource.ebay.com/skin/component/breadcrumbs/).

### Terminology

* **breadcrumbs** the pattern as a whole, comprised of the following sub-parts
* **breadcrumb item**: a link
* **separator**: the graphical symbol that separates each breadcrumb

### Best Practices

Breadcrumbs are typically used as secondary navigation on sites that are organized in a hierarchical manner.

An SVG symbol is used to separate each breadcrumb link.

The last breadcrumb link, representing the current place in the hierarchy, is non-interactive.

Breadcrumbs **must** have a heading of 'You are here', or words to those effect. This heading can be visually hidden offscreen.

### Interaction Design

Breadcrumb interaction is similar to a simple list of ordered links.

#### Keyboard

TAB key moves from breadcrumb to breadcrumb.

Separator symbols **must not** be keyboard focusable.

The last breadcrumb lacks an `href` value and therefore is omitted from the tab order.

#### Screen Reader

The screen reader will recognize the breadcrumbs as a navigation landmark.

Each breadcrumb will be announced as 'link', followed by the link text.

The screen reader should ignore each separator icon.

### Developer Guide

Breadcrumbs require no JavaScript, they are simply an ordered list of links & icons inside of a navigation landmark region.

```markup
<nav aria-labelledby="breadcrumbs_heading" class="breadcrumbs" role="navigation">
    <h2 class="clipped" id="breadcrumbs_heading">You are here</h2>
    <ol>
        <li>
            <a href="http://www.ebay.com">Home</a>
            <svg focusable="false" height="10" width="10">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="http://www.ebay.com">Clothing, Shoes &amp; Accessories</a>
            <svg focusable="false" height="10" width="10">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a href="http://www.ebay.com">Men's Shoes</a>
            <svg focusable="false" height="10" width="10">
                <use xlink:href="#icon-breadcrumb"></use>
            </svg>
        </li>
        <li>
            <a aria-current="location">Boots</a>
        </li>
    </ol>
</nav>
```

The heading ('You are here') is typically hidden offscreen using the [.clipped](../appendix/utils) class.

While, the separator icon can be generated with CSS, we find that inline SVG offers a more accessible and flexible approach.

### ARIA Reference

* **aria-current="location"**: provides AT with programmatic state on the breadcrumb that reflects the current site location.
* **role=navigation**: creates a navigational landmark for AT.

