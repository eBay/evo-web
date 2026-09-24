import classNames from "classnames";
import type { EvoListProps } from "./types";
import "@ebay/skin/list.mjs";

/**
 * A list displays related items in a structured format. Items can contain
 * information, buttons, or links, and the list fits its container up to
 * Skin's maximum width.
 *
 * `EvoList` wraps its children in a native `<ul>`. Use `EvoListItem` for each
 * entry and place its content in `EvoListItemBody`. Optional
 * `EvoListItemLeading` and `EvoListItemTrailing` regions flank the body.
 * Use `a11yText` or `a11yLabelId` when the list needs an accessible name.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoList,
 *   EvoListItem,
 *   EvoListItemBody,
 * } from "@evo-web/react/list";
 *
 * <EvoList>
 *   <EvoListItem>
 *     <EvoListItemBody>Saved searches</EvoListItemBody>
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
