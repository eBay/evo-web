import classNames from "classnames";
import type { EvoSwitchProps } from "./types";
import "@ebay/skin/switch.mjs";

/**
 * A switch turns a setting on or off. Use it for changes that apply as soon as
 * it is toggled, typically handled by client-side JavaScript, rather than for
 * values collected and submitted with a form.
 *
 * `EvoSwitch` uses a native checkbox input with `role="switch"`. Its `checked`,
 * `defaultChecked`, and `onChange` props follow native React input behavior.
 * Provide a visible label, or group related switches under a group label.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoSwitch } from "@evo-web/react/switch";
 *
 * <label>
 *   <EvoSwitch name="saved-search-alerts" defaultChecked />
 *   Email me about new listings in my saved searches
 * </label>
 * ```
 *
 * @summary On or off setting with native input behavior.
 */
export function EvoSwitch({ className, style, ref, ...rest }: EvoSwitchProps) {
  return (
    <span className={classNames("switch", className)} style={style}>
      <input
        {...rest}
        ref={ref}
        type="checkbox"
        role="switch"
        className="switch__control"
      />
      <span className="switch__button" />
    </span>
  );
}
