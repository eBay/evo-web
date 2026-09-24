import classNames from "classnames";
import type { EvoSectionNoticeFooterProps } from "./types";

/**
 * Footer `div` for custom notice actions. Do not combine with `a11yDismissText`.
 *
 * @summary Footer for a section notice.
 */
export function EvoSectionNoticeFooter({
  children,
  className,
  ref,
  ...rest
}: EvoSectionNoticeFooterProps) {
  return (
    <div
      {...rest}
      ref={ref}
      className={classNames("section-notice__footer", className)}
    >
      {children}
    </div>
  );
}
