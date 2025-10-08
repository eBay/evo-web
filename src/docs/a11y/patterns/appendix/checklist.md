# Checklist

A manual checklist is of course no substitute for automated testing, or static analysis, of your page. A checklist can though help us catch a certain class of issues that might not be surfaced by such tools, or that might result in false positives.

Most, if not all, of the "general" items can be identified with an automated testing tool or browser plugin, such as [Axe by Deque](https://www.deque.com/axe). The component specific level checklists will require manual testing.

### General

| What?                                                                                                                                                            | Why?                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ensure your page has a valid doctype e.g. `<!doctype html>` for HTML5                                                                                            | Standards mode helps improve consistent screen reader behaviour.                                                                                                                                   |
| Ensure your html tag has a valid lang attribute e.g. `<html lang="en">`                                                                                          | Informs the screen reader of which language to read your page in.                                                                                                                                  |
| Ensure your head section has a valid title element                                                                                                               | Informs the screen reader of the purpose and/or content of the page.                                                                                                                               |
| Ensure unique ids for all elements                                                                                                                               | Duplicate IDs can prevent screen reader from reading form labels.                                                                                                                                  |
| Ensure dynamically generated ids are unique                                                                                                                      | Duplicate IDs can prevent screen reader from reading form labels.                                                                                                                                  |
| Ensure HTML attributes are used to convey state rather than classnames e.g. `<button disabled>` rather than `<button class="disabled">`                          | Class names provide no semantics to screen readers                                                                                                                                                 |
| Ensure ARIA attributes are used to convey state rather than classnames e.g. `<a role="tab" aria-selected="true">` rather than `<a class="tab" class="selected">` | Class names provide no semantics to screen readers                                                                                                                                                 |
| Ensure `<i>` tags are not used as CSS icon holders. Use a `<span>` element instead.                                                                              | These tags have specific semantics to screen readers.                                                                                                                                              |
| Ensure a single h1 heading exists on the page                                                                                                                    | This tells the user where they are and the purpose of the page.                                                                                                                                    |
| Ensure that all main page regions have a single h2 heading                                                                                                       | This will help a screen reader user make a mental model of the page.                                                                                                                               |
| Ensure any page landmarks have relevant ARIA roles (e.g. banner, nav, main, complementary)                                                                       | This will help a screenreader user scan & navigate the page.                                                                                                                                       |
| Ensure all page landmarks are labelled (except role="main").                                                                                                     | This will provide a human readable description of the landmark.                                                                                                                                    |
| Ensure that your main content wrapper has id="mainContent", tabindex="-1", role="main"                                                                           | This is required by "Skip to Main Content" link in eBay global header.                                                                                                                             |
| Do not set a tabindex attribute other than -1 or 0                                                                                                               | Only the DOM order should be used to dictate order of keyboard navigation. A value of -1 allows programmatic focus with JavaScript. A value of 0 adds element to natural tab order. Use with care. |
| Do not set a non-negative tabindex attribute on non-interactive elements or text                                                                                 | Non-interactive elements must never be in the tab order.                                                                                                                                           |
| Ensure non-modal overlays are placed adjacent in the DOM to their nearest visual element                                                                         | Allows natural tab order and screen reading order from page into flyout overlay                                                                                                                    |
| Ensure noscript tag is only used as a fallback for lazy loaded images                                                                                            | Noscript tag is an anti-pattern. Use progressive enhancement instead.                                                                                                                              |

### Carousel

A carousel is a composite pattern containing two left/right "paddle" buttons and a viewport. The viewport contains *n* items and the paddles update the content of this viewport.

| What?                                                                                                                      | Why?                                                                              |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Ensure the carousel is preceded by a heading                                                                               | Screen reader users (all users, infact) want to know what the carousel contains   |
| Ensure a list is used to markup the carousel items                                                                         | A list informs screen reader user of number of items and current position in list |
| Ensure carousel items outside of viewport are not in taborder                                                              | Only the visible items should be in tab order                                     |
| Ensure carousel items outside of viewport are hidden from screen reader using `aria-hidden="true"`                         | Only the visible items should be available to screen reader                       |
| Ensure any slideshow behaviour can be paused                                                                               | Slideshows are distracting to users with cognitive disabilities                   |
| Ensure any auto-play slideshow behaviour loops only once                                                                   | Some users prefer to wait for slideshow to end before interacting with page       |
| Ensure carousels have left/right pagination buttons                                                                        | Keyboard user needs a way of paginating the carousel viewport                     |
| Ensure all pagination controls have an accessible label e.g. `<button class="icon-arrow-right" aria-label="Next slide" />` | Critical icon buttons need an accessible label for screen readers                 |

### Combobox

Combobox is a composite pattern containing a textbox and flyout listbox. A combobox may optionally be enhanced with autocomplete behaviour (see specific guidance in the table below).

| What?                                                                                 | Why?                                                                                       |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Ensure text input has `autocomplete="off"`                                            | Disables built-in HTML5 autocomplete which interferes with this control                    |
| Ensure textbox has `role="combobox"`                                                  | Informs assistive technology that this input has an associated listbox                     |
| Ensure textbox has `aria-expanded` attribute                                          | Informs assistive technology of listbox state (true or false                               |
| Ensure textbox has `aria-activedescendant` state                                      | Informs assistive technology of current active suggestion in list                          |
| Ensure listbox has a unique id                                                        | The textbox input needs to reference this ID                                               |
| Ensure suggestion listbox has `role="listbox"`                                        | Informs assistive technology of listbox semantics                                          |
| Ensure each option in listbox has `role="option"`                                     | Informs assistive technology of listbox option semantics                                   |
| Ensure each option in listbox has unique id                                           | Used in conjunction with aria-activedescendant                                             |
| Ensure active option in listbox has `aria-selected="true"`                            | Required by voiceover (but not other screen readers) to identify the active listbox option |
| Ensure listbox active descendant is navigable with up/down arrow keys.                | Allows keyboard user to select an option                                                   |
| Ensure focus remains in textbox while options are navigated with arrow keys.          | Allows keyboard user to edit text                                                          |
| OPTIONAL: Ensure combobox has offscreen status region detailing number of suggestions | In some screen readers, combobox functionality will not be discoverable without this hint  |
| For autocomplete behaviour, ensure text input has `aria-autocomplete="list"`          | Informs assistive technology that list of suggestions (listbox) will be displayed          |

### Dialog

Dialogs may be modal or non-modal (less common).

| What?                                                             | Why?                                                                                       |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Ensure dialog has `role="dialog"`                                 | Assistive technology will inform user of dialog behaviour when focus enters dialog         |
| Ensure dialog is labelled with `aria-labelledby` or `aria-label`  | Assistive technology will inform user of dialog purpose when focus enters dialog           |
| If modal, ensure `aria-modal="true"` is present                   | Assistive technology will present different behaviour for input device based on this value |
| If modal, ensure dialog contains at least one interactive element | This allows us to set focus on a window element on open.                                   |
| If modal, ensure dialog has keydown event handler for `ESC` key   | This allows keyboard users to easily dismiss the dialog                                    |
| If modal, ensure keyboard focus cannot leave dialog               | Modal elements should constrain keyboard focus                                             |
| If modal, ensure screen reader virtual cursor cannot leave dialog | Modal elements should constrain virtual cursor                                             |

### Switch

Switch is an input pattern that allows user to choose between "on" & "off" states typically by executing JavaScript when toggled.

| What?                                                                                                       | Why?                                                                         |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Ensure switch has a `role="switch"`                                                                         | Informs assistive technology that this input is a switch control             |
| Ensure switch custom control(i.e. not `input[type=checkbox]`) has `aria-checked="true"` when turned ''on"   | Informs assistive technology that switch is on                               |
| Ensure switch custom control(i.e. not `input[type=checkbox]`) has `aria-checked="false"` when turned ''off" | Informs assistive technology that switch is off                              |
| Ensure switch control can be toggled with `SPACEBAR` key on focus.                                          | Allows keyboard user to toggle between "on" and "off" states                 |
| OPTIONAL: Ensure switch control is operable with left/right arrow keys on focus.                            | Allows keyboard user to "on" switch using right key and "off" using left key |
| OPTIONAL: Ensure switch control can be toggled with `ENTER` key on focus.                                   | Allows keyboard user to toggle between "on" and "off" states                 |

### Infotip

Infofip is a composite pattern with button and a flyout overlay. It discloses supplementary or advisory content about an existing onscreen element or region.

| What?                                                                                              | Why?                                                                                                             |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Ensure button has an accessible label e.g. `<button class="infotip__host" aria-label="Info" .../>` | Informs assistive technology define purpose (e.g. Info).                                                         |
| Ensure overlay does not open on button focus/hover.                                                | Infotip pattern should not be used for this behavior. Refer tooltip.                                             |
| Ensure Infotip can toggle overlay using `SPACEBAR` or `ENTER` key on focus.                        | Allows keyboard user to toggle the overlay.                                                                      |
| Ensure Infotip remain expanded until explicitly closed.                                            | Infotip can be closed with a close button or programmatically closed by another component (e.g. nearby Infotip). |
| Ensure overlay has `display: none`  or `hidden` when overlay in collapsed state.                   | Overlay content is programmatically and visually hidden.                                                         |
| Ensure host button has `aria-expanded="false"` when overlay is in collapsed state.                 | Informs assistive technology expanded state and the AT cannot access overlay during collapsed state.             |
| Ensure button has `aria-expanded="true"` when overlay is in expanded state.                        | Informs assistive technology that overlay is opened.                                                             |
| Ensure Infotip button overlay is responsive.                                                       | To ensure content is accessible for all screen sizes.                                                            |
| Ensure Infotip button is placed adjacent to the flyout in the DOM.                                 | Allows natural tab order and screen reading order from button into flyout overlay.                               |
| Ensure overlay content be no more than two paragraphs in length.                                   | Use dialog pattern to for lengthier content.                                                                     |

### Tooltip

Tooltip is a composite pattern under flyout. It provides descriptive or advisory content about a control.

| What?                                                                                                | Why?                                                                                                         |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Ensure element has an accessible label e.g. `<button class="tooltip__host" aria-label="Close" .../>` | Informs assistive technology define purpose (e.g. close).                                                    |
| Ensure overlay opens on element focus/hover.                                                         | Tooltips help users with supplementing extra information.                                                    |
| Ensure flyout has `role="tooltip"`                                                                   | Informs assistive technology that this element is a tooltip.                                                 |
| Ensure host element is labelled appropriately with `aria-describedby`.                               | Elements should be referenced through the use of `aria-describedby` before or when the tooltip is displayed. |
| Ensure overlay has `display: none`  or `hidden` when overlay in collapsed state.                     | Overlay content is programmatically and visually hidden.                                                     |
| Ensure host element has `aria-expanded="false"` when overlay is in collapsed state.                  | Informs assistive technology expanded state and the AT cannot access overlay during collapsed state.         |
| Ensure host element has `aria-expanded="true"` when the overlay is in expanded state.                | Informs assistive technology that overlay is opened.                                                         |
| Ensure tooltip button is placed adjacent to the flyout in the DOM.                                   | Allows natural tab order and screen reading order from page into flyout overlay.                             |
| Ensure overlay content be no more than two paragraphs in length.                                     | Use dialog pattern to for lengthier content.                                                                 |

### Tourtip

Tourtip is a composite pattern under flyout. It informs user of some new features or sections on the page.

| What?                                                                    | Why?                                                                             |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| Ensure overlay remain on screen until explicitly dismissed by user.      | Informs assistive technology that an overlay is opened.                          |
| Ensure overlay must contain a button to dismiss the tourtip.             | Tourtip must be closed by an explicit button.                                    |
| Ensure overlay cannot be opened once closed without a full page refresh. | Tourtip once closed should not be opened.                                        |
| Ensure tourtip is placed adjacent to the flyout in the DOM.              | Allows natural tab order and screen reading order from page into flyout overlay. |
| Ensure overlay content be no more than two paragraphs in length.         | Use dialog pattern to for lengthier content.                                     |

We will be adding more checklists soon.

Stay tuned. more checklists for custom controls to follow\...
