import { ComponentProps, Ref } from "react";
import { EbayEventHandler, EbayKeyboardEventHandler } from "../common/event-utils/types";

export type EbayMenuType = "radio" | "checkbox";
export type EbayMenuPriority = "primary" | "secondary" | "none";

type ContainerDivProps = Omit<ComponentProps<"div">, "onKeyDown" | "onChange" | "onSelect">;
type ContainerSpanProps = Omit<ComponentProps<"span">, "onKeyDown" | "onChange" | "onSelect">;
type SelectProps = {
    index: number;
    checked: number[];
};
type ChangeProps = SelectProps & {
    indexes: number[];
    checkedValues: string[];
};
export type EbayMenuKeyDownEventHandler = EbayKeyboardEventHandler<HTMLElement, SelectProps | ChangeProps>;
export type EbayMenuChangeEventHandler = EbayEventHandler<HTMLElement, ChangeProps>;
export type EbayMenuSelectEventHandler = EbayEventHandler<HTMLElement, SelectProps>;
export type EbayMenuProps = ContainerDivProps &
    ContainerSpanProps & {
        type?: EbayMenuType;
        priority?: EbayMenuPriority;
        checked?: number;
        autofocus?: boolean;
        classPrefix?: "menu-button";
        reverse?: boolean;
        fixed?: boolean;
        fixWidth?: boolean;
        baseEl?: "div" | "span";
        onKeyDown?: EbayMenuKeyDownEventHandler;
        onChange?: EbayMenuChangeEventHandler;
        onSelect?: EbayMenuSelectEventHandler;
        forwardedRef?: Ref<HTMLDivElement & HTMLSpanElement>;
        menuRef?: Ref<HTMLDivElement>;
    };
