import { ComponentProps } from "react";
import { EbayMouseEventHandler } from "../common/event-utils/types";

type PressedGroupEventData = {
    pressedButtonsIndex: Record<number, boolean>;
};

export type ToggleButtonGroupEvent = EbayMouseEventHandler<HTMLButtonElement, PressedGroupEventData>;

export type ToggleButtonGroupProps = Omit<ComponentProps<"div">, "onChange"> & {
    a11yText?: string;
    a11yLabelId?: string;
    variant?: "checkbox" | "radio" | "radio-toggle";
    layoutType?: "minimal" | "list" | "gallery";
    columnsMin?: number;
    columnsXS?: number;
    columnsSM?: number;
    columnsMD?: number;
    columnsXL?: number;
    onChange?: ToggleButtonGroupEvent;
};
