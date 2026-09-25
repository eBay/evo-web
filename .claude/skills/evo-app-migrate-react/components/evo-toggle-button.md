# ebay-toggle-button → evo-toggle-button

## Import path

```diff
- import { EbayToggleButton } from "@ebay/ui-core-react/ebay-toggle-button";
+ import {
+   EvoToggleButton,
+   EvoToggleButtonContent,
+   EvoToggleButtonIcon,
+   EvoToggleButtonImage,
+   EvoToggleButtonSubtitle,
+   EvoToggleButtonTitle,
+ } from "@evo-web/react/toggle-button";
```

## Composition and prop changes

```diff
- <EbayToggleButton
-   icon="settings-24"
-   title="Buying preferences"
-   subtitle="Use my saved preferences"
-   layoutType="list"
-   pressed={pressed}
-   onToggle={(event, { pressed }) => setPressed(pressed)}
- />
+ <EvoToggleButton
+   layoutType="list"
+   pressed={pressed}
+   onPressedChange={setPressed}
+ >
+   <EvoToggleButtonIcon>
+     <EvoIconSettings24 />
+   </EvoToggleButtonIcon>
+   <EvoToggleButtonContent>
+     <EvoToggleButtonTitle>Buying preferences</EvoToggleButtonTitle>
+     <EvoToggleButtonSubtitle>Use my saved preferences</EvoToggleButtonSubtitle>
+   </EvoToggleButtonContent>
+ </EvoToggleButton>
```

- Wrap `title` and `subtitle` in `EvoToggleButtonContent` as `EvoToggleButtonTitle` and `EvoToggleButtonSubtitle` children. Legacy custom `children` go inside `EvoToggleButtonContent`.
- Replace `icon` with `EvoToggleButtonIcon` wrapping an `EvoIcon*` element; icon name strings are no longer accepted.
- Replace `img={{ src, alt, fillPlacement }}` with `<EvoToggleButtonImage src alt fillPlacement />`. Without `fillPlacement`, remaining attributes go to the `<img>`; with it, they go to the background image `<span>`.
- Place the icon or image before `EvoToggleButtonContent`, and use only one of them.
- Replace `onToggle(event, { pressed })` with `onPressedChange(pressed)`. Use `onClick` when the event is needed; it runs first, and `preventDefault()` cancels the toggle.
- `pressed` remains controlled. Use `defaultPressed` when the button should manage its own pressed state.
- The button defaults to `type="button"`.
- Omit `layoutType` for the minimal layout. `EvoToggleButton` no longer adds `toggle-button--minimal-layout` by default; the class is only added when `layoutType="minimal"` is passed.
- `title` on `EvoToggleButton` is now the native HTML attribute, not the visible label.
- Content, title, subtitle, and icon wrappers render `<span>` elements, following Skin. Update selectors that target the legacy `<p>` or `<div>` wrappers.
