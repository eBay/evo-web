# Page Notice Accessibility

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
