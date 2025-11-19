import React, { FC, SyntheticEvent } from "react";
import classNames from "classnames";
import { CarouselControlType, MovementDirection } from "./types";
import { EbayIconChevronLeft16 } from "../ebay-icon/icons/ebay-icon-chevron-left-16";
import { EbayIconChevronRight16 } from "../ebay-icon/icons/ebay-icon-chevron-right-16";

type CarouselControlProps = {
    label?: string;
    hidden?: boolean;
    type: CarouselControlType;
    disabled?: boolean;
    onClick: (event: SyntheticEvent<HTMLButtonElement>, { direction }) => void;
};

const typeToDirection: Record<CarouselControlType, MovementDirection> = {
    prev: "LEFT",
    next: "RIGHT",
};

const CarouselControlButton: FC<CarouselControlProps> = ({ type, label, hidden, disabled, onClick }) => {
    const handleOnClick = (event: SyntheticEvent<HTMLButtonElement>) => {
        if (disabled) {
            return;
        }

        onClick(event, { direction: typeToDirection[type] });
    };

    const Icon = type === "prev" ? EbayIconChevronLeft16 : EbayIconChevronRight16;

    return (
        <button
            className={classNames("carousel__control", `carousel__control--${type}`)}
            aria-label={label}
            aria-disabled={disabled}
            onClick={handleOnClick}
        >
            <Icon className={classNames("icon", `icon--carousel-${type}`)} focusable={false} aria-hidden={hidden} />
        </button>
    );
};

export default CarouselControlButton;
