import { useId, useState } from "react";
import classNames from "classnames";
import { EvoCalendar } from "../calendar";
import type { DateRange } from "../calendar";
import { EvoIconCalendar24 } from "../icon/icons/calendar-24";
import { DateField } from "./date-field";
import { DateInputPopover, focusPopoverTrigger } from "./date-input-popover";
import type {
  DateInputRange,
  DateInputValue,
  EvoDateRangeInputProps,
} from "./types";
import { useDatePopover } from "./use-date-popover";
import { monthFromValue, useFollowSelectedMonth } from "./visible-month";
import "@ebay/skin/date-textbox.mjs";

const DEFAULT_A11Y_RANGE_TEXT = {
  start: "Start of range",
  in: "In range",
  end: "End of range",
};

function defaultA11yNavigateText(month: string, dir: "next" | "prev") {
  return `${dir === "prev" ? "Previous" : "Next"} ${month}`;
}

function toCalendarRange(
  selected: DateInputRange | undefined,
): DateRange | undefined {
  if (!selected) {
    return undefined;
  }

  const from = selected.from || undefined;
  const to = selected.to || undefined;
  if (!from && !to) {
    return undefined;
  }

  return { from, to };
}

export function EvoDateRangeInput({
  className,
  style,
  locale,
  value,
  defaultValue,
  onChange,
  startInput,
  endInput,
  calendar,
  a11yOpenPopoverText,
  collapseOnSelect,
  open,
  defaultOpen,
  onOpenChange,
  strategy = "absolute",
  disabled,
  readOnly,
  onInvalidDate,
  ref,
  ...rest
}: EvoDateRangeInputProps) {
  const popoverId = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const selected = value !== undefined ? value : uncontrolledValue;
  const calendarLocked = Boolean(
    disabled ||
    readOnly ||
    startInput?.disabled ||
    startInput?.readOnly ||
    endInput?.disabled ||
    endInput?.readOnly,
  );
  const { expander, visibleMonthCount, setContainerRef } = useDatePopover({
    open,
    defaultOpen,
    onOpenChange,
    strategy,
    visibleMonthCount: calendar?.visibleMonthCount,
    ref,
  });
  const { visibleMonth, setVisibleMonth } = useFollowSelectedMonth(
    monthFromValue(selected),
    calendar?.visibleMonth,
    calendar?.defaultVisibleMonth ?? monthFromValue(calendar?.today),
  );

  const commit = (next: DateInputRange) => {
    if (value === undefined) {
      setUncontrolledValue(next);
    }
    onChange?.(next);
  };

  const handleStartCommit = (next: DateInputValue) => {
    commit({ from: next, to: selected?.to });
  };

  const handleEndCommit = (next: DateInputValue) => {
    commit({ from: selected?.from, to: next });
  };

  const handleSelect = (next: DateRange) => {
    if (calendarLocked) {
      return;
    }
    commit({
      from: next.from ?? "",
      to: next.to ?? "",
    });
    if (collapseOnSelect && next.from && next.to) {
      expander.setOpen(false);
      focusPopoverTrigger(expander);
    }
  };

  return (
    <span
      {...rest}
      ref={setContainerRef}
      className={classNames("date-textbox", className)}
      style={style}
    >
      <DateField
        iso={selected?.from}
        locale={locale}
        disabled={disabled}
        readOnly={readOnly}
        index={0}
        input={startInput}
        onCommit={handleStartCommit}
        onInvalidDate={onInvalidDate}
      />
      <DateField
        iso={selected?.to}
        locale={locale}
        disabled={disabled}
        readOnly={readOnly}
        index={1}
        input={endInput}
        onCommit={handleEndCommit}
        onInvalidDate={onInvalidDate}
        postfix={{
          icon: <EvoIconCalendar24 />,
          buttonProps: {
            a11yText: a11yOpenPopoverText,
            ref: expander.refs.setReference,
            "aria-expanded": expander.ariaExpanded,
            "aria-controls": popoverId,
            disabled: calendarLocked,
            onClick: () => {
              if (!calendarLocked) {
                expander.setOpen(!expander.open);
              }
            },
          },
        }}
      />
      <DateInputPopover
        popoverId={popoverId}
        strategy={strategy}
        expander={expander}
      >
        <EvoCalendar
          {...calendar}
          locale={locale}
          selectMode="range"
          selected={toCalendarRange(selected)}
          visibleMonth={visibleMonth}
          visibleMonthCount={visibleMonthCount}
          a11yNavigateText={
            calendar?.a11yNavigateText ?? defaultA11yNavigateText
          }
          a11yRangeText={calendar?.a11yRangeText ?? DEFAULT_A11Y_RANGE_TEXT}
          onVisibleMonthChange={(next) => {
            if (calendar?.visibleMonth === undefined) {
              setVisibleMonth(next);
            }
            calendar?.onVisibleMonthChange?.(next);
          }}
          onSelectedChange={handleSelect}
        />
      </DateInputPopover>
    </span>
  );
}
