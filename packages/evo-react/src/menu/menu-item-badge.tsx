import { EvoBadge } from "../badge/badge";
import type { EvoMenuItemBadgeProps } from "./types";

/**
 * Adds status information to a menu item.
 *
 * @summary Badge attached to a menu item.
 */
export function EvoMenuItemBadge(props: EvoMenuItemBadgeProps) {
  return <EvoBadge {...props} type="menu" />;
}
