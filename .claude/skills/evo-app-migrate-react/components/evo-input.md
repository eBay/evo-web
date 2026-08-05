# ebay-textbox → evo-input

Use `EvoInput` for single-line textboxes. Use `EvoTextarea` when the old textbox has `multiline`.

```tsx
import { EvoInput } from "@evo-web/react/input";

<EvoInput
  prefix={{ content: "$", icon: <EvoIconSearch16 /> }}
  postfix={{
    content: "/mo",
    icon: <EvoIconClear16 />,
    buttonProps: { a11yText: "Clear", onClick: handleClear },
  }}
/>;
```

**Prop changes:**

| ebayui-core-react               | evo-react                      | Notes                                                                                 |
| ------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------- |
| `inputSize="default"`           | `inputSize="regular"`          | The default size name changed.                                                        |
| Prefix/postfix child components | `prefix`/`postfix` objects     | Move text to `content`, icons to `icon`, and span attributes onto the object.         |
| `buttonAriaLabel`               | `postfix.buttonProps.a11yText` | The action uses `EvoIconButton`.                                                      |
| `onButtonClick`                 | `postfix.buttonProps.onClick`  | Receives the native click event only.                                                 |
| `onInputChange`                 | `onChange`                     | `onChange` now follows native React input semantics and fires as the value changes.   |
| Legacy event callbacks          | Native React callbacks         | Remove the second `{ value }` callback argument and read `event.currentTarget.value`. |
| `forwardedRef` / `inputRef`     | `ref`                          | React 19 forwards the native input ref directly.                                      |
| `multiline`                     | `EvoTextarea`                  | Import from `@evo-web/react/textarea`.                                                |
| `opaqueLabel`                   | `EvoTextarea.opaqueLabel`      | Only supported by the textarea component.                                             |
| `onFloatingLabelInit`           | Removed                        | No initialization callback is needed.                                                 |
