import classNames from "classnames";
import type { EvoSectionTitleOverflowProps } from "./types";

/**
 * Holds an optional menu action beside the section heading. The menu trigger
 * inside it needs an accessible name.
 *
 * @summary Section overflow slot.
 */
export function EvoSectionTitleOverflow({
  className,
  children,
  ...rest
}: EvoSectionTitleOverflowProps) {
  return (
    <div {...rest} className={classNames("section-title__overflow", className)}>
      {children}
    </div>
  );
}
