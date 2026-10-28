import classNames from "classnames";
import type { EvoSectionTitleContentProps } from "./types";

/**
 * Groups the section heading and optional subtitle in the Skin title wrapper.
 *
 * @summary Section heading wrapper.
 */
export function EvoSectionTitleContent({
  className,
  children,
  ...rest
}: EvoSectionTitleContentProps) {
  return (
    <div
      {...rest}
      className={classNames("section-title__title-container", className)}
    >
      {children}
    </div>
  );
}
