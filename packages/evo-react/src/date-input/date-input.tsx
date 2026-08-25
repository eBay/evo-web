import { useId, useState } from "react";
import classNames from "classnames";
import { EvoCalendar } from "../calendar";
import type { DayISO } from "../calendar";
import { EvoIconCalendar24 } from "../icon/icons/calendar-24";
import { DateField } from "./date-field";
import { DateInputPopover, focusPopoverTrigger } from "./date-input-popover";
import type { EvoDateInputProps } from "./types";
import { useDatePopover } from "./use-date-popover";
import "@ebay/skin/date-textbox.mjs";

function defaultA11yNavigateText(month: string, dir: "next" | "prev") {
  return `${dir === "prev" ? "Previous" : "Next"} ${month}`;
}

export function EvoDateInput({
  className,
  style,
  locale,
  value,
  defaultValue,
  onChange,
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
  ...input
}: EvoDateInputProps) {
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

  const commit = (next: DayISO | undefined) => {
    if (value === undefined) {
      setUncontrolledValue(next);
    }
    onChange?.(next);
  };

  const handleSelect = (next: DayISO) => {
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
          selectMode="day"
          selected={selected}
          visibleMonthCount={visibleMonthCount}
          a11yNavigateText={
            calendar?.a11yNavigateText ?? defaultA11yNavigateText
          }
          onSelectedChange={handleSelect}
        />
      </DateInputPopover>
    </span>
  );
}
