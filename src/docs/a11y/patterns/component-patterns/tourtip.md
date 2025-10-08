# Tourtip Accessibility

![Tourtip next to a filter action button](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-MJmt8CUUaNaTjyxq-Rx%2F-MJmthm7eIxDpaHb3wBF%2Ftourtip-mweb.png?alt=media\&token=e465032c-b7b6-4c2e-a124-358ce7b0d00a)

### Introduction

Tourtip is a system-activated [popover](../disclosure/popover). The purpose of the tourtip is to inform the user of some new feature or section on the page.

A tourtip is open by default and must be explicitly closed by the user. Once closed, it cannot be reopened.

### Working Examples

A tourtip example is in progress. Check back again soon.

Examine the required markup structure within our [Bones GitHub project](https://github.com/ianmcburnie/bones#tourtip).

View a fully style examples on our [eBay Skin website](https://opensource.ebay.com/skin/component/tourtip/).

### Terminology

**tourtip**: the composite pattern as a **whole**, containing the following sub-parts

**host**: the element that _hosts_ the tourtip

**overlay**: the non-modal overlay that contains the content related to it's host

**tip**: the tip content

**expanded**: the overlay state (true or false)

### Best Practices

Overlay **must** contain a button to dismiss the tourtip.

Overlay **must** remain on screen until explicitly dismissed by user.

Overlay cannot be opened once closed without a full page refresh.

Please refer to the [popover](../disclosure/popover) pattern for all inherited best practices.

### Interaction Design

This section provides guidance for keyboard, screen reader and pointing devices.

#### Keyboard

Please refer to the popover pattern for all inherited keyboard interactions.

#### Screen Reader

If high-priority, tourtip **must** be announced.

If high-priority, tourtip **must** be listed as a region/landmark.

Please refer to the popover pattern for all inherited screen reader interactions.

#### Pointer

Please refer to the popover pattern for all inherited pointer interactions.

### Developer Guide

This section is not yet available.
