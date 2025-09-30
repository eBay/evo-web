# EbayToggleButtonGroup

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/buttons-ebay-toggle-button-group--docs)

## Install

```
yarn add @ebay/ui-core-react @ebay/skin
```

## Usage

```
import React from 'react'
import { EbayToggleButton } from '@ebay/ui-core-react/ebay-toggle-button'
import { EbayToggleButtonGroup } from '@ebay/ui-core-react/ebay-toggle-button-group'
import '@ebay/skin/toggle-button-group'

export const Example = () => (
    <EbayToggleButtonGroup onChange={action('change')} {...args}>
        <EbayToggleButton pressed title="Button1" />
        <EbayToggleButton>Child Button</EbayToggleButton>
        <EbayToggleButton title="Button2" subtitle="subtitle" />
        <EbayToggleButton
            icon={<EbayIconSettings24 />}
            title="Button3"
            subtitle="subtitle"
        ></EbayToggleButton>
        <EbayToggleButton
            title="Button4"
            subtitle="subtitle"
            img={{
                src: 'https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg',
                alt: 'image alt'
            }}
        ></EbayToggleButton>
    </EbayToggleButtonGroup>
);
```

## EbayToggleButtonGroup Props

| Name          | Type     | Required | Description                                                                  |
| ------------- | -------- | -------- | ---------------------------------------------------------------------------- |
| `variant`     | enum     | No       | Can be `checkbox` (default), `radio` or `radio-toggle`                       |
| `layoutType`  | enum     | No       | Can be `minimal` (default), `list` or `gallery`                              |
| `a11yText`    | string   | No       | Accessibility text for the group. Cannot be used together with `a11yLabelId` |
| `a11yLabelId` | string   | No       | Required for a11y compliance. Cannot be used together with a11yText          |
| `columnsMin`  | number   | No       | Preferred minimum number of columns for smallest container/screen (1-3)      |
| `columnsXS`   | number   | No       | Preferred minimum number of columns within extra small containers.           |
| `columnsSM`   | number   | No       | Preferred minimum number of columns within small containers.                 |
| `columnsMD`   | number   | No       | Preferred minimum number of columns within medium containers.                |
| `columnsXL`   | number   | No       | Preferred minimum number of columns within extra large containers.           |
| `onChange`    | Function | No       | Triggered when the pressed state changes: { originalEvent, pressed }         |
