---
"@evo-web/marko": patch
---

Align the experimental Marko EvoCombobox filtering API with the React implementation.

- Replace `autocomplete` with `filterMethod`, defaulting to `"auto"`.
- Remove the `sticky` option prop; it has no replacement.
- Use `filterMethod="manual"` for application-filtered suggestions and `filterMethod="none"` for input-independent suggestions.
- Keep native browser autocomplete disabled.
