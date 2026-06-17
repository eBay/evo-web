import classNames from "classnames";
import { EvoIconCcdChargerIncluded } from "../icon/icons/ccd-charger-included";
import { EvoIconCcdChargerNotIncluded } from "../icon/icons/ccd-charger-not-included";
import { EvoIconCcdTop } from "../icon/icons/ccd-top";
import type { EvoCCDProps } from "./types";
import "@ebay/skin/ccd.mjs";

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
