import { useId, useState } from "react";
import classNames from "classnames";
import { EvoCalendar } from "../calendar";
import type { DayISO } from "../calendar";
import { EvoIconCalendar24 } from "../icon/icons/calendar-24";
import { DateField } from "./date-field";
import { DateInputPopover, focusPopoverTrigger } from "./date-input-popover";
import type { DateInputValue, EvoDateInputProps } from "./types";
import { useDatePopover } from "./use-date-popover";
import { monthFromValue, useFollowSelectedMonth } from "./visible-month";
import "@ebay/skin/date-textbox.mjs";

function defaultA11yNavigateText(month: string, dir: "next" | "prev") {
  return `${dir === "prev" ? "Previous" : "Next"} ${month}`;
}

export function EvoDateInput({
  className,
  style,
  locale,
  value,
  defaultValue = "",
  onChange,
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
  ...input
}: EvoDateInputProps) {
  const popoverId = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const selected = value !== undefined ? value : uncontrolledValue;
  const calendarLocked = Boolean(disabled || readOnly);
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

  const commit = (next: DateInputValue) => {
    if (value === undefined) {
      setUncontrolledValue(next);
    }
    onChange?.(next);
  };

  const handleSelect = (next: DayISO) => {
    if (calendarLocked) {
      return;
    }
    commit(next);
    if (collapseOnSelect) {
      expander.setOpen(false);
      focusPopoverTrigger(expander);
    }
  };

  return (
    <span
      ref={setContainerRef}
      className={classNames("date-textbox", className)}
      style={style}
    >
      <DateField
        iso={selected}
        locale={locale}
        disabled={disabled}
        readOnly={readOnly}
        index={0}
        input={input}
        onCommit={commit}
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
          selectMode="day"
          selected={selected || undefined}
          visibleMonth={visibleMonth}
          visibleMonthCount={visibleMonthCount}
          a11yNavigateText={
            calendar?.a11yNavigateText ?? defaultA11yNavigateText
          }
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
