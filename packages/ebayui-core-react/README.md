# ebayui-core-react

eBayUI React components

[Demo](https://opensource.ebay.com/ebayui-core-react/main)

### Requirements

* [Node.js](https://nodejs.org/en/) (v20.12.2)
* [React](https://reactjs.org/) (v18+, v16.8+ in maintenance mode)
* [eBay Skin](https://ebay.github.io/skin/) (v18+)

### eBayUI Components
* [ ] `ebay-3d-viewer`
* [x] [ebay-accordion](src/ebay-accordion)
* [x] [ebay-alert-dialog](src/ebay-alert-dialog)
* [ ] `ebay-area-chart`
* [x] [`ebay-avatar`](src/ebay-avatar)
* [x] [ebay-badge](src/ebay-badge)
* [ ] `ebay-bar-chart`
* [x] [ebay-breadcrumbs](src/ebay-breadcrumbs)
* [x] [ebay-button](src/ebay-button)
* [x] [ebay-calendar](src/ebay-calendar)
* [ ] `ebay-character-count`
* [x] [ebay-carousel](src/ebay-carousel)
* [ ] `ebay-chart-legend`
* [x] [ebay-checkbox](src/ebay-checkbox)
* [x] [ebay-chip](src/ebay-chip)
* [x] [ebay-chips-combobox](src/ebay-chips-combobox)
* [x] [ebay-combobox](src/ebay-combobox)
* [x] [ebay-confirm-dialog](src/ebay-confirm-dialog)
* [x] [ebay-cta-button](src/ebay-cta-button)
* [x] [ebay-date-textbox](src/ebay-date-textbox)
* [x] [ebay-details](src/ebay-details)
* [ ] `ebay-donut-chart`
* [x] [ebay-education-notice](src/ebay-education-notice)
* [x] [ebay-eek](src/ebay-eek)
* [x] [ebay-fake-link](src/ebay-fake-link)
* [x] [ebay-fake-menu](src/ebay-fake-menu)
* [x] [ebay-fake-menu-button](src/ebay-fake-menu-button)
* [x] [ebay-fake-tabs](src/ebay-fake-tabs)
* [x] [ebay-field](src/ebay-field)
* [x] [ebay-file-preview-card](src/ebay-file-preview-card)
* [x] [ebay-file-preview-card-group](src/ebay-file-preview-card-group)
* [x] [ebay-filter](src/ebay-filter)
* [x] [ebay-filter-menu](src/ebay-filter-menu)
* [x] [ebay-filter-menu-button](src/ebay-filter-menu-button)
* [ ] `ebay-flag`
* [x] [ebay-icon-button](src/ebay-icon-button)
* [x] [ebay-icon](src/ebay-icon)
* [ ] `ebay-image-placeholder`
* [x] [ebay-infotip](src/ebay-infotip)
* [x] [ebay-inline-notice](src/ebay-inline-notice)
* [x] [ebay-lightbox-dialog](src/ebay-lightbox-dialog)
* [ ] `ebay-line-chart`
* [x] [ebay-listbox-button](src/ebay-listbox-button)
* [x] [ebay-listbox](src/ebay-listbox)
* [x] [ebay-menu](src/ebay-menu)
* [x] [ebay-menu-button](src/ebay-menu-button)
* [x] [ebay-page-notice](src/ebay-page-notice)
* [x] [ebay-pagination](src/ebay-pagination)
* [x] [ebay-panel-dialog](src/ebay-panel-dialog)
* [ ] `ebay-phone-input`
* [x] [ebay-progress-bar](src/ebay-progress-bar)
* [x] [`ebay-progress-bar-expressive`](src/ebay-progress-bar-expressive)
* [x] [ebay-progress-spinner](src/ebay-progress-spinner)
* [x] [ebay-progress-stepper](src/ebay-progress-stepper)
* [x] [ebay-radio](src/ebay-radio)
* [x] [ebay-section-title](src/ebay-section-title)
* [x] [ebay-section-notice](src/ebay-section-notice)
* [x] [ebay-segmented-buttons](src/ebay-segmented-buttons)
* [x] [ebay-select](src/ebay-select)
* [x] [ebay-signal](src/ebay-signal)
* [x] [ebay-skeleton](src/ebay-skeleton)
* [x] [ebay-snackbar-dialog](src/ebay-snackbar-dialog)
* [ ] `ebay-spark-line`
* [x] [ebay-split-button](src/ebay-split-button)
* [x] [ebay-star-rating](src/ebay-star-rating)
* [x] [ebay-star-rating-select](src/ebay-star-rating-select)
* [x] [ebay-switch](src/ebay-switch)
* [x] [ebay-table](src/ebay-table)
* [x] [ebay-tabs](src/ebay-tabs)
* [x] [ebay-textbox](src/ebay-textbox)
* [x] [ebay-toast-dialog](src/ebay-toast-dialog)
* [x] [ebay-toggle-button](src/ebay-toast-dialog)
* [x] [ebay-toggle-button-group](src/ebay-toast-dialog)
* [x] [ebay-tooltip](src/ebay-tooltip)
* [x] [ebay-tourtip](src/ebay-tourtip)
* [x] [ebay-tristatecheckbox](src/ebay-tri-state-checkbox)
* [x] [ebay-video](src/ebay-video)

## Getting Started

These react components are available as `@ebay/ui-core-react` package on [NPM](https://npmjs.org/@ebay/ui-core-react).

Use npm or yarn to add the package dependency to your project:

```sh
yarn add @ebay/ui-core-react @ebay/skin
```

```jsx harmony
import { EbayTextbox } from '@ebay/ui-core-react/ebay-textbox'
import { EbayButton } from '@ebay/ui-core-react/ebay-button'

<EbayTextbox placeholder="Enter text here" />
<EbayButton>Submit</EbayButton>
```

### Notes
If you render children components dynamically and don't want to get React `key` warnings then provide a `key`:
```jsx harmony
<EbayParentComponent>
    {items.map((item, index) => <EbayChildComponent key={index}>{item}</EbayChildComponent>)}
</EbayParentComponent>
```

### Pass-Through Attributes

HTML attributes can be used on any component, and they will be passed through to the most prominent tag of the component. The most prominent tag is usually the root or form control, but individual components will note if it varies for specific cases.

Example of usage:
```jsx
<EbayButton id="my-button" />
```

### Issues

Create an issue on github

## [Contributing](CONTRIBUTING.md)

## Changelog

`@ebay/ui-core-react`
### version 7.x (Skin 18, breaking changes in icon names)
### version 6.x (Skin 17, breaking changes in icon names)
### version 5.x (Skin 16, breaking changes in event callbacks)
### version 4.x (Skin 16, breaking changes in icon names)
### version 3.x (Skin 15, some breaking changes in dialog components)
### version 2.x (Skin 15)

`@ebay/ebayui-core-react` (obsolete)
### version 10.x (Skin 14)
### version 9.x (skin 13)

`ebayui-core-react` (obsolete)
### version 8.x (skin 12)
### version 6.x (skin 10)
### version 5.x (removed less, changed imports to minimize bundle size)
### version 3.x (skin 9, react 16.8 with hooks support)
### version 2.x (skin 7, react 16.7)
### legacy

