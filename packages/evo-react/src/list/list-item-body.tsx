import classNames from "classnames";
import type { EvoListItemBodyProps } from "./types";

/** Contains the main text or controls of an `EvoListItem`. @summary List item body. */
export function EvoListItemBody({
  className,
  children,
  ...rest
}: EvoListItemBodyProps) {
  return (
    <div {...rest} className={classNames("list__body", className)}>
      {children}
    </div>
  );
}
