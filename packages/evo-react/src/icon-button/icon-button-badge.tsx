import { EvoBadge } from "../badge/badge";
import type { EvoIconButtonBadgeProps } from "./types";

/**
 * Adds a count or status indicator to an `EvoIconButton`. The parent button's
 * accessible label must include the badge's meaning.
 *
 * @summary Badge attached to an icon button.
 */
export function EvoIconButtonBadge(props: EvoIconButtonBadgeProps) {
  return <EvoBadge {...props} type="icon" a11yText={null} />;
}
