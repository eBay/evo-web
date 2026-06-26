import {
  type DayISO,
  type MonthISO,
  fromISO,
  getMonthDate,
  getMonthInfo,
  monthOffset,
  offsetISO,
  toISO,
} from "../../common/dates/date-utils";

export interface Disable {
  before?: DayISO;
  after?: DayISO;
  weekdays?: number[];
  list?: DayISO[];
  callback?: (iso: DayISO) => boolean;
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
    callback?.(date)
  );
}

export function getFirstVisibleISO(viewStart: MonthISO) {
  return `${viewStart}-01` as DayISO;
}

export function getLastVisibleISO(viewStart: MonthISO, numMonths: number) {
  return toISO(new Date(getMonthDate(viewStart, numMonths).setUTCDate(0)));
}

export function getFirstActiveISO(
  disable: Disable | undefined,
  viewStart: MonthISO,
  numMonths: number,
) {
  let iso = getFirstVisibleISO(viewStart);
  const lastVisible = getLastVisibleISO(viewStart, numMonths);
  while (iso <= lastVisible && disable && isDisabled(disable, iso)) {
    iso = offsetISO(iso, 1);
  }
  return iso > lastVisible ? null : iso;
}

export function getLastActiveISO(
  disable: Disable | undefined,
  viewStart: MonthISO,
  numMonths: number,
) {
  let iso = getLastVisibleISO(viewStart, numMonths);
  const firstVisible = getFirstVisibleISO(viewStart);
  while (iso >= firstVisible && disable && isDisabled(disable, iso)) {
    iso = offsetISO(iso, -1);
  }
  return iso < firstVisible ? null : iso;
}

export function getActiveISOInWindow(
  disable: Disable | undefined,
  iso: DayISO,
  viewStart: MonthISO,
  numMonths: number,
) {
  const firstVisible = getFirstVisibleISO(viewStart);
  const lastVisible = getLastVisibleISO(viewStart, numMonths);

  if (iso < firstVisible) {
    return getFirstActiveISO(disable, viewStart, numMonths) || firstVisible;
  }
  if (iso > lastVisible) {
    return getLastActiveISO(disable, viewStart, numMonths) || lastVisible;
  }
  if (!disable || !isDisabled(disable, iso)) {
    return iso;
  }

  let nextISO = iso;
  while (nextISO <= lastVisible && isDisabled(disable, nextISO)) {
    nextISO = offsetISO(nextISO, 1);
  }
  if (nextISO <= lastVisible) {
    return nextISO;
  }

  return getLastActiveISO(disable, viewStart, numMonths) || firstVisible;
}

export function isPreviousMonthDisabled(
  disable: Disable | undefined,
  viewStart: MonthISO,
) {
  return !!disable?.before && getFirstVisibleISO(viewStart) <= disable.before;
}

export function isNextMonthDisabled(
  disable: Disable | undefined,
  viewStart: MonthISO,
  numMonths: number,
) {
  return (
    !!disable?.after && getLastVisibleISO(viewStart, numMonths) >= disable.after
  );
}

export function getInitialFocus(
  viewStart: MonthISO,
  today: DayISO,
  numMonths: number,
) {
  const lastVisibleMonth = monthOffset(viewStart, numMonths - 1);
  return today.slice(0, 7) >= viewStart && today.slice(0, 7) <= lastVisibleMonth
    ? today
    : (`${viewStart}-01` as DayISO);
}

export function offsetMonthForDay(iso: DayISO, offset: -1 | 1) {
  const targetMonth = monthOffset(iso.slice(0, 7) as MonthISO, offset);
  const { year, month, length } = getMonthInfo(targetMonth, 0);
  const day = Math.min(Number(iso.slice(8, 10)), length);
  return toISO(new Date(Date.UTC(year, month, day)));
}

export const DAY_UPDATE_KB = {
  ArrowRight: 1,
  ArrowLeft: -1,
  ArrowDown: 7,
  ArrowUp: -7,
};
