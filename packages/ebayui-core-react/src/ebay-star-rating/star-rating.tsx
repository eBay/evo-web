import React, { ComponentProps, FC } from "react";
import classNames from "classnames";
import { EbayIconStarDynamic } from "../ebay-icon/icons/ebay-icon-star-dynamic";
import { range } from "../common/range";

export type Props = ComponentProps<"div"> & {
    a11yText?: string;
    value?: string;
};
const stars = range(1, 5);
const EbayStarRating: FC<Props> = ({ value, a11yText, className, ...rest }) => (
    <div role="img" aria-label={a11yText} className={classNames("star-rating", className)} data-stars={value} {...rest}>
        {stars.map((i) => (
            <EbayIconStarDynamic key={i} className="star-rating__icon" />
        ))}
    </div>
);

export default EbayStarRating;
