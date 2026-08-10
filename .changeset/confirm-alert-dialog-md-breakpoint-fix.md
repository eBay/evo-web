---
"@ebay/skin": patch
---

fix(confirm-dialog, alert-dialog): remove responsive size jump between 768px and 1024px

`.confirm-dialog__window` and `.alert-dialog__window` scaled to `calc(88% - var(--spacing-400))` at the `MD` (768px) breakpoint, then snapped down to the fixed `var(--dialog-lightbox-max-width)` (616px) at `LG` (1024px). Between those widths the dialog grew close to 80%+ of the viewport before jumping back down, leaving large empty margins around the fixed-width content inside. Neither dialog has a wide/size variant, so the intermediate percentage step served no purpose. Both dialogs now go straight to the fixed lightbox max-width at `MD`.
