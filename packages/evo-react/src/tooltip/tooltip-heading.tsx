import classNames from "classnames";
import type { ElementType } from "react";
import type { EvoTooltipHeadingProps } from "./types";

/**
 * Styles an optional heading within `EvoTooltipContent`. It defaults to a
 * `<span>`; use `as` to select an appropriate semantic element. The heading is
 * visual and semantic content only and does not create an `aria-labelledby`
 * relationship.
 *
 * @summary Optional tooltip heading.
 */
export function EvoTooltipHeading<T extends ElementType = "span">({
  as,
  className,
  children,
  ...rest
}: EvoTooltipHeadingProps<T>) {
  const Component = (as ?? "span") as ElementType;

  return (
    <Component {...rest} className={classNames("tooltip__heading", className)}>
      {children}
    </Component>
  );
}
