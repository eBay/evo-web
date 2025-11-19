# EbayFileInput

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/form-input-ebay-file-input--docs)

## Usage

### Import JS

```jsx harmony
import { EbayFileInput, EbayFileInputHeader, EbayFileInputSubheader } from "@ebay/ui-core-react/ebay-file-input";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/file-input";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/file-input.css";
```

```jsx harmony
<EbayFileInput onInput={(event, { files }) => console.log(files)}>
    <EbayFileInputHeader>Upload your files</EbayFileInputHeader>
    <EbayFileInputSubheader>Supported formats: .jpg, .png</EbayFileInputSubheader>
    <span>Click or drag files here to upload</span>
</EbayFileInput>
```

## Attributes

| Name      | Type     | Required | Description                                                                             | Data               |
| --------- | -------- | -------- | --------------------------------------------------------------------------------------- | ------------------ |
| `onInput` | Function | No       | Triggered when files are selected, providing the `files` list as part of the event data | `event, { files }` |
