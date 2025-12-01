# Inline Notice Accessibility

![Highest bidder notice](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcDyYJQOLTemZe960%2Finlinenotice.png?generation=1548799251668838&alt=media)

## Introduction

A notification that appears next to an individual element or control.

In order of priority, from high to low, the status of an inline notice is classified as either:

- attention
- confirmation
- information

## Working Examples

Experience the pattern in action on our companion [eBay MIND patterns examples website](http://ebay.github.io/mindpatterns/messaging/inline-notice/).

View a fully styled example on [eBay Skin](https://opensource.ebay.com/skin/component/inline-notice/).

## Best Practices

Avoid having more than one high-priority notice visible at any time.

Avoid rendering high-priority inline notices on the server. For better discoverability, use a [page notice](page-notice) instead. If you cannot use a page notice, then focus **must** be set on the inline notice.

Avoid using progress bars and spinners in conjunction with client-side notice.

Displaying a notice for a success or confirmation may not always be necessary. In the absence of an error message, a user can imply success (opinionated).

## Interaction Design

### Keyboard

Nested interactive elements (such as links) **must** be keyboard focusable.

### Screen Reader

Screen reader **must** not announce low-priority server-side notices.

Screen reader **must** announce client-side content changes to any type of notice.

Screen reader **must** announce client-side visibility change of a hidden notice.

If the notice is related to a control, the notice **must** be announced as the description of that control.

## FAQ

### When do I use role="region" with an inline notice?

For all notices. It creates a landmark region. All landmark regions should be labelled (e.g. "Confirmation", "Information", "Attention").

### When do I use role="alert" with an inline notice?

For high-priority notices rendered and updated on the client only. The alert must be nested inside of the landmark region element.

### When do I set keyboard focus on an inline notice?

Always set keyboard focus on high priority notices rendered by the server and visible at page load time. Again, these situations should be rare. Use a [page notice](page-notice) instead.
