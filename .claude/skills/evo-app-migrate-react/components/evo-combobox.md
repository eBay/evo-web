# ebay-combobox → evo-combobox

EvoCombobox is a textbox with text suggestions. It renders its input and listbox internally. Pass `EvoComboboxOption` components directly as children and replace `EbayComboboxButton` with the root `postfix` prop.

## Composition

**Before:**

```tsx
<EbayCombobox>
  <EbayComboboxButton onClick={clear}>
    <EbayIconClear16 />
  </EbayComboboxButton>
  <EbayComboboxOption text="August Campaign" value="august-campaign" />
</EbayCombobox>
```

**After:**

```tsx
<EvoCombobox
  postfix={{
    icon: <EvoIconClear16 />,
    buttonProps: { a11yText: "Clear", onClick: clear },
  }}
>
  <EvoComboboxOption text="August Campaign" />
</EvoCombobox>
```

Options render their `text` and do not accept `children`. The new `sticky` prop keeps an option visible when `autocomplete="list"` filters other options.

## Value changes

Replace `onInputChange` with `onValueChange`. It receives the displayed string after typing or committed option selection.

```tsx
<EvoCombobox value={value} onValueChange={setValue}>
  <EvoComboboxOption text="August Campaign" />
</EvoCombobox>
```

The legacy blur-based `onChange` behavior is removed; use native `onBlur` when needed. Native `onBlur` runs after Evo's internal focus-leave processing, so controlled consumers may restore a value in their blur handler without the wrapper overwriting it afterward.

EvoCombobox represents textbox text, not selected option identity. Text suggestions and free-form autocomplete can migrate to the text-only API. Legacy uses of option `value`, root `onSelect`, or separate ID and label state are entity selectors; entity selectors have no direct Evo replacement yet and require manual engineering review. Agents must not remove identity handling automatically.

## Open state

Rename open-state props and callbacks:

```diff
- expanded={expanded}
- onExpand={() => setExpanded(true)}
- onCollapse={() => setExpanded(false)}
+ open={open}
+ onOpenChange={setOpen}
```

Use `defaultOpen` for an initially open uncontrolled combobox. The new `strategy` prop accepts `"absolute"` or `"fixed"` and defaults to `"absolute"`.

## Removed props

- `dropdownRef`: use the native React 19 input `ref`; listbox refs are internal.
- `opaqueLabel`: not supported by Evo Marko or Evo React input conventions.
- `onFloatingLabelInit`: the floating label no longer has an imperative initialization phase.
- `onSelect`: use `onValueChange` for committed textbox value changes.
- Option `value`: Text suggestion migrations should use the option's `text`; legacy machine-readable values identify an entity selector and require manual engineering review.
- Option `selected`: EvoCombobox does not manage committed option identity; do not remove legacy identity handling automatically.
