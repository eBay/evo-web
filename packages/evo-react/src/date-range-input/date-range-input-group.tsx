import { useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import { DateRangeInputProvider } from "./context";
import type {
  DateInputRange,
  DateInputValue,
  EvoDateRangeInputGroupProps,
} from "./types";
import { useDatePopover } from "../date-input/use-date-popover";
import "@ebay/skin/date-textbox.mjs";

export function EvoDateRangeInputGroup({
  children,
  className,
  style,
  locale,
  value,
  defaultValue,
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
  ...rest
}: EvoDateRangeInputGroupProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const selected = value !== undefined ? value : uncontrolledValue;
  const popover = useDatePopover<HTMLSpanElement>({
    open,
    defaultOpen,
    onOpenChange,
    ref,
  });

  const commit = useCallback(
    (next: DateInputRange) => {
      if (value === undefined) {
        setUncontrolledValue(next);
      }
      onChange?.(next);
    },
    [onChange, value],
  );

  const commitStart = useCallback(
    (next: DateInputValue) => {
      commit({ from: next, to: selected?.to });
    },
    [commit, selected?.to],
  );

  const commitEnd = useCallback(
    (next: DateInputValue) => {
      commit({ from: selected?.from, to: next });
    },
    [commit, selected?.from],
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
      commitStart,
      commitEnd,
      commitRange: commit,
      onInvalidDate,
    }),
    [
      a11yOpenPopoverText,
      collapseOnSelect,
      commit,
      commitEnd,
      commitStart,
      disabled,
      locale,
      onInvalidDate,
      popover,
      readOnly,
      selected,
    ],
  );

  return (
    <DateRangeInputProvider {...context}>
      <span
        {...rest}
        ref={popover.setContainerRef}
        className={classNames("date-textbox", className)}
        style={style}
      >
        {children}
      </span>
    </DateRangeInputProvider>
  );
}
