import classNames from "classnames";
import type { EvoSectionNoticeTitleProps } from "./types";

/**
 * Heading within `EvoSectionNoticeMain`; choose `as` to fit the page hierarchy.
 *
 * @summary Heading for a section notice.
 */
export function EvoSectionNoticeTitle({
  as: Heading = "h2",
  children,
  className,
  ref,
  ...rest
}: EvoSectionNoticeTitleProps) {
  return (
    <Heading
      {...rest}
      ref={ref}
      className={classNames("section-notice__title", className)}
    >
      {children}
    </Heading>
  );
}
