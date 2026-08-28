import { createContext, use } from "react";
import type { ReactNode } from "react";
import type { DatePopoverState } from "./use-date-popover";
import type { DateInputValue } from "./types";

type DateInputContextValue = DatePopoverState<HTMLDivElement> & {
  selected: DateInputValue;
  locale?: string;
  disabled?: boolean;
  readOnly?: boolean;
  collapseOnSelect?: boolean;
  a11yOpenPopoverText: string;
  commit: (value: DateInputValue) => void;
};

const DateInputContext = createContext<DateInputContextValue | null>(null);

export function useDateInputContext() {
  const context = use(DateInputContext);

  if (!context) {
    throw new Error(
      "EvoDateInputCalendarPopover must be used within an EvoDateInput component",
    );
  }

  return context;
}

type DateInputProviderProps = DateInputContextValue & {
  children: ReactNode;
};

export function DateInputProvider({
  children,
  ...context
}: DateInputProviderProps) {
  return <DateInputContext value={context}>{children}</DateInputContext>;
}
