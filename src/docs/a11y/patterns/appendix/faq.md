# Accessibility FAQ

Listed below are frequently asked questions. If you have a question that is not answered here, please start a [discussion](https://www.gitbook.com/book/ebay/mindpatterns/discussions).

### Should I use a button or a link?

A general rule of thumb is that if the resulting action should be be a _bookmark-able_ URL, or would benefit from being opened in a new window or tab, then a link should be used. Otherwise, if the action just runs some JavaScript (i.e. opens a dialog or menu), then a button should be used.

Correct use of link and button is very important for accessibility. When a user hears "button", they expect the click to perform some action on the current page. When the user hears "link", they expect the click to take them to a new URL, or a new URL fragment on the current page.

Now, within the context of a Single Page App (SPA), the lines can get a little blurry, and there are many opinions either way. However, our guidance remains consistent with above - use links for anything that updates _browser history state_, as links give the user a hint that they are moving through bookmark-able state.

NOTE: There is one special type of button that can also change the URL. The form submit button. This button will GET or POST to the URL specified in the form's `action` property.

### **Should Buttons Have a Hand Cursor?**

No. The hand cursor is reserved for links. Affordance of button interactivity comes from how the element _looks_ (i.e. it should look like a button!), and should not require use of a mouse.

See [Hand Cursor on Buttons](../antipatterns/hand-cursor-on-buttons) antipattern for more info.

### Can a focussed button be a live-region?

No. Some screen readers automatically announce any changes to the programmatic label of the focussed element, and so using a live-region would trigger a second, redundant announcement.

Also, the purpose of live-regions is for areas of the page _away_ from the current focus.

If visually conveying a loading/waiting state within the button, make sure to change the label to "Busy", so that the busy status is programmatically determinable. If wishing to also convey a final completion state, it is recommended to do that outside of the button (in a Snackbar/Toast for example) using a live-region.&#x20;

### When should a live-region be used?

Not every dynamic update to the page needs to be communicated to the user via a [live region](../techniques/live-region). Doing so could create a confusing, noisy and distracting experience for users of assistive technology.

So when _should_ they be used? As ever with accessibility, the choice requires some prudence and scrutiny.&#x20;

#### Downstream Changes

A general rule of thumb is that any change _on_ or _after_ the currently focussed element will be discovered in the natural reading order and therefore does not need to be communicated.&#x20;

A common pattern with forms is that selecting one option might dynamically change the next set of options. This is how paper forms work too, e.g. "Jump to section F if checkbox 1A is checked"; and removing this "thinking step" from web forms is actually a great accessibility feature! However, we do not need to announce that the options changed or that new options are available, and we certainly do not need to go into excruciating detail about what options _are_ now available. This would quickly get very silly for complicated forms with lots of changes.

One exception to this "downstream" rule are elements that are explicitly designed to inform the user of an important update. Common examples of this are the Snackbar or Toast patterns. Their entire purpose is to grab the users attention, _without_ grabbing their keyboard focus. A great case for a live-region.

Other than filling out a form, things can also change frequently downstream as a result of user actions on buttons and menus. Checkout totals, shipping costs, item quantity, search results, loading spinners, etc. Sometimes all of the above at the same time! Before converting _every_ dynamic piece of content into a live region, think about the experience you want the user to have.

#### Upstream Changes

So what upstream changes need to be communicated? Error messages for certain. Whether the error message appears at the top of the page (many pixels away from the submit button the user is currently focussed on) or right after the previous textbox they just left, the user should be made aware of the _existence_ of an error message. Note the word "existence". In the case of multiple errors, we do not necessarily need to spell out each and every error and how to fix them as part of the live-region announcement, our job is to inform that there _was_ an error. They can then navigate to the [page notice](../messaging/page-notice) or field to learn more.

Site-level headers and menu-bars are areas that often receive dynamic updates upstream from the users location. Icon buttons with badges displaying notification counts, watch-list counts, items in cart count, etc. When these counts change, should they be announced? Think about the experience of somebody who is quickly going through search results and adding many results to their watchlist. An announcement of number of items in watchlist could quickly get repetitive and annoying. On the other hand, an announcement of a new notification could be really useful.

### How do I add content _exclusively_ for screen readers?

Apply the `.clipped` class (or its rules) to the element that you want to be visually hidden. The element will remain accessible in the reading order of screen readers.

```css
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

For interactive elements such as buttons and links, the `aria-label` attribute can be used. This technique is common for icon buttons that do not have any visible text.

For more information please read the excellent ["When and How to Visually Hide Content"](https://www.sitepoint.com/when-and-how-to-visually-hide-content/) by Dennis Lembree.

### Will offscreen text incur a search ranking penalty?

No, it is fine to use [offscreen text](../techniques/offscreen-text).

There is a more detailed answer on the [Google Webmaster forum](https://productforums.google.com/forum/#!msg/webmasters/YJcZUhtMIE4/XkOEzVakBAAJ).

### When using Safari I can’t TAB through the links on the page. What’s going on?

You must enable the following option in Safari's preferences:

```
Safari -> Preferences -> Advanced -> Accessibility -> "Press Tab to highlight each item on a webpage"
```

And here’s how to do the same for Firefox:

```
System Preferences -> Keyboard -> Keyboard Shortcuts -> Full Keyboard Access -> "All controls"
```

### I'm using Microsoft Remote Desktop for Mac to test with JAWS on a Windows machine. My keyboard does not have an INSERT key. How do I send the INSERT command?

It is true that Mac keyboards do not have an INSERT key, and this is a known issue with MRD. The workaround is to install a hotkey application such as [Karabiner](https://pqrs.org/osx/karabiner/).

Once installed, check the checkbox "Enable at only Remote Desktop Connection Client - Use F12 as insert".

Now you should be able to activate any JAWS commands that require the INSERT key (e.g. opening the Links List).

### How do I know where headings are required?

As a rough guideline, it can help to think that every _block_ or _section_ that sighted people use to create their _mental model_ of the page, **must** have a heading. These headings, and the structure they create, allow users of assistive technology to create the same mental model.

Identifying headings is the responsibility of the design team.

Although we strongly discourage it, sometimes a heading will be hidden visually offscreen and available only to assistive technology. Again, defining these types of headings is the responsibility of the design team.

### Should SPACEBAR or ENTER key activate links & buttons?

Both the SPACEBAR and ENTER key should activate a button.

Only the ENTER key should activate a link. Pressing the spacebar whilst keyboard focus is on a link should scroll the page down.

### Should I use aria-label or aria-labelledby?

Use aria-label in cases where a text label is not visible on the screen. If there is visible text labeling the element, use aria-labelledby instead.

### Should I use radio, checkbox or select?

A radio group allow only one choice to be selected.

A checkbox group allows zero or more choices to be selected.

A select group allow one or more choices to be selected.

### Why do we cater for users without JavaScript!?

It's true that only a very small percentage of users browse the web with JavaScript disabled. Sometimes this is by choice, and sometimes not (a strict company security policy may disable JavaScript for all employees, for example).

We are not going to go out of our way to cater for these individuals.

However, there are other [_unknown_ factors](https://gds.blog.gov.uk/2013/10/21/how-many-people-are-missing-out-on-javascript-enhancement/) which can potentially place the user into a non-JS or partial-JS state, for example:

* A script fails to load due to poor connectivity
* A script executes much later or slower than expected
* A script fails due to incompatible browser support

> &#x20;We don’t have any non-JavaScript users
>
> No, _all_ your users are non-JS while they’re downloading your JS [Jake Archibald (@jaffathecake) May 28, 2012](https://twitter.com/jaffathecake/status/207096228339658752)

The only realistic way of defending against the _unknown_ is by building our pages in the [Progressive Enhancement](http://en.wikipedia.org/wiki/Progressive_Enhancement) way; we make sure our most important content and functionality\[1] is always available to users in **any** browser, in **any** situation.

\[1] Of course, in certain situations, some functionality simply cannot be replicated without JavaScript - a single page app (SPA) which relies heavily on realtime, client-side events, might fall under this category.
