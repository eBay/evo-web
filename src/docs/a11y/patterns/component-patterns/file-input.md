# File Input Accessibility

## Best Practices

File input **must** have an accessible label, such as "Browse files."

File input _should_ support drag-and-drop, to allow for multiple interaction options. Most browsers now support drag-and-drop for file input fields by default.

It is recommended to include helper text to inform the user about the availability of drag-and-drop and any constraints on file size or type.

### Visual Display

By default, browsers display file input fields as a composite of two elements:

- A file selector button, with text like "Browse..." or "Choose File"
- Text displaying the selected file name(s), or "No file(s) selected"

To provide a larger, more prominent interaction target, authors _may_ visually obscure these elements in favor of a visual container that includes the field label, helper text, and/or additional visual elements.

- If the default file selector button is obscured, the container **must** display a clear call to action. This could be the field's label, e.g. "Browse files."
- If the default selected file display is obscured, there **must** be another visual representation of the files to be submitted. [File preview cards](../messaging/file-preview-card) are one way to accomplish this.

## Interaction Design

### Keyboard

File input **must** be keyboard focusable (unless disabled). Any custom styling **must** ensure a clear focus state distinct from unfocused state.

When the file input has keyboard focus, pressing `ENTER`or `SPACEBAR` **must** open the operating system's native file browser, where the user can use their operating system's typical file browsing controls to navigate and select file(s).

### Screen reader

The file input **must** announce its label to screen reader users.

The file input **must** announce its role to screen reader users.

### Pointer

Clicking the file input field or its label **must** open the operating system's native file browser.

It is recommended that file input also support drag-and-drop. The entire file input container should be treated as a drop zone; dragging and dropping files directly onto the file input field's container _should_ select the file(s) for upload.

## Further Reading

- [MDN Web Docs: input type="file"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
- [MDN Web Docs: ::file-selector-button](https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button)
