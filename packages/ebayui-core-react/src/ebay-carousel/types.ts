import { ComponentRef } from "react";

export type CarouselControlType = "prev" | "next";

export type MovementDirection = "LEFT" | "RIGHT" | "NONE";

export type ListItemRef = {
    element: ComponentRef<"li">;
    left: number;
    right: number;
    fullyVisible: boolean;
};
