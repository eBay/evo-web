# EbayCalendar

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/building-blocks-ebay-calendar--default)

## Usage

### Import JS

```jsx harmony
import { EbayCalendar } from "@ebay/ui-core-react/ebay-calendar";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/calendar";
```

```jsx
<EbayCalendar />
```

## Attributes

| Name                   | Type             | Stateful | Description                                                                                                                                                                                                   | Data                           |
| ---------------------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `navigable`            | Boolean          | No       | If true, a header is included that allows for navigation between months                                                                                                                                       |                                |
| `interactive`          | Boolean          | No       | Date cells are contained in buttons for interactive calendars, and spans otherwise                                                                                                                            |                                |
| `numMonths`            | Number           | No       | Number of months to be displayed at once                                                                                                                                                                      |                                |
| `range`                | Boolean          | No       | True if selecting a range, false if a single value                                                                                                                                                            |                                |
| `selected`             | Date, Date[]     | No       | Date or list of dates that are selected, represented as an ISO string or an array of ISO strings                                                                                                              |                                |
| `locale`               | String           | No       | Locale of the date picker, default to `navigator.language`                                                                                                                                                    |                                |
| `disableBefore`        | Date             | No       | First date that may be selected                                                                                                                                                                               |                                |
| `disableAfter`         | Date             | No       | Last date that may be selected                                                                                                                                                                                |                                |
| `disableWeekdays`      | Number[]         | No       | List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`                                                                                                      |                                |
| `disableList`          | String[], Date[] | No       | List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects                                                                                       |                                |
| `linkBuilder`          | Function         | No       | Function used to build the href for each date. The function is passed the date as a `Date` object, and should return a url string. For dates that don't have a link, the function should return a falsy value |                                |
| `getA11yShowMonthText` | Function         | No       | Function used to get the text for showing previous and next months, defaults to `Show ${monthName}`                                                                                                           |                                |
| `a11ySelectedText`     | String           | No       | Text to be read by screen readers when a date is selected, defaults to `Selected`                                                                                                                             |                                |
| `a11yRangeStartText`   | String           | No       | Text to be read by screen readers when a date is the start of a range, defaults to `Start of range`                                                                                                           |                                |
| `a11yInRangeText`      | String           | No       | Text to be read by screen readers when a date is in a range, defaults to `in range`                                                                                                                           |                                |
| `a11yRangeEndText`     | String           | No       | Text to be read by screen readers when a date is the end of a range, defaults to `End of range`                                                                                                               |                                |
| `a11yTodayText`        | String           | No       | Text to be read by screen readers when a date is the current date, defaults to `Today`                                                                                                                        |                                |
| `a11yDisabledText`     | String           | No       | Text to be read by screen readers when a date is disabled, defaults to `inactive`                                                                                                                             |                                |
| `a11ySeparator`        | String           | No       | Text to be read by screen readers to separate properties, defaults to `-`                                                                                                                                     |                                |
| `onFocus`              | Function         | -        | Triggered when a day is focused on, typically via keyboard events                                                                                                                                             | `(event: FocusEvent, { iso })` |
| `onSelect`             | Function         | -        | Triggered when a day is selected                                                                                                                                                                              | `(event: Event, { iso })`      |
| `onMonthChange`        | Function         | -        | Triggered during month navigation                                                                                                                                                                             | `(event: Event, { iso })`      |
