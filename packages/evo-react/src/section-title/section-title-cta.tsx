import classNames from "classnames";
import type { EvoSectionTitleCtaProps } from "./types";

/**
 * Links to related section content. Use visible, descriptive link text.
 *
 * @summary Section action link.
 */
export function EvoSectionTitleCta({
  className,
  children,
  ...rest
}: EvoSectionTitleCtaProps) {
  return (
    <a {...rest} className={classNames("section-title__cta", className)}>
      {children}
    </a>
  );
}
