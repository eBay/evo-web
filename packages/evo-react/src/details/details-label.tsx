import classNames from "classnames";
import type { EvoDetailsLabelProps } from "./types";

export function EvoDetailsLabel({
  children,
  className,
  ...rest
}: EvoDetailsLabelProps) {
  return (
    <span className={classNames("details__label", className)} {...rest}>
      {children}
    </span>
  );
}
