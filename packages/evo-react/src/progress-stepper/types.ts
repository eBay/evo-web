import type { ComponentProps, JSX } from "react";

export type ProgressStepperDirection = "row" | "column";
export type ProgressStepperState =
  "active" | "complete" | "upcoming" | "attention" | "current";

export type EvoProgressStepperProps = Omit<
  ComponentProps<"div">,
  "aria-label" | "aria-labelledby"
> & {
  /** Sets a horizontal or vertical layout. Defaults to `"row"`. */
  direction?: ProgressStepperDirection;
  /** Sets the overall progress mode. Defaults to `"active"`. `"complete"` and `"upcoming"` mark every step alike. */
  defaultState?: ProgressStepperState;
  /** Zero-based index of the current step. Defaults to `0`; ignored when `defaultState` is `"complete"` or `"upcoming"`. */
  currentStep?: number;
  /** Clipped heading that names the stepper for assistive technology. Translate it for the page language. English default to be overridden is `"Progress"`. */
  a11yHeadingText: string;
  /** HTML element for the clipped heading. Defaults to `"h2"`. */
  headingAs?: keyof JSX.IntrinsicElements;
  /** HTML element used by `EvoProgressStepContent`. Defaults to `"p"`. */
  stepContentAs?: keyof JSX.IntrinsicElements;
};

export type EvoProgressStepProps = Omit<
  ComponentProps<"div">,
  "aria-current" | "role" | "title"
> & {
  /** Required zero-based position of this step in the rendered list. Indices must match DOM order. */
  index: number;
  /** Accessible label for this step's status icon. English default to be overridden is `"current"`, `"complete"`, `"upcoming"`, or `"blocked"`, according to the step state. */
  a11yText?: string;
};

export type EvoProgressStepTitleProps = ComponentProps<"h4"> & {
  /** HTML element for the step title. Defaults to `"h4"`. */
  as?: keyof JSX.IntrinsicElements;
};

export type EvoProgressStepContentProps = ComponentProps<"p">;
