import { ComponentProps } from "react";
import { EbayButtonProps } from "../ebay-button";
import { EbayMenuProps } from "../ebay-menu";

export type EbaySplitButtonProps = {
    a11yMenuText?: string;
    a11yButtonLoadingText?: string;
    onCollapse?: () => void;
    onExpand?: () => void;
};

type MenuEvents = "onSelect" | "onChange";

export type Props = EbaySplitButtonProps &
    Omit<EbayButtonProps, "ref"> &
    Omit<ComponentProps<"button">, "type" | MenuEvents> &
    Omit<ComponentProps<"a">, MenuEvents> &
    Omit<EbayMenuProps, "priority">;
