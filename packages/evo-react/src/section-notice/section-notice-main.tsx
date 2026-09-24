import classNames from "classnames";
import type { EvoSectionNoticeMainProps } from "./types";

/**
 * Main `span` that contains a section notice's title and body.
 *
 * @summary Main content region of a section notice.
 */
export function EvoSectionNoticeMain({
  children,
  className,
  ref,
  ...rest
}: EvoSectionNoticeMainProps) {
  return (
    <span
      {...rest}
      ref={ref}
      className={classNames("section-notice__main", className)}
    >
      {children}
    </span>
  );
}
