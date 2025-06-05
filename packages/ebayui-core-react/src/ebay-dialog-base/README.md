# DialogBase

## DialogBase Usage

```jsx
<DialogBase open a11yCloseText="Close Dialog Base" onCloseBtnClick={handleCloseBtnClick}>
    <h1>Hello World</h1>
</DialogBase>
```

## Attributes

| Name               | Type                        | Stateful | Required | Description                                                                                  |
| ------------------ | --------------------------- | -------- | -------- | -------------------------------------------------------------------------------------------- |
| `baseEl`           | String                      | No       | No       | 'div', 'span', 'aside'                                                                       |
| `open`             | Boolean                     | Yes      | No       | Whether drawer is open.                                                                      |
| `classPrefix`      | 'drawer', 'toast', 'dialog' | No       | No       | "" (default) / modifies the base prefix for all classes in the component                     |
| `windowClass`      | String                      | No       | No       | "" (default) / modifies the base prefix for all Skin classes in the component                |
| `header`           | String                      | No       | No       | element placeholder                                                                          |
| `footer`           | String                      | No       | No       | element placeholder                                                                          |
| `isModal`          | Boolean                     | No       | No       | Whether drawer is model.                                                                     |
| `top`              | ---                         | ---      | ---      | ---                                                                                          |
| `buttonPosition`   | String                      | ---      | ---      | top or right or bottom or left                                                               |
| `a11yCloseText`    | String                      | No       | No\*     | A11y text for close button and mask. Required only when close button exists.                 |
| `animated`         | Boolean                     | Yes      | No       | Renders the dialog with an animation. Note that the dialog will always be present in the DOM |
| `closeButtonClass` | String                      | No       | No       | Sets custom className on a close button element                                              |

## Events

| Event               | Data | Description |
| ------------------- | ---- | ----------- |
| `onCloseBtnClick`   | ---  | ---         |
| `onBackgroundClick` | ---  | ---         |
