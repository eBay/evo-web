import { useState } from "react";
import type { MonthISO } from "../calendar";
import { toISO } from "../utils/dates";
import type { DateInputRange, DateInputValue } from "./types";

export function monthFromValue(
  value: DateInputValue | DateInputRange | undefined,
): MonthISO | undefined {
  if (!value) {
    return undefined;
  }

  if (typeof value === "string") {
    return isoMonth(value);
  }

  return isoMonth(value.from || value.to);
}

function isoMonth(value?: string) {
  return value && /^\d{4}-\d{2}/.test(value)
    ? (value.slice(0, 7) as MonthISO)
    : undefined;
}

function currentMonth() {
  return toISO(new Date()).slice(0, 7) as MonthISO;
}

export function useFollowSelectedMonth(
  selectedMonth: MonthISO | undefined,
  controlledVisibleMonth?: MonthISO,
  defaultVisibleMonth?: MonthISO,
) {
  const [visibleMonth, setVisibleMonth] = useState(
    controlledVisibleMonth ??
      selectedMonth ??
      defaultVisibleMonth ??
      currentMonth(),
  );
  const [prevSelectedMonth, setPrevSelectedMonth] = useState(selectedMonth);

  if (
    controlledVisibleMonth === undefined &&
    selectedMonth &&
    selectedMonth !== prevSelectedMonth
  ) {
    setPrevSelectedMonth(selectedMonth);
    setVisibleMonth(selectedMonth);
  }

  return {
    visibleMonth: controlledVisibleMonth ?? visibleMonth,
    setVisibleMonth,
  };
}
