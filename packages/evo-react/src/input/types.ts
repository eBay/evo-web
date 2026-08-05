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
    content?: ReactNode;
    icon?: ReactNode;
  };

export type EvoInputPostfixProps = EvoInputAffixProps & {
  buttonProps?: NativeIconButtonProps;
};

export type EvoInputProps = Omit<ComponentProps<"input">, "prefix"> & {
  fluid?: boolean;
  floatingLabel?: string;
  floatingLabelStatic?: boolean;
  inputSize?: InputSize;
  invalid?: boolean;
  postfix?: EvoInputPostfixProps;
  prefix?: EvoInputAffixProps;
};
