import { useId, useState } from "react";
import classNames from "classnames";
import { EvoCalendar } from "../calendar";
import type { DateRange, DayISO } from "../calendar";
import { EvoIconCalendar24 } from "../icon/icons/calendar-24";
import { DateField } from "./date-field";
import { DateInputPopover, focusPopoverTrigger } from "./date-input-popover";
import type { EvoDateRangeInputProps } from "./types";
import { useDatePopover } from "./use-date-popover";
import "@ebay/skin/date-textbox.mjs";

const DEFAULT_A11Y_RANGE_TEXT = {
  start: "Start of range",
  in: "In range",
  end: "End of range",
};

function defaultA11yNavigateText(month: string, dir: "next" | "prev") {
  return `${dir === "prev" ? "Previous" : "Next"} ${month}`;
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
  onInvalidDate,
  ref,
  ...rest
}: EvoDateRangeInputProps) {
  const popoverId = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const selected = value !== undefined ? value : uncontrolledValue;
  const { expander, visibleMonthCount, setContainerRef } = useDatePopover({
    open,
    defaultOpen,
    onOpenChange,
    strategy,
    visibleMonthCount: calendar?.visibleMonthCount,
    ref,
  });

  const commit = (next: DateRange) => {
    if (value === undefined) {
      setUncontrolledValue(next);
    }
    onChange?.(next);
  };

  const handleStartCommit = (next: DayISO | undefined) => {
    commit({ from: next, to: selected?.to });
  };

  const handleEndCommit = (next: DayISO | undefined) => {
    commit({ from: selected?.from, to: next });
  };

  const handleSelect = (next: DateRange) => {
    commit(next);
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
        index={0}
        input={startInput}
        onCommit={handleStartCommit}
        onInvalidDate={onInvalidDate}
      />
      <DateField
        iso={selected?.to}
        locale={locale}
        disabled={disabled}
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
            disabled,
            onClick: () => expander.setOpen(!expander.open),
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
          selected={selected}
          visibleMonthCount={visibleMonthCount}
          a11yNavigateText={
            calendar?.a11yNavigateText ?? defaultA11yNavigateText
          }
          a11yRangeText={calendar?.a11yRangeText ?? DEFAULT_A11Y_RANGE_TEXT}
          onSelectedChange={handleSelect}
        />
      </DateInputPopover>
    </span>
  );
}
