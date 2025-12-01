# Carousel Accessibility

### Best Practices

Carousel **must** have an associated heading in the page heading structure. For example, "Trending Deals", "Watchlist".

Items **must** be marked up as a list.

Previous and next buttons **must** use button tags.

Pagination indicators (optional) **must** use button tags.

Viewport content **must** conform to accessibility guidelines.

Peeks **must not** be focusable or interactive.

If the slides can automatically progress, then the carousel **must** include a pause/play button.

- Discrete carousels **should not** start automatically
- Continuous carousels **must not** start automatically
- Pause/Play button **should** be the first interactive element in the carousel
- Pause/Play button **must** always be visible
- Automatic progression **must** pause when keyboard focus enters widget
- Automatic progression **must** pause when mouse hovers over widget

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

- Activate previous or next button: focus **must** stay on Previous or Next button.
- Activate Pause/Play button: focus **must** stay on the Pause/Play button.

#### Screen Reader

"Next" button **must** be announced as “Next slide”.

"Previous" button **must** be announced as “Previous slide”.

If following WCAG AAA (optional), "Next" and "Previous" buttons should also announce with additional context to uniquely identify the button purpose, e.g “Previous slide - _Trending Deals_” and “Next slide - _Trending Deals_”.

Items outside of the viewport **must not** be reachable with the virtual cursor.

When on first slide, screen reader **must** announce "Previous" button as disabled.

When on last slide, screen reader **must** announce "Next" button as disabled.

When moving virtual cursor from item to item, screen reader _might_ announce list index position.

Play button label **must** be announced as “Play carousel”.

Pause button label **must** be announced as “Pause carousel”.

If following WCAG AAA (optional), "Play" and "Pause" buttons _should_ also announce with additional context to uniquely identify the button purpose, e.g “Play carousel - _Trending Deals_” and “Pause carousel - _Trending Deals_”.

#### Pointer

Clicking "Next" **must** update viewport with next slide.

Clicking "Previous" **must** update viewport with previous slide.

Clicking pagination button or pagination bar **must** update viewport with respective slide.

### ARIA Reference

This section gives an overview of ARIA usage within the context of the carousel pattern.

| Attribute                | Description                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **aria-roledescription** | Human readable description of this custom widget. This attribute MUST be applied to an element with an implicit or explicit role.                                         |
| **role=group**           | Explict role for aria-roledescription.                                                                                                                                    |
| **aria-labelledby**      | Label the group using visible onscreen text (typically a heading element).                                                                                                |
| **aria-label**           | Explicit label for group if no suitable onscreen element exists. Used to create accessible labels for graphical icon buttons.                                             |
| **aria-disabled**        | Used to notify user that "Next" or "Previous" buttons are in a disabled state. Screen readers will announce 'disabled,' 'dimmed,' 'unavailable,' or words to that effect. |

### Further Reading

- <https://adrianroselli.com/2020/04/avoid-aria-roledescription.html> (spoiler: carousel is listed as a _valid_ use-case)
