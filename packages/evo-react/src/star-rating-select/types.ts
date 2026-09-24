import type {
  ChangeEvent,
  ComponentProps,
  FocusEvent,
  KeyboardEvent,
} from "react";

export type StarRatingSelectValue = 0 | 1 | 2 | 3 | 4 | 5;

export type EvoStarRatingSelectProps = Omit<
  ComponentProps<"div">,
  "role" | "aria-label" | "children" | "onChange" | "onFocus" | "onKeyDown"
> & {
  /** Controlled selected rating from `0` to `5`; `0` means no selection. */
  value?: StarRatingSelectValue;
  /** Initial rating for an uncontrolled group. Defaults to `0`. */
  defaultValue?: StarRatingSelectValue;
  /** Disables all five radio options. */
  disabled?: boolean;
  /** Shared name of the radio inputs. A stable generated name is used when omitted. */
  name?: string;
  /**
   * Accessible name for the radio group. English default to be overridden is
   * `"Rating"`. Pass `null` explicitly _only_ if alternative accessibility
   * information is present, such as `aria-labelledby`.
   */
  a11yText?: string | null;
  /**
   * Accessible names for the five radio choices, in order. English default to
   * be overridden is `"1 star", "2 stars", "3 stars", "4 stars", "5 stars"`.
   */
  a11yStarText?: readonly [string, string, string, string, string];
  /** Fired when a radio becomes selected, with `(event, { value })`. */
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    data: { value: StarRatingSelectValue },
  ) => void;
  /** Fired when a radio receives focus, with `(event, { value })`. */
  onFocus?: (
    event: FocusEvent<HTMLInputElement>,
    data: { value: StarRatingSelectValue },
  ) => void;
  /** Fired on a radio keydown, with `(event, { value })`. */
  onKeyDown?: (
    event: KeyboardEvent<HTMLInputElement>,
    data: { value: StarRatingSelectValue },
  ) => void;
};
