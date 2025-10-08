# Pagination Accessibility

![SRP Pagination](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcEyewE6uvQC83Zlb%2Fpagination.png?generation=1548799252843163\&alt=media)

### Introduction

The pagination pattern allows a user to navigate back and forwards through a URL based dataset, or jump directly to any specific URL in that set.

The pattern is typically used for pagination of search results.

### Working Examples

You can take a look at the pagination pattern in action on our [examples site](http://ebay.github.io/mindpatterns/navigation/pagination/).

You can get an idea of the required markup structure by viewing our [bones project](https://github.com/ianmcburnie/bones#user-content-pagination).

You can see a fully-styled implementation by viewing our [eBay Skin](https://opensource.ebay.com/skin/component/pagination/) example.

### Terminology

* **Pagination**: the composite pattern as a _whole_, containing the items defined below
* **Previous**: Link that navigates to previous page of results
* **Next**: Link that navigates to next page of results
* **Items**: Links that navigate to exact page of results
* **Bookends**: Collective name for the previous and next links, as they 'bookend' the navigation items
* **Current Page**: The current resultset index, as reflected in the pagination UI
* **Client-Side Pagination**: Pagination links trigger page content updates via AJAX
* **Server-Side Pagination**: Pagination links trigger page content updates via full page reload

### Best Practices

Pagination may update the results immediately on the client via AJAX, or on the server via a full page reload. In both cases, the browser's URL will be updated to reflect the new, book-markable page of results.

Do not use buttons for URL based pagination. Because the URL is updated, and the browser history stack updated, a link is the correct tag to use.

Pagination **must** have a heading element. For example "Results Pagination". This heading can be hidden offscreen for sighted users.

Items **must** be marked up as a list of links (not buttons).

Bookends **must** be marked up as links (not buttons).

Bookend icons _should_ be created using SVG.

### Interaction Design

This section provides the pattern interaction design for keyboard, screen reader & pointing devices.

#### Keyboard

The bookend and item links **must** be keyboard focusable at all times (even when visually disabled).

If _Previous_ bookend has keyboard focus, pressing TAB key **must** move focus to first pagination link.

If pagination item has keyboard focus, pressing TAB key **must** move focus to next pagination item.

If last pagination item has keyboard focus, pressing TAB key **must** move focus to _Next_ bookend link.

For client-side pagination, keyboard focus **must** remain on the previous, next or item link after activation.

#### Screen Reader

Bookend link text **must** be announced (i.e. "Previous page" and "Next page").

_If_ bookend links are visually disabled, they **must** also be announced as disabled.

_If_ a pagination item is visually displayed as the _current_ page, it **must** also be announced as the current page.

For client-side pagination, the new page index **must** be announced after previous, next or item link activation.

### Developer Guide

Server-side pagination requires no JavaScript, pagination is simply a collection of links inside of a navigation landmark region.

JavaScript may be used to enhance this baseline behavior, so that the page renders the new result set _without_ a full page reload.

To quickly get an idea of the required markup, visit the [pagination bones](https://github.com/ianmcburnie/bones#user-content-pagination).

#### Content Layer (HTML)

We will step through the creation process for server-side pagination.

**Navigation Landmark**

We will house the pagination in a navigation landmark, with heading:

```markup
<nav class="pagination" role="navigation">
    <h2 class="clipped">Results Pagination</h2>
</nav>
```

The heading doesn't _have_ to go inside of the nav, it could be placed just before. Likewise there is no requirement that the heading be 'clipped' (hidden to sighted users) - but this is usually the case.

Navigation landmarks are even more useful when labelled. So let's go ahead and use the heading text as the label of the landmark:

```markup
<nav aria-labelledby="pagination-heading" class="pagination" role="navigation">
    <h2 class="clipped" id="pagination-heading">Results Pagination</h2>
</nav>
```

**Bookends**

Our previous and next links are going to 'bookend' the navigation items:

```markup
<nav aria-labelledby="pagination-heading" class="pagination" role="navigation">
    <h2 class="clipped" id="pagination-heading">Results Pagination</h2>
    <a aria-label="Previous Page" class="pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
       <svg aria-hidden="true">
            <use xlink:href="#svg-icon-chevron-light-left"></use>
        </svg>
    </a>
    <!-- navigation items will go here -->
    <a aria-label="Next Page" class="pagination__next" href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2">
        <svg aria-hidden="true">
            <use xlink:href="#svg-icon-chevron-right"></use>
        </svg>
    </a>
</nav>
```

**Pagination Items**

The pagination items are represented as a list of links:

```markup
<nav aria-labelledby="pagination-heading" class="pagination" role="navigation">
    <h2 class="clipped" id="pagination-heading">Results Pagination</h2>
    <a aria-label="Previous Page" class="pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
       <svg aria-hidden="true">
            <use xlink:href="#svg-icon-chevron-light-left"></use>
        </svg>
    </a>
    <ol class="pagination__list">
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars" class="pagination__item">1</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2" class="pagination__item">2</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=3" class="pagination__item">3</a>
        </li>
        ...
    </ol>
    <a aria-label="Next Page" class="pagination__next" href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2">
        <svg aria-hidden="true">
            <use xlink:href="#svg-icon-chevron-right"></use>
        </svg>
    </a>
</nav>
```

**State**

There are three aspects of state that must be reflected visually and semantically.

1. The state of the heading - the heading region can also be used to give a "quickview" of the current page (rather than having to traverse through the all the items to find out)
2. The state of the bookends - are we at the beginning or end of the resultset?
3. The state of the items - which item reflects the current page

**Heading State**

The heading can be used to let us quickly know which page we are currently on. This can be achieved by suffixing the header text:

```markup
<h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
```

**Bookend State**

Assuming that the current pagination index is 0 (i.e the first item in the result set), here is how the first bookend would be marked up:

```markup
<a aria-disabled="true" aria-label="Previous Page" class="pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
   <svg aria-hidden="true">
        <use xlink:href="#svg-icon-chevron-light-left"></use>
    </svg>
</a>
```

Because we typically 'grey-out' the first bookend in this state, the `aria-disabled` attribute has been added to convey this state semantically to assistive technology. We call this a partially disabled link and should only be used in case where two links (or buttons) bookend a list of items (e.g. in a carousel or pagination pattern)

**Item State**

And here is how the first item would be marked up:

```markup
<li>
    <a aria-current="page" href="http://www.ebay.com/sch/i.html?_nkw=guitars" class="pagination__item">1</a>
</li>
```

Again, this item would be typically styled visually to reflect its 'current item' status. The `aria-current` attribute allows us to do the same semantically for assistive technology.

**HTML Checkpoint**

At this point we now have a pagination control that works without CSS and JavaScript.

Here is a recap of the final HTML:

```markup
<nav aria-labelledby="pagination-heading" class="pagination" role="navigation">
    <h2 class="clipped" id="pagination-heading">Results Pagination - Page 1</h2>
    <a aria-disabled="true" aria-label="Previous Page" class="pagination__previous" href="http://www.ebay.com/sch/i.html?_nkw=guitars">
       <svg aria-hidden="true">
        <use xlink:href="#svg-icon-chevron-light-left"></use>
    </svg>
    </a>
    <ol class="pagination__list">
        <li>
            <a aria-current="page" href="http://www.ebay.com/sch/i.html?_nkw=guitars" class="pagination__item">1</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2" class="pagination__item">2</a>
        </li>
        <li>
            <a href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=3" class="pagination__item">3</a>
        </li>
        ...
    </ol>
    <a aria-label="Next Page" class="pagination__next" href="http://www.ebay.com/sch/i.html?_nkw=guitars&_pgn=2">
        <svg aria-hidden="true">
            <use xlink:href="#svg-icon-chevron-right"></use>
        </svg>
    </a>
</nav>
```

#### Presentation Layer (CSS)

There are no special considerations for accessibility when it comes to styling pagination. You should however try and make use of the `aria-current` and `aria-disabled` attribute hooks, rather than inventing classes.

#### Behaviour Layer (JavaScript)

Server-side pagination requires no JavaScript, it is simply a collection of links. Clicking any link reloads the entire page. This experience can be _enhanced_ with JavaScript, so that only the results portion of the screen is re-rendered.

**Client-Side Pagination**

It is outside the scope of this guide to write all of the JavaScript behaviour for a partial page update, but the snippet below gives a rough idea of the steps required.

```javascript
// get the links
var paginationLinks = document.querySelector('.pagination a');

// add click handler
paginationLinks.forEach(link => link.addEventListener('click', function(e) {
    // prevent link behaviour (i.e. window reload)
    e.preventDefault();

    // steps todo
    // 1. render new results
    // 2. push new url
    // 3. update heading text
}));
```

### ARIA Reference

This section gives an overview of our use of ARIA, within the specific context of this pattern.

#### role=navigation

Creates a navigation landmark for assistive technology.

#### role=img

Applied to bookend SVG tags to reinforce image semantics.

#### aria-labelledby

Use this property to label the navigation landmark with the text of the heading tag.

**aria-disabled**

Use this property on the bookend anchor to convey when it is "greyed-out"

**aria-label**

Use this property to label the bookend anchors.

#### aria-current

Refers to the current item in the pagination (i.e. the current dataset index).
