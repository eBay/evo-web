import classNames from "classnames";
import type { EvoEducationNoticeTitleProps } from "./types";

/**
 * Heading inside `EvoEducationNoticeHeader`; choose `as` for the page hierarchy.
 *
 * @summary Heading for an education notice.
 */
export function EvoEducationNoticeTitle({
  as: Heading = "h2",
  children,
  className,
  ref,
  ...rest
}: EvoEducationNoticeTitleProps) {
  return (
    <Heading
      {...rest}
      ref={ref}
      className={classNames("education-notice__title", className)}
    >
      {children}
    </Heading>
  );
}
