<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-signal
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

```marko
<ebay-signal tone="information">Information</ebay-signal>
<ebay-signal tone="positive" emphasis="strong">
    <@icon>
        <ebay-promotion-12-icon/>
    </@icon>
    Positive
</ebay-signal>
```

## Attributes

| Name       | Type                                                                   | Required | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| `tone`     | `"neutral" \| "information" \| "positive" \| "warning" \| "attention"` | No       | Color tone. Takes precedence over `status`                                                           |
| `emphasis` | `"default" \| "strong" \| "subtle"`                                    | No       | Visual emphasis. Defaults to `"default"`                                                             |
| `status`   | `"neutral" \| "trustworthy" \| "recent" \| "time-sensitive"`           | No       | **Deprecated**, use `tone`. trustworthy → information, recent → positive, time-sensitive → attention |

## Attribute Tags

| Name    | Description                                                                                                                                                       |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@icon` | Optional leading icon, rendered before the label. Pass a 12px icon such as `<ebay-promotion-12-icon/>`, which is `aria-hidden` by default (don't pass `a11yText`) |

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-ebay-signal)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-ebay-signal)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-signal/examples)
