import classNames from "classnames";
import type { EvoInfotipHeadingProps } from "./types";

/**
 * Heading for the infotip content. It is visual and semantic content only and
 * does not create an `aria-labelledby` relationship.
 *
 * @summary Infotip heading.
 */
export function EvoInfotipHeading({
  as: As = "span",
  className,
  children,
  ...rest
}: EvoInfotipHeadingProps) {
  return (
    <As {...rest} className={classNames("infotip__heading", className)}>
      {children}
    </As>
  );
}
