import type { ComponentProps, CSSProperties, Ref } from "react";
import type {
  A11yRangeText,
  DateRange,
  DayCalendarProps,
  DayISO,
  RangeCalendarProps,
} from "../calendar";
import type { EvoInputProps } from "../input";

export type { A11yRangeText, DateRange, DayISO };

export type InvalidDateEvent = {
  /** Unparsed input text. */
  value: string;
  /** Field index: `0` for the start or single field, `1` for the end field. */
  index: number;
};

export type EvoDateFieldProps = Omit<
  EvoInputProps,
  "value" | "defaultValue" | "postfix" | "type"
>;

type OwnedCalendarProps =
  | "selectMode"
  | "selected"
  | "defaultSelected"
  | "onSelectedChange"
  | "locale"
  | "getDayHref"
  | "dayLinkAs";

export type EvoDateInputCalendarProps = Omit<
  DayCalendarProps,
  OwnedCalendarProps
>;

export type EvoDateRangeInputCalendarProps = Omit<
  RangeCalendarProps,
  OwnedCalendarProps | "a11yRangeText"
> & {
  /**
   * Clipped text for range cells. English defaults to be overridden are
   * `"Start of range"`, `"In range"`, and `"End of range"`.
   */
  a11yRangeText?: A11yRangeText;
};

type DateInputBaseProps = Omit<
  ComponentProps<"span">,
  "onChange" | "defaultValue" | keyof EvoDateFieldProps
> & {
  /** Class name applied to the root `.date-textbox` element. */
  className?: string;
  /** Inline styles applied to the root `.date-textbox` element. */
  style?: CSSProperties;
  /** Ref to the root `.date-textbox` element. */
  ref?: Ref<HTMLSpanElement>;
  /**
   * [BCP 47 language tag](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag)
   * used to parse, format, and label dates. Defaults to `navigator.language`.
   */
  locale?: string;
  /**
   * Accessible label for the button that opens the calendar popover, mapped to
   * `aria-label`. English default to be overridden is `"open calendar"`.
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
  /**
   * Positioning strategy for the calendar popover. Use `"fixed"` when the field
   * sits in an overflow container and the popover must stay visible while
   * scrolling.
   */
  strategy?: "absolute" | "fixed";
  /** Disables the input(s) and the calendar button. */
  disabled?: boolean;
  /** Called when a field blurs with text that cannot be parsed as a date. */
  onInvalidDate?: (event: InvalidDateEvent) => void;
};

export type EvoDateInputProps = DateInputBaseProps &
  Omit<
    EvoDateFieldProps,
    "className" | "style" | "disabled" | "onChange" | "ref"
  > & {
    /** Controlled selected date (`YYYY-MM-DD`). */
    value?: DayISO;
    /** Initial uncontrolled selected date (`YYYY-MM-DD`). */
    defaultValue?: DayISO;
    /** Fired with the committed ISO date after a valid blur or calendar selection. `undefined` when the field is cleared. */
    onChange?: (value: DayISO | undefined) => void;
    /**
     * Props forwarded to the calendar popover. `selected`, `selectMode`,
     * `locale`, and static-link props are owned by the date input.
     */
    calendar?: EvoDateInputCalendarProps;
  };

export type EvoDateRangeInputProps = DateInputBaseProps & {
  /** Controlled selected range (`{ from?, to? }` as `YYYY-MM-DD`). */
  value?: DateRange;
  /** Initial uncontrolled selected range. */
  defaultValue?: DateRange;
  /** Fired with the committed range after a valid blur or calendar selection. */
  onChange?: (value: DateRange) => void;
  /**
   * Props forwarded to the start `EvoInput`, except `value`, `defaultValue`,
   * `postfix`, and `type`, which this component owns.
   */
  startInput?: EvoDateFieldProps;
  /**
   * Props forwarded to the end `EvoInput`, except `value`, `defaultValue`,
   * `postfix`, and `type`, which this component owns.
   */
  endInput?: EvoDateFieldProps;
  /**
   * Props forwarded to the calendar popover. `selected`, `selectMode`,
   * `locale`, and static-link props are owned by the date input.
   */
  calendar?: EvoDateRangeInputCalendarProps;
};
