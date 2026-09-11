import type { ComponentProps, ReactNode } from "react";
import type { NativeIconButtonProps } from "../icon-button";

export type InputSize = "regular" | "large";

type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean | undefined;
};

export type EvoInputAffixProps = Omit<
  ComponentProps<"span">,
  "children" | "content"
> &
  DataAttributes & {
    /** Text or other content placed before or after the input. */
    content?: ReactNode;
    /** Decorative icon placed before or after the input. */
    icon?: ReactNode;
  };

export type EvoInputPostfixProps = EvoInputAffixProps & {
  /** Makes the postfix icon an actionable transparent icon button. */
  buttonProps?: NativeIconButtonProps;
};

export type EvoInputProps = Omit<ComponentProps<"input">, "prefix"> & {
  /** Makes the input fill its containing block. */
  fluid?: boolean;
  /** Label shown using the floating-label treatment. */
  floatingLabel?: string;
  /** Keeps the floating label raised even when the input is empty. */
  floatingLabelStatic?: boolean;
  /** Selects the regular or large Skin input treatment. Defaults to `"regular"`. */
  inputSize?: InputSize;
  /** Applies invalid styling and sets `aria-invalid="true"` on the input. */
  invalid?: boolean;
  /** Content and optional icon rendered after the input. */
  postfix?: EvoInputPostfixProps;
  /** Content and optional icon rendered before the input. */
  prefix?: EvoInputAffixProps;
};
