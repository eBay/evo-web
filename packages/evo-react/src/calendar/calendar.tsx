import { useCallback, useMemo, useRef, useState } from "react";
import type { JSX, KeyboardEvent } from "react";
import classNames from "classnames";
import { EvoIconButton } from "../icon-button";
import { EvoIconChevronLeft24 } from "../icon/icons/chevron-left-24";
import { EvoIconChevronRight24 } from "../icon/icons/chevron-right-24";
import {
  getMonthDate,
  getMonthInfo,
  getMonthName,
  getWeekdayInfo,
  isDisabled,
  localeDefault,
  monthOffset,
  offsetISO,
  toISO,
} from "../utils/dates";
import type {
  A11yRangeText,
  DateRange,
  DayLinkAs,
  DayCalendarProps,
  DayISO,
  EvoCalendarProps,
  MonthISO,
  RangeCalendarProps,
  SelectedValue,
  StaticCalendarProps,
} from "./types";
import "@ebay/skin/calendar.mjs";

const DAY_UPDATE_KB = {
  ArrowRight: 1,
  ArrowLeft: -1,
  ArrowDown: 7,
  ArrowUp: -7,
};

export function EvoCalendar(props: StaticCalendarProps): JSX.Element;
export function EvoCalendar(props: DayCalendarProps): JSX.Element;
export function EvoCalendar(props: RangeCalendarProps): JSX.Element;
export function EvoCalendar({
  selectMode,
  selected: selectedProp,
  defaultSelected,
  onSelectedChange,
  visibleMonthCount = 1,
  locale: localeProp,
  today: todayProp,
  disable,
  visibleMonth: visibleMonthProp,
  defaultVisibleMonth,
  onVisibleMonthChange,
  a11yNavigateText,
  a11yRangeText,
  className,
  ...rest
}: EvoCalendarProps) {
  const {
    getDayHref,
    dayLinkAs,
    a11yTodayText,
    a11yDisabledText,
    a11ySelectedText,
    ...rootProps
  } = rest as StaticCalendarProps;
  const locale = localeDefault(localeProp);
  const today = todayProp ?? getTodayISO();

  const [uncontrolledSelected, setUncontrolledSelected] = useState<
    SelectedValue | undefined
  >(defaultSelected);
  const selected =
    selectedProp !== undefined ? selectedProp : uncontrolledSelected;

  const initialVisibleMonth =
    defaultVisibleMonth ?? (today.slice(0, 7) as MonthISO);
  const [uncontrolledVisibleMonth, setUncontrolledVisibleMonth] =
    useState<MonthISO>(initialVisibleMonth);
  const visibleMonth = visibleMonthProp ?? uncontrolledVisibleMonth;
  const [requestedFocusDate, setRequestedFocusDate] = useState<DayISO>(() =>
    getInitialFocus(visibleMonth, today, visibleMonthCount),
  );
  const focusedDate = getFocusedDate(
    requestedFocusDate,
    visibleMonth,
    today,
    visibleMonthCount,
  );
  const pendingFocusISO = useRef<DayISO | null>(null);
  const [bodyHasFocus, setBodyHasFocus] = useState(false);
  const [hoverDate, setHoverDate] = useState<DayISO | null>(null);

  const { firstDayOfWeek, weekdayLabels } = useMemo(
    () => getWeekdayInfo(locale),
    [locale],
  );

  const setVisibleMonth = useCallback(
    (nextVisibleMonth: MonthISO) => {
      if (visibleMonthProp === undefined) {
        setUncontrolledVisibleMonth(nextVisibleMonth);
      }
      onVisibleMonthChange?.(nextVisibleMonth);
    },
    [onVisibleMonthChange, visibleMonthProp],
  );

  const setSelected = useCallback(
    (nextSelected: SelectedValue) => {
      if (selectedProp === undefined) {
        setUncontrolledSelected(nextSelected);
      }
      (onSelectedChange as ((selected: SelectedValue) => void) | undefined)?.(
        nextSelected,
      );
    },
    [onSelectedChange, selectedProp],
  );

  const requestFocus = useCallback((iso: DayISO) => {
    pendingFocusISO.current = iso;
    setRequestedFocusDate(iso);
  }, []);

  const maybeFocusDay = useCallback(
    (iso: DayISO, element: HTMLButtonElement | null) => {
      if (element && pendingFocusISO.current === iso) {
        pendingFocusISO.current = null;
        element.focus();
      }
    },
    [],
  );

  const range = getRange({
    selected,
    selectMode,
    hoverDate,
    focus: focusedDate,
    bodyHasFocus,
  });

  const monthDates = [...Array(visibleMonthCount)].map((_, i) =>
    getMonthDate(visibleMonth, i),
  );

  const getFirstVisibleISO = (start = visibleMonth) => `${start}-01` as DayISO;
  const getLastVisibleISO = (start = visibleMonth) =>
    toISO(new Date(getMonthDate(start, visibleMonthCount).setUTCDate(0)));
  const isDayDisabled = (iso: DayISO) => !!disable && isDisabled(disable, iso);
  const getFirstActiveISO = (start = visibleMonth) => {
    let iso = getFirstVisibleISO(start);
    const lastVisible = getLastVisibleISO(start);
    while (iso <= lastVisible && isDayDisabled(iso)) {
      iso = offsetISO(iso, 1);
    }
    return iso > lastVisible ? null : iso;
  };
  const getLastActiveISO = (start = visibleMonth) => {
    let iso = getLastVisibleISO(start);
    const firstVisible = getFirstVisibleISO(start);
    while (iso >= firstVisible && isDayDisabled(iso)) {
      iso = offsetISO(iso, -1);
    }
    return iso < firstVisible ? null : iso;
  };
  const getActiveISOInWindow = (iso: DayISO, start = visibleMonth) => {
    const firstVisible = getFirstVisibleISO(start);
    const lastVisible = getLastVisibleISO(start);

    if (iso < firstVisible) {
      return getFirstActiveISO(start) ?? firstVisible;
    }
    if (iso > lastVisible) {
      return getLastActiveISO(start) ?? lastVisible;
    }
    if (!isDayDisabled(iso)) {
      return iso;
    }

    let nextISO = iso;
    while (nextISO <= lastVisible && isDayDisabled(nextISO)) {
      nextISO = offsetISO(nextISO, 1);
    }
    if (nextISO <= lastVisible) {
      return nextISO;
    }

    return getLastActiveISO(start) ?? firstVisible;
  };
  const isPreviousMonthDisabled = () =>
    !!disable?.before && getFirstVisibleISO() <= disable.before;
  const isNextMonthDisabled = () =>
    !!disable?.after && getLastVisibleISO() >= disable.after;
  const navigateMonth = (offset: -1 | 1, targetFocus: DayISO) => {
    if (offset < 0 && isPreviousMonthDisabled()) {
      return false;
    }
    if (offset > 0 && isNextMonthDisabled()) {
      return false;
    }

    const nextVisibleMonth = monthOffset(visibleMonth, offset);
    const nextFocus = getActiveISOInWindow(targetFocus, nextVisibleMonth);
    setVisibleMonth(nextVisibleMonth);
    requestFocus(nextFocus);
    return true;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key in DAY_UPDATE_KB) {
      const change = DAY_UPDATE_KB[event.key as keyof typeof DAY_UPDATE_KB];
      event.preventDefault();
      let iso = focusedDate;
      let tries = 7;
      do {
        iso = offsetISO(iso, change);
      } while (tries-- > 0 && isDayDisabled(iso));

      if (tries > 0) {
        const firstVisible = getFirstVisibleISO();
        const lastVisible = getLastVisibleISO();
        if (iso < firstVisible) {
          if (!a11yNavigateText || !navigateMonth(-1, iso)) {
            iso = getFirstActiveISO() ?? firstVisible;
            requestFocus(iso);
          }
        } else if (iso > lastVisible) {
          if (!a11yNavigateText || !navigateMonth(1, iso)) {
            iso = getLastActiveISO() ?? lastVisible;
            requestFocus(iso);
          }
        } else {
          requestFocus(iso);
        }
      }
    } else {
      switch (event.key) {
        case "PageUp": {
          event.preventDefault();
          navigateMonth(-1, offsetMonthForDay(focusedDate, -1));
          break;
        }
        case "PageDown": {
          event.preventDefault();
          navigateMonth(1, offsetMonthForDay(focusedDate, 1));
          break;
        }
        case "Home": {
          event.preventDefault();
          requestFocus(getFirstActiveISO() ?? getFirstVisibleISO());
          break;
        }
        case "End": {
          event.preventDefault();
          requestFocus(getLastActiveISO() ?? getLastVisibleISO());
          break;
        }
      }
    }
  };
  const renderDay = (year: number, month: number, day: number) => {
    const iso = toISO(new Date(Date.UTC(year, month, day)));
    const isSelected = isSelectedDate(selected, iso);
    const rangeStart = !!range && range.from === iso;
    const rangeEnd = !!range && range.to === iso;
    const inRange = !!range && iso > range.from && iso < range.to;
    const disabled = !!disable && isDisabled(disable, iso);

    return (
      <td
        key={iso}
        className={classNames({
          "calendar__cell--selected": isSelected,
          "calendar__range--start": rangeStart,
          calendar__range: inRange,
          "calendar__range--end": rangeEnd,
        })}
      >
        {selectMode ? (
          <button
            type="button"
            disabled={disabled}
            aria-label={[
              day,
              rangeStart && a11yRangeText?.start,
              inRange && a11yRangeText?.in,
              rangeEnd && a11yRangeText?.end,
            ]
              .filter(Boolean)
              .join(" - ")}
            ref={(element) => maybeFocusDay(iso, element)}
            tabIndex={focusedDate !== iso ? -1 : undefined}
            aria-current={iso === today ? "date" : undefined}
            aria-pressed={isSelected ? "true" : undefined}
            data-iso={iso}
            onMouseEnter={() => {
              setHoverDate(iso);
            }}
            onMouseLeave={() => {
              setHoverDate(null);
            }}
            onClick={() => {
              requestFocus(iso);
              if (selectMode === "day") {
                setSelected(iso);
              } else if (selectMode === "range") {
                setSelected(getNextRangeSelection(selected, iso));
              }
            }}
          >
            {day}
          </button>
        ) : (
          <StaticDateCell
            day={day}
            iso={iso}
            today={today}
            disabled={disabled}
            selected={isSelected}
            rangeStart={rangeStart}
            inRange={inRange}
            rangeEnd={rangeEnd}
            a11yRangeText={a11yRangeText}
            getDayHref={getDayHref}
            dayLinkAs={dayLinkAs}
            a11yTodayText={a11yTodayText}
            a11yDisabledText={a11yDisabledText}
            a11ySelectedText={a11ySelectedText}
          />
        )}
      </td>
    );
  };

  return (
    <div {...rootProps} className={classNames("calendar", className)}>
      {a11yNavigateText && (
        <div className="calendar__header">
          <div className="calendar__header--inner">
            <EvoIconButton
              disabled={isPreviousMonthDisabled()}
              onClick={() => {
                navigateMonth(-1, offsetMonthForDay(focusedDate, -1));
              }}
              a11yText={a11yNavigateText(
                getMonthName(locale, visibleMonth, -1),
                "prev",
              )}
            >
              <EvoIconChevronLeft24 />
            </EvoIconButton>
            {monthDates.map((monthDate) => (
              <h3 key={toISO(monthDate)}>
                {getMonthName(locale, toISO(monthDate), 0)}
              </h3>
            ))}
            <EvoIconButton
              disabled={isNextMonthDisabled()}
              onClick={() => {
                navigateMonth(1, offsetMonthForDay(focusedDate, 1));
              }}
              a11yText={a11yNavigateText(
                getMonthName(locale, visibleMonth, visibleMonthCount),
                "next",
              )}
            >
              <EvoIconChevronRight24 />
            </EvoIconButton>
          </div>
        </div>
      )}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="calendar__body"
        onFocus={() => {
          setBodyHasFocus(true);
        }}
        onBlur={(event) => {
          setBodyHasFocus(
            event.currentTarget.contains(event.relatedTarget as Node | null),
          );
        }}
        onKeyDown={handleKeyDown}
      >
        {monthDates.map((monthDate, i) => {
          const { year, month, firstWeekday, length } = getMonthInfo(
            visibleMonth,
            i,
          );
          const blankDays = (firstWeekday - firstDayOfWeek + 7) % 7;

          return (
            <div key={toISO(monthDate)} className="calendar__month">
              <table>
                <caption>{getMonthName(locale, visibleMonth, i)}</caption>
                <thead>
                  <tr>
                    {weekdayLabels.map((dayName) => (
                      <th key={dayName}>{dayName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...Array(Math.ceil((blankDays + length) / 7))].map(
                    (_, row) => {
                      const startDate = row * 7 - blankDays + 1;
                      const endDate = Math.min(startDate + 7, length + 1);

                      return (
                        <tr key={row}>
                          {row === 0 && blankDays !== 0 && (
                            <td colSpan={blankDays} />
                          )}
                          {[...Array(endDate - Math.max(startDate, 1))].map(
                            (_, dayIndex) =>
                              renderDay(
                                year,
                                month,
                                Math.max(startDate, 1) + dayIndex,
                              ),
                          )}
                        </tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type StaticDateCellProps = {
  day: number;
  iso: DayISO;
  today: DayISO;
  disabled: boolean;
  selected: boolean;
  rangeStart: boolean;
  inRange: boolean;
  rangeEnd: boolean;
  a11yRangeText?: A11yRangeText;
  getDayHref?: (iso: DayISO) => string | false | null | undefined;
  dayLinkAs?: DayLinkAs;
  a11yTodayText?: string;
  a11yDisabledText?: string;
  a11ySelectedText?: string;
};

function StaticDateCell({
  day,
  iso,
  today,
  disabled,
  selected,
  rangeStart,
  inRange,
  rangeEnd,
  a11yRangeText,
  getDayHref,
  dayLinkAs: DayLink,
  a11yTodayText,
  a11yDisabledText,
  a11ySelectedText,
}: StaticDateCellProps) {
  const href = !disabled && getDayHref?.(iso);
  const shouldRenderDayLink = !disabled && !!DayLink && (!getDayHref || !!href);
  const clippedText = [
    "",
    iso === today && a11yTodayText,
    selected && a11ySelectedText,
    rangeStart && a11yRangeText?.start,
    inRange && a11yRangeText?.in,
    rangeEnd && a11yRangeText?.end,
    disabled && a11yDisabledText,
  ]
    .filter(Boolean)
    .join(" - ");
  const dateClassName = classNames({
    "calendar__cell--disabled": disabled,
    "calendar__cell--current": iso === today,
  });

  const children = (
    <>
      {day}
      {clippedText && <span className="clipped">{clippedText}</span>}
    </>
  );

  if (shouldRenderDayLink) {
    return (
      <DayLink iso={iso} href={href || undefined} className={dateClassName}>
        {children}
      </DayLink>
    );
  }

  if (href) {
    return (
      <a className={dateClassName} href={href}>
        {children}
      </a>
    );
  }

  return <span className={dateClassName}>{children}</span>;
}

function getRange({
  selected,
  selectMode,
  hoverDate,
  focus,
  bodyHasFocus,
}: {
  selected?: SelectedValue;
  selectMode?: EvoCalendarProps["selectMode"];
  hoverDate: DayISO | null;
  focus: DayISO;
  bodyHasFocus: boolean;
}): Required<DateRange> | null {
  if (isRange(selected) && selected.from && selected.to) {
    return selected as Required<DateRange>;
  }

  if (selectMode !== "range") {
    return null;
  }

  const singleSelected = isRange(selected)
    ? selected.from || selected.to
    : selected;
  const interactingWith = hoverDate || (bodyHasFocus && focus);

  if (singleSelected && interactingWith) {
    return singleSelected > interactingWith
      ? { from: interactingWith, to: singleSelected }
      : { from: singleSelected, to: interactingWith };
  }

  return null;
}

function getNextRangeSelection(
  selected: SelectedValue | undefined,
  iso: DayISO,
): DateRange {
  if (isRange(selected)) {
    if ((selected.from && selected.to) || (!selected.from && !selected.to)) {
      return { from: iso };
    }

    const singleSelected = selected.from || selected.to;
    return singleSelected! > iso
      ? { from: iso, to: singleSelected }
      : { from: singleSelected, to: iso };
  }

  if (selected) {
    return selected > iso
      ? { from: iso, to: selected }
      : { from: selected, to: iso };
  }

  return { from: iso };
}

function isSelectedDate(selected: SelectedValue | undefined, iso: DayISO) {
  return isRange(selected)
    ? selected.from === iso || selected.to === iso
    : selected === iso;
}

function isRange(selected: SelectedValue | undefined): selected is DateRange {
  return typeof selected === "object" && selected !== null;
}

function getInitialFocus(
  visibleMonth: MonthISO,
  today: DayISO,
  visibleMonthCount: number,
): DayISO {
  const lastVisibleMonth = monthOffset(visibleMonth, visibleMonthCount - 1);
  return today.slice(0, 7) >= visibleMonth &&
    today.slice(0, 7) <= lastVisibleMonth
    ? today
    : (`${visibleMonth}-01` as DayISO);
}

function getFocusedDate(
  focus: DayISO,
  visibleMonth: MonthISO,
  today: DayISO,
  visibleMonthCount: number,
): DayISO {
  return focus.slice(0, 7) >= visibleMonth &&
    focus.slice(0, 7) <= monthOffset(visibleMonth, visibleMonthCount - 1)
    ? focus
    : getInitialFocus(visibleMonth, today, visibleMonthCount);
}

function offsetMonthForDay(iso: DayISO, offset: -1 | 1): DayISO {
  const targetMonth = monthOffset(iso.slice(0, 7) as MonthISO, offset);
  const { year, month, length } = getMonthInfo(targetMonth, 0);
  const day = Math.min(Number(iso.slice(8, 10)), length);
  return toISO(new Date(Date.UTC(year, month, day)));
}

function getTodayISO() {
  return toISO(new Date());
}
