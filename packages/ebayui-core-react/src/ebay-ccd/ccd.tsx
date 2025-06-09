import React, { ComponentProps, FC } from "react";
import { EbayIcon } from "../ebay-icon";
import classNames from "classnames";

type CCDProps = ComponentProps<"div"> & {
    max?: string;
    min?: string;
    chargerIcon?: "included" | "not-included";
    units?: string;
    secondaryType?: "usbpd" | "none";
    secondaryText?: string;
    a11yUnits?: string;
    a11yText?: string;
};

const EbayCCD: FC<CCDProps> = ({
    max,
    min,
    chargerIcon,
    units = "W",
    secondaryType = "none",
    secondaryText = "USB PD",
    a11yUnits = "watts",
    "aria-label": ariaLabel,
    className,
    ...rest
}) => {
    const hasFastCharging = secondaryType === "usbpd";
    const a11yCharger = chargerIcon ? `Charger ${chargerIcon === "included" ? "" : "not "}included.` : "";
    const a11yFigure = min || max ? `${min} - ${max} ${a11yUnits}. ${hasFastCharging ? secondaryText : ""}` : "";
    const a11yCombined = `${a11yCharger} ${a11yFigure}`.trim();

    return (
        <div {...rest} role="figure" aria-label={ariaLabel || a11yCombined} className={classNames("ccd", className)}>
            {chargerIcon === "included" && <EbayIcon name="ccdChargerIncluded" className="ccd__charger-icon" />}
            {chargerIcon === "not-included" && <EbayIcon name="ccdChargerNotIncluded" className="ccd__charger-icon" />}
            {(min || max) && (
                <div className="ccd__description-figure">
                    <EbayIcon name="ccdTop" className="ccd__top-icon" />
                    <div className="ccd__body">
                        <div>
                            {min} - {max}
                        </div>
                        <div>{units}</div>
                        {hasFastCharging && <div>{secondaryText}</div>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EbayCCD;
