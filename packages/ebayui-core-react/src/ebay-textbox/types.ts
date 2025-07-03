import { ComponentProps, KeyboardEvent, MouseEvent } from "react";
import type { Icon } from "../ebay-icon";

export type Size = "default" | "large";

export type EbayTextboxIconProps = ComponentProps<"button"> &
    ComponentProps<"a"> & {
        name?: Icon;
        buttonAriaLabel?: string;
        onClick?: (e: KeyboardEvent | MouseEvent) => void;
    };

export type EbayTextboxPrefixTextProps = ComponentProps<"span"> & {
    id: string;
};

export type EbayTextboxPostfixTextProps = ComponentProps<"span"> & {
    id: string;
};
