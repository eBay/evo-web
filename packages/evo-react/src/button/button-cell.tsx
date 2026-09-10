import type { ComponentProps } from "react";

type ButtonType = "cta" | "fake" | "expand" | "default";
type Props = ComponentProps<"span"> & {
  /** Selects the Skin cell class for the containing button type. */
  type?: ButtonType;
};

const classPrefixes: { [key in ButtonType]: string } = {
  cta: "cta-",
  fake: "fake-",
  expand: "expand-",
  default: "",
};

/**
 * Provides a layout cell for custom button content, such as a label with an
 * icon or secondary value. It belongs inside a compatible button component.
 *
 * @summary Layout for custom button content.
 */
export function EvoButtonCell({ type = "default", children, ...rest }: Props) {
  return (
    <span className={`${classPrefixes[type]}btn__cell`} {...rest}>
      {children}
    </span>
  );
}
