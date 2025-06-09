# EbayPageNotice

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/notices-tips-ebay-page-notice--simple-usage)

## Import JS

```jsx harmony
import {
    EbayPageNotice,
    EbayNoticeContent,
    EbayPageNoticeTitle,
    EbayPageNoticeFooter,
    EbayPageNoticeCTA,
} from "@ebay/ui-core-react/ebay-page-notice";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/page-notice";
```

## Use

```jsx harmony
<EbayPageNotice status="attention">
    <EbayNoticeContent>
        <EbayPageNoticeTitle>Your order's in!</EbayPageNoticeTitle>
        <p>
            <strong>Error.</strong> Please take another look at the following:
            <br />
            <a href="#">Card number</a>, <a href="#">Expiration date</a> &amp; <a href="#">Security code</a>.
        </p>
    </EbayNoticeContent>
    <EbaySectionNoticeFooter>
        <EbayButton>Action</EbayButton>
    </EbaySectionNoticeFooter>
</EbayPageNotice>
```

## Attributes

| Name              | Type                                                                      | Stateful | Description                                                                                                                                 | Default     |
| ----------------- | ------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `status`          | String ( `"general"`,`"attention"`, `"confirmation"`, or `"information"`) | No       | Determines the style and type of notice to be displayed                                                                                     | `"general"` |
| `aria-label`      | String                                                                    | No       | The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context. | -           |
| `children`        | React Node                                                                | No       | The content to be displayed within the notice                                                                                               | -           |
| `a11yDismissText` | String                                                                    | No       | Determines if the notice will have a dismiss button. Acts as the aria-label for the dismiss button. Should not be used with a footer.       | -           |

## Callbacks

| Name        | Required | Description                 | Arguments |
| ----------- | -------- | --------------------------- | --------- |
| `onDismiss` | No       | Triggered on notice dismiss | (Event)   |

Note: When using multiple PageNotice components with an aria-label, make sure to set a unique `id` attribute for each one or you'll run into accessibility issues.
