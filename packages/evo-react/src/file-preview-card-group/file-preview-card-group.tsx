import classNames from "classnames";
import type { EvoFilePreviewCardGroupProps } from "./types";
import "@ebay/skin/file-preview-card-group.mjs";

/**
 * File preview card groups lay out their children as a grid. Applications
 * decide which cards to render and when to show more.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoFilePreviewCardGroup, EvoFilePreviewCardGroupItem } from "@evo-web/react/file-preview-card-group";
 *
 * <EvoFilePreviewCardGroup>
 *   <EvoFilePreviewCardGroupItem file={file} />
 * </EvoFilePreviewCardGroup>
 * ```
 *
 * @summary List container for file preview cards.
 */
export function EvoFilePreviewCardGroup({
  children,
  className,
  ref,
  ...rest
}: EvoFilePreviewCardGroupProps) {
  return (
    <ul
      {...rest}
      ref={ref}
      className={classNames("file-preview-card-group", className)}
    >
      {children}
    </ul>
  );
}
