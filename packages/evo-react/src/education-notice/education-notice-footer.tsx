import classNames from "classnames";
import type { EvoEducationNoticeFooterProps } from "./types";

/**
 * Optional footer `div` for additional links or actions.
 *
 * @summary Footer for an education notice.
 */
export function EvoEducationNoticeFooter({
  children,
  className,
  ref,
  ...rest
}: EvoEducationNoticeFooterProps) {
  return (
    <div
      {...rest}
      ref={ref}
      className={classNames("education-notice__footer", className)}
    >
      {children}
    </div>
  );
}
