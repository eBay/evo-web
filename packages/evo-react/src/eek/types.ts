import type { ComponentProps } from "react";

export type EekSize = "regular" | "large";

export type EvoEekProps = Omit<
  ComponentProps<"div">,
  "aria-label" | "children" | "dangerouslySetInnerHTML" | "role"
> & {
  /**
   * Localized accessible label for the energy rating graphic.
   * Pass `null` explicitly _only_ if alternative accessibility information is present.
   */
  a11yText: string | null;
  /** Highest energy rating displayed in the range. */
  max: string;
  /** Lowest energy rating displayed in the range. */
  min: string;
  /** Current energy rating. */
  rating: string;
  /** Graphic size. Omit or use `"regular"` for the default size. */
  size?: EekSize;
};
