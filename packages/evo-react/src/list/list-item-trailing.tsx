import classNames from "classnames";
import type { EvoListItemTrailingProps } from "./types";

/** Adds content after an `EvoListItemBody`. @summary Trailing list item region. */
export function EvoListItemTrailing({
  className,
  children,
  ...rest
}: EvoListItemTrailingProps) {
  return (
    <div {...rest} className={classNames("list__trailing", className)}>
      {children}
    </div>
  );
}
