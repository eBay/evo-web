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

* A file selector button, with text like "Browse..." or "Choose File"
* Text displaying the selected file name(s), or "No file(s) selected"

To provide a larger, more prominent interaction target, authors _may_ visually obscure these elements in favor of a visual container that includes the field label, helper text, and/or additional visual elements.

* If the default file selector button is obscured, the container **must** display a clear call to action. This could be the field's label, e.g. "Browse files."
* If the default selected file display is obscured, there **must** be another visual representation of the files to be submitted. [File preview cards](../messaging/file-preview-card) are one way to accomplish this.

Find implementation details in the [Developer Guide](#developer-guide).

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



### Developer Guide

HTML gives us a native file input that is keyboard and screenreader accessible.

#### Base code

At its simplest, the only code you need for file input is a label and an input, including the `multiple` attribute if the user may upload multiple files:

<pre class="language-html"><code class="lang-html"><strong>&#x3C;label for="documents">Browse files&#x3C;/label>
</strong>&#x3C;input id="documents" type="file" multiple />
</code></pre>

This code results in a label followed by the browser's default file input display:

<div align="center"><figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FcRXkmqX2I9vBZxY1iz3l%2FScreenshot%202025-02-11%20at%2017.05.34.png?alt=media&#x26;token=9effb53a-746d-40ec-be99-6be8531847c9" alt=""><figcaption><p>Chrome's default file input display, with a "Choose File" button followed by text that either says "No file(s) chosen" or lists out the names of the selected file(s)</p></figcaption></figure></div>



#### Larger interactive container

What if you want a larger interactive container? Using CSS grids, you can overlap a file input with related visual elements by placing them in the same grid area. This maintains proper semantics while providing a more prominent interaction target and larger drop zone.

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FikdgOI1uE5ZogFLwNf5m%2FScreenshot%202025-02-11%20at%2017.05.29.png?alt=media&#x26;token=a96b1689-f34a-4534-ab3a-5df144ba7eca" alt=""><figcaption><p>File input container with "Drag and drop files" heading, helper text explaining file constraints, and a "Browse files" label</p></figcaption></figure>

```html
<div class="file-input">
  <div class="file-input__instructions">
   <h4>Drag and drop files</h4>
   <span id="document-reqs">Up to 10MB per file in JPG, JPEG, PNG, MP4.</span>
   <label for="documents">Browse files</label>
  </div>
  <input
    id="documents"
    type="file"
    aria-describedby="document-reqs"
    class="file-input__input"
    multiple
  />
</div>
```

<pre class="language-css"><code class="lang-css"><strong>// Container grid with single template area
</strong><strong>.file-input {
</strong>    display: grid;
    grid-template-areas: "center";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}

// Instructions and input positioned in same grid area
.file-input__instructions,
.file-input__input {
  grid-area: center;
}

.file-input__instructions {
  // Instructions layered on top of input
  z-index: 1;
  background-color: var(--background-primary);
  border: 1px dashed;
    
  // Any pointer interactions on instructions
  // get passed through to the input below it
  pointer-events: none;
}
</code></pre>

View a fully styled example in our [eBay Skin CSS framework](https://opensource.ebay.com/skin/component/file-input/).



### Further Reading

* [MDN Web Docs: input type="file"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
* [MDN Web Docs: ::file-selector-button](https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button)



