# ebay-file-input → evo-file-input

`EbayFileInput` is replaced by a compound component pattern. The free-form children API is replaced with named sub-components.

```tsx
import {
  EvoFileInput,
  EvoFileInputHeader,
  EvoFileInputDescription,
  EvoFileInputCTA,
} from "@evo-web/react/file-input";
```

**Before:**

```tsx
import {
  EbayFileInput,
  EbayFileInputHeader,
  EbayFileInputSubheader,
} from "@ebay/ui-core-react/ebay-file-input";

<EbayFileInput onInput={(event, { files }) => console.log(files)}>
  <EbayFileInputHeader>Upload your files</EbayFileInputHeader>
  <EbayFileInputSubheader>Supported formats: .jpg, .png</EbayFileInputSubheader>
  <span>Browse files</span>
</EbayFileInput>;
```

**After:**

```tsx
<EvoFileInput onChange={(e) => console.log(e.currentTarget.files)}>
  <EvoFileInputHeader>Upload your files</EvoFileInputHeader>
  <EvoFileInputDescription>
    Supported formats: .jpg, .png
  </EvoFileInputDescription>
  <EvoFileInputCTA>Browse files</EvoFileInputCTA>
</EvoFileInput>
```

**Prop changes:**

| ebayui-core-react            | evo-react                 | Notes                                                                                                    |
| ---------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------- |
| `EbayFileInputHeader`        | `EvoFileInputHeader`      | Global rename. Polymorphic `as` prop retained.                                                           |
| `EbayFileInputSubheader`     | `EvoFileInputDescription` | Renamed to follow the new named sub-component API.                                                       |
| Free `children` for CTA text | `EvoFileInputCTA`         | Wrap CTA content in `EvoFileInputCTA`. The label/input association is managed automatically via context. |
| `onInput(event, { files })`  | `onChange(event)`         | Replace with native React `onChange`. Access files via `event.currentTarget.files`.                      |
| `forwardedRef` / no ref      | `ref`                     | React 19 native ref forwarded to the `<input type="file">` element.                                      |

**Composition requirement:** Any CTA content that was previously a plain child (e.g. `<span>Browse files</span>`) must be wrapped in `<EvoFileInputCTA>`. The component renders the `<label htmlFor={inputId}>` association automatically from context.

**`onInput` removal:** The `onInput(event, { files })` callback with the wrapped second argument is gone. Use `onChange`:

```tsx
// before
onInput={(event, { files }) => handleFiles(files)}

// after
onChange={(event) => handleFiles(event.currentTarget.files)}
```
