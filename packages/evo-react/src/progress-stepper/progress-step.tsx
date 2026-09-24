import classNames from "classnames";
import { EvoIconStepperAttention24 } from "../icon/icons/stepper-attention-24";
import { EvoIconStepperConfirmation24 } from "../icon/icons/stepper-confirmation-24";
import { EvoIconStepperUpcoming24 } from "../icon/icons/stepper-upcoming-24";
import { useProgressStepper } from "./context";
import type { EvoProgressStepProps } from "./types";

/**
 * A step's position, icon, and content inside `EvoProgressStepper`.
 *
 * `index` must match the step's position among its siblings. Place
 * `EvoProgressStepTitle` before `EvoProgressStepContent` when a title is needed.
 *
 * @summary One indexed progress step.
 */
export function EvoProgressStep({
  a11yText,
  children,
  className,
  index,
  ref,
  ...rest
}: EvoProgressStepProps) {
  const { currentStep, defaultState } = useProgressStepper();
  const allComplete = defaultState === "complete";
  const allUpcoming = defaultState === "upcoming";
  const isCurrent = !allComplete && !allUpcoming && index === currentStep;
  const isComplete = allComplete || (!allUpcoming && index < currentStep);
  const needsAttention = isCurrent && defaultState === "attention";
  const label =
    a11yText ??
    (needsAttention
      ? "blocked"
      : isCurrent
        ? "current"
        : isComplete
          ? "complete"
          : "upcoming");
  const Icon = needsAttention
    ? EvoIconStepperAttention24
    : isComplete || isCurrent
      ? EvoIconStepperConfirmation24
      : EvoIconStepperUpcoming24;

  return (
    <>
      {index > 0 && (
        <hr className="progress-stepper__separator" role="presentation" />
      )}
      <div
        {...rest}
        ref={ref}
        role="listitem"
        aria-current={isCurrent ? "step" : undefined}
        className={classNames(
          "progress-stepper__item",
          needsAttention && "progress-stepper__item--attention",
          className,
        )}
      >
        <div className="progress-stepper__icon">
          <Icon a11yText={label} width={24} height={24} />
        </div>
        <div className="progress-stepper__text">{children}</div>
      </div>
    </>
  );
}
