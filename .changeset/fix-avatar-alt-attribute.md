---
"@ebay/ebayui-core": patch
"@evo-web/marko": patch
"@ebay/ui-core-react": patch
---

fix(avatar): add alt="" to img for accessibility

Fixed accessibility issue where avatar images were announced twice by assistive technologies. The img element inside role="img" containers now has alt="" to prevent double announcement.
