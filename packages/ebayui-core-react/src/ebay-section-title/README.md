# EbaySectionTitle

## Install

```shell
yarn add @ebay/ui-core-react
```

## Usage

### Import JS

```jsx
import {
    EbaySectionTitle,
    EbaySectionTitleTitle as Title,
    EbaySectionTitleSubtitle as Subtitle,
} from "@ebay/ui-core-react/ebay-section-title";
```

### Import styles from Skin

```jsx
import "@ebay/skin/section-title";
```

### or if using CSS/SCSS

```jsx
import "@ebay/skin/section-title.css";
```

```jsx
<EbaySectionTitle>Today's Deals – All With Free Shipping</EbaySectionTitle>

<EbaySectionTitle href="https://www.ebay.com" ctaText="See All">
    <Title>Today's Deals – All With Free Shipping</Title>
    <Subtitle>Plus, guaranteed best prices.</Subtitle>
</EbaySectionTitle>
```

## EbaySectionTitle Props

| Name      | Type   | Stateful | Required | Description                                                                                             |
| --------- | ------ | -------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `ctaText` | string | No       | No       | URL text. Optional content to be displayed next to title. `href` is required when using this attribute. |
| `href`    | string | No       | No       | URL. Title content and optional CTA content will link to this. Populating `cta-text` is optional.       |

## Nested Components

| Name       | Required | Description                                                                              |
| ---------- | -------- | ---------------------------------------------------------------------------------------- |
| `title`    | No       | The main title content to be displayed. Title tag is required when using other sub-tags. |
| `subtitle` | No       | The subtitle content to be displayed                                                     |
| `info`     | No       | Placeholder for `<EbayInfotip>` component                                                |
| `overflow` | No       | Placeholder for `<EbayMenuButton>` component                                             |

### Examples

```jsx
import { EbaySectionTitleInfo as Info } from "@ebay/ui-core-react/ebay-section-title";
import { EbayInfotip, EbayInfotipHeading, EbayInfotipContent } from "@ebay/ui-core-react/ebay-infotip";

<Info>
    <EbayInfotip
        a11yCloseText="Dismiss infotip"
        aria-label="Important information"
        pointer="top-left"
        icon={<EbayIconInformation16 />}
    >
        <EbayInfotipHeading>Important</EbayInfotipHeading>
        <EbayInfotipContent>
            <p>This is some important info</p>
        </EbayInfotipContent>
    </EbayInfotip>
</Info>;
```
