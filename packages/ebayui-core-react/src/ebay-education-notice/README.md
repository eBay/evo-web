# EbayEducationNotice

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/notices-tips-ebay-education-notice--docs)

## Import JS

```jsx harmony
import {
    EbayEducationNotice,
    EbayNoticeContent,
    EbayEducationNoticeTitle,
    EbayEducationNoticeFooter,
} from "@ebay/ui-core-react/ebay-education-notice";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/education-notice";
```

## Use

```jsx harmony
<EbayEducationNotice educationIcon={<EbayTheEbayVault24Icon />}>
    <EbayEducationNoticeTitle>Recommended title format</EbayEducationNoticeTitle>
    <EbayNoticeContent>
        <p>
            Follow the order below to optimize market valuation from Price Guide. Player + Set or Season + Manufacturer
            + Card number + Variant + Grader + Grade
        </p>
    </EbayNoticeContent>
    <EbayEducationNoticeFooter>Education footer</EbayEducationNoticeFooter>
</EbayEducationNotice>
```

## Attributes

| Name                   | Type                             | Stateful | Description                                                                                                                                 | Default               |
| ---------------------- | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `educationIcon`        | Icon                             | No       | EbayIcon that will show in the notice                                                                                                       | `EbayIconLightbulb24` |
| `iconClass`            | String                           | No       | Add class name to icon                                                                                                                      | -                     |
| `a11yIconText`         | String                           | No       | Add description for the notice icon for a11y users                                                                                          | -                     |
| `aria-label`           | String                           | No       | The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context. | -                     |
| `aria-roledescription` | String                           | No       | Adds role description attribute to the section notice                                                                                       | `"Notice"`            |
| `children`             | React Node                       | No       | The content to be displayed within the notice. **Must have the EbayEducationNoticeTitle within the children!**                              | -                     |
| `variant`              | string (`"none"`, `"prominent"`) | No       | Either none or prominent. If prominent, the notice will be more prominent                                                                   | `"none"`              |
| `iconVariant`          | string (`"none"`, `"prominent"`) | No       | Either none or prominent. If prominent, the notice icon will be more prominent                                                              | `"none"`              |
| `a11yDismissText`      | string                           | No       | The a11y description for the dismiss button. It will also allow the notice to be dismissed.                                                 | -                     |
| `dismissed`            | boolean                          | No       | Whether or not the notice is dismissed                                                                                                      | `false`               |

## Callbacks

| Name        | Required | Description                 | Arguments |
| ----------- | -------- | --------------------------- | --------- |
| `onDismiss` | No       | Triggered on notice dismiss | (Event)   |
