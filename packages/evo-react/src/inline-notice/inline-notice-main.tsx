import classNames from "classnames";
import type { EvoInlineNoticeMainProps } from "./types";

/**
 * Phrasing content rendered in the main `span` of `EvoInlineNotice`.
 *
 * @summary Main content of an inline notice.
 */
export function EvoInlineNoticeMain({
  children,
  className,
  ref,
  ...rest
}: EvoInlineNoticeMainProps) {
  return (
    <span
      {...rest}
      ref={ref}
      className={classNames("inline-notice__main", className)}
    >
      {children}
    </span>
  );
}
