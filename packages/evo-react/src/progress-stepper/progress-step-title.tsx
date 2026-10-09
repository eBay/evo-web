import { createElement } from "react";
import type { EvoProgressStepTitleProps } from "./types";

/**
 * Optional heading for an `EvoProgressStep`.
 *
 * @summary Heading within a progress step.
 */
export function EvoProgressStepTitle({
  as: Heading = "h4",
  children,
  ref,
  ...rest
}: EvoProgressStepTitleProps) {
  return createElement(Heading, { ...rest, ref }, children);
}
