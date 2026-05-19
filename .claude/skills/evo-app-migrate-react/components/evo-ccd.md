# ebay-ccd → evo-ccd

**Before:**

```tsx
import { EbayCCD } from "@ebay/ebayui-core-react/ebay-ccd";

<EbayCCD
  chargerIcon="included"
  min="1000"
  max="2000"
  units="W"
  secondaryType="usbpd"
  secondaryText="USB PD"
  a11yUnits="watts"
  a11yText="Charger included. 1000 - 2000 Watts. USB PD"
/>;
```

**After:**

```tsx
import { EvoCCD } from "@evo-web/react/ccd";

<EvoCCD
  chargerIcon="included"
  min="1000"
  max="2000"
  units="W"
  secondaryType="usbpd"
  a11yText="Charger included. 1000 - 2000 Watts. USB PD"
/>;
```

**Prop changes:**

| ebayui-core-react                    | evo-react                  | Notes                                                                                                    |
| ------------------------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------- |
| `secondaryText`                      | _(removed)_                | Secondary label is hardcoded to `"USB PD"`. Remove this prop.                                            |
| `a11yUnits`                          | _(removed)_                | The accessible label is no longer auto-computed. Pass the full string via `a11yText` instead.            |
| `a11yText?: string`                  | `a11yText: string \| null` | Now required. Pass `null` only if alternative accessibility information is present on a wrapper element. |
| `secondaryType="none"`               | _(omit the prop)_          | The `"none"` sentinel is removed. Omit `secondaryType` entirely to disable USB PD display.               |
| `max`, `min`, `chargerIcon`, `units` | unchanged                  | No changes needed.                                                                                       |
