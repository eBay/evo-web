import classNames from "classnames";
import type { EvoListItemLeadingProps } from "./types";

/** Adds content before an `EvoListItemBody`. @summary Leading list item region. */
export function EvoListItemLeading({
  className,
  children,
  ...rest
}: EvoListItemLeadingProps) {
  return (
    <div {...rest} className={classNames("list__leading", className)}>
      {children}
    </div>
  );
}
