import classNames from "classnames";
import type { EvoSectionTitleSubtitleProps } from "./types";

/**
 * Adds supporting text after `EvoSectionTitleTitle` within the title wrapper.
 *
 * @summary Section subtitle.
 */
export function EvoSectionTitleSubtitle({
  className,
  children,
  ...rest
}: EvoSectionTitleSubtitleProps) {
  return (
    <span
      {...rest}
      className={classNames("section-title__subtitle", className)}
    >
      {children}
    </span>
  );
}
