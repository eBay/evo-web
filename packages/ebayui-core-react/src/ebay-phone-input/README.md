# EbayPhoneInput

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-input-ebay-phone-input--default)

## Usage

### Import JS

```jsx harmony
import { EbayPhoneInput } from "@ebay/ui-core-react/ebay-phone-input";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/phone-input";
import "@ebay/skin/listbox-button";
import "@ebay/skin/textbox";
import "@ebay/skin/flag";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/phone-input.css";
import "@ebay/skin/listbox-button.css";
import "@ebay/skin/textbox.css";
import "@ebay/skin/flag.css";
```

## Examples

### Basic usage

```jsx harmony
<EbayPhoneInput
    countryCode="us"
    floatingLabel="Phone Number"
    value=""
    onInputChange={(event, data) => console.log(data)}
/>
```

### With localization

```jsx harmony
<EbayPhoneInput
    countryCode="us"
    locale="en-US"
    floatingLabel="Phone Number"
    value=""
    onInputChange={(event, data) => console.log(data)}
/>
```

### Disabled state

```jsx harmony
<EbayPhoneInput countryCode="us" floatingLabel="Phone Number" value="(555) 123-4567" disabled />
```

### Read-only state

```jsx harmony
<EbayPhoneInput countryCode="us" floatingLabel="Phone Number" value="(555) 123-4567" readonly />
```

### Invalid state

```jsx harmony
<EbayPhoneInput countryCode="us" floatingLabel="Phone Number" value="invalid" invalid />
```

## Attributes

| Name            | Type     | Required | Description                                                  | Data                                                          |
| --------------- | -------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| `countryCode`   | String   | No       | Initial country code (2-letter ISO country code)             | `"us"`, `"ca"`, `"gb"`, etc.                                  |
| `value`         | String   | No       | The phone number value                                       |                                                               |
| `locale`        | String   | No       | Locale for country name localization                         | `"en-US"`, `"fr-FR"`, etc. (defaults to `navigator.language`) |
| `floatingLabel` | String   | No       | Floating label text                                          |                                                               |
| `disabled`      | Boolean  | No       | Whether the component is disabled                            | `false` (default)                                             |
| `readonly`      | Boolean  | No       | Whether the component is read-only                           | `false` (default)                                             |
| `invalid`       | Boolean  | No       | Whether the component is in invalid state                    | `false` (default)                                             |
| `onFocus`       | Function | No       | Triggered on focus                                           | `(event: FocusEvent, data: PhoneInputEvent)`                  |
| `onBlur`        | Function | No       | Triggered on blur                                            | `(event: FocusEvent, data: PhoneInputEvent)`                  |
| `onInputChange` | Function | No       | Triggered on input change (country selection or phone input) | `(event: ChangeEvent, data: PhoneInputEvent)`                 |
| `onChange`      | Function | No       | Triggered on change (country selection or phone input)       | `(event: ChangeEvent, data: PhoneInputEvent)`                 |
| `onKeyDown`     | Function | No       | Triggered on key down                                        | `(event: KeyboardEvent, data: PhoneInputEvent)`               |
| `onKeyPress`    | Function | No       | Triggered on key press                                       | `(event: KeyboardEvent, data: PhoneInputEvent)`               |
| `onKeyUp`       | Function | No       | Triggered on key up                                          | `(event: KeyboardEvent, data: PhoneInputEvent)`               |
| `onExpand`      | Function | No       | Triggered when country dropdown expands                      | `()`                                                          |
| `onCollapse`    | Function | No       | Triggered when country dropdown collapses                    | `()`                                                          |

## Event Data

All input events (`onFocus`, `onBlur`, `onChange`, `onKeyDown`, `onKeyPress`, `onKeyUp`) receive a `PhoneInputEvent` object as the second parameter:

```typescript
interface PhoneInputEvent {
    value?: string; // Formatted phone number
    rawValue?: string; // Raw digits only
    callingCode?: string; // Country calling code (e.g., "1", "44")
    countryCode?: string; // Country code (e.g., "US", "GB")
}
```
