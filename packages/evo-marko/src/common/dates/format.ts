import { type DayISO, getLocale } from "./date-utils";

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
    const num = parseInt(parts[i]);
    if (isNaN(num)) {
      return null;
    }
    parsed[order[i] as "y" | "m" | "d"] = num;
  }

  if (parsed.y < 100) {
    // 2-digit year: if year is less than 50, assume 2000s, otherwise 1900s
    if (parsed.y < 50) {
      parsed.y += 2000;
    } else {
      parsed.y += 1900;
    }
  }

  const iso =
    `${padStart(parsed.y, 4)}-${padStart(parsed.m, 2)}-${padStart(parsed.d, 2)}` as DayISO;
  if (isNaN(new Date(iso).getTime())) {
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

/**
 * Reformat freeform typed text into the locale's date layout, chunking the
 * digits and inserting the locale's separators (e.g. "12082024" ->
 * "12/08/2024" for en-US).
 *
 * When `eager` is true a separator is also appended the moment the final typed
 * segment is complete; pass `false` while the user is deleting so a
 * just-removed separator is not immediately re-added.
 */
export function maskDate(raw: string, locale?: string, eager = true): string {
  const { o: order, s: sep } = getLocale(locale);
  const digits = raw.replace(/\D/g, "");
  let result = "";
  let consumed = 0;
  for (let i = 0; i < 3 && consumed < digits.length; i++) {
    const length = order[i] === "y" ? 4 : 2;
    const segment = digits.slice(consumed, consumed + length);
    consumed += segment.length;
    result += segment;
    if (
      sep[i] &&
      segment.length === length &&
      (consumed < digits.length || eager)
    ) {
      result += sep[i];
    }
  }
  return result;
}

function padStart(num: number, digits: number) {
  return String(num).slice(-digits).padStart(digits, "0");
}
