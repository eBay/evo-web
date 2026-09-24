import classNames from "classnames";
import type { EvoSectionTitleProps } from "./types";
import "@ebay/skin/section-title.mjs";

/**
 * Section titles identify a group of elements on a page.
 *
 * Compose `EvoSectionTitleTitleContainer` around the heading and optional
 * subtitle, then place an action, info, or overflow part after it. The heading
 * level must match the page hierarchy. Give icon-only actions accessible names.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoSectionTitle,
 *   EvoSectionTitleCta,
 *   EvoSectionTitleTitle,
 *   EvoSectionTitleTitleContainer,
 * } from "@evo-web/react/section-title";
 *
 * <EvoSectionTitle>
 *   <EvoSectionTitleTitleContainer>
 *     <EvoSectionTitleTitle>Recently viewed</EvoSectionTitleTitle>
 *   </EvoSectionTitleTitleContainer>
 *   <EvoSectionTitleCta href="/my/recently-viewed">
 *     See all recently viewed items
 *   </EvoSectionTitleCta>
 * </EvoSectionTitle>
 * ```
 *
 * @summary Heading and optional actions for a page section.
 */
export function EvoSectionTitle({
  className,
  children,
  ...rest
}: EvoSectionTitleProps) {
  return (
    <div {...rest} className={classNames("section-title", className)}>
      {children}
    </div>
  );
}
