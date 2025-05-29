# EbayDateTextbox

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-input-ebay-date-textbox--default)

## Usage

### Import JS

```jsx harmony
import { EbayDateTextbox } from "@ebay/ui-core-react/ebay-date-textbox";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/calendar";
import "@ebay/skin/date-textbox";
```

```jsx
<EbayDateTextbox value="2024-01-05" />

<EbayDateTextbox range value="2024-01-05" rangeEnd="2024-02-04" />
```

## Attributes

| Name                    | Type                 | Stateful | Description                                                                                                                                                                                                                                | Data                                                    |
| ----------------------- | -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| `value`                 | Date, Number, String | No       | Selected date for controlled component.                                                                                                                                                                                                    |                                                         |
| `rangeEnd`              | Date, Number, String | No       | If range is true, the end of the selected range.                                                                                                                                                                                           |                                                         |
| `defaultValue`          | Date, Number, String | No       | Default selected date. Use it for not controlled component.                                                                                                                                                                                |                                                         |
| `defaultRangeEnd`       | Date, Number, String | No       | Default end of the selected range. Use it for not controlled component.                                                                                                                                                                    |                                                         |
| `range`                 | Boolean              | No       | True if selecting a range, false if a single value                                                                                                                                                                                         |                                                         |
| `locale`                | String               | No       | Locale of the date picker, default to `navigator.language`                                                                                                                                                                                 |                                                         |
| `inputPlaceholderText`  | String, String[]     | No       | Text for the input placeholder. Should indicate that users need to enter dates in ISO format. If separate placeholders are required for a range display, use an array of two strings (i. e. `["Start (YYYY-MM-DD)", "End (YYYY-MM-DD)"]`). |                                                         |
| `collapseOnSelect`      | Boolean              | No       | Whether the calendar should collapse after a date is selected                                                                                                                                                                              |                                                         |
| `disableBefore`         | Date                 | No       | First date that may be selected                                                                                                                                                                                                            |                                                         |
| `disableAfter`          | Date                 | No       | Last date that may be selected                                                                                                                                                                                                             |                                                         |
| `disableWeekdays`       | Number[]             | No       | List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`                                                                                                                                   |                                                         |
| `disableList`           | String[], Date[]     | No       | List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects                                                                                                                    |                                                         |
| `linkBuilder`           | Function             | No       | Function used to build the href for each date. The function is passed the date as a `Date` object, and should return a url string. For dates that don't have a link, the function should return a falsy value                              |                                                         |
| `getA11yShowMonthText`  | Function             | No       | Function used to get the text for showing previous and next months, defaults to `Show ${monthName}`                                                                                                                                        |                                                         |
| `a11ySelectedText`      | String               | No       | Text to be read by screen readers when a date is selected, defaults to `Selected`                                                                                                                                                          |                                                         |
| `a11yRangeStartText`    | String               | No       | Text to be read by screen readers when a date is the start of a range, defaults to `Start of range`                                                                                                                                        |                                                         |
| `a11yInRangeText`       | String               | No       | Text to be read by screen readers when a date is in a range, defaults to `in range`                                                                                                                                                        |                                                         |
| `a11yRangeEndText`      | String               | No       | Text to be read by screen readers when a date is the end of a range, defaults to `End of range`                                                                                                                                            |                                                         |
| `a11yTodayText`         | String               | No       | Text to be read by screen readers when a date is the current date, defaults to `Today`                                                                                                                                                     |                                                         |
| `a11yDisabledText`      | String               | No       | Text to be read by screen readers when a date is disabled, defaults to `inactive`                                                                                                                                                          |                                                         |
| `a11ySeparator`         | String               | No       | Text to be read by screen readers to separate properties, defaults to `-`                                                                                                                                                                  |                                                         |
| `a11yOpenPopoverText`   | String               | No       | Text to be read by screen readers for the button that opens the calendar popover                                                                                                                                                           |                                                         |
| `onChange`              | Function             | -        | Triggered when the selection changes                                                                                                                                                                                                       | `(event: Event, { selected?, rangeStart?, rangeEnd? })` |
| `onInputChange`         | Function             | -        | Triggered when the input field is typed, use it for controlled components                                                                                                                                                                  | `(event: Event)`                                        |
| `onInputRangeEndChange` | Function             | -        | Triggered when the range end input field is typed, use it for controlled components                                                                                                                                                        | `(event: Event)`                                        |
