# EbayCCD

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/graphics-icons-ebayccd--default)

## Usage

### Import JS

```jsx harmony
import { EbayCCD } from "@ebay/ui-core-react/ebay-ccd";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/ccd";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/ccd.css";
```

```jsx harmony
<EbayCCD chargerIcon="included" max="2000" min="1000" units="W" secondaryType="usbpd" secondaryText="USB PD" />
```

## Attributes

| Name            | Type   | Required | Description                                                | Data                       |
| --------------- | ------ | -------- | ---------------------------------------------------------- | -------------------------- |
| `max`           | String | No       | The maximum range                                          |                            |
| `min`           | String | No       | The minimum range                                          |                            |
| `chargerIcon`   | String | No       | Toggles the charger icon visible or if its included or not | `included`, `not-included` |
| `units`         | String | No       | The units of the rating                                    |                            |
| `secondaryType` | String | No       | Toggles the usbpd secondary text                           | `none`, `usbpd`            |
| `secondaryText` | String | No       | The text used for secondary text                           |                            |
| `a11yUnits`     | String | No       | The units for the rating used for a11y                     |                            |
| `a11yText`      | String | No       | Overrides the default aria-label text                      |                            |
