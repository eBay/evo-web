import classNames from "classnames";
import type { EvoEducationNoticeMainProps } from "./types";

/**
 * Main `div` for the explanatory content of `EvoEducationNotice`.
 *
 * @summary Main content region of an education notice.
 */
export function EvoEducationNoticeMain({
  children,
  className,
  ref,
  ...rest
}: EvoEducationNoticeMainProps) {
  return (
    <div
      {...rest}
      ref={ref}
      className={classNames("education-notice__main", className)}
    >
      {children}
    </div>
  );
}
