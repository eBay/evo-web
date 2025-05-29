import { ComponentProps } from "react";
import { EbayChangeEventHandler, EbayMouseEventHandler } from "../common/event-utils/types";

export type SegmentedButtonProps = Omit<ComponentProps<"button">, "onClick"> & {
    value?: string;
    selected?: boolean;
    onClick?: EbayMouseEventHandler<HTMLButtonElement>;
};

export type SegmentedButtonSize = "large" | "regular";

export type SegmentedButtonsProps = Omit<ComponentProps<"div">, "onChange"> & {
    size?: SegmentedButtonSize;
    onChange?: EbayChangeEventHandler<HTMLButtonElement, { index: number; value?: string }>;
};
