---
"@ebay/ebayui-core": minor
"@evo-web/marko": minor
---

Each component's types ship as `index.d.marko.ts` beside its template, in place of `index.d.marko`. A project type checking against them needs `@marko/language-tools` 2.9 or later (`@marko/type-check` 3.3 or later, or a current Marko VS Code extension); `@evo-web/marko`'s generic components (eg `evo-listbox-button`) also need marko 6.5 or later. The `marko` peer range rises to `^5.43.0` for `@ebay/ebayui-core` and `^5.43.0 || ^6.5.0` for `@evo-web/marko`, the first versions whose types these declarations name.
