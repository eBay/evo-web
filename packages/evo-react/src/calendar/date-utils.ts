import type { DayISO, Disable, MonthISO } from "./types";

export function localeDefault(inputLocale?: string): string {
  if (inputLocale) {
    return inputLocale;
  }

  const locale =
    (typeof navigator !== "undefined" &&
      (navigator.language ||
        (navigator as { userLanguage?: string }).userLanguage)) ||
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
  const weekday = new Date(2022, 9, 2 + firstDayOfWeek);
  const weekdayLabels = [...Array(7)].map(() => {
    const dayLabel = weekdayLabelFormatter.format(weekday);
    weekday.setDate(weekday.getDate() + 1);
    return dayLabel;
  });

  return { firstDayOfWeek, weekdayLabels };
}

export function toISO(date: Date) {
  return date.toISOString().slice(0, 10) as DayISO;
}

export function fromISO(iso: DayISO) {
  return new Date(iso);
}

export function offsetISO(iso: DayISO, days: number) {
  const date = fromISO(iso);
  date.setUTCDate(date.getUTCDate() + days);
  return toISO(date);
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

export function isDisabled(
  { before, after, weekdays, list, callback }: Disable,
  date: DayISO,
) {
  return (
    (after && date > after) ||
    (before && date < before) ||
    weekdays?.includes(fromISO(date).getUTCDay()) ||
    list?.includes(date) ||
    callback?.(date) ||
    false
  );
}

function getFirstDayOfWeek(localeName: string): number {
  try {
    const locale = new Intl.Locale(localeName) as Intl.Locale & {
      weekInfo?: { firstDay: number };
    };

    if (locale.weekInfo) {
      return locale.weekInfo.firstDay % 7;
    }
  } catch {
    return 0;
  }

  return 0;
}
