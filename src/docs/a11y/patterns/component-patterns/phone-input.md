# Phone Input Accessibility

### Screenshots

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FkKqCdQVc63gOKY2zCG1N%2Fimage.png?alt=media&#x26;token=3accdfd8-bdee-4079-8b9f-883b1f6b3db4" alt=""><figcaption><p>Screenshot of expanded phone input</p></figcaption></figure>

### Introduction

The phone input pattern is a progressive enhancement of a textbox that provides as you type phone pattern for country. The country is selected with listbox button.

### Best Practices

Phone input group **could** have an accessible label.

Listbox button label must have an accessible label. Check [listbox button](listbox-button) best practices.&#x20;

Textbox must have an accessible label.&#x20;

Textbox should **not** be split to multiple input boxes.

Textbox can have an attribute `autocomplete=tel-national`. While `autocomplete` is a promising technique for supporting personalization in HTML, support for this in AT is fairly limited.

### Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

#### Keyboard

The button **must** be keyboard focusable.

Listbox button and textbox sit in the page's natural tab sequence.

When Listbox button has focus, `TAB` key must move keyboard focus to textbox.&#x20;

When textbox has focus, `TAB` key moves focus to the next interactive element in the page.

#### Screen Reader

Field set (group label) **must** be announced (e.g. Phone number).

Listbox button label **must** be announced (e.g. Country code USA +1, Country code UK +44).

Listbox button state **must** be announced (e.g. expanded or collapsed).

Textbox label **must** be announced (e.g. 'phone number').

#### Pointer

Clicking any listbox item **must** activate that item.
