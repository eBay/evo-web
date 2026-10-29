import classNames from "classnames";
import type { EvoEducationNoticeFooterProps } from "./types";
import "@ebay/skin/link.mjs";

/**
 * Optional footer `div` for additional links or actions. Skin styles links
 * here; give a `button` action `className="fake-link"` for Skin link styling.
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
