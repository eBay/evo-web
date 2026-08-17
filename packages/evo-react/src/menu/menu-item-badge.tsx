import { EvoBadge } from "../badge/badge";
import type { EvoMenuItemBadgeProps } from "./types";

export function EvoMenuItemBadge(props: EvoMenuItemBadgeProps) {
  return <EvoBadge {...props} type="menu" />;
}
