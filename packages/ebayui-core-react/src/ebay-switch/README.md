# EbaySwitch

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-input-ebay-switch--default-switch-button)

## Import JS

```jsx harmony
import { EbaySwitch } from "@ebay/ui-core-react/ebay-switch";
```

## Import following styles from SKIN

```jsx harmony
import "@ebay/skin/switch";
```

## Usage

```
yarn add @ebay/ui-core-react
```

```jsx harmony
<span className="field">
    <EbaySwitch value="123" id="switch-1" />
    <label className="field__label field__label--end" htmlFor="switch-1">
        Remember me
    </label>
</span>
```

## Attributes

| Name       | Type    | Stateful | Description |
| ---------- | ------- | -------- | ----------- |
| `disabled` | Boolean | No       |             |

## Callbacks

| Name       | Data                                                | Description         |
| ---------- | --------------------------------------------------- | ------------------- |
| `onChange` | `(ChangeEvent, { value: string, checked: boolean }` | Triggered on change |

Note: For this component, `className`/`style` are applied to the root tag, while all other HTML attributes are applied to the `input` tag.
