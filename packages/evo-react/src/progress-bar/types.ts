import type { ComponentProps } from "react";

export type EvoProgressBarProps = Omit<
  ComponentProps<"progress">,
  "aria-label"
> & {
  /**
   * Accessible label for the progress bar. Callers must provide a localized accessible label.
   * Pass `null` explicitly _only_ if alternative accessibility information is present.
   */
  a11yText: string | null;
  /** Fills the container width. */
  fluid?: boolean;
};
