# EbayListbox

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/building-blocks-ebay-listbox--docs)

## Import JS

```jsx harmony
import { EbayListbox, EbayListboxOption, EbayListboxOptionDescription } from "@ebay/ui-core-react/ebay-listbox";
```

## Import following styles from SKIN

```js
import "@ebay/skin/listbox";
```

## Import styles using SCSS/CSS

```js
import "@ebay/skin/listbox.css";
```

## Usage

```jsx
<EbayListbox>
    <EbayListboxOption value="AA" text="Option 1" />
    <EbayListboxOption value="BB" text="Option 2" />
    <EbayListboxOption value="CC" text="Option 3" />
</EbayListbox>
```

## Attributes

### EbayListbox

| Name                     | Type    | Required | Description                                                                                                                                                   |
| ------------------------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                   | string  | No       | Used for the name attribute of the native `<select>`.                                                                                                         |
| `disabled`               | boolean | No       | Set to true if the field is disabled.                                                                                                                         |
| `listSelection`          | string  | No       | If `manual`, the user will need to press enter to select an item using the keyboard. Otherwise, `auto` will automatically select as the user presses up/down. |
| `typeaheadTimeoutLength` | number  | No       | Timeout length to pass to typeahead.                                                                                                                          |
| `maxHeight`              | string  | No       | Example: 100px, 200px, 10rem.                                                                                                                                 |

### EbayListboxOption

| Name       | Type         | Required | Description                                            |
| ---------- | ------------ | -------- | ------------------------------------------------------ |
| `icon`     | ReactElement | No       | An optional icon to display alongside the option text. |
| `text`     | string       | No       | The text to display for the option.                    |
| `value`    | string       | Yes      | The value of the option.                               |
| `disabled` | boolean      | No       | Set to true if the option is disabled.                 |
| `selected` | boolean      | No       | Set to true if the option is selected by default.      |

## Callbacks

| Name       | Type     | Required | Description                    | Data                                                                         |
| ---------- | -------- | -------- | ------------------------------ | ---------------------------------------------------------------------------- |
| `onChange` | Function | No       | triggered on change            | `(ChangeEvent, { index: number, selected: string[] , wasClicked: boolean })` |
| `onEscape` | Function | No       | triggered on typing Escape key | `()`                                                                         |

## Examples

### Default

```jsx
<EbayListbox>
    <EbayListboxOption value="AA" text="Option 1" />
    <EbayListboxOption value="BB" text="Option 2" />
    <EbayListboxOption value="CC" text="Option 3" />
</EbayListbox>
```

### With Description

```jsx
<EbayListbox>
    <EbayListboxOption value="AA" text="Option 1">
        <EbayListboxOptionDescription>Option 1 extra info</EbayListboxOptionDescription>
    </EbayListboxOption>
    <EbayListboxOption value="BB" text="Option 2">
        <EbayListboxOptionDescription>Option 2 extra info</EbayListboxOptionDescription>
    </EbayListboxOption>
    <EbayListboxOption value="CC" text="Option 3">
        <EbayListboxOptionDescription>Option 3 extra info</EbayListboxOptionDescription>
    </EbayListboxOption>
</EbayListbox>
```
