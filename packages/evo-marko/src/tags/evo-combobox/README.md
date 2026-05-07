# evo-combobox

An accessible combobox input with an optional inline listbox of suggestions. Follows the [ARIA combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).

## Usage

```marko
<evo-combobox name="search" placeholder="Search…">
  <@option text="Option A"/>
  <@option text="Option B"/>
  <@option text="Option C"/>
</evo-combobox>
```

## Props

| Prop            | Type                      | Default       | Description                                                               |
| --------------- | ------------------------- | ------------- | ------------------------------------------------------------------------- |
| `value`         | `string`                  | —             | Current input value (two-way bindable via `:=`)                           |
| `open`          | `boolean`                 | —             | Controls listbox visibility (two-way bindable via `:=`)                   |
| `autocomplete`  | `"list" \| "none"`        | `"none"`      | `"list"` filters options to those matching the typed text                 |
| `listSelection` | `"manual" \| "automatic"` | `"automatic"` | Whether arrow-key navigation writes the highlighted option into the input |
| `floatingLabel` | `string`                  | —             | Floating label text                                                       |
| `borderless`    | `boolean`                 | —             | Removes the control border                                                |
| `fluid`         | `boolean`                 | —             | Stretches the combobox to fill its container                              |
| `strategy`      | `"fixed" \| "absolute"`   | —             | Listbox positioning strategy                                              |
| `disabled`      | `boolean`                 | —             | Disables the input                                                        |

All other attributes are forwarded to the underlying `<input>` element.

## Attribute tags

### `@option`

| Attr     | Type      | Description                                      |
| -------- | --------- | ------------------------------------------------ |
| `text`   | `string`  | Display text for the option (required)           |
| `value`  | `string`  | Optional value; defaults to `text`               |
| `sticky` | `boolean` | Always shown regardless of `autocomplete` filter |

### `@button`

Optional button rendered inside the control (e.g. clear or toggle button). Accepts all `<button>` attributes plus icon content.

```marko
<evo-combobox name="search">
  <@button
    aria-label="Clear"
    onClick() {
      /* … */
    }>
    <evo-icon-clear-16/>
  </@button>
  <@option text="Option A"/>
</evo-combobox>
```
