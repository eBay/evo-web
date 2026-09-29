import classNames from "classnames";
import type { EvoSectionTitleInfoProps } from "./types";

/**
 * Holds supplementary help beside the section heading. An icon-only control
 * inside it needs an accessible name.
 *
 * @summary Section information slot.
 */
export function EvoSectionTitleInfo({
  className,
  children,
  ...rest
}: EvoSectionTitleInfoProps) {
  return (
    <div {...rest} className={classNames("section-title__info", className)}>
      {children}
    </div>
  );
}
