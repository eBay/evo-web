import classNames from "classnames";
import type { EvoPageNoticeFooterProps } from "./types";

/**
 * Footer `div` for custom notice actions. Do not combine with `a11yDismissText`.
 *
 * @summary Footer for a page notice.
 */
export function EvoPageNoticeFooter({
  children,
  className,
  ref,
  ...rest
}: EvoPageNoticeFooterProps) {
  return (
    <div
      {...rest}
      ref={ref}
      className={classNames("page-notice__footer", className)}
    >
      {children}
    </div>
  );
}
