import classNames from "classnames";
import type { EvoSectionTitleCtaProps } from "./types";

/**
 * Links to related section content. Use visible, descriptive link text. Pass
 * an anchor-compatible router component through `as` for client-side navigation.
 *
 * @summary Section action link.
 */
export function EvoSectionTitleCta({
  as: _as,
  className,
  children,
  ...rest
}: EvoSectionTitleCtaProps) {
  const Component = _as ?? "a";

  return (
    <Component
      {...rest}
      className={classNames("section-title__cta", className)}
    >
      {children}
    </Component>
  );
}
