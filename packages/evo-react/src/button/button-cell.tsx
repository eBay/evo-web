import type { ComponentProps } from "react";

type ButtonType = "cta" | "fake" | "expand" | "default";
type Props = ComponentProps<"span"> & {
  type?: ButtonType;
};

const classPrefixes: { [key in ButtonType]: string } = {
  cta: "cta-",
  fake: "fake-",
  expand: "expand-",
  default: "",
};

export function EvoButtonCell({ type = "default", children, ...rest }: Props) {
  return (
    <span className={`${classPrefixes[type]}btn__cell`} {...rest}>
      {children}
    </span>
  );
}
