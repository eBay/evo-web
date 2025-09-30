import React, { FC } from "react";
import classNames from "classnames";
import eekUtil from "./eek-util";
import { EbayIconEekRangeArrow } from "../ebay-icon/icons/ebay-icon-eek-range-arrow";
import { EbayIconEekArrow } from "../ebay-icon/icons/ebay-icon-eek-arrow";

export type EbayEekProps = {
    rating: string;
    max: string;
    min: string;
    a11yText?: string;
    className?: string;
};

const EbayEek: FC<EbayEekProps> = ({ min = "", max = "", rating, a11yText, className: extraClasses }) => {
    const parsedRating = eekUtil({ rating, min, max });
    const className = classNames(extraClasses, "eek", { [`eek--rating-${parsedRating}`]: !!parsedRating });
    const backupA11yText = `Energy Rating: ${rating}. Range: ${max} - ${min}.`;
    return (
        <div className={className} role="figure" aria-label={a11yText || backupA11yText}>
            <div className="eek__container" aria-hidden>
                <span className="eek__rating-range">
                    <span aria-hidden="true">{max}</span>
                    <EbayIconEekRangeArrow />
                    <span aria-hidden="true">{min}</span>
                </span>
                <span className="eek__rating" aria-hidden="true">
                    {rating}
                </span>
            </div>
            <EbayIconEekArrow />
        </div>
    );
};

export default EbayEek;
