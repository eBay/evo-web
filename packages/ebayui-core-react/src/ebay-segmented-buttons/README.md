# EbaySegmentedButtons

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/buttons-ebay-segmented-buttons--default)

## Install

```
yarn add @ebay/ui-core-react @ebay/skin
```

## Usage

```
import React from 'react'
import { EbaySegmentedButtons, EbaySegmentedButton as Button } from '@ebay/ui-core-react/ebay-segmented-buttons'
import { EbayIcon } from '@ebay/ui-core-react/ebay-icon'
import '@ebay/skin/segmented-buttons'

export const Example = () => (
    <EbaySegmentedButtons
        size="large"
        onChange={(e, { i, value }) => console.log('Selected:', i, value)}
    >
        <Button value="1" selected>Button 1</Button>
        <Button value="2">Button 2</Button>
        <Button value="3"><EbayIconSettings24 /> Button 3</Button>
    />
);
```

## EbaySegmentedButtons Props

| Name       | Type     | Required | Description                                                                            |
| ---------- | -------- | -------- | -------------------------------------------------------------------------------------- |
| `size`     | enum     | No       | Can be `regular` (default) or `large`                                                  |
| `onChange` | Function | No       | props: (e: event, { index: number, value: string), triggered on selected button change |

## EbaySegmentedButton Props

| Name       | Type    | Required | Description                               |
| ---------- | ------- | -------- | ----------------------------------------- |
| `value`    | String  | No       | the value to use with `onChange` callback |
| `selected` | Boolean | No       | Whether or not the button is selected     |
