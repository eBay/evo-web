export type DayISO = `${number}-${number}-${number}`;
export type MonthISO = `${number}-${number}`;

export function localeDefault(inputLocale?: string): string {
  if (inputLocale) return inputLocale;
  const locale =
    (typeof navigator !== "undefined" &&
      (navigator.language || (navigator as any).userLanguage)) ||
    "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf(locale);
    return locale;
  } catch {
    return "en-US";
  }
}

export function monthOffset(date: MonthISO, offset: number) {
  let [year, month] = date.split("-").map(Number);
  month -= 1;
  year += Math.floor((month += offset) / 12);
  month = (((month % 12) + 12) % 12) + 1;
  return `${year}-${month < 10 ? "0" : ""}${month}` as MonthISO;
}

export function getWeekdayInfo(localeName?: string) {
  localeName = localeDefault(localeName);
  const firstDayOfWeek = getFirstDayOfWeek(localeName);

  const weekdayLabelFormatter = new Intl.DateTimeFormat(localeName, {
    weekday: "short",
  });
  const weekday = new Date(2022, 9, 2 + firstDayOfWeek); // October 2, 2022 was a Sunday
  const weekdayLabels = [...Array(7)].map(() => {
    const dayLabel = weekdayLabelFormatter.format(weekday);
    weekday.setDate(weekday.getDate() + 1);
    return dayLabel;
  });

  return { firstDayOfWeek, weekdayLabels };
}

export type DateField = "year" | "month" | "day";
interface DatePart {
  type: DateField | "literal";
  value: string;
}

// Typed dates don't contain the bidi marks Intl puts around RTL separators.
const BIDI_MARKS = /[\u061c\u200e\u200f]/g;

export function getDateParts(locale?: string) {
  return new Intl.DateTimeFormat(localeDefault(locale), {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    calendar: "gregory",
  })
    .formatToParts(0)
    .map(({ type, value }) => ({
      type: type as DatePart["type"],
      value: value.replace(BIDI_MARKS, ""),
    }));
}

function getFirstDayOfWeek(localeName: string) {
  // Chrome 99–129 has this getter instead of getWeekInfo(). Remove it once
  // browserslist requires Chrome 130.
  const locale = new Intl.Locale(localeName) as Intl.Locale & {
    readonly weekInfo?: Intl.WeekInfo;
  };
  const weekInfo = locale.getWeekInfo?.() ?? locale.weekInfo;
  return weekInfo ? weekInfo.firstDay % 7 : 0;
}

/**
 * ISO 8601 date format (YYYY-MM-DD) in **UTC** timezone
 */
export function toISO(date: Date) {
  return date.toISOString().slice(0, 10) as DayISO;
}

export function getTodayISO() {
  return toISO(new Date());
}

export function getMonthDate(date: DayISO | MonthISO, offset: number) {
  const [year, month] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month + offset - 1));
}

export function getMonthName(
  locale: string,
  date: DayISO | MonthISO,
  offset: number,
) {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(getMonthDate(date, offset));
}

export function getMonthInfo(baseDate: DayISO | MonthISO, offset: number) {
  const date = getMonthDate(baseDate, offset);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();

  return {
    year,
    month,
    firstWeekday: date.getUTCDay(),
    length: new Date(Date.UTC(year, month + 1, 0)).getUTCDate(),
  };
}

export function fromISO(iso: DayISO) {
  return new Date(iso);
}

export function offsetISO(iso: DayISO, days: number) {
  const date = fromISO(iso);
  date.setUTCDate(date.getUTCDate() + days);
  return toISO(date);
}
