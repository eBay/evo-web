<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-{name}-icon
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.3.0
    </span>
</h1>

## ebay-{name}-icon Usage

```marko
<ebay-arrow-left-icon/>
```

The icon renders an inline `<svg>` that references its symbol with `<use>`, so it can be styled with CSS (like `color`). The first icon of each name in a server render includes that symbol once; in the browser, every symbol is kept in one hidden `<svg>` at the top of the `<body>`.
video

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-ebay-icon)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-ebay-icon)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-icon/examples)
