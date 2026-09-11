import { useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import { EvoIconCalendar24 } from "../icon/icons/calendar-24";
import { DateField } from "./date-field";
import { DateInputProvider } from "./context";
import type { EvoDateInputProps, DateInputValue } from "./types";
import { useDatePopover } from "./use-date-popover";
import "@ebay/skin/date-textbox.mjs";

export function EvoDateInput({
  children,
  className,
  style,
  locale,
  value,
  defaultValue = "",
  onChange,
  a11yOpenPopoverText,
  collapseOnSelect,
  open,
  defaultOpen,
  onOpenChange,
  disabled,
  readOnly,
  onInvalidDate,
  ref,
  ...input
}: EvoDateInputProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const selected = value !== undefined ? value : uncontrolledValue;
  const popover = useDatePopover<HTMLDivElement>({
    open,
    defaultOpen,
    onOpenChange,
    ref,
  });

  const commit = useCallback(
    (next: DateInputValue) => {
      if (value === undefined) {
        setUncontrolledValue(next);
      }
      onChange?.(next);
    },
    [onChange, value],
  );

  const context = useMemo(
    () => ({
      ...popover,
      selected,
      locale,
      disabled,
      readOnly,
      collapseOnSelect,
      a11yOpenPopoverText,
      commit,
    }),
    [
      a11yOpenPopoverText,
      collapseOnSelect,
      commit,
      disabled,
      locale,
      popover,
      readOnly,
      selected,
    ],
  );

  const togglePopover = useCallback(() => {
    if (!disabled && !readOnly) {
      popover.setOpen(!popover.open);
    }
  }, [disabled, popover.open, popover.setOpen, readOnly]);

  const postfix = useMemo(
    () => ({
      icon: <EvoIconCalendar24 />,
      buttonProps: {
        a11yText: a11yOpenPopoverText,
        ref: popover.setTriggerElement,
        "aria-expanded": popover.open,
        "aria-controls": popover.popoverId,
        disabled: Boolean(disabled || readOnly),
        onClick: togglePopover,
      },
    }),
    [
      a11yOpenPopoverText,
      disabled,
      popover.open,
      popover.popoverId,
      popover.setTriggerElement,
      readOnly,
      togglePopover,
    ],
  );

  return (
    <DateInputProvider {...context}>
      <div
        ref={popover.setContainerRef}
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
          postfix={postfix}
        />
        {children}
      </div>
    </DateInputProvider>
  );
}
