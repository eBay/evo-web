import { EvoBadge } from "../badge/badge";
import type { EvoFakeMenuItemBadgeProps } from "./types";

/**
 * Adds a count or status indicator to a fake menu item.
 *
 * @summary Badge attached to a fake menu item.
 */
export function EvoFakeMenuItemBadge(props: EvoFakeMenuItemBadgeProps) {
  return <EvoBadge {...props} type="menu" />;
}
