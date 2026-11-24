import {
  type DateField,
  type DayISO,
  getDateParts,
  localeDefault,
} from "./date-utils";

const SIZES: Record<DateField, number> = { year: 4, month: 2, day: 2 };

/**
 * The locale's part order, and the text before the first part and after
 * each, so `literals[i + 1]` follows `fields[i]`.
 */
function layout(locale?: string) {
  const fields: DateField[] = [];
  const literals = [""];
  for (const { type, value } of getDateParts(locale)) {
    if (type === "literal") {
      literals[literals.length - 1] += value;
    } else {
      fields.push(type);
      literals.push("");
    }
  }
  return { fields, literals };
}

function assemble(parts: string[], literals: string[]) {
  return literals[0] + parts.map((part, i) => part + literals[i + 1]).join("");
}

// A digit that can't start a two-digit month or day completes it, as in 9/.
function isDone(digits: string, field: DateField) {
  return (
    digits.length >= SIZES[field] ||
    (field === "month" && +digits > 1) ||
    (field === "day" && +digits > 3)
  );
}

/**
 * Reads a typed or pasted date: parts with any separators, in the locale's
 * order or as an ISO date.
 */
export function parse(text: string, locale?: string): DayISO | null {
  const numbers: string[] = text.match(/\d+/g) ?? [];
  if (numbers.length !== 3) return null;

  // Pasted ISO dates are year-first whatever the locale's order.
  const fields: DateField[] =
    numbers[0].length === 4 ? ["year", "month", "day"] : layout(locale).fields;
  const year = numbers[fields.indexOf("year")];
  if (
    (year.length !== 2 && year.length !== 4) ||
    numbers.some((n, i) => n.length > SIZES[fields[i]])
  ) {
    return null;
  }
  const parsed = {} as Record<DateField, number>;
  fields.forEach((field, i) => (parsed[field] = +numbers[i]));

  if (year.length === 2) {
    // 2-digit year: if year is less than 50, assume 2000s, otherwise 1900s
    parsed.year += parsed.year < 50 ? 2000 : 1900;
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
  const values = { year, month, day };
  const { fields, literals } = layout(locale);
  return assemble(
    fields.map((field) => values[field]),
    literals,
  );
}

// Repeats the initial of the field's localized name, as in JJ/MM/AAAA. Scripts
// without letter case have no such convention, so they use English letters.
function placeholderPart(field: DateField, locale?: string) {
  locale = localeDefault(locale);
  const names = new Intl.DisplayNames(locale, { type: "dateTimeField" });
  const initial = [...names.of(field)!][0].toLocaleUpperCase(locale);
  const letter =
    initial === initial.toLocaleLowerCase(locale)
      ? field[0].toUpperCase()
      : initial;
  return letter.repeat(SIZES[field]);
}

export function placeholder(locale?: string) {
  const { fields, literals } = layout(locale);
  return assemble(
    fields.map((field) => placeholderPart(field, locale)),
    literals,
  );
}

/**
 * The text to insert for a digit typed at the end of `text`: the separator
 * goes before it if the last part was already done, and after it once the
 * digit completes a part that another follows.
 */
export function typeDigit(text: string, digit: string, locale?: string) {
  const { fields, literals } = layout(locale);
  const runs: string[] = text.match(/\d+/g) ?? [];
  const endsInDigit = /\d$/.test(text);
  let slot = endsInDigit ? runs.length - 1 : runs.length;
  let digits = endsInDigit ? runs[slot] + digit : digit;
  let insert = digit;
  if (endsInDigit && slot < 2 && isDone(runs[slot], fields[slot])) {
    insert = literals[slot + 1] + digit;
    slot++;
    digits = digit;
  }
  return slot < 2 && isDone(digits, fields[slot])
    ? insert + literals[slot + 1]
    : insert;
}

/** Whether every part of the date in `text` has been typed. */
export function isFilled(text: string, locale?: string) {
  const runs: string[] = text.match(/\d+/g) ?? [];
  return (
    runs.length === 3 &&
    /\d$/.test(text) &&
    isDone(runs[2], layout(locale).fields[2])
  );
}

/**
 * Whether a separator typed at the end of `text` repeats the one already
 * there, as after one inserted by typeDigit.
 */
export function endsWithSeparator(text: string, locale?: string) {
  const runs = text.match(/\d+/g)?.length ?? 0;
  return runs > 0 && runs < 3 && text.endsWith(layout(locale).literals[runs]);
}

/**
 * The range Backspace (or Delete, `forward`) removes next to a separator, or
 * an empty one to move the caret to. At the end the separator goes with the
 * digit before it, as they were typed together, and elsewhere the caret skips
 * it so parts never merge.
 */
export function editAtSeparator(text: string, caret: number, forward: boolean) {
  const next = forward ? text[caret] : text[caret - 1];
  if (next === undefined || /\d/.test(next)) return undefined;
  let edge = caret;
  if (forward) {
    while (edge < text.length && /\D/.test(text[edge])) edge++;
  } else {
    while (edge > 0 && /\D/.test(text[edge - 1])) edge--;
  }
  return !forward && caret === text.length && edge > 0
    ? { start: edge - 1, end: caret }
    : { start: edge, end: edge };
}

/**
 * The rest of the format after partly typed `text`, as in "D/YYYY" after
 * "12/0", or undefined when the text doesn't follow the format.
 */
export function remainingFormat(text: string, locale?: string) {
  const { fields, literals } = layout(locale);
  const runs: string[] = text.match(/\d+/g) ?? [];
  if (
    !runs.length ||
    runs.length > 3 ||
    /\p{L}/u.test(text) ||
    runs.some((run, i) => run.length > SIZES[fields[i]])
  ) {
    return undefined;
  }
  const last = runs.length - 1;
  let rest = "";
  if (/\d$/.test(text)) {
    if (!isDone(runs[last], fields[last])) {
      rest = placeholderPart(fields[last], locale).slice(runs[last].length);
    }
    rest += literals[last + 1];
  }
  for (let i = runs.length; i < 3; i++) {
    rest += placeholderPart(fields[i], locale) + literals[i + 1];
  }
  return rest;
}

function padStart(num: number, digits: number) {
  return String(num).padStart(digits, "0");
}
