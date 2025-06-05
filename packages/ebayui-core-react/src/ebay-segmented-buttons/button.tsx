import React, { FC } from "react";
import classNames from "classnames";
import { excludeComponent, findComponent } from "../common/component-utils";
import { EbayIcon } from "../ebay-icon";
import { SegmentedButtonProps } from "./types";

const SegmentedButton: FC<SegmentedButtonProps> = ({ selected, children, className, ...rest }) => {
    const icon = findComponent(children, EbayIcon);

    const iconWithText = () => {
        const text = excludeComponent(children, EbayIcon);

        return (
            <span className="segmented-buttons__button-cell">
                {icon}
                <span>{text}</span>
            </span>
        );
    };

    return (
        <li>
            <button
                className={classNames("segmented-buttons__button", className)}
                aria-current={selected || undefined}
                {...rest}
            >
                {icon ? iconWithText() : children}
            </button>
        </li>
    );
};

export default SegmentedButton;
