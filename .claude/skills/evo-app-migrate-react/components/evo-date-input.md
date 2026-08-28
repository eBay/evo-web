# ebay-date-textbox -> evo-date-input

`EbayDateTextbox` is replaced by two compound components:

- `EvoDateInput` from `@evo-web/react/date-input`
- `EvoDateRangeInputGroup` from `@evo-web/react/date-range-input`

The calendar is an explicit child component. There are no compatibility aliases
for the pre-main API.

## Single date

```diff
- import { EbayDateTextbox } from "@ebay/ui-core-react/ebay-date-textbox";
+ import {
+   EvoDateInput,
+   EvoDateInputCalendarPopover,
+ } from "@evo-web/react/date-input";

- <EbayDateTextbox />
+ <EvoDateInput
+   a11yOpenPopoverText="Open calendar"
+ >
+   <EvoDateInputCalendarPopover
+     a11yNavigateText={(month, direction) =>
+       `${direction === "prev" ? "Previous" : "Next"} ${month}`
+     }
+   />
+ </EvoDateInput>
```

Single-field `EvoInput` props remain inline on `EvoDateInput`. Do not pass an
`EvoInput` child. `EvoDateInputCalendarPopover` receives calendar options such
as `today`, `disable`, `visibleMonth`, and `visibleMonthCount`. `strategy` is
also passed to the popover.

## Date range

```diff
- import { EbayDateTextbox } from "@ebay/ui-core-react/ebay-date-textbox";
+ import {
+   EvoDateRangeInput,
+   EvoDateRangeInputCalendarPopover,
+   EvoDateRangeInputGroup,
+ } from "@evo-web/react/date-range-input";

- <EbayDateTextbox range>
-   <EbayTextbox floatingLabel="Start" />
-   <EbayTextbox floatingLabel="End" />
- </EbayDateTextbox>
+ <EvoDateRangeInputGroup
+   a11yOpenPopoverText="Open calendar"
+   value={{ from: start, to: end }}
+   onChange={setRange}
+ >
+   <EvoDateRangeInput type="start" floatingLabel="Start" />
+   <EvoDateRangeInput type="end" floatingLabel="End" />
+   <EvoDateRangeInputCalendarPopover
+     a11yNavigateText={(month, direction) =>
+       `${direction === "prev" ? "Previous" : "Next"} ${month}`
+     }
+     a11yRangeText={{
+       start: "Start of range",
+       in: "In range",
+       end: "End of range",
+     }}
+   />
+ </EvoDateRangeInputGroup>
```

Children must be ordered as start field, end field, and calendar popover. The
components document this rule but do not validate it at runtime.

`disabled` and `readOnly` belong on `EvoDateRangeInputGroup` and apply to both
fields and the shared calendar. `EvoDateRangeInput` does not accept either
property.

## Value and change events

`value` is the committed ISO value, not the in-progress typed string. `onChange`
receives the committed value without an event argument.

```tsx
<EvoDateInput
  a11yOpenPopoverText="Open calendar"
  value={value}
  onChange={setValue}
>
  <EvoDateInputCalendarPopover a11yNavigateText={navigateText} />
</EvoDateInput>

<EvoDateRangeInputGroup
  a11yOpenPopoverText="Open calendar"
  value={{ from: start, to: end }}
  onChange={({ from, to }) => {
    setStart(from ?? "");
    setEnd(to ?? "");
  }}
>
  <EvoDateRangeInput type="start" />
  <EvoDateRangeInput type="end" />
  <EvoDateRangeInputCalendarPopover
    a11yNavigateText={navigateText}
    a11yRangeText={rangeText}
  />
</EvoDateRangeInputGroup>
```

Clearing a single field calls `onChange("")`. For controlled empty values, pass
`value=""` rather than `undefined`; `undefined` means uncontrolled. Range
sides use the same `""` representation.

An unparsable blur keeps the typed text, sets `aria-invalid`, and calls
`onInvalidDate`. It does not change the committed value.

## Calendar and accessibility options

Calendar-only options move from the old `EbayDateTextbox` to the relevant
calendar popover child:

| ebayui-core-react                               | evo-react                                      |
| ----------------------------------------------- | ---------------------------------------------- |
| `range`                                         | `EvoDateRangeInputGroup`                       |
| `EbayTextbox` children                          | `EvoDateInput` props or range field children   |
| `value` + `rangeEnd`                            | `value` / `{ from, to }`                       |
| `defaultValue` + `defaultRangeEnd`              | `defaultValue`                                 |
| `onChange(event, data)`                         | `onChange(value)`                              |
| `onInputChange` / `onInputRangeEndChange`       | removed                                        |
| `inputPlaceholderText`                          | `placeholder` on the input or range field      |
| `a11yOpenPopoverText`                           | required on the single input or range group    |
| `disableBefore` / `After` / `Weekdays` / `List` | `disable` on the calendar popover              |
| `getA11yShowMonthText`                          | `a11yNavigateText` on the calendar popover     |
| `a11yRangeStartText` / `InRange` / `End`        | required `a11yRangeText` on the range popover  |
| `numMonths`                                     | `visibleMonthCount` on the calendar popover    |
| `onMonthChange`                                 | `onVisibleMonthChange` on the calendar popover |
| `strategy`                                      | `strategy` on the calendar popover             |
| `linkBuilder`                                   | removed                                        |
| `a11ySeparator`                                 | removed; the calendar owns it                  |

`a11yOpenPopoverText` has no English default. `a11yRangeText` is required on
the range popover, matching `EvoCalendar`. `a11yNavigateText` is optional;
when omitted, the calendar does not render month navigation. When
`visibleMonthCount` is omitted, the popover displays one or two months based
on the viewport breakpoint. Supplying it disables automatic month-count
selection.
