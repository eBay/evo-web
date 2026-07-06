import type { ComponentProps, ComponentType, ReactNode } from "react";

export type DayISO = `${number}-${number}-${number}`;
export type MonthISO = `${number}-${number}`;

export type Disable = {
  before?: DayISO;
  after?: DayISO;
  weekdays?: number[];
  list?: DayISO[];
  callback?: (iso: DayISO) => boolean;
};

export type DateRange = {
  from?: DayISO;
  to?: DayISO;
};

export type A11yRangeText = {
  start: string;
  end: string;
  in: string;
};

export type DayLinkAsProps = {
  iso: DayISO;
  href?: string;
  className?: string;
  children?: ReactNode;
};

export type DayLinkAs = ComponentType<DayLinkAsProps>;

type BaseCalendarProps = Omit<ComponentProps<"div">, "onSelect"> & {
  visibleMonthCount?: number;
  locale?: string;
  today?: DayISO;
  disable?: Disable;
  visibleMonth?: MonthISO;
  defaultVisibleMonth?: MonthISO;
  onVisibleMonthChange?: (visibleMonth: MonthISO) => void;
  a11yNavigateText?: (monthName: string, dir: "next" | "prev") => string;
};

type StaticBaseCalendarProps = BaseCalendarProps & {
  selectMode?: undefined;
  getDayHref?: (iso: DayISO) => string | false | null | undefined;
  dayLinkAs?: DayLinkAs;
  a11yTodayText?: string;
  a11yDisabledText?: string;
  a11ySelectedText?: string;
};

export type StaticSingleCalendarProps = StaticBaseCalendarProps & {
  selected?: DayISO;
  defaultSelected?: DayISO;
  onSelectedChange?: (selected: DayISO) => void;
  a11yRangeText?: A11yRangeText;
};

export type StaticSelectedRangeCalendarProps = StaticBaseCalendarProps & {
  selected: DateRange;
  defaultSelected?: DateRange;
  onSelectedChange?: (selected: DateRange) => void;
  a11yRangeText: A11yRangeText;
};

export type StaticDefaultRangeCalendarProps = StaticBaseCalendarProps & {
  selected?: DateRange;
  defaultSelected: DateRange;
  onSelectedChange?: (selected: DateRange) => void;
  a11yRangeText: A11yRangeText;
};

export type StaticCalendarProps =
  | StaticSingleCalendarProps
  | StaticSelectedRangeCalendarProps
  | StaticDefaultRangeCalendarProps;

export type DayCalendarProps = BaseCalendarProps & {
  selectMode: "day";
  selected?: DayISO;
  defaultSelected?: DayISO;
  onSelectedChange?: (selected: DayISO) => void;
  a11yRangeText?: A11yRangeText;
};

export type RangeCalendarProps = BaseCalendarProps & {
  selectMode: "range";
  selected?: DateRange;
  defaultSelected?: DateRange;
  onSelectedChange?: (selected: DateRange) => void;
  a11yRangeText: A11yRangeText;
};

export type EvoCalendarProps =
  | StaticCalendarProps
  | DayCalendarProps
  | RangeCalendarProps;

export type SelectedValue = DayISO | DateRange;
