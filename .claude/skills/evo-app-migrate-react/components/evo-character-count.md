# ebay-character-count → evo-character-count

## Import path

```diff
- import { EbayCharacterCount } from "@ebay/ui-core-react/ebay-character-count";
+ import { EvoCharacterCount } from "@evo-web/react/character-count";
```

## Prop changes

| ebayui-core-react | evo-react  | Notes                                                                                                                             |
| ----------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------- |
| string `value`    | `text`     | Automatic counts use grapheme clusters.                                                                                           |
| numeric `value`   | `count`    | Use when the count is calculated externally.                                                                                      |
| `clippedText`     | `a11yText` | Defaults to `"characters used"`. Pass `null` only when alternative accessibility information is present.                          |
| `onChange`        | `inputRef` | Removes the 500ms callback debounce. The associated input receives `aria-live="polite"` when `count > max` and `"off"` otherwise. |

## Basic usage

```diff
- <EbayCharacterCount
-   value={text}
-   max={120}
-   clippedText="characters remaining"
- />
+ <EvoCharacterCount
+   text={text}
+   max={120}
+   a11yText="characters remaining"
+ />
```

For a numeric count, replace `value={count}` with `count={count}`.

## Associated input

Replace the legacy `onChange` callback and manually managed `aria-live` state with an input ref.

### Before

```tsx
const [text, setText] = useState("");
const [inputAriaLive, setInputAriaLive] = useState<"polite" | "off">("off");

<input
  value={text}
  aria-label="Message"
  aria-live={inputAriaLive}
  aria-describedby="character-count"
  onChange={(event) => setText(event.currentTarget.value)}
/>
<EbayCharacterCount
  id="character-count"
  value={text}
  max={120}
  clippedText="characters remaining"
  onChange={({ inputAriaLive }) => setInputAriaLive(inputAriaLive)}
/>
```

### After

```tsx
const [text, setText] = useState("");
const inputRef = useRef<HTMLInputElement>(null);

<input
  ref={inputRef}
  value={text}
  aria-label="Message"
  aria-describedby="character-count"
  onChange={(event) => setText(event.currentTarget.value)}
/>
<EvoCharacterCount
  id="character-count"
  text={text}
  max={120}
  a11yText="characters remaining"
  inputRef={inputRef}
/>
```

## Custom content

Use the exported `countCharacters()` utility when custom children need the grapheme count.

```tsx
import {
  EvoCharacterCount,
  countCharacters,
} from "@evo-web/react/character-count";

const count = countCharacters(text);

<EvoCharacterCount count={count} max={120}>
  {count} of 120 ({120 - count} remaining)
</EvoCharacterCount>;
```
