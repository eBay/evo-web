# Fake Tabs Accessibility

![My eBay activity, messages and account links that appear like tabs](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcEr8S-QsT0uBtoAM%2Ffauxtabs.png?generation=1548799252525056&alt=media)

## Introduction

Fake tabs have the appearance of dynamic [tabs](../disclosure/tabs), but perform a full page load when clicked.

## Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](http://ebay.github.io/mindpatterns/disclosure/tabs/).

Examine the required markup structure on the [bones GitHub project](https://github.com/ianmcburnie/bones#user-content-fake-tabs).

View a fully styled example on the [eBay Skin website](https://opensource.ebay.com/skin/component/tabs/).

## Best Practices

Fake tabs is a navigation pattern. The "tabs" are simply a list of links with no additional JavaScript behaviour. For _dynamic_ tabs that hide & show content, please consult the disclosure [tabs](../disclosure/tabs) pattern.

## Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

### Keyboard

Tab key navigates the fake tabs.

The currently "selected" fake tab can remain in the tabindex.

Enter key activates a fake tab (i.e. it navigates to the link href).

### Screen Reader

Upon entering the list, the number of list items will be announced.

The "current" fake tab should be announced as the "current" item (exact words may differ depending on the screen reader).

## ARIA Reference

| Attribute        | Description                                                                        |
| ---------------- | ---------------------------------------------------------------------------------- |
| **aria-current** | Provides AT with programmatic state on the fake-tab that reflects the current URL. |
