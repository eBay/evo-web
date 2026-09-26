import { useId } from "react";
import classNames from "classnames";
import { ProgressStepperProvider } from "./context";
import type { EvoProgressStepperProps } from "./types";
import "@ebay/skin/progress-stepper.mjs";

/**
 * Progress steppers show the sequence and status of steps in a process.
 *
 * Put `EvoProgressStep` children in order, with consecutive zero-based `index`
 * values. Set `currentStep` on the parent to indicate the active position.
 * `defaultState` can show every step as complete or upcoming, or mark the
 * current step as needing attention. The clipped heading names the sequence
 * for assistive technology.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoProgressStepper,
 *   EvoProgressStep,
 *   EvoProgressStepTitle,
 *   EvoProgressStepContent,
 * } from "@evo-web/react/progress-stepper";
 *
 * <EvoProgressStepper a11yHeadingText="Shipment progress" currentStep={1}>
 *   <EvoProgressStep index={0}>
 *     <EvoProgressStepTitle>Ordered</EvoProgressStepTitle>
 *     <EvoProgressStepContent>Payment received</EvoProgressStepContent>
 *   </EvoProgressStep>
 *   <EvoProgressStep index={1}>
 *     <EvoProgressStepTitle>Shipped</EvoProgressStepTitle>
 *     <EvoProgressStepContent>Package is on its way</EvoProgressStepContent>
 *   </EvoProgressStep>
 * </EvoProgressStepper>
 * ```
 *
 * @summary Ordered progress steps with a current position and status icons.
 */
export function EvoProgressStepper({
  a11yHeadingText,
  children,
  className,
  currentStep = 0,
  defaultState = "active",
  direction = "row",
  headingAs: Heading = "h2",
  ref,
  stepContentAs = "p",
  ...rest
}: EvoProgressStepperProps) {
  const headingId = useId();
  return (
    <ProgressStepperProvider
      currentStep={currentStep}
      defaultState={defaultState}
      stepContentAs={stepContentAs}
    >
      <div
        {...rest}
        ref={ref}
        aria-labelledby={headingId}
        className={classNames(
          "progress-stepper",
          direction === "column" && "progress-stepper--vertical",
          className,
        )}
      >
        <Heading id={headingId} className="clipped">
          {a11yHeadingText}
        </Heading>
        <div
          role="list"
          className={classNames(
            "progress-stepper__items",
            defaultState === "upcoming" && "progress-stepper__items--upcoming",
            defaultState === "current" && "progress-stepper__items--current",
          )}
        >
          {children}
        </div>
      </div>
    </ProgressStepperProvider>
  );
}
