# Phone Input Accessibility

### Screenshots

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FkKqCdQVc63gOKY2zCG1N%2Fimage.png?alt=media&#x26;token=3accdfd8-bdee-4079-8b9f-883b1f6b3db4" alt=""><figcaption><p>Screenshot of expanded phone input</p></figcaption></figure>

### Introduction

The phone input pattern is a progressive enhancement of a textbox that provides as you type phone pattern for country. The country is selected with listbox button.

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples](https://opensource.ebay.com/mindpatterns/input/phone-input/index.html) website.

View a fully styled example in our [eBay Skin CSS framework](https://opensource.ebay.com/skin/component/phone-input/).

### Terminology

**Phone Input:** The pattern as a whole, a composite component containing a listbox button and a textbox.

**Listbox Button**: The button that opens listbox of countries.

**Textbox**: A regular HTML text (type=tel)&#x20;

**Country code:** The telephone dialing code of a country (e.g. +1 for United States of America)

**Phone number:** The telephone number excluding the country code.

### Best Practices

Phone input group **could** have an accessible label.

Listbox button label must have an accessible label. Check [listbox button](listbox-button) best practices.&#x20;

Textbox must have an accessible label.&#x20;

Textbox should **not** be split to multiple input boxes.

Textbox can have an attribute `autocomplete=tel-national`.  While `autocomplete` is a promising technique for supporting personalization in HTML, support for this in AT is fairly limited.

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

### Developer Guide

This section is not yet available.
