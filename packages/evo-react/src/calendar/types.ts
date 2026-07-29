import type { ComponentProps, ComponentType, ReactNode } from "react";

export type DayISO = `${number}-${number}-${number}`;
export type MonthISO = `${number}-${number}`;

export type Disable = {
  /** Disables dates before this date. */
  before?: DayISO;
  /** Disables dates after this date. */
  after?: DayISO;
  /** Disables weekdays by index, where 0 is Sunday and 6 is Saturday. */
  weekdays?: number[];
  /** Disables the listed dates. */
  list?: DayISO[];
  /** Disables dates for which the callback returns true. */
  callback?: (iso: DayISO) => boolean;
};

export type DateRange = {
  /** Start of the selected date range. */
  from?: DayISO;
  /** End of the selected date range. */
  to?: DayISO;
};

export type A11yRangeText = {
  /** Clipped text for the start of a range. */
  start: string;
  /** Clipped text for the end of a range. */
  end: string;
  /** Clipped text for a date within a range. */
  in: string;
};

export type DayLinkAsProps = {
  /** ISO date represented by the day link. */
  iso: DayISO;
  /** Link destination returned by `getDayHref`. */
  href?: string;
  /** Skin class names for the day link. */
  className?: string;
  /** Day label content. */
  children?: ReactNode;
};

export type DayLinkAs = ComponentType<DayLinkAsProps>;

type BaseCalendarProps = Omit<ComponentProps<"div">, "onSelect"> & {
  /** Number of months to display simultaneously. */
  visibleMonthCount?: number;
  /** [BCP 47 language tag](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) for month and weekday labels. */
  locale?: string;
  /** Date treated as today (`YYYY-MM-DD`). Defaults to the current local date. */
  today?: DayISO;
  /** Config for disabling dates: `{ before?: DayISO, after?: DayISO, weekdays?: number[], list?: DayISO[], callback?: (iso) => boolean }`. Weekdays: 0=Sun … 6=Sat. */
  disable?: Disable;
  /** Controlled first displayed month (`YYYY-MM`). Defaults to the month containing `today`. */
  visibleMonth?: MonthISO;
  /** Initial uncontrolled first displayed month (`YYYY-MM`). */
  defaultVisibleMonth?: MonthISO;
  /** Triggered when navigation changes the first displayed month. */
  onVisibleMonthChange?: (visibleMonth: MonthISO) => void;
  /** Function `(monthName: string, dir: 'next' | 'prev') => string` returning an accessible label for the prev/next navigation buttons. Its presence enables the navigation header. */
  a11yNavigateText?: (monthName: string, dir: "next" | "prev") => string;
};

type StaticBaseCalendarProps = BaseCalendarProps & {
  /** When set, day cells render as `<button>` elements for date selection. `"day"` selects a single date; `"range"` selects a start/end range. Omit for a non-interactive calendar. */
  selectMode?: undefined;
  /** Function `(iso: DayISO) => string | false | null | undefined` that marks native anchor days when `selectMode` is not set. A falsy return renders a `<span>`; omit `getDayHref` if `dayLinkAs` should render every non-disabled day. */
  getDayHref?: (iso: DayISO) => string | false | null | undefined;
  /** Custom component for static day links. Receives `{ iso, href, className, children }`, so routing links can derive their destination from `iso` or use `href` from `getDayHref`. When paired with `getDayHref`, only days with a truthy `getDayHref` result use `dayLinkAs`. */
  dayLinkAs?: DayLinkAs;
  /** Clipped text appended to today's cell for screen readers. */
  a11yTodayText?: string;
  /** Clipped text appended to disabled cells for screen readers. */
  a11yDisabledText?: string;
  /** Clipped text appended to selected cells for screen readers. */
  a11ySelectedText?: string;
};

export type StaticSingleCalendarProps = StaticBaseCalendarProps & {
  /** The selected date. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode. */
  selected?: DayISO;
  /** Initial uncontrolled selected value. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode. */
  defaultSelected?: DayISO;
  /** Triggered when an interactive calendar selects a day or range. */
  onSelectedChange?: (selected: DayISO) => void;
  /** Clipped text for range cells. Required when a range is or will be selected. */
  a11yRangeText?: A11yRangeText;
};

export type StaticSelectedRangeCalendarProps = StaticBaseCalendarProps & {
  /** The selected date. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode. */
  selected: DateRange;
  /** Initial uncontrolled selected value. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode. */
  defaultSelected?: DateRange;
  /** Triggered when an interactive calendar selects a day or range. */
  onSelectedChange?: (selected: DateRange) => void;
  /** Clipped text for range cells. Required when a range is or will be selected. */
  a11yRangeText: A11yRangeText;
};

export type StaticDefaultRangeCalendarProps = StaticBaseCalendarProps & {
  /** The selected date. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode. */
  selected?: DateRange;
  /** Initial uncontrolled selected value. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode. */
  defaultSelected: DateRange;
  /** Triggered when an interactive calendar selects a day or range. */
  onSelectedChange?: (selected: DateRange) => void;
  /** Clipped text for range cells. Required when a range is or will be selected. */
  a11yRangeText: A11yRangeText;
};

export type StaticCalendarProps =
  | StaticSingleCalendarProps
  | StaticSelectedRangeCalendarProps
  | StaticDefaultRangeCalendarProps;

export type DayCalendarProps = BaseCalendarProps & {
  /** When set, day cells render as `<button>` elements for date selection. `"day"` selects a single date; `"range"` selects a start/end range. Omit for a non-interactive calendar. */
  selectMode: "day";
  /** The selected date. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode. */
  selected?: DayISO;
  /** Initial uncontrolled selected value. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode. */
  defaultSelected?: DayISO;
  /** Triggered when an interactive calendar selects a day or range. */
  onSelectedChange?: (selected: DayISO) => void;
  /** Clipped text for range cells. Required when a range is or will be selected. */
  a11yRangeText?: A11yRangeText;
};

export type RangeCalendarProps = BaseCalendarProps & {
  /** When set, day cells render as `<button>` elements for date selection. `"day"` selects a single date; `"range"` selects a start/end range. Omit for a non-interactive calendar. */
  selectMode: "range";
  /** The selected date. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode. */
  selected?: DateRange;
  /** Initial uncontrolled selected value. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode. */
  defaultSelected?: DateRange;
  /** Triggered when an interactive calendar selects a day or range. */
  onSelectedChange?: (selected: DateRange) => void;
  /** Clipped text for range cells. Required when a range is or will be selected. */
  a11yRangeText: A11yRangeText;
};

export type EvoCalendarProps =
  | StaticCalendarProps
  | DayCalendarProps
  | RangeCalendarProps;

export type SelectedValue = DayISO | DateRange;
