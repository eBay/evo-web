import classNames from "classnames";
import type { EvoPageNoticeTitleProps } from "./types";

/**
 * Heading within `EvoPageNoticeMain`; choose `as` to fit the page hierarchy.
 *
 * @summary Heading for a page notice.
 */
export function EvoPageNoticeTitle({
  as: Heading = "h2",
  children,
  className,
  ref,
  ...rest
}: EvoPageNoticeTitleProps) {
  return (
    <Heading
      {...rest}
      ref={ref}
      className={classNames("page-notice__title", className)}
    >
      {children}
    </Heading>
  );
}
