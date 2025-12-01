# File Input Accessibility

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FejZoMImZFZSwDv534z7m%2FScreenshot%202025-02-11%20at%2014.00.06.png?alt=media&#x26;token=9b8b76e5-132d-4e97-bdd0-158aa7f8b3f7" alt="Full-width rounded rectangle with dashed border. Inside the rectangle are a large upload icon and some text. Heading text reads &#x22;Drag and drop files,&#x22; followed by a subheader that reads &#x22;Up to 10MB per file in JPG, JPEG, PNG, MP4&#x22;, and underlined text that reads &#x22;Browse files&#x22;."><figcaption><p>File upload container that acts as both a drop zone and a file input field</p></figcaption></figure>

### Introduction

File input is an input field for selecting one or more files. It often pairs with [file preview cards](../messaging/file-preview-card) to implement a complete file upload pattern with visual previews of the files that will be submitted.

### Working Example

View a fully styled example in our [eBay Skin CSS framework](https://opensource.ebay.com/skin/component/file-input/).

### Best Practices

File input **must** have an accessible label, such as "Browse files."

File input _should_ support drag-and-drop, to allow for multiple interaction options. Most browsers now support drag-and-drop for file input fields by default.

It is recommended to include helper text to inform the user about the availability of drag-and-drop and any constraints on file size or type.

#### Visual Display

By default, browsers display file input fields as a composite of two elements:

- A file selector button, with text like "Browse..." or "Choose File"
- Text displaying the selected file name(s), or "No file(s) selected"

To provide a larger, more prominent interaction target, authors _may_ visually obscure these elements in favor of a visual container that includes the field label, helper text, and/or additional visual elements.

- If the default file selector button is obscured, the container **must** display a clear call to action. This could be the field's label, e.g. "Browse files."
- If the default selected file display is obscured, there **must** be another visual representation of the files to be submitted. [File preview cards](../messaging/file-preview-card) are one way to accomplish this.

### Interaction Design

#### Keyboard

File input **must** be keyboard focusable (unless disabled). Any custom styling **must** ensure a clear focus state distinct from unfocused state.

When the file input has keyboard focus, pressing `ENTER`or `SPACEBAR` **must** open the operating system's native file browser, where the user can use their operating system's typical file browsing controls to navigate and select file(s).

#### Screen reader

The file input **must** announce its label to screen reader users.

The file input **must** announce its role to screen reader users.

#### Pointer

Clicking the file input field or its label **must** open the operating system's native file browser.

It is recommended that file input also support drag-and-drop. The entire file input container should be treated as a drop zone; dragging and dropping files directly onto the file input field's container _should_ select the file(s) for upload.

### Further Reading

- [MDN Web Docs: input type="file"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
- [MDN Web Docs: ::file-selector-button](https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button)
