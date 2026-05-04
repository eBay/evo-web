import classNames from "classnames";
import type { EvoDetailsLeadingProps } from "./types";

export function EvoDetailsLeading({
  children,
  className,
  ...rest
}: EvoDetailsLeadingProps) {
  return (
    <span className={classNames("details__leading", className)} {...rest}>
      {children}
    </span>
  );
}
