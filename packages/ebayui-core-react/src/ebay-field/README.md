# EbayField

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-input-ebay-field--default-inline)

## Import JS

```jsx harmony
import { EbayField, EbayLabel, EbayFieldDescription } from "@ebay/ui-core-react/ebay-field";
```

## Import following styles from SKIN

```jsx harmony
import "@ebay/skin/field";
```

## Import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/field.css";
```

## Usage

```
yarn add @ebay/ui-core-react
```

```jsx harmony
<EbayField layout="block">
    <EbayLabel stacked htmlFor="field1">
        Label 1
    </EbayLabel>
    <EbayTextbox placeholder="placeholder text" id="field1" />
    <EbayFieldDescription type="confirmation" position="below">
        Some description Text
    </EbayFieldDescription>
</EbayField>
```

## EbayField Attributes

| Name     | Type   | Stateful | Required | Description                 |
| -------- | ------ | -------- | -------- | --------------------------- |
| `layout` | String | No       | No       | `block`, `inline` (default) |

## EbayLabel Attributes

| Name       | Type    | Stateful | Required | Description                                           |
| ---------- | ------- | -------- | -------- | ----------------------------------------------------- |
| `stacked`  | Boolean | No       | No       | display label above the field if true                 |
| `required` | Boolean | No       | No       | indicates the field is required if true               |
| `position` | String  | No       | No       | `start` (default) or `end` position towards the input |

## EbayFieldDescription Attributes

| Name       | Type   | Stateful | Required | Description                                                    |
| ---------- | ------ | -------- | -------- | -------------------------------------------------------------- |
| `type`     | String | No       | No       | `confirmation`, `default`(Default), `attention`, `information` |
| `position` | String | No       | No       | `below` (Default), `inline`, `above`                           |
