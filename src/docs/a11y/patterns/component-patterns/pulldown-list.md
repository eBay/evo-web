# Pulldown List Accessibility

![](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FkDQ2qTMlmdpNC31TGBwl%2FPulldown-List.png?alt=media&token=bd5734d3-6fb3-49ba-8b56-55bfb61fa94a)

## Introduction

A toggle button at the end of a list that when activated will be "pulled down" to reveal more list items. The button can be toggled again, restoring the initial state of the list.

Not to be confused with the HTML details element. They have slightly different behaviour. The button in a details element always remains in place and its label never changes. In a pulldown list, the button toggles both its place in the DOM and its label.

## Best Practices

Another variant of the Pulldown List is one in which the button is simply removed from the DOM after activation, i.e. there is no way to restore the list back to its initial state.

## Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](https://opensource.ebay.com/mindpatterns/disclosure/pulldown-list).

## Interaction Design

This section provides interaction guidelines for keyboard, screen reader, and pointing devices.

### General

Activating the button reveals new list items and moves the button to the end of these new items.

The button text toggles between "Show More" and "Show Less".

### Keyboard

Button is activated with **ENTER** or **SPACEBAR** key.

After "Show More" button is activated, keyboard focus is placed on the _first_ new list item.

After "Show Less" button is activated, keyboard focus remains on the button.

### Screenreader

If following WCAG 2.4.9, button should have additional [offscreen context](https://ebay.gitbook.io/mindpatterns/techniques/offscreen-text).

### Pointer

There is no pointer specific interactions other than the general activation of the button.

## ARIA Reference

| Attribute      | Description                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| **aria-label** | Can be used on the button to append additional context to assistive technology if following WCAG 2.4.9 |
