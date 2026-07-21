# EvoCharacterCount

- Rename string `value` to `text`.
- Replace numeric `value` with `count`.
- Rename `clippedText` to `a11yText`; it defaults to `"characters used"` and accepts `null` only when alternative accessibility information is present.
- Replace `onChange` and its 500ms debounce with `inputRef`; the associated input or textarea receives `aria-live="polite"` when `count > max` and `"off"` otherwise.
- Automatic counts use grapheme clusters. Use the exported `countCharacters()` utility with custom children when the numeric count is needed for custom text.
