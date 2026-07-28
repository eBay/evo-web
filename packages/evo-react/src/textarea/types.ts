import type { ComponentProps } from "react";

export type InputSize = "regular" | "large";

export type EvoTextareaProps = ComponentProps<"textarea"> & {
  fluid?: boolean;
  floatingLabel?: string;
  floatingLabelStatic?: boolean;
  inputSize?: InputSize;
  invalid?: boolean;
  opaqueLabel?: boolean;
};
