---
"@ebay/ebayui-core": minor
---

`ebay-icon` no longer hydrates. Server-rendered icons add no component markers, `data-marko-key` attributes or hydration data; the first icon of each name inlines its symbol in a `<defs data-ebay-icon>`, and a small browser script moves those symbols into one hidden sprite when the page loads. The icon tags' `Input` type moves from `component-browser` to `index.marko`. Flags no longer render their clip path a second time from a separate `def` file; it is already inside each flag's symbol.

Deprecated: the `rendered_ebay_icon_<name>` key `ebay-icon` sets on `$global` is internal and will be removed in the next major. Apps that read it to render a bare `<svg><use>` instead of an icon tag should render the icon tag, which no longer hydrates.
