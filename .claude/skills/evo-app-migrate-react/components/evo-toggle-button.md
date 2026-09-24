# EvoToggleButton

Replace `EbayToggleButton` with `EvoToggleButton` from `@evo-web/react/toggle-button`.

`pressed` remains controlled. `defaultPressed` is available when the button should manage its own pressed state. `onToggle(event, { pressed })` keeps its event and data shape; the native `onClick` callback also runs before the toggle, and `preventDefault()` cancels it. The button defaults to `type="button"`.

The `icon` prop now accepts an `EvoIcon*` element instead of an icon name string. `img`, `title`, `subtitle`, `layoutType`, and custom children retain their existing roles and HTML wrappers.

```tsx
// Before
<EbayToggleButton icon="settings-24" title="Buying preferences" />

// After
<EvoToggleButton
  icon={<EvoIconSettings24 />}
  title="Buying preferences"
  layoutType="list"
/>
```
