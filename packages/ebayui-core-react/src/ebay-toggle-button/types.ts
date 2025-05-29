import { ComponentProps } from "react";
import { EbayMouseEventHandler } from "../common/event-utils/types";
import { Icon } from "../ebay-icon/types";

type PressedEventData = {
    pressed: boolean;
};

export type ToggleButtonEvent = EbayMouseEventHandler<HTMLButtonElement, PressedEventData>;

export type ToggleButtonImge = {
    src: string;
    alt: string;
    fillPlacement?: string;
};

export type ToggleButtonProps = Omit<ComponentProps<"button">, "onClick"> & {
    pressed?: boolean;
    title?: string;
    subtitle?: string | string[];
    layoutType?: "minimal" | "list" | "gallery";
    icon?: Icon;
    img?: ToggleButtonImge;
    onToggle?: ToggleButtonEvent;
};
