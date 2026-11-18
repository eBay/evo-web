import {
  type DateField,
  type DayISO,
  getDateParts,
  localeDefault,
} from "./date-utils";

const SIZES: Record<DateField, number> = { year: 4, month: 2, day: 2 };

function getLayout(locale?: string) {
  const order: DateField[] = [];
  const sep: string[] = [];
  for (const { type, value } of getDateParts(locale)) {
    if (type !== "literal") order.push(type);
    else if (order.length) sep[order.length - 1] = value;
  }
  return { order, sep };
}

export function parse(value: string, locale?: string): DayISO | null {
  const { order, sep } = getLayout(locale);

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

  const parsed = {} as Record<DateField, number>;
  for (const i in parts) {
    const num = parseInt(parts[i]);
    if (isNaN(num)) {
      return null;
    }
    parsed[order[i]] = num;
  }

  if (parsed.year < 100) {
    // 2-digit year: if year is less than 50, assume 2000s, otherwise 1900s
    if (parsed.year < 50) {
      parsed.year += 2000;
    } else {
      parsed.year += 1900;
    }
  }

  const iso =
    `${padStart(parsed.year, 4)}-${padStart(parsed.month, 2)}-${padStart(parsed.day, 2)}` as DayISO;
  const date = new Date(iso);
  if (isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== iso) {
    return null;
  }
  return iso;
}

export function format(date: DayISO, locale?: string) {
  if (!/^\d\d\d\d-\d\d-\d\d$/g.test(date)) {
    return "";
  }

  const [year, month, day] = date.split("-");
  return fill({ year, month, day }, locale);
}

// Repeats the initial of the field's localized name, as in JJ/MM/AAAA. Scripts
// without letter case have no such convention, so they use English letters.
export function placeholder(locale?: string) {
  locale = localeDefault(locale);
  const names = new Intl.DisplayNames(locale, { type: "dateTimeField" });
  const initial = (field: DateField) => {
    const letter = [...names.of(field)!][0].toLocaleUpperCase(locale);
    return letter === letter.toLocaleLowerCase(locale)
      ? field[0].toUpperCase()
      : letter;
  };
  return fill(
    {
      year: initial("year").repeat(SIZES.year),
      month: initial("month").repeat(SIZES.month),
      day: initial("day").repeat(SIZES.day),
    },
    locale,
  );
}

function fill(values: Record<DateField, string>, locale?: string) {
  return getDateParts(locale)
    .map(({ type, value }) => (type === "literal" ? value : values[type]))
    .join("");
}

/**
 * Reformat typed text into the locale's date layout ("12082024" ->
 * "12/08/2024"), preserving empty parts so each part edits independently.
 * `eager` appends a separator when the final part completes; pass `false`
 * while deleting.
 */
export function maskDate(raw: string, locale?: string, eager = true): string {
  const { order, sep } = getLayout(locale);
  const max = (i: number) => (order[i] === "year" ? 4 : 2);

  const uniqueSeps = [...new Set(sep.filter(Boolean))];
  const splitter = new RegExp(
    uniqueSeps
      .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .concat("\\D")
      .join("|"),
  );
  const parts: string[] = [];
  for (const segment of raw.split(splitter)) {
    let rest = segment;
    do {
      if (parts.length < 3) {
        parts.push(rest.slice(0, max(parts.length)));
        rest = rest.slice(max(parts.length - 1));
      } else {
        parts[2] = (parts[2] + rest).slice(0, max(2));
        rest = "";
      }
    } while (rest);
  }

  let result = "";
  for (let i = 0; i < parts.length; i++) {
    result += parts[i];
    if (i < parts.length - 1) {
      result += sep[i] ?? "";
    }
  }

  const last = parts.length - 1;
  if (
    eager &&
    parts.length < 3 &&
    parts[last] &&
    parts[last].length === max(last) &&
    sep[last]
  ) {
    result += sep[last];
  }
  return result;
}

function padStart(num: number, digits: number) {
  return String(num).slice(-digits).padStart(digits, "0");
}
