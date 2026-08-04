import type { ComponentProps } from "react";

export type SpinnerSize = "small" | "large";

export type EvoProgressSpinnerProps = Omit<
  ComponentProps<"span">,
  "aria-label" | "children" | "role" | "size"
> & {
  /**
   * Localized accessible label that describes the progress spinner.
   * English default to be overridden is `"Loading"`.
   * Pass `null` explicitly _only_ if alternative accessibility information is present.
   */
  a11yText: string | null;
  /** Spinner size. Omit for the default 24px spinner. */
  size?: SpinnerSize;
};
