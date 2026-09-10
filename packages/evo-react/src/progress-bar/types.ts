import type { ComponentProps } from "react";

export type EvoProgressBarProps = Omit<
  ComponentProps<"progress">,
  "aria-label" | "children"
> & {
  /**
   * Accessible label for the progress bar, mapped to `aria-label`. English default to be overridden is `"Progress"`.
   * Pass `null` explicitly _only_ if alternative accessibility information is present.
   */
  a11yText: string | null;
  /** Fills the container width. */
  fluid?: boolean;
};
