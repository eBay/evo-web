import { useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import { EvoIconCalendar24 } from "../icon/icons/calendar-24";
import { DateField } from "./date-field";
import { DateInputProvider } from "./context";
import type { EvoDateInputProps, DateInputValue } from "./types";
import { useDatePopover } from "./use-date-popover";
import "@ebay/skin/date-textbox.mjs";

/**
 * Date inputs let users enter a date manually or choose one from a calendar.
 *
 * Typed dates are parsed and displayed according to `locale`. `value` and
 * `onChange` support controlled usage, while `defaultValue` supports
 * uncontrolled usage. Nest `EvoDateInputCalendarPopover` as its child to
 * render the calendar controlled by the input.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoDateInput,
 *   EvoDateInputCalendarPopover,
 * } from "@evo-web/react/date-input";
 *
 * <EvoDateInput
 *   floatingLabel="Purchase date"
 *   a11yOpenPopoverText="Choose purchase date"
 * >
 *   <EvoDateInputCalendarPopover
 *     a11yNavigateText={(month, direction) =>
 *       `${direction === "prev" ? "Previous" : "Next"} ${month}`
 *     }
 *   />
 * </EvoDateInput>;
 * ```
 *
 * @summary Locale-aware date input with a calendar popover.
 */
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
