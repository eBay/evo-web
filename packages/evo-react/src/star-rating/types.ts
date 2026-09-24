import type { ComponentProps } from "react";

export type EvoStarRatingProps = Omit<
  ComponentProps<"div">,
  "role" | "aria-label"
> & {
  /** Rating from `0` to `5`. Values are clamped and rounded to the nearest half star. Defaults to `0`. */
  value?: number;
  /**
   * Accessible label for the whole rating. English default to be overridden is
   * `"Rating: {value} out of 5"`. Pass `null` explicitly _only_ if alternative
   * accessibility information is present, such as `aria-labelledby`.
   */
  a11yText?: string | null;
};
