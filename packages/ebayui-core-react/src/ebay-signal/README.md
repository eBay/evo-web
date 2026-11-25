# EbaySignal

## Documentation

[Storybook](https://opensource.ebay.com/evo-web/ebayui-core-react/main/?path=/docs/graphics-icons-ebay-signal--documentation)

## Props

| Name       | Type                                                                   | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tone`     | `"neutral" \| "information" \| "positive" \| "warning" \| "attention"` | Color tone. Takes precedence over `status`                                                                                                           |
| `emphasis` | `"default" \| "strong" \| "subtle"`                                    | Visual emphasis. Defaults to `"default"`                                                                                                             |
| `icon`     | `ReactNode`                                                            | Leading icon rendered before the label. Pass a 12px icon such as `<EbayIconPromotion12 />`; it is `aria-hidden` by default, so don't pass `a11yText` |
| `status`   | `"neutral" \| "trustworthy" \| "recent" \| "time-sensitive"`           | **Deprecated**, use `tone`. trustworthy → information, recent → positive, time-sensitive → attention, neutral → neutral                              |
