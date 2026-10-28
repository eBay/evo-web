import classNames from "classnames";
import type { EvoSectionTitleHeadingProps } from "./types";

/**
 * Names the section with a semantic heading. Set `as` to the heading level that
 * fits the page hierarchy; visual size comes from Skin.
 *
 * @summary Section heading.
 */
export function EvoSectionTitleHeading({
  as: Heading = "h2",
  className,
  children,
  ...rest
}: EvoSectionTitleHeadingProps) {
  return (
    <Heading
      {...rest}
      className={classNames("section-title__title", className)}
    >
      {children}
    </Heading>
  );
}
