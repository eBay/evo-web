import { EvoBadge } from "../badge/badge";
import type { EvoFakeMenuItemBadgeProps } from "./types";

export function EvoFakeMenuItemBadge(props: EvoFakeMenuItemBadgeProps) {
  return <EvoBadge {...props} type="menu" />;
}
