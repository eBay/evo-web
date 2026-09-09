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
 * Use a button cell when a button needs custom alignment or more than one
 * content region, such as a label with an icon or secondary value.
 *
 * Place it inside a compatible button component. The cell provides the
 * structure needed to lay out its contents consistently.
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
