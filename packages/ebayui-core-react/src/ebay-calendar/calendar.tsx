// TODO: Check onKeydown event on non interactive table event
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC, FocusEvent, KeyboardEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { EbayIconButton } from "../ebay-icon-button";
import { DayISO, fromISO, getWeekdayInfo, localeOverride, offsetISO, toISO } from "./date-utils";
import classNames from "classnames";
import { EbayIconChevronLeft24 } from "../ebay-icon/icons/ebay-icon-chevron-left-24";
import { EbayIconChevronRight24 } from "../ebay-icon/icons/ebay-icon-chevron-right-24";

export type EbayCalendarProps = {
    selected?: DayISO | DayISO[];
    numMonths?: number;
    navigable?: boolean;
    interactive?: boolean;
    range?: boolean;
    locale?: string;
    disableBefore?: DayISO;
    disableAfter?: DayISO;
    disableWeekdays?: number[];
    disableList?: DayISO[];
    getA11yShowMonthText?: (monthTitle: string) => string;
    a11ySelectedText?: string;
    a11yRangeStartText?: string;
    a11yInRangeText?: string;
    a11yRangeEndText?: string;
    a11ySeparator?: string;
    a11yTodayText?: string;
    a11yDisabledText?: string;
    linkBuilder?: (iso: DayISO) => string;
    onMonthChange?: ({ iso }: { iso: DayISO }) => void;
    onFocus?: (event: MouseEvent | KeyboardEvent | FocusEvent, { iso }: { iso: DayISO }) => void;
    onSelect?: (event: MouseEvent, { iso }: { iso: DayISO }) => void;
};

const DAY_UPDATE_KEYMAP = {
    ArrowRight: 1,
    ArrowLeft: -1,
    ArrowDown: 7,
    ArrowUp: -7,
};

const EbayCalendar: FC<EbayCalendarProps> = ({
    selected,
    numMonths = 1,
    navigable,
    interactive,
    range,
    locale,
    disableBefore,
    disableAfter,
    disableWeekdays,
    disableList,
    a11ySelectedText = "selected",
    a11yRangeStartText = "start of range",
    a11yInRangeText = "in range",
    a11yRangeEndText = "end of range",
    a11ySeparator = "-",
    a11yTodayText = "today",
    a11yDisabledText = "inactive",
    getA11yShowMonthText = (monthTitle) => `Show ${monthTitle}`,
    linkBuilder,
    onMonthChange = () => {},
    onFocus = () => {},
    onSelect = () => {},
}) => {
    const todayISO = toISO(new Date());
    const { firstDayOfWeek, weekdayLabels } = getWeekdayInfo(localeOverride(locale));
    const containerRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);
    const [focusISO, setFocusISO] = useState(null);
    const [tabIndexISO, setTabIndexISO] = useState(todayISO);

    const baseISO = useRef(todayISO);

    const getMonthDate = (monthOffset: number) => {
        const baseDate = fromISO(baseISO.current);
        const date = new Date(Date.UTC(baseDate.getUTCFullYear(), baseDate.getUTCMonth() + monthOffset));

        return date;
    };

    const getFirstVisibleISO = () => toISO(getMonthDate(offset));

    const getLastVisibleISO = () => {
        const baseDate = fromISO(baseISO.current);
        return toISO(
            new Date(Date.UTC(baseDate.getUTCFullYear(), baseDate.getUTCMonth() + offset + (numMonths || 1), 0)),
        );
    };

    useEffect(() => {
        if (selected) {
            const selectedISOs = Array.isArray(selected) ? selected : [selected];
            const currFirstISO = getFirstVisibleISO();
            const currLastISO = getLastVisibleISO();
            const selectedTimeInView = selectedISOs.find((iso) => iso >= currFirstISO && iso <= currLastISO);

            if (selectedTimeInView === undefined) {
                baseISO.current = selectedISOs[0];
                setOffset(0);
            }
        }
    }, [selected]);

    const calculateRangeDisplay = () => {
        if (selected && range) {
            let iso1: DayISO | undefined;
            let iso2: DayISO | undefined;

            if (Array.isArray(selected)) {
                // Two elements are selected, we can use them as the ends of the range.
                [iso1, iso2] = selected;
            } else if (focusISO) {
                // One element is selected and the user is focused on a date,
                // so we use the selected component and the focus date instead
                iso1 = selected;
                iso2 = focusISO;
            }

            if (iso1 && iso2) {
                const [start, end] = [iso1, iso2].sort();
                return {
                    rangeStart: start,
                    rangeEnd: end,
                };
            }
        }

        return {
            rangeStart: null,
            rangeEnd: null,
        };
    };

    const monthTitle = (date: Date) => {
        const formatter = new Intl.DateTimeFormat(localeOverride(locale), {
            month: "long",
            year: "numeric",
        });
        return formatter.format(new Date(date.getUTCFullYear(), date.getUTCMonth()));
    };

    const isDayDisabled = (iso: DayISO) =>
        (disableBefore && iso < disableBefore) ||
        (disableAfter && iso > disableAfter) ||
        (disableWeekdays && disableWeekdays.includes(fromISO(iso).getUTCDay())) ||
        (disableList && disableList.includes(iso));

    const getFirstActiveISO = () => {
        let iso = getFirstVisibleISO();
        const lastVisible = getLastVisibleISO();
        while (iso <= lastVisible && isDayDisabled(iso)) {
            iso = offsetISO(iso, 1);
        }
        return iso > lastVisible ? null : iso;
    };

    const getLastActiveISO = () => {
        let iso = getLastVisibleISO();
        const firstVisible = getFirstVisibleISO();
        while (iso >= firstVisible && isDayDisabled(iso)) {
            iso = offsetISO(iso, -1);
        }
        return iso < firstVisible ? null : iso;
    };

    const setTabindexAndFocus = (iso: DayISO) => {
        setTabIndexISO(iso);
        setTimeout(() => {
            const elementToFocus = containerRef.current?.querySelector(`[data-iso="${iso}"]`) as HTMLButtonElement;
            elementToFocus?.focus();
        });
    };

    const prevMonth = (focus?: boolean) => {
        if (disableBefore && getFirstVisibleISO() <= disableBefore) {
            return false;
        }

        setOffset((currentOffset) => currentOffset - 1);
        let newTabIndexISO = tabIndexISO;
        const lastActiveISO = getLastActiveISO();
        if (lastActiveISO && lastActiveISO < tabIndexISO) {
            newTabIndexISO = lastActiveISO;
            setTabIndexISO(lastActiveISO);
        }

        if (focus) {
            setTabindexAndFocus(newTabIndexISO);
        }

        onMonthChange({
            iso: toISO(getMonthDate(offset)),
        });

        return true;
    };

    const nextMonth = (focus?: boolean) => {
        if (disableAfter && getLastVisibleISO() >= disableAfter) {
            return false;
        }
        setOffset((currentOffset) => currentOffset + 1);
        let newTabIndexISO = tabIndexISO;
        const firstActiveISO = getFirstActiveISO();
        if (firstActiveISO && firstActiveISO > tabIndexISO) {
            newTabIndexISO = firstActiveISO;
            setTabIndexISO(firstActiveISO);
        }

        if (focus) {
            setTabindexAndFocus(newTabIndexISO);
        }

        onMonthChange({
            iso: toISO(getMonthDate(offset + (numMonths || 1))),
        });
    };

    const onKeyDown = (event: KeyboardEvent) => {
        const dayChange = DAY_UPDATE_KEYMAP[event.key as keyof typeof DAY_UPDATE_KEYMAP];

        if (dayChange) {
            event.preventDefault();
            let tries = 7;
            let iso = tabIndexISO;
            do {
                iso = offsetISO(iso, dayChange);
            } while (tries-- > 0 && isDayDisabled(iso));

            if (tries > 0) {
                const firstVisible = getFirstVisibleISO();
                const lastVisible = getLastVisibleISO();
                if (iso < firstVisible) {
                    if (navigable) {
                        prevMonth();
                    } else {
                        iso = firstVisible;
                    }
                } else if (iso > lastVisible) {
                    if (navigable) {
                        nextMonth();
                    } else {
                        iso = lastVisible;
                    }
                }
                setTabindexAndFocus(iso);
            }
        } else {
            switch (event.key) {
                case "PageUp":
                    prevMonth(true);
                    break;
                case "PageDown":
                    nextMonth(true);
                    break;
                case "Home":
                    setTabindexAndFocus(getFirstActiveISO());
                    break;
                case "End":
                    setTabindexAndFocus(getLastActiveISO());
                    break;
                default:
            }
        }
    };

    const onDaySelect = (event: MouseEvent, iso: DayISO) => {
        onSelect(event, { iso });
    };

    const onDayFocus = (event: FocusEvent | MouseEvent, day: DayISO) => {
        setFocusISO(day);
        setTabIndexISO(day);
        onFocus(event, { iso: day });
    };

    const onDayBlur = () => {
        setFocusISO(null);
    };

    const { rangeStart, rangeEnd } = calculateRangeDisplay();

    const isDayInRange = (iso: DayISO) => {
        if (!rangeStart || !rangeEnd) {
            return false;
        }
        if (iso < rangeStart || iso > rangeEnd) {
            return false;
        }
        return true;
    };

    const monthDates = [...Array(numMonths)].map((_, i) => getMonthDate(offset + i));

    return (
        <div className="calendar" ref={containerRef}>
            {navigable && (
                <div className="calendar__header">
                    <div className="calendar__header--inner">
                        <EbayIconButton
                            transparent
                            size="small"
                            icon={<EbayIconChevronLeft24 />}
                            disabled={disableBefore && getFirstVisibleISO() <= disableBefore}
                            aria-label={getA11yShowMonthText(monthTitle(getMonthDate(offset - 1)))}
                            onClick={() => prevMonth()}
                        />

                        {monthDates.map((monthDate, i) => (
                            <h3 key={i}>{monthTitle(monthDate)}</h3>
                        ))}

                        <EbayIconButton
                            transparent
                            size="small"
                            icon={<EbayIconChevronRight24 />}
                            disabled={disableAfter && getLastVisibleISO() >= disableAfter}
                            aria-label={getA11yShowMonthText(monthTitle(getMonthDate(offset + numMonths)))}
                            onClick={() => nextMonth()}
                        />
                    </div>
                </div>
            )}
            <div className="calendar__body">
                {monthDates.map((monthDate, i) => {
                    const numBlankDays = (monthDate.getUTCDay() - firstDayOfWeek + 7) % 7;
                    const year = monthDate.getUTCFullYear();
                    const month = monthDate.getUTCMonth();
                    const daysInMont = new Date(year, month + 1, 0).getDate();
                    const calendarRows = [...Array(Math.ceil((numBlankDays + daysInMont) / 7))];

                    return (
                        <div key={i} className="calendar__month">
                            <table onKeyDown={onKeyDown}>
                                <caption>{monthTitle(monthDate)}</caption>

                                <thead>
                                    <tr>
                                        {weekdayLabels.map((dayName) => (
                                            <th key={dayName} scope="col">
                                                {dayName}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {calendarRows.map((_, row) => {
                                        let startDate = row * 7 - numBlankDays + 1;
                                        let endDate = startDate + 6;
                                        const columns = [];

                                        if (row === 0 && numBlankDays !== 0) {
                                            startDate = 1;
                                            columns.push(<td key="pre-column" colSpan={numBlankDays} />);
                                        } else if (endDate > daysInMont) {
                                            endDate = daysInMont;
                                        }

                                        for (let day = startDate; day <= endDate; day++) {
                                            const dayISO = toISO(new Date(Date.UTC(year, month, day)));
                                            const isToday = dayISO === todayISO;
                                            const isSelected = Array.isArray(selected)
                                                ? selected.some((iso) => iso === dayISO)
                                                : selected === dayISO;
                                            const isRangeStart = dayISO === rangeStart;
                                            const isInRange = isDayInRange(dayISO);
                                            const isRangeEnd = dayISO === rangeEnd;
                                            const isDisabled = isDayDisabled(dayISO);
                                            const a11yTexts = [
                                                "",
                                                isSelected && a11ySelectedText,
                                                isRangeStart && a11yRangeStartText,
                                                !isRangeStart && !isRangeEnd && isInRange && a11yInRangeText,
                                                isRangeEnd && a11yRangeEndText,
                                                !interactive && isToday && a11yTodayText,
                                                !interactive && isDisabled && a11yDisabledText,
                                            ].filter((value) => typeof value !== "boolean" || value !== false);

                                            const link =
                                                !interactive && !isDisabled && linkBuilder && linkBuilder(dayISO);
                                            const NonInteractiveTag = link ? "a" : "span";

                                            columns.push(
                                                <td
                                                    key={day}
                                                    className={classNames({
                                                        "calendar__cell--selected": isSelected,
                                                        "calendar__range--start": isRangeStart,
                                                        calendar__range: isInRange,
                                                        "calendar__range--end": isRangeEnd,
                                                    })}
                                                >
                                                    {interactive ? (
                                                        <button
                                                            disabled={isDisabled}
                                                            aria-label={
                                                                a11yTexts.length > 1
                                                                    ? `${day}${a11yTexts.join(a11ySeparator)}`
                                                                    : undefined
                                                            }
                                                            tabIndex={tabIndexISO !== dayISO ? -1 : undefined}
                                                            aria-current={isToday ? "date" : undefined}
                                                            aria-pressed={isSelected ? "true" : undefined}
                                                            onClick={(event: MouseEvent) => onDaySelect(event, dayISO)}
                                                            onFocus={(event: FocusEvent) => onDayFocus(event, dayISO)}
                                                            onMouseOver={(event: MouseEvent) =>
                                                                onDayFocus(event, dayISO)
                                                            }
                                                            onMouseOut={() => onDayBlur()}
                                                            onBlur={() => onDayBlur()}
                                                            data-iso={dayISO}
                                                        >
                                                            {day}
                                                        </button>
                                                    ) : (
                                                        <NonInteractiveTag
                                                            className={classNames({
                                                                "calendar__cell--disabled": isDisabled,
                                                                "calendar__cell--current": isToday,
                                                            })}
                                                            href={link}
                                                        >
                                                            {day}
                                                            {a11yTexts.length > 1 && (
                                                                <span className="clipped">
                                                                    {a11yTexts.join(a11ySeparator)}
                                                                </span>
                                                            )}
                                                        </NonInteractiveTag>
                                                    )}
                                                </td>,
                                            );
                                        }

                                        return <tr key={row}>{columns}</tr>;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EbayCalendar;
