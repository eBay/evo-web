---
"@ebay/skin": patch
"@ebay/ebayui-core": patch
"@ebay/ui-core-react": patch
"@evo-web/marko": patch
"@evo-web/react": patch
---

rebuild all packages with the updated toolchain (babel 8, typescript 6, vite 8, cssnano 9, storybook 10.6). Skin's dist CSS is re-minified with the same styles — selector lists are kept in expanded form (no :is() collapsing) and :dir() selectors are preserved rather than lowered to a :lang() approximation, so attribute-based RTL styling keeps working. evo-menu-button narrows its focus target with an instanceof check (behavior unchanged), and the @internal shim packages in ebayui-core expose their type declarations through their exports maps
