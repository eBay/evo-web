<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-icon-{name}
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.3.0
    </span>
</h1>

## evo-icon-{name} Usage

```marko
<evo-arrow-left-icon/>
```

The icon will include the actual SVG markup in the HTML and then reference the chosen icon. This is useful for applying customizations (like color). Behind the scenes, we determine all foreground icons that could be used at compile-time, and then include each icon stamp a single time at the top of the `<body>`. This is done by including the markup in mark tags in conjunction with inspecting the Node.js `require` cache. With this methodology, icons must be included statically in order to work with the stamper.
video

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-icon)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-icon)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-icon/examples)
