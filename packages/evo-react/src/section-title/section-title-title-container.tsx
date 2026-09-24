import classNames from "classnames";
import type { EvoSectionTitleTitleContainerProps } from "./types";

/**
 * Groups the section heading and optional subtitle in the Skin title wrapper.
 *
 * @summary Section heading wrapper.
 */
export function EvoSectionTitleTitleContainer({
  className,
  children,
  ...rest
}: EvoSectionTitleTitleContainerProps) {
  return (
    <div
      {...rest}
      className={classNames("section-title__title-container", className)}
    >
      {children}
    </div>
  );
}
