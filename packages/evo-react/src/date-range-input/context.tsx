import { createContext, use } from "react";
import type { ReactNode } from "react";
import type { DatePopoverState } from "../date-input/use-date-popover";
import type { DateInputRange, DateInputValue, InvalidDateEvent } from "./types";

type DateRangeInputContextValue = DatePopoverState<HTMLSpanElement> & {
  selected?: DateInputRange;
  locale?: string;
  disabled?: boolean;
  readOnly?: boolean;
  collapseOnSelect?: boolean;
  a11yOpenPopoverText: string;
  commitStart: (value: DateInputValue) => void;
  commitEnd: (value: DateInputValue) => void;
  commitRange: (value: DateInputRange) => void;
  onInvalidDate?: (event: InvalidDateEvent) => void;
};

const DateRangeInputContext = createContext<DateRangeInputContextValue | null>(
  null,
);

export function useDateRangeInputContext() {
  const context = use(DateRangeInputContext);

  if (!context) {
    throw new Error(
      "EvoDateRangeInput components must be used within an EvoDateRangeInputGroup component",
    );
  }

  return context;
}

type DateRangeInputProviderProps = DateRangeInputContextValue & {
  children: ReactNode;
};

export function DateRangeInputProvider({
  children,
  ...context
}: DateRangeInputProviderProps) {
  return (
    <DateRangeInputContext value={context}>{children}</DateRangeInputContext>
  );
}
