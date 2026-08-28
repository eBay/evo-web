import type { ComponentProps, ReactNode, Ref } from "react";
import type { RangeCalendarProps } from "../calendar";
import type {
  DateInputRange,
  DateInputValue,
  EvoDateFieldProps,
  InvalidDateEvent,
} from "../date-input/types";

export type {
  DateInputRange,
  DateInputValue,
  EvoDateFieldProps,
  InvalidDateEvent,
};

export type EvoDateRangeInputGroupProps = Omit<
  ComponentProps<"span">,
  "children" | "onChange" | "defaultValue"
> & {
  children: ReactNode;
  /** Controlled selected range (`{ from?, to? }` as `YYYY-MM-DD` or `""`). */
  value?: DateInputRange;
  /** Initial uncontrolled selected range. */
  defaultValue?: DateInputRange;
  /** Fired with the committed range after a valid blur or calendar selection. */
  onChange?: (value: DateInputRange) => void;
  /**
   * [BCP 47 language tag](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag)
   * used to parse, format, and label dates. Defaults to `navigator.language`.
   */
  locale?: string;
  /**
   * Accessible label for the button that opens the calendar popover, mapped to
   * `aria-label`.
   */
  a11yOpenPopoverText: string;
  /** Closes the calendar after a complete range selection. */
  collapseOnSelect?: boolean;
  /** Controlled popover visibility. */
  open?: boolean;
  /** Initial uncontrolled popover visibility. Ignored when `open` is provided. */
  defaultOpen?: boolean;
  /** Fired when the popover requests to open or close. */
  onOpenChange?: (open: boolean) => void;
  /** Disables both date fields and the calendar button. */
  disabled?: boolean;
  /** Prevents typing and calendar selection. The calendar button is disabled. */
  readOnly?: boolean;
  /** Called when either field blurs with text that cannot be parsed as a date. */
  onInvalidDate?: (event: InvalidDateEvent) => void;
  /** Class name applied to the root `.date-textbox` element. */
  className?: string;
  /** Ref to the root `.date-textbox` element. */
  ref?: Ref<HTMLSpanElement>;
};

export type EvoDateRangeInputProps = EvoDateFieldProps & {
  /** Selects which side of the range this field edits. */
  type: "start" | "end";
};

type OwnedCalendarProps =
  | "selectMode"
  | "selected"
  | "defaultSelected"
  | "onSelectedChange"
  | "locale"
  | "getDayHref"
  | "dayLinkAs";

export type EvoDateRangeInputCalendarPopoverProps = Omit<
  RangeCalendarProps,
  OwnedCalendarProps
> & {
  /** Positioning strategy for the calendar popover. */
  strategy?: "absolute" | "fixed";
};
