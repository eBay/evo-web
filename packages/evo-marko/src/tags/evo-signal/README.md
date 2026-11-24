<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-signal
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

```marko
<evo-signal tone="information">Information</evo-signal>
<evo-signal tone="positive" emphasis="strong">
  <@icon>
    <evo-icon-promotion-12/>
  </@icon>
  Positive
</evo-signal>
```

## Attributes

| Name       | Type                                                                   | Description                                                                                                             |
| ---------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `tone`     | `"neutral" \| "information" \| "positive" \| "warning" \| "attention"` | Color tone. Takes precedence over `status`                                                                              |
| `emphasis` | `"default" \| "strong" \| "subtle"`                                    | Visual emphasis. Defaults to `"default"`                                                                                |
| `status`   | `"neutral" \| "trustworthy" \| "recent" \| "time-sensitive"`           | **Deprecated**, use `tone`. trustworthy → information, recent → positive, time-sensitive → attention, neutral → neutral |

## Attribute Tags

| Name    | Description                                                                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@icon` | Optional leading icon rendered before the label. Pass a 12px icon such as `<evo-icon-promotion-12/>`; it is `aria-hidden` by default, so don't pass `a11yText` |

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-signal)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-signal)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-signal/examples)
