# EbayInlineNotice

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/notices-tips-ebay-inline-notice--default)

## Use

```jsx harmony
import { EbayInlineNotice, EbayNoticeContent } from "@ebay/ui-core-react";

<EbayInlineNotice status="confirmation" aria-label="Confirmation">
    <EbayNoticeContent>
        <p>Delivered on May 1, 2017</p>
        <p>
            Tracking number: <a href="http://www.ebay.com">93878473859376898908657567</a>
        </p>
    </EbayNoticeContent>
</EbayInlineNotice>;
```

or for smaller bundle size:

```jsx harmony
import { EbayInlineNotice, EbayNoticeContent } from "@ebay/ui-core-react/ebay-inline-notice";
```

### Import following styles from SKIN

#### JavaScript files

```jsx harmony
import "@ebay/skin/inline-notice";
```

## Attributes

| Name           | Type                                                                      | Stateful | Description                                                                                                                                 | Default     |
| -------------- | ------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `status`       | String (`"general"`, `"attention"`, `"confirmation"`, or `"information"`) | No       | Determines the style and type of notice to be displayed                                                                                     | `"general"` |
| `aria-label`   | String                                                                    | No       | The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context. | -           |
| `hidden`       | Boolean                                                                   | No       | Determines whether the notice is hidden or not.                                                                                             | `false`     |
| `onNoticeShow` | Function                                                                  | No       | A function that is called when the notice is displayed                                                                                      | -           |
| `children`     | React Node                                                                | No       | The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**                                     | -           |
