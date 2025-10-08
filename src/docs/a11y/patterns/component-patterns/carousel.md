# Carousel Accessibility

![Slideshow carousel of daily deals](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcI_RVIbMg9fnOeB2%2Fslideshow-carousel.png?generation=1548799262646557\&alt=media)

### Introduction

Carousels display a list of thematically similar items in a scrolling, horizontal viewport. Items may be entirely static (e.g. an image), entirely interactive (e.g. button) or contain a mix of static and interactive elements (e.g. a heading, image and link).

Items may be ungrouped and scrolled in a *continuous* manner, or grouped and scrolled via a *discrete* number of items.

Two pagination buttons ('Previous' & 'Next') will move to the previous slide or next slide respectively. Extra controls may allow access to *specific* slides (for examples, small pagination "dots" under the carousel).

![Discrete carousel containing 5 items per slide.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcI_TiaLEFR252P0z%2Fcarousel.png?generation=1548799262613566\&alt=media)

### Working Examples

You can take a look at the carousel pattern in action on our [examples site](http://ebay.github.io/mindpatterns/disclosure/carousel/).

You can get an idea of the required markup structure by viewing our [bones site](https://github.com/ianmcburnie/bones#user-content-carousel).

### Terminology

Viewport: Visible content area of the carousel. Displays a single slide.

* **Continuous carousel:** items are ungrouped
* **Discrete carousel**: items are grouped into slides
* **Slide**: Contains one or more items
* **Item**: A discrete unit of content inside of a slide (e.g. a tile or image)
* **Peek**: A partially visible preview of an item on the next or previous slide. Peeks serves as a visual indicator that more slides exist (discrete carousel only)
* **Next Button/Paddle**: Scrolls viewport forward / moves to next slide
* **Previous Button/Paddle**: Scrolls viewport left / moves to previous slide
* **Pagination Buttons/Dots (optional)**: Move to specific slide. Also serve as visual indicators for total number of slides and current slide index (discrete carousel only)
* **Pagination Bar (optional)**: A scrollbar alternative to pagination buttons. Gives *fuzzy* visual indicator for total number of slides and current slide index

### Best Practices

Carousel **must** have an associated heading in the page heading structure. For example, "Trending Deals", "Watchlist".

Items **must** be marked up as a list.

Previous and next buttons **must** use button tags.

Pagination indicators (optional) **must** use button tags.

Viewport content **must** conform to accessibility guidelines.

Peeks **must not** be focusable or interactive.

If the slides can automatically progress, then the carousel **must** include a pause/play button.

* Discrete carousels **should not** start automatically
* Continuous carousels **must not** start automatically
* Pause/Play button **should** be the first interactive element in the carousel
* Pause/Play button **must** always be visible
* Automatic progression **must** pause when keyboard focus enters widget
* Automatic progression **must** pause when mouse hovers over widget

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

When "previous" button has focus, `TAB` key **must** move focus to first focusable element in view port.

When "next" button has focus, `SHIFT+TAB` key **must** move keyboard focus to last focusable element in view port.

Items outside of view port **must not** be keyboard focusable. Keyboard user must use 'Previous' and 'Next' buttons to control the viewport.

When on first slide, the 'Previous' button can remain in tab-order (but **should** be visually disabled). This helps with issues in some browsers where controls with focus suddenly become disabled and focus is lost.

When on last slide, the 'Next' button can remain in tab-order (but **should** be visually disabled). This helps with with issues in some browsers where controls with focus suddenly become disabled and focus is lost.

**Keyboard Focus Order Summary**

1. Pause/Play button, if the carousel can auto-progress
2. Previous button
3. Controls (links, buttons, etc) belonging to items visible in the viewport
4. Next button
5. Pagination buttons or pagination bar, if they exist

**Focus Management Summary**

* Activate previous or next button: focus **must** stay on Previous or Next button.
* Activate Pause/Play button: focus **must** stay on the Pause/Play button.

#### Screen Reader

"Next" button **must** be announced as “Next slide”.

"Previous" button **must** be announced as “Previous slide”.

If following WCAG AAA (optional), "Next" and "Previous" buttons should also announce with additional context to uniquely identify the button purpose, e.g “Previous slide - *Trending Deals*” and “Next slide - *Trending Deals*”.

Items outside of the viewport **must not** be reachable with the virtual cursor.

When on first slide, screen reader **must** announce "Previous" button as disabled.

When on last slide, screen reader **must** announce "Next" button as disabled.

When moving virtual cursor from item to item, screen reader *might* announce list index position.

Play button label **must** be announced as “Play carousel”.

Pause button label **must** be announced as  “Pause carousel”.

If following WCAG AAA (optional), "Play" and "Pause" buttons *should* also announce with additional context to uniquely identify the button purpose, e.g “Play carousel - *Trending Deals*” and “Pause carousel - *Trending Deals*”.

#### Pointer

Clicking "Next" **must** update viewport with next slide.

Clicking "Previous" **must** update viewport with previous slide.

Clicking pagination button or pagination bar **must** update viewport with respective slide.

### Developer Guide 1 - Discrete Carousel

Our sample implementation follows the [Progressive Enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) strategy; we build in a layered fashion that allows **everyone** to access the content of the carousel.

The three layers are:

1. Content (HTML)
2. Presentation (CSS)
3. Behaviour (JS)

The carousel content will be fully visible and accessible without CSS and JavaScript.

#### Content (HTML)

The goal of our content layer is to add the list of items. As usual we begin with our root element.

```markup
<div class="carousel">
    <!-- content will go here -->
</div>
```

For the purposes of this example, all content will be rendered server-side. You may wish to consider lazy-loading all or some of the content with AJAX. If you do utilise lazy-loading, be aware that your content will not be available in a non-JavaScript scenario.

**Carousel Buttons**

The buttons must be inserted before and after the items, acting as bookends for the items.

```markup
<div class="carousel">
    <button aria-label="Previous slide" class="carousel__previous" type="button"></button>
    <!-- items will go here -->
    <button aria-label="Next slide" class="carousel__next" type="button"></button>
</div>
```

Inside of the buttons will typically be SVG icons, which we will omit here for the sake of space.

**ARIA Role Description**

New to ARIA 1.1, the `aria-roledescription` attribute can provide a human readable description to custom widgets. This attribute **must** be applied to an element with an implicit or explicit role, in which case we have chosen `role=group`.

```html
<div class="carousel" role="group" aria-roledescription="Carousel" aria-labelledby="id_of_heading_element">
    <button aria-label="Previous slide" class="carousel__previous" type="button"></button>
    <!-- items will go here -->
    <button aria-label="Next slide" class="carousel__next" type="button"></button>
</div>
```

Notice that the role requires a label. This is a good opportunity to make use of an appropriate heading element that precedes the carousel.

**Carousel Items**

A carousel can contain a list of anything, for example - tiles, images, videos, static text. For our example it will be a list of video games.

Each item will contain an image, heading, format, price + shipping.

```markup
<div class="carousel" role="group" aria-roledescription="Carousel" aria-labelledby="id_of_heading_element">
    <button aria-label="Previous slide" class="carousel__previous" type="button"></button>
    <ul class="carousel__list">
        <li>
            <img src="horace.jpg" alt="" /><h4>
            <a href="http://www.ebay.com/sch/i.html?_nkw=Horace+%26+the+Spiders">Horace &amp; the Spiders</a></h4>
            <p>Spectrum 48K</p>
            <p>$4.99 - Free Shipping</p>
        </li>
        <li>
            <img src="dragon.jpg" alt="" /><h4>
            <h4><a href="http://www.ebay.com/sch/i.html?_nkw=Double+Dragon">Double Dragon</a></h4>
            <p>Spectrum 48K</p>
            <p>$4.99 - Free Shipping</p>
        </li>
        <li>
            <img src="dizzy.jpg" alt="" /><h4>
            <h4><a href="http://www.ebay.com/sch/i.html?_nkw=Treasure+Island+Dizzy">Treasure Island Dizzy</a></h4>
            <p>Spectrum 48K</p>
            <p>$4.99 - Free Shipping</p>
        </li>
        ...
    </ul>
    <button aria-label="Next slide" class="carousel__next" type="button"></button>
</div>
```

**Pagination (optional)**

Discrete carousels might also display some kind of pagination control - typically a set of interactive "dots" underneath the carousel itself.

In addition to allowing a user to jump directly to a specific slide, the pagination conveys two important pieces of information:&#x20;

1. how many slides in the carousel
2. the current slide position of the carousel

**Checkpoint (HTML)**

Our content is in place. The carousel items are fully visible and accessible without CSS and JavaScript.

Again, if you consider this content non-important, you may wish to not use progressive enhancement and render the carousel in its entirety on the client. I will also add, rather wryly, if the content is not important, then why render it at all?

#### Presentation (CSS)

This section is under development.

#### Behaviour (JS)

The *visual* goal of the behaviour layer is to trigger custom slide transitions whenever the carousel paginates. These transitions are triggered with the "Previous", "Next" and pagination buttons (if they exist). On touch-screen devices these transitions are also triggered with swipe gestures.

The *semantic* goal is to ensure that any non visible carousel item is *inaccessible* to all users.

Implementing CSS transitions and swipe gestures are outside the scope of this guide. Instead, our main focus will be ensuring the robust, accessible state of the carousel.

**Initial State**

We assume the first slide will be the active slide, therefore the "Previous" button will be partially disabled.

What do we mean by *partially* disabled?

We say "partially" disabled when we want an inoperable button to remain keyboard focusable. The inoperable button must be aurally and visually disabled using ARIA (i.e. aria-disabled) and CSS (e.g. opacity) respectively.

Why leave the button keyboard focusable?

First of all, the button acts as a bookend, giving a strong clue to non-sighted users that they are dealing with a carousel when tabbing through page.

Secondly, these buttons may frequently flip back and forth between operable and inoperable; even while focus is on a button. This can have unexpected results in some browsers. If the button changes state to inoperable while focus is on the button, we want focus to remain in place rather than move somewhere unexpected.

This section is under development.

### ARIA Reference

This section gives an overview of ARIA usage within the context of the carousel pattern.

#### aria-roledescription

Human readable description of this custom widget. This attribute MUST be applied to an element with an implicit or explicit role.

#### role=group

Explict role for aria-roledescription.

#### aria-labelledby&#x20;

Label the group using visible onscreen text (typically a heading element).

#### aria-label

Explicit label for group if no suitable onscreen element exists.

#### aria-disabled

Used to notify user that "Next" or "Previous" buttons are in a disabled state. Screen readers will announce 'disabled,' 'dimmed,' 'unavailable,' or words to that effect.

#### aria-label

Used to create accessible labels for graphical icon buttons&#x20;

### Further Reading

* <https://adrianroselli.com/2020/04/avoid-aria-roledescription.html> (spoiler: carousel is listed as a *valid* use-case)
