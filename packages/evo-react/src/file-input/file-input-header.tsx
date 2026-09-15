import classNames from "classnames";
import type { EvoFileInputHeaderProps } from "./types";

/**
 * Names the upload task. The `as` prop changes the heading element when the
 * upload is a distinct section in the page's heading hierarchy.
 *
 * @summary File input heading.
 */
export function EvoFileInputHeader({
  as: As = "span",
  className,
  children,
  ...rest
}: EvoFileInputHeaderProps) {
  return (
    <As
      {...rest}
      className={classNames("file-input__content-header", className)}
    >
      {children}
    </As>
  );
}
