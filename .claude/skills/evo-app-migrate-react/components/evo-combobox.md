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

The legacy blur-based `onChange` behavior is removed; use native `onBlur` when needed. Root `onSelect` is removed because this component does not manage selected option identity.

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
- Option `value`: EvoCombobox does not manage machine-readable selection identity.
- Option `selected`: selection state is managed by `EvoCombobox`.
