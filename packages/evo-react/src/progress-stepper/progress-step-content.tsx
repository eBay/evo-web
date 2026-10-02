import { createElement } from "react";
import { useProgressStepper } from "./context";
import type { EvoProgressStepContentProps } from "./types";

/**
 * Body content of an `EvoProgressStep`. The parent stepper chooses the element
 * through `stepContentAs`, which defaults to `p`.
 *
 * @summary Body content within a progress step.
 */
export function EvoProgressStepContent({
  children,
  ref,
  ...rest
}: EvoProgressStepContentProps) {
  const { stepContentAs } = useProgressStepper();
  return createElement(stepContentAs, { ...rest, ref }, children);
}
