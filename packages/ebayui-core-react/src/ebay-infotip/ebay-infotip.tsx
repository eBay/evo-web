import React, { cloneElement, createElement, CSSProperties, FC, useRef, ReactNode, ReactElement } from "react";
import classNames from "classnames";
import { findComponent } from "../common/component-utils";
import {
    Tooltip,
    TooltipHost,
    TooltipContent,
    PointerDirection,
    useTooltip,
    TooltipProps,
} from "../common/tooltip-utils";
import { EbayDialogHeader } from "../ebay-dialog-base";
import EbayInfotipHost from "./ebay-infotip-host";
import { Icon } from "../ebay-icon";
import { EbayLightboxDialog } from "../ebay-lightbox-dialog";
import { Variant } from "./types";
import { EbayInfotipHeading, EbayInfotipContent } from "./index";
import { TooltipHostProps } from "../common/tooltip-utils/tooltip-host";
import { EbayIconInformation16 } from "../ebay-icon/icons/ebay-icon-information-16";

export type InfotipProps = {
    variant?: Variant;
    icon?: Icon | ReactElement;
    disabled?: boolean;
    initialExpanded?: boolean;
    pointer?: PointerDirection;
    overlayStyle?: CSSProperties;
    onExpand?: () => void;
    onCollapse?: () => void;
    a11yCloseText: string;
    "aria-label"?: string;
    className?: string;
    children?: ReactNode;
};

const EbayInfotip: FC<InfotipProps> = ({
    variant = "default",
    pointer,
    overlayStyle,
    disabled,
    onExpand,
    onCollapse,
    children,
    initialExpanded,
    icon = <EbayIconInformation16 />,
    a11yCloseText,
    "aria-label": ariaLabel,
    className,
}) => {
    const buttonRef = useRef<HTMLElement & FC<TooltipHostProps>>(null);
    const { isExpanded, expandTooltip, collapseTooltip } = useTooltip({
        onCollapse,
        onExpand,
        initialExpanded,
        hostRef: buttonRef,
    });

    const isModal = variant === "modal";
    const containerRef = useRef<FC<TooltipProps>>(null);
    const heading = findComponent(children, EbayInfotipHeading);
    const content = findComponent(children, EbayInfotipContent);
    const button = findComponent(children, EbayInfotipHost) || createElement(EbayInfotipHost);

    const toggleTooltip = () => {
        if (isExpanded) {
            collapseTooltip();
        } else {
            expandTooltip();
        }
    };

    if (!content) {
        throw new Error(`EbayInfotip: Please use a EbayInfotipContent that defines the content of the infotip`);
    }

    const { children: contentChildren, ...contentProps } = content.props;

    return (
        <>
            <Tooltip
                type="infotip"
                isExpanded={isExpanded}
                className={classNames(className, { "dialog--mini": isModal })}
                ref={containerRef}
            >
                <TooltipHost>
                    {cloneElement(button, {
                        ref: buttonRef,
                        onClick: toggleTooltip,
                        disabled,
                        variant,
                        "aria-label": ariaLabel,
                        "aria-expanded": isExpanded,
                        icon,
                        ...button.props,
                    })}
                </TooltipHost>
                {!isModal && (
                    <TooltipContent
                        {...contentProps}
                        type="infotip"
                        style={overlayStyle}
                        pointer={pointer}
                        showCloseButton
                        a11yCloseText={a11yCloseText}
                        onClose={collapseTooltip}
                    >
                        {heading}
                        {contentChildren}
                    </TooltipContent>
                )}
            </Tooltip>
            {isModal && (
                <EbayLightboxDialog
                    {...contentProps}
                    open={isExpanded}
                    onClose={collapseTooltip}
                    a11yCloseText={a11yCloseText}
                    className="dialog--mini__overlay"
                >
                    <EbayDialogHeader>{heading}</EbayDialogHeader>
                    {contentChildren}
                </EbayLightboxDialog>
            )}
        </>
    );
};

export default EbayInfotip;
