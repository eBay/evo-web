import { EvoFilePreviewCardAction } from "../file-preview-card/file-preview-card-action";
import type { EvoItemTileActionProps } from "./types";

/**
 * File preview corner action for a tile. Supply an icon child and localized
 * `a11yText`; the callback belongs on this action.
 *
 * @summary Item tile media action.
 */
export function EvoItemTileAction(props: EvoItemTileActionProps) {
  return <EvoFilePreviewCardAction {...props} />;
}
