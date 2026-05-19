import { EvoBadge } from "../badge/badge";
import type { EvoIconButtonBadgeProps } from "./types";

export function EvoIconButtonBadge(props: EvoIconButtonBadgeProps) {
  return <EvoBadge {...props} type="icon" a11yText={null} />;
}
