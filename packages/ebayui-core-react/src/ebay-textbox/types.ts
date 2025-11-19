import { ComponentProps, KeyboardEvent, MouseEvent, ReactElement } from "react";
import type { Icon } from "../ebay-icon";

export type Size = "default" | "large";

export type EbayTextboxIconProps = ComponentProps<"button"> &
    ComponentProps<"a"> & {
        /* @deprecated use `icon` instead */
        name?: Icon;
        icon?: ReactElement;
        buttonAriaLabel?: string;
        onClick?: (e: KeyboardEvent | MouseEvent) => void;
    };

export type EbayTextboxPrefixTextProps = ComponentProps<"span"> & {
    id: string;
};

export type EbayTextboxPostfixTextProps = ComponentProps<"span"> & {
    id: string;
};
