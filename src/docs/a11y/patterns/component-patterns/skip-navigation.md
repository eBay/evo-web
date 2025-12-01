# Skip Navigation Accessibility

![Skip to main content](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcG0pUg0R4d2iuXs8%2Fskipto.png?generation=1548799253737538&alt=media)

## Introduction

The skip navigation pattern is most commonly used to skip past the main site navigation onto the main landmark element.

It can be used in other scenarios too; skipping past all links inside of a carousel, for example.

## Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](https://ebay.github.io/mindpatterns/navigation/skip-navigation).

## Best Practices

Link **must** set keyboard focus on target element when activated.

Link can be hidden from view until focused with keyboard.

## Interaction Design

This section provides interaction design for keyboard and screen reader devices.

### Keyboard

Activating the skip link moves keyboard focus to the target element. Depending on the browser, the keyboard focus indicator may or may not be visible on the focussed target element.

After activating the skip link, pressing TAB key moves keyboard focus to the first interactive element _after_ the target element and restores focus indicator.

### Screen Reader

Activating the skip link moves virtual cursor to the target element and screen reader will announce the contents of that element.

After activating the skip link, moving screen reader virtual cursor forwards will move virtual cursor to the next element after the target element.

## FAQ

### Why do we need tabindex="-1"? All modern browsers move keyboard focus without it.

All modern browsers do indeed now move the keyboard focus from the link to the target. This is great news for sighted keyboard users. However, we have found that in certain cases a screen reader will get left behind on the link. A tab index of negative one _forces_ the screen reader to move onto the target element. So we can think of this as some additional "focus management".
