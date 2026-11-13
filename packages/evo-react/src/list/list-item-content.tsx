import classNames from "classnames";
import type { EvoListItemContentProps } from "./types";

/** Contains the main text or controls of an `EvoListItem`. @summary List item content. */
export function EvoListItemContent({
  className,
  children,
  ...rest
}: EvoListItemContentProps) {
  return (
    <div {...rest} className={classNames("list__body", className)}>
      {children}
    </div>
  );
}
