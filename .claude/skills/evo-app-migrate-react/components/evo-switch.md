# EvoSwitch

Replace `EbaySwitch` with `EvoSwitch` from `@evo-web/react/switch`.

`onChange` now receives the native React change event only. Read `event.currentTarget.value` and `event.currentTarget.checked` instead of the old second argument. `checked` and `defaultChecked` follow native input behavior, without the legacy effect that reset uncontrolled state when `checked` was omitted. `className` and `style` apply to the outer Skin wrapper, matching Evo Marko and `EvoCheckbox`; other native input attributes and the React 19 `ref` apply to the input.

```tsx
// Before
<EbaySwitch onChange={(event, { checked, value }) => update(checked, value)} />

// After
<EvoSwitch
  onChange={(event) => {
    const { checked, value } = event.currentTarget;
    update(checked, value);
  }}
/>
```

Give the switch a visible label, such as by wrapping it in `<label>`. Related switches also need a group label.
