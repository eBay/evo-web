import classNames from "classnames";
import { EvoIconCcdChargerIncluded } from "../icon/icons/ccd-charger-included";
import { EvoIconCcdChargerNotIncluded } from "../icon/icons/ccd-charger-not-included";
import { EvoIconCcdTop } from "../icon/icons/ccd-top";
import type { EvoCCDProps } from "./types";
import "@ebay/skin/ccd.mjs";

/**
 * The common charger directive (CCD) figure communicates whether a charger is
 * included and shows the power range required by a device.
 *
 * `a11yText` describes the complete figure. `min` and `max` control the visible
 * range, and `secondaryType="usbpd"` adds the USB Power Delivery label.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoCCD } from "@evo-web/react/ccd";
 *
 * <EvoCCD
 *   min="1000"
 *   max="2000"
 *   chargerIcon="included"
 *   a11yText="Charger included. 1000 - 2000 Watts"
 * />
 * ```
 *
 * @summary Charger capability summary.
 */
export function EvoCCD({
  max,
  min,
  chargerIcon,
  units = "W",
  secondaryType,
  a11yText,
  className,
  ...rest
}: EvoCCDProps) {
  return (
    <div
      {...rest}
      role="img"
      aria-label={a11yText ?? undefined}
      className={classNames("ccd", className)}
    >
      {chargerIcon === "included" && (
        <EvoIconCcdChargerIncluded className="ccd__charger-icon" />
      )}
      {chargerIcon === "not-included" && (
        <EvoIconCcdChargerNotIncluded className="ccd__charger-icon" />
      )}
      {(min || max) && (
        <div className="ccd__description-figure">
          <EvoIconCcdTop className="ccd__top-icon" />
          <div className="ccd__body">
            <div>
              {min} - {max}
            </div>
            <div>{units}</div>
            {secondaryType === "usbpd" && <div>USB PD</div>}
          </div>
        </div>
      )}
    </div>
  );
}
