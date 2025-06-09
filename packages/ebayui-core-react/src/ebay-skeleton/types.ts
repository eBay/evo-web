import { JSX } from "react";
export type SupportedElements = "div" | "span";

export type BaseSkeletonComponentProps<T extends SupportedElements = "div"> = {
    as?: T;
} & Omit<JSX.IntrinsicElements[T], "ref">;
