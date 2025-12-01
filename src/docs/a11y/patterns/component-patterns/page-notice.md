# Page Notice Accessibility

![Page notice requiring users attention.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-MJmfnCyi6cADHhV_RQk%2F-MJmjFyF_iT1oRutE__7%2Fpage-notice-dweb.png?alt=media&token=e4310480-5ad3-4797-a21d-0589bd01f2f7)

## Introduction

User notification which appears prominently at the top of the page, above the main content.

In order of priority, from high to low, a page notice is classified as either:

- attention
- confirmation
- information

Page-notices may be rendered server-side and visible at page load time or, in a single page app environment, they might instead be triggered on the client after some user action.

Composite patterns containing Page Notices are:

- [Form Validation (server-side)](form-validation)

## Working Examples

Experience the pattern in action on our companion [eBay MIND patterns examples website](http://ebay.github.io/mindpatterns/messaging/page-notice/index.html).

Examine the required markup structure in the [Bones GitHub project](https://github.com/ianmcburnie/bones#page-notice).

View a fully styled example on our [eBay Skin website](https://opensource.ebay.com/skin/component/page-notice/).

## Best Practices

A page notice **must** appear above the main page content, and _above_ the fold if possible.

A page **must** have only one page notice visible at any time.

Page notice **must not** rely on colour alone to convey meaning or tone.

Page notice _should_ use an icon to further assist conveying meaning & tone.

Page notice may _optionally_ contain a button to dismiss and hide the notice.

Page notice may _optionally_ contain any number of call to action links or buttons.

## Interaction Design

### Keyboard

An attention notice **must** receive keyboard focus if rendered on the server. In some cases we do this for client-side rendered notices too (e.g. if the notice contains a call to action link or button).

### Screen Reader

Critical error notices **must** be announced on page load (achieved via focus management).

All client-side changes **must** be announced (achieved via live-region for non critical notices).

Page notice **must** be available in screen reader list of regions or landmarks.

## FAQ

### When do I set keyboard focus on a page notice?

Low priority notices such as confirmation and information should never receive keyboard focus.

All high-priority page notices rendered on the server should receive keyboard focus.

Some high-priority notices rendered on the client should receive keyboard focus. Typically these are notices that contain an interactive call to action that helps resolve the issue.
