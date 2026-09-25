import classNames from "classnames";
import type { EvoPageNoticeMainProps } from "./types";

/**
 * Main `div` that contains a page notice's title and body.
 *
 * @summary Main content region of a page notice.
 */
export function EvoPageNoticeMain({
  children,
  className,
  ref,
  ...rest
}: EvoPageNoticeMainProps) {
  return (
    <div
      {...rest}
      ref={ref}
      className={classNames("page-notice__main", className)}
    >
      {children}
    </div>
  );
}
