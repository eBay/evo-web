import React, { cloneElement, FC, ReactElement, useState } from "react";
import classNames from "classnames";
import { SegmentedButtonProps, SegmentedButtonsProps } from "./types";
import { filterByType } from "../common/component-utils";
import SegmentedButton from "./button";

const EbaySegmentedButtons: FC<SegmentedButtonsProps> = ({
    size,
    className,
    onChange = () => {},
    children,
    ...rest
}) => {
    const buttons = filterByType(children, SegmentedButton);
    const [selectedIndex, setSelectedIndex] = useState(buttons.findIndex((button) => button.props.selected) || 0);

    const handleClick = (e, index: number, value: string) => {
        setSelectedIndex(index);
        onChange(e, { index, value });
    };

    return (
        <div className={classNames("segmented-buttons", size && `segmented-buttons--${size}`, className)} {...rest}>
            <ul>
                {buttons.map((button: ReactElement, i) => {
                    const { value, ...buttonRest }: SegmentedButtonProps = button.props;

                    return cloneElement(button, {
                        ...buttonRest,
                        onClick: (e) => handleClick(e, i, value),
                        selected: i === selectedIndex,
                    } as SegmentedButtonProps);
                })}
            </ul>
        </div>
    );
};

export default EbaySegmentedButtons;
