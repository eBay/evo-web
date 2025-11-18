import React, { FC, CSSProperties, ReactNode } from "react";
import { excludeComponent, findComponent } from "../component-utils";
import { PointerDirection, TooltipType } from "./types";
import { DEFAULT_POINTER_DIRECTION, POINTER_STYLES, TYPE_ROLES } from "./constants";
import TooltipCloseButton from "./tooltip-close-button";
import TooltipFooter from "./tooltip-footer";
import { EbayIconClose16 } from "../../ebay-icon/icons/ebay-icon-close-16";

export type TooltipContentProps = {
    id?: string;
    type?: TooltipType;
    style?: CSSProperties;
    pointer?: PointerDirection;
    showCloseButton?: boolean;
    a11yCloseText?: string;
    onClose?: () => void;
    children?: ReactNode;
};

const TooltipContent: FC<TooltipContentProps> = ({
    id,
    style,
    pointer = DEFAULT_POINTER_DIRECTION,
    children,
    type = "tooltip",
    showCloseButton,
    a11yCloseText,
    onClose,
}) => {
    const closeButton = findComponent(children, TooltipCloseButton);
    const footer = findComponent(children, TooltipFooter);
    const allChildrenExceptFooter = excludeComponent(children, TooltipFooter);

    return (
        <span
            className={`${type}__overlay`}
            id={id}
            role={TYPE_ROLES[type] || null}
            style={{ ...POINTER_STYLES[pointer], ...style }}
        >
            <span className={`${type}__pointer ${type}__pointer--${pointer}`} />
            <span className={`${type}__mask`}>
                <span className={`${type}__cell`}>
                    <span className={`${type}__content`}>{allChildrenExceptFooter}</span>
                    {showCloseButton ? (
                        <button
                            {...closeButton?.props}
                            className={`icon-btn icon-btn--transparent ${type}__close`}
                            type="button"
                            aria-label={a11yCloseText}
                            onClick={onClose}
                        >
                            <EbayIconClose16 />
                        </button>
                    ) : null}
                    {footer}
                </span>
            </span>
        </span>
    );
};

export default TooltipContent;
