import classNames from "classnames";
import type { EvoDetailsContentProps } from "./types";

export function EvoDetailsContent({
  as: Component = "div",
  children,
  className,
  ...rest
}: EvoDetailsContentProps) {
  return (
    <Component className={classNames("details__content", className)} {...rest}>
      {children}
    </Component>
  );
}
