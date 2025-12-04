---
"@ebay/ui-core-react": patch
---

Fix ebay-phone-input onInputChange not triggering when formatting is disturbed

The phone input component was not correctly triggering the onInputChange callback when
the user modified an already formatted phone number. This was because the mask utility
modified the input value directly after React's onChange had already fired with the
pre-masked value.

The fix adds a callback mechanism to the mask utility that gets called after the mask
has applied formatting to the input value. This ensures onInputChange always receives
the correctly formatted phone number, allowing the application to save the correct value.
