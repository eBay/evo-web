import type { DayISO, Disable, MonthISO } from "../calendar/types";
import localeInfo, { type LocaleInfo, type Locales } from "./locale-info";

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

const localeCache = new Map<string | undefined, LocaleInfo>();

export function getLocale(locale?: string): LocaleInfo {
  if (!locale) {
    locale = localeDefault();
  }

  const cached = localeCache.get(locale);
  if (cached) {
    return cached;
  }

  let info = { ...localeInfo._ } as LocaleInfo;
  let curr = localeInfo;
  const parts = locale.split("-");
  for (let part of parts) {
    part = part.toLowerCase();
    if (curr[part]) {
      curr = curr[part] as Locales;
      info = { ...info, ...curr._ };
    } else {
      break;
    }
  }

  localeCache.set(locale, info);
  return info;
}

export function parse(value: string, locale?: string): DayISO | null {
  const { o: order, s: sep } = getLocale(locale);
  const parts: string[] = [];
  const firstEnd = value.indexOf(sep[0].trim());
  parts.push(value.slice(0, firstEnd).trim());
  const secondEnd = value.indexOf(sep[1].trim(), firstEnd + 1);
  parts.push(value.slice(firstEnd + 1, secondEnd).trim());
  if (sep[2]) {
    const thirdEnd = value.indexOf(sep[2].trim(), secondEnd + 1);
    parts.push(
      value.slice(secondEnd + 1, thirdEnd === -1 ? undefined : thirdEnd).trim(),
    );
  } else {
    parts.push(value.slice(secondEnd + 1).trim());
  }

  if (parts.length !== 3) {
    return null;
  }

  const parsed = {} as { y: number; m: number; d: number };
  for (const i in parts) {
    const num = Number.parseInt(parts[i], 10);
    if (Number.isNaN(num)) {
      return null;
    }
    parsed[order[i] as "y" | "m" | "d"] = num;
  }

  if (parsed.y < 100) {
    parsed.y += parsed.y < 50 ? 2000 : 1900;
  }

  const iso =
    `${padStart(parsed.y, 4)}-${padStart(parsed.m, 2)}-${padStart(parsed.d, 2)}` as DayISO;
  if (Number.isNaN(new Date(iso).getTime())) {
    return null;
  }
  return iso;
}

export function format(date: DayISO, locale?: string) {
  if (!/^\d\d\d\d-\d\d-\d\d$/g.test(date)) {
    return "";
  }

  const { o: order, s: sep } = getLocale(locale);
  const [y, m, d] = date.split("-");
  const parts = { y, m, d };
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += parts[order[i] as "y" | "m" | "d"];
    if (sep[i]) {
      result += sep[i];
    }
  }

  return result;
}

export function placeholder(locale?: string) {
  const { o: order, s: sep, y, m, d } = getLocale(locale);
  const parts = {
    y: `${y}${y}${y}${y}`,
    m: `${m}${m}`,
    d: `${d}${d}`,
  };

  let result = "";
  for (let i = 0; i < 3; i++) {
    result += parts[order[i] as "y" | "m" | "d"];
    if (sep[i]) {
      result += sep[i];
    }
  }

  return result;
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

function padStart(num: number, digits: number) {
  return String(num).slice(-digits).padStart(digits, "0");
}
