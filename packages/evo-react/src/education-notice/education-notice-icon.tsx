import { EvoIconLightbulb24 } from "../icon/icons/lightbulb-24";
import { useEducationNotice } from "./context";
import type { EvoEducationNoticeIconProps } from "./types";

/**
 * Optional icon for an education notice. Place it inside
 * `EvoEducationNoticeHeader` to render the default lightbulb. Pass a custom
 * Evo icon with `icon`, or omit this component for a notice without an icon.
 *
 * The default lightbulb uses the notice's accessible name unless `a11yText`
 * overrides it. Set `prominent` to emphasize the default lightbulb. Custom
 * icons are rendered as supplied, so set their own `a11yText` and `prominent`
 * props when needed.
 *
 * @summary Optional icon for an education notice.
 */
export function EvoEducationNoticeIcon({
  icon,
  a11yText,
  prominent = false,
}: EvoEducationNoticeIconProps) {
  const notice = useEducationNotice();

  return (
    icon ?? (
      <EvoIconLightbulb24
        a11yText={a11yText ?? notice.a11yText}
        a11yVariant="label"
        prominent={prominent}
      />
    )
  );
}
