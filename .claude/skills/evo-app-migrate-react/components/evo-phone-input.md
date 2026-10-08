# EvoPhoneInput

Phone Input has no Evo Marko equivalent. It composes `EvoInput` and `EvoListboxButton`, keeps the country masks and locale sorting, and renders CSS flags inside its selector without requiring the parked public Flag component.

```diff
- <EbayPhoneInput
-   countryCode="us"
-   floatingLabel="Phone number"
-   onInputChange={(event, data) => save(data.rawValue)}
- />
+ <EvoPhoneInput
+   defaultCountryCode="US"
+   floatingLabel="Phone number"
+   onValueChange={(phone) => save(phone.rawValue)}
+ />
```

`value` and `defaultValue` still accept digits or formatted numbers. `onValueChange` receives `{ value, rawValue, callingCode, countryCode }` after number edits or country changes. The native `onChange`, focus, blur, and keyboard handlers receive their usual React events without a second metadata argument. `onInputChange` is removed.

`countryCode` is a controlled ISO region value. Use `defaultCountryCode` for an initial uncontrolled selection and `onCountryCodeChange(code)` for changes. `open`, `defaultOpen`, and `onOpenChange` replace `onExpand` and `onCollapse` for the country popup. `countryName` lets its hidden native select submit the ISO code.

Rename `readonly` to native `readOnly`; replace `invalid` with `aria-invalid`. `size="large"` and `fluid` apply existing Skin treatments. `ref` now points to the native phone input. Provide `floatingLabel`, `aria-label`, or an external label to name the input. The country button has a localized accessible name based on `a11yCountryText` and the selected country.
