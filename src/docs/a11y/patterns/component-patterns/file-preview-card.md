# File Preview Card Accessibility

## Best Practices

File preview cards **must** contain the file name as part of their accessible name. The name may be displayed as text in the card or included as the alternative text for the preview image. If the file name is displayed visually, the preview image's alternative text _should_ be an empty string to avoid redundancy.

If a file is in the process of uploading, it _should_ include a progress indicator with appropriate alternative text, e.g. "Uploading..." or "Busy." It is not recommended to make the progress indicator a live region, as this can get noisy for multiple file upload. To convey upload error states, follow [form validation best practices](form-validation) and group similar errors into [inline notices](inline-notice).

Multiple file preview cards **must** be grouped in a list. If the number of visual files exceeds the maximum display limit, a file preview card containing a "See more" button _should_ be introduced as the last element in the list.

## Interaction Design

### Keyboard

File preview cards themselves are not focusable or interactive.

Their actions follow standard [button](../input/button) and [menu button](../input/menu-button) keyboard interaction.

### Screen Reader

Action buttons **must** have accessible names. They _should_ make it obvious to the user what file they are taking action on, either through an explicit aria-label or sufficient DOM context. For example, a cancel icon button could have an aria-label of "Cancel upload: my-document.jpg", or an aria-label of simply "Cancel upload" when nested within a list item whose accessible name includes "my-document.jpg."

### Pointer

File preview cards themselves are not interactive, but a user should be able to interact with any of the file preview card's action buttons using a pointer device.
