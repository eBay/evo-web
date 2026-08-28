import type { ComponentProps, CSSProperties, ReactNode, Ref } from "react";
import type {
  A11yRangeText,
  DateRange,
  DayCalendarProps,
  DayISO,
} from "../calendar";
import type { EvoInputProps } from "../input";

export type { A11yRangeText, DateRange, DayISO };

/** Committed date value. Use `""` for a controlled empty field. */
export type DateInputValue = DayISO | "";

export type DateInputRange = {
  /** Start of the selected range. Use `""` when that side is empty. */
  from?: DateInputValue;
  /** End of the selected range. Use `""` when that side is empty. */
  to?: DateInputValue;
};

export type InvalidDateEvent = {
  /** Unparsed input text. */
  value: string;
  /** Field index: `0` for the start or single field, `1` for the end field. */
  index: number;
};

/** Props forwarded to the internal `EvoInput` date field. */
export type EvoDateFieldProps = Omit<
  EvoInputProps,
  | "value"
  | "defaultValue"
  | "postfix"
  | "type"
  | "disabled"
  | "readOnly"
  | "children"
>;

type OwnedCalendarProps =
  | "selectMode"
  | "selected"
  | "defaultSelected"
  | "onSelectedChange"
  | "locale"
  | "getDayHref"
  | "dayLinkAs";

export type EvoDateInputCalendarPopoverProps = Omit<
  DayCalendarProps,
  OwnedCalendarProps
> & {
  /** Positioning strategy for the calendar popover. */
  strategy?: "absolute" | "fixed";
};

type DateInputBaseProps = Omit<
  ComponentProps<"div">,
  "onChange" | "defaultValue" | keyof EvoDateFieldProps
> & {
  children: ReactNode;
  /** Class name applied to the root `.date-textbox` element. */
  className?: string;
  /** Inline styles applied to the root `.date-textbox` element. */
  style?: CSSProperties;
  /** Ref to the root `.date-textbox` element. */
  ref?: Ref<HTMLDivElement>;
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
  /** Closes the calendar after a complete selection. */
  collapseOnSelect?: boolean;
  /** Controlled popover visibility. */
  open?: boolean;
  /** Initial uncontrolled popover visibility. Ignored when `open` is provided. */
  defaultOpen?: boolean;
  /** Fired when the popover requests to open or close. */
  onOpenChange?: (open: boolean) => void;
  /** Disables the input and the calendar button. */
  disabled?: boolean;
  /** Prevents typing and calendar selection. The calendar button is disabled. */
  readOnly?: boolean;
  /** Called when the field blurs with text that cannot be parsed as a date. */
  onInvalidDate?: (event: InvalidDateEvent) => void;
};

export type EvoDateInputProps = DateInputBaseProps &
  Omit<EvoDateFieldProps, "className" | "style" | "ref" | "onChange"> & {
    /** Controlled selected date (`YYYY-MM-DD`). Pass `""` for a controlled empty field. */
    value?: DateInputValue;
    /** Initial uncontrolled selected date (`YYYY-MM-DD`). */
    defaultValue?: DateInputValue;
    /** Fired with the committed ISO date after a valid blur or calendar selection. `""` when the field is cleared. */
    onChange?: (value: DateInputValue) => void;
  };
