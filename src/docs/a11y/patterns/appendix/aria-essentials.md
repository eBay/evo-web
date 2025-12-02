# ARIA Essentials

### aria-label & aria-labelledby

Provide an accessible label to an element or widget.

These two attributes **must** **not** be used on elements or widgets that already have a non-ARIA labelling mechanism in place. Examples of non-ARIA labelling mechanisms are the `<label>` tag for form inputs, and inner text for buttons.

Use `aria-labelledby` if there is visible text onscreen that can be used to label the element (a nearby heading, for example).

Use `aria-label` when there is no suitable labeling text onscreen (this issue is common with icon buttons, for example).

### aria-describedby

Describe an interactive element using existing onscreen text.

A description is different from a label. Labels indicate the _purpose_ of the field, whereas descriptions are give secondary information on how to use or operate the field.

For example, using this attribute we could announce the associated terms and conditions of a checkbox.

### role=button

Informs the user that this element can be clicked or pressed to trigger an action.

Commonly used to convert a plain `<div>` or `<span>` into an interactive button. Also useful in converting [hijaxed](http://en.wikipedia.org/wiki/Hijax) hyperlinks into buttons.

Supplying this role alone is **not** sufficient to convert a `<div>` or `<span>` into a fully functioning, keyboard-accessible button. That behaviour must be added with JavaScript. Better yet, just use a native `<button>` element which will give you the screen reader role and keyboard behaviour for free without requiring any JavaScript.

### aria-expanded

Indicate whether the element, or another element it [controls](http://www.w3.org/TR/wai-aria/states_and_properties#aria-controls), is currently expanded or collapsed.

Often used on 'expando' or 'show more' buttons that dynamically hide & show content. Also used on buttons and comboboxes that control menu and listbox overlays respectively.

### aria-haspopup

Used on a button or menuitem that triggers a menu, listbox, dialog, tree or grid.

This attribute is **not** intended to be used on elements that open other kinds of popup overlay - such as modals, tooltips, flyouts, etc.

### aria-live

Announce any content or visibility changes that are outside the user's current area of focus.

Changes can be notified assertively, interrupting the screenreader's current announcement, or politely after the current announcement has finished.

By default, only the updated content inside the element will be announced, rather than the entire content of the element. This behaviour can be changed with the [aria-atomic](http://www.w3.org/TR/wai-aria/states_and_properties#aria-atomic) property.

For areas of a page that update a lot of content, it is good practice to try and create a live region that summarizes _what_ content has changed, rather than try and announce all of the new content. A data table with lots of dynamically changing data, we could summarize as "table data updated", for example.

### role=dialog

A `dialog` role informs the user that they are inside of a child window of the main page.

A child window typically prompts the user to enter some information, confirm a response or to browse new content.

### aria-modal

Used on elements with role of `dialog` or `alertdialog` to indicate modality.

With modality set to "true", all input devices should be restricted from accessing any content outside of the dialog.

### **WARNING!**

Our final set of ARIA attributes listed below are deemed as _potentially_ dangerous and therefore essential knowledge is required n order to avoid their misuse.

### aria-hidden

Removes an element from the accessibility tree (i.e. hides it from assistive technology such as a screenreader).

Caution must be exercised when applying this attribute because it is rare that we want to give screenreader users a different experience, or different content, to other users.

This attribute may only be used if intended to improve the experience for users of assistive technologies by removing redundant or extraneous content. Again, because this area is very subjective, caution is required.

NOTE: setting `aria-hidden` to "true" is not necessary if the element already has CSS `display: none` or the HTML5 [hidden attribute](http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute).

### role=presentation

Removes the default semantic meaning of an element.

You can think of this role as essentially converting an element into a meaningless `<div>` or `<span>` but retaining its default styling.

When applied to a table, for example, the screenreader would no longer announce it as a table or its children as rows or columns, but it would still appear visually as a table. This behaviour can be desirable for pages or modules that use tables for layout rather than CSS.

This attribute must be used with extreme care and prudence!

### role=application

**DANGER!** The majority of web pages and web developers will never need to use this role.

By applying this role to an element, you are basically saying that you, as the developer, will now handle all keypresses inside that element rather than the screenreader. So when a screen reader user presses their arrow keys in an attempt to move their virtual cursor, nothing will happen, because you are now handling the behaviour of those keys inside this element.

Applying this role to an element can have severe consequences to screenreader users. Applying this role to the body tag for example, can render the entire page unusable.

Even if you _think_ you need this role, you most probably don't, so please exercise extreme caution. You have been warned!
