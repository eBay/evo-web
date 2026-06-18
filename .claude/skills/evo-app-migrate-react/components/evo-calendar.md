# ebay-calendar → evo-calendar

This component follows the updated evo calendar interface. Do not carry legacy calendar props over unchanged.

## Import path

```diff
- import { EbayCalendar } from "@ebay/ui-core-react/ebay-calendar";
+ import { EvoCalendar } from "@evo-web/react/calendar";
```

## Prop changes

| ebayui-core-react                                           | evo-react                                  | Notes                                                                             |
| ----------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------- |
| `interactive`                                               | `selectMode="day"` or `selectMode="range"` | Omit `selectMode` for a non-interactive calendar.                                 |
| `range`                                                     | `selectMode="range"`                       | Range selection is now selected through `selectMode`.                             |
| `navigable`                                                 | `a11yNavigateText`                         | The navigation header renders when `a11yNavigateText` is present.                 |
| `getA11yShowMonthText(month)`                               | `a11yNavigateText(month, dir)`             | The callback now receives direction: `"prev" \| "next"`.                          |
| `selected: DayISO[]`                                        | removed                                    | Arrays are no longer supported. Use a range object when appropriate.              |
| selected range arrays                                       | `{ from?: DayISO; to?: DayISO }`           | Replace `[from, to]` with `{ from, to }`.                                         |
| `disableBefore`                                             | `disable.before`                           | Disable config is now grouped.                                                    |
| `disableAfter`                                              | `disable.after`                            | Disable config is now grouped.                                                    |
| `disableWeekdays`                                           | `disable.weekdays`                         | Disable config is now grouped.                                                    |
| `disableList`                                               | `disable.list`                             | Disable config is now grouped.                                                    |
| none                                                        | `disable.callback`                         | New function hook for disabling dates.                                            |
| `onSelect(event, { iso })`                                  | `onSelectedChange(selected)`               | Callback receives only the new selected value. No event argument.                 |
| `onMonthChange({ iso })`                                    | `onViewStartChange(viewStart)`             | Callback receives the first visible month as `YYYY-MM`.                           |
| custom `onFocus(event, { iso })`                            | removed                                    | Use native focus handlers only if needed; no custom focused-day event is emitted. |
| `a11yRangeStartText`, `a11yInRangeText`, `a11yRangeEndText` | `a11yRangeText`                            | Use `{ start, in, end }`.                                                         |
| `a11ySeparator`                                             | removed                                    | Range/today/disabled clipped text uses the component separator.                   |
| none                                                        | `dayLinkAs`                                | New React-only custom component hook for static day links.                        |

## Controlled and uncontrolled state

Use React-style controlled/uncontrolled props for selection and visible month state.

```tsx
<EvoCalendar
  selectMode="day"
  selected={selected}
  onSelectedChange={setSelected}
/>

<EvoCalendar
  selectMode="range"
  defaultSelected={{ from: "2025-01-05" }}
/>

<EvoCalendar
  viewStart={viewStart}
  onViewStartChange={setViewStart}
/>

<EvoCalendar defaultViewStart="2025-01" />
```

## Disabled dates

```diff
- <EbayCalendar disableBefore="2025-01-01" disableWeekdays={[0, 6]} />
+ <EvoCalendar disable={{ before: "2025-01-01", weekdays: [0, 6] }} />
```

## Navigation

```diff
- <EbayCalendar navigable getA11yShowMonthText={(month) => `Show ${month}`} />
+ <EvoCalendar a11yNavigateText={(month, dir) => `${dir === "prev" ? "Previous" : "Next"}: ${month}`} />
```

## Static day links

`linkBuilder` still controls which static days render as links. Use `dayLinkAs` when routing link components need custom props.

```tsx
const linkBuilder = (iso) => `/day/${iso}`;

<EvoCalendar
  linkBuilder={linkBuilder}
  dayLinkAs={({ iso, ...rest }) => <Link {...rest} to={linkBuilder(iso)} />}
/>;
```

## Selection

```diff
- <EbayCalendar interactive selected="2025-01-10" onSelect={(event, { iso }) => setDate(iso)} />
+ <EvoCalendar selectMode="day" selected={date} onSelectedChange={setDate} />
```

```diff
- <EbayCalendar interactive range selected={["2025-01-05", "2025-01-12"]} />
+ <EvoCalendar selectMode="range" selected={{ from: "2025-01-05", to: "2025-01-12" }} />
```
