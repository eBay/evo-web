# ebay-date-textbox → evo-date-input

`EbayDateTextbox` is replaced by two components. Single dates use `EvoDateInput`. Ranges use `EvoDateRangeInput`. Both render `EvoInput` and take a `calendar` object for calendar-only props.

```tsx
import { EvoDateInput, EvoDateRangeInput } from "@evo-web/react/date-input";
```

## Import path

```diff
- import { EbayDateTextbox } from "@ebay/ui-core-react/ebay-date-textbox";
+ import { EvoDateInput, EvoDateRangeInput } from "@evo-web/react/date-input";
```

## Split `range` into a second component

```diff
- <EbayDateTextbox />
+ <EvoDateInput
+   a11yOpenPopoverText="open calendar"
+   floatingLabel="Date"
+ />

- <EbayDateTextbox range />
+ <EvoDateRangeInput a11yOpenPopoverText="open calendar" />
```

Do not pass `EbayTextbox` children. Single-field `EvoInput` props are inline on `EvoDateInput`. Range fields use `startInput` / `endInput`.

```diff
- <EbayDateTextbox>
-   <EbayTextbox floatingLabel="Purchase date" />
- </EbayDateTextbox>
+ <EvoDateInput
+   a11yOpenPopoverText="open calendar"
+   floatingLabel="Purchase date"
+ />

- <EbayDateTextbox range>
-   <EbayTextbox floatingLabel="Start" />
-   <EbayTextbox floatingLabel="End" />
- </EbayDateTextbox>
+ <EvoDateRangeInput
+   a11yOpenPopoverText="open calendar"
+   startInput={{ floatingLabel: "Start" }}
+   endInput={{ floatingLabel: "End" }}
+ />
```

## Value and change events

`value` is committed ISO, not the in-progress typed string. `onChange` receives that value only — no event argument.

```diff
- <EbayDateTextbox
-   value={value}
-   onChange={(event, { selected }) => setValue(selected || "")}
-   onInputChange={(event) => setValue(event.target.value)}
- />
+ <EvoDateInput
+   a11yOpenPopoverText="open calendar"
+   value={value}
+   onChange={setValue}
+ />

- <EbayDateTextbox
-   range
-   value={start}
-   rangeEnd={end}
-   onChange={(event, { rangeStart, rangeEnd }) => {
-     setStart(rangeStart);
-     setEnd(rangeEnd);
-   }}
- />
+ <EvoDateRangeInput
+   a11yOpenPopoverText="open calendar"
+   value={{ from: start, to: end }}
+   onChange={setRange}
+ />
```

`onInputChange` and `onInputRangeEndChange` are gone. `EvoDateInput.onChange` fires only when a date is committed.

Clearing a field calls `onChange("")` for a single date. Start a controlled field with `value=""`, not `undefined` — `undefined` means uncontrolled.

An unparsable blur keeps the typed text, sets `aria-invalid`, and fires `onInvalidDate`. It does not change the committed value.

## Calendar props

Pass calendar-only options through `calendar`. Date-input owns `locale`, `selected`, and `selectMode`.

```diff
- <EbayDateTextbox
-   disableBefore="2025-01-01"
-   disableWeekdays={[0, 6]}
-   a11ySelectedText="Selected"
- />
+ <EvoDateInput
+   a11yOpenPopoverText="open calendar"
+   calendar={{
+     disable: { before: "2025-01-01", weekdays: [0, 6] },
+     a11ySelectedText: "Selected",
+   }}
+ />
```

| ebayui-core-react                                     | evo-react                                | Notes                                                                     |
| ----------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------- |
| `range`                                               | `EvoDateRangeInput`                      | Separate component.                                                       |
| `EbayTextbox` children                                | inline props / `startInput` / `endInput` | Single field uses `EvoInput` props on `EvoDateInput`. Range uses objects. |
| `value` + `rangeEnd`                                  | `value` / `{ from, to }`                 | Committed ISO. Controlled empty is `""`.                                  |
| none                                                  | `readOnly`                               | Disables typing and the calendar button.                                  |
| `defaultValue` + `defaultRangeEnd`                    | `defaultValue`                           | Same ISO shape as `value`.                                                |
| `onChange(event, { selected, rangeStart, rangeEnd })` | `onChange(value)`                        | No event argument.                                                        |
| `onInputChange` / `onInputRangeEndChange`             | removed                                  | `onChange` fires for committed dates only.                                |
| `inputPlaceholderText`                                | `placeholder` / `startInput.placeholder` | Locale placeholder is the default.                                        |
| `a11yOpenPopoverText`                                 | `a11yOpenPopoverText`                    | Required. No default.                                                     |
| `disableBefore` / `After` / `Weekdays` / `List`       | `calendar.disable`                       | Same grouped object as `EvoCalendar`.                                     |
| `getA11yShowMonthText`                                | `calendar.a11yNavigateText`              | `(month, dir) => string`. Navigation is on by default.                    |
| `a11yRangeStartText` / `InRange` / `End`              | `calendar.a11yRangeText`                 | `{ start, in, end }`.                                                     |
| `a11ySeparator`                                       | removed                                  | Calendar owns the clipped-text separator.                                 |
| `numMonths`                                           | `calendar.visibleMonthCount`             | Otherwise 1 or 2 based on viewport width.                                 |
| `linkBuilder`                                         | removed                                  | Date inputs are not static day-link calendars.                            |
| `onMonthChange`                                       | `calendar.onVisibleMonthChange`          | Receives `YYYY-MM`.                                                       |
| none                                                  | `open` / `defaultOpen` / `onOpenChange`  | Popover visibility.                                                       |
