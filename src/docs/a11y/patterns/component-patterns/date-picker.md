# Date Picker Accessibility

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FKdRFdVC9rqaCANFioNND%2Fimage.png?alt=media&#x26;token=46605268-9afb-435b-9ffe-c1342fec1dd3" alt=""><figcaption><p>Image of eBay's Date Picker component with single month displayed</p></figcaption></figure>

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FauRS74H6MfeGhrMij9uH%2Fimage.png?alt=media&#x26;token=c7deb447-e31d-470f-b790-53c5dd206a42" alt=""><figcaption><p>Image of eBay's Date Picker component with two months displayed</p></figcaption></figure>

### Introduction

A custom date picker is usually presented in tandem with a textfield, as an alternative means to enter dates and date ranges with a calendar based interface.

### Terminology

* **Single calendar:** one calendar month is presented at a time
* **Double calendar:** two calendar months are presented at a time
* **Calendar title**: the month and year
* **Calendar headers:** the days of the week, acting as column headers
* **Previous month button**: moves calendar back one month&#x20;
* **Next month button:** move calendar forward one month
* **Date buttons:** selects date. Doing so a second time will create a date range
* **Date states**: date buttons can represent multiple states
  * **Start Date**
  * **End Date**
  * **Current Date**
* **Date Range**: a range from start date to end date

### Best Practices

A date picker should have a layout familiar with other popular systems and conventions. A data table works well.

Dates may be disabled if they are outside of the allowed time range.

### Interaction Design

This section provides interaction design for keyboard, screen reader, voice & pointing devices.

#### Keyboard

The date picker exposes 3 keyboard focusable areas with TAB key:

* The previous month button
* The next month button
* A date button\*&#x20;

_\*Which date button receives focus can change depending on certain factors._

When a date button inside of the grid receives focus, keyboard interaction switches to a [roving tabindex](../techniques/roving-tabindex) based style, using the ARROW keys, e.g. RIGHT-ARROW moves to the button in the next cell to the right, DOWN-ARROW moves to the button in the cell below.

SPACEBAR or ENTER key will start or end a date range selection

ESC key will close the date picker, retaining any date selection.

#### Screen Reader

Date buttons are announced with the day of month, e.g. "12, button". The day of week and month are available on the containing table cell element (see below).

When navigating calendar in table mode, month is announced via table _caption_ semantics.

When navigating calendar in table mode, days of week are announced via table _column header_ semantics.

#### Voice

Date button can be activated via visual label, e.g. "Click button 12".

Picker can be closed via, "Press Escape".

#### Pointer

todo

### Developer Guide

This section is not yet available.

### ARIA Reference

#### aria-label

Previous and next month icon buttons require a programmatic label for assistive technology.

#### role-description

The main calendar table can be given a custom description, such as "Calendar".
