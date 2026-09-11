import type { ComponentProps } from "react";

export type InputSize = "regular" | "large";

export type EvoTextareaProps = ComponentProps<"textarea"> & {
  /** Makes the textarea fill its containing block. */
  fluid?: boolean;
  /** Label shown using the floating-label treatment. */
  floatingLabel?: string;
  /** Keeps the floating label raised even when the textarea is empty. */
  floatingLabelStatic?: boolean;
  /** Selects the regular or large Skin textarea treatment. Defaults to `"regular"`. */
  inputSize?: InputSize;
  /** Applies invalid styling and sets `aria-invalid="true"` on the textarea. */
  invalid?: boolean;
  /** Adds an opaque background behind the floating label. */
  opaqueLabel?: boolean;
};
