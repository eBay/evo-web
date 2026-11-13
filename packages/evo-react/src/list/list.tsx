import classNames from "classnames";
import type { EvoListProps } from "./types";
import "@ebay/skin/list.mjs";

/**
 * List rows combine a set of content inside a horizontal layout.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoList,
 *   EvoListItem,
 *   EvoListItemContent,
 * } from "@evo-web/react/list";
 *
 * <EvoList>
 *   <EvoListItem>
 *     <EvoListItemContent>Saved searches</EvoListItemContent>
 *   </EvoListItem>
 * </EvoList>
 * ```
 *
 * @summary Styled list of static or interactive items.
 */
export function EvoList({
  a11yText,
  a11yLabelId,
  className,
  children,
  ...rest
}: EvoListProps) {
  return (
    <div {...rest} className={classNames("list", className)}>
      <ul aria-label={a11yText} aria-labelledby={a11yLabelId}>
        {children}
      </ul>
    </div>
  );
}
