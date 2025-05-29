import React, { CSSProperties, FC, useRef } from "react";
import { findComponent } from "../common/component-utils";
import {
    Tooltip,
    TooltipHost,
    TooltipContent,
    TooltipProps,
    PointerDirection,
    useTooltip,
    TooltipFooter,
} from "../common/tooltip-utils";
import EbayTourtipContent from "./ebay-tourtip-content";
import EbayTourtipHost from "./ebay-tourtip-host";
import EbayTourtipFooter from "./ebay-tourtip-footer";
import EbayTourtipHeading from "./ebay-tourtip-heading";

export type TourtipProps = Omit<TooltipProps, "ref"> & {
    a11yCloseText: string;
    pointer?: PointerDirection;
    onExpand?: () => void;
    onCollapse?: () => void;
    overlayStyle?: CSSProperties;
    "aria-label"?: string;
    className?: string;
};

const EbayTourtip: FC<TourtipProps> = ({
    a11yCloseText,
    "aria-label": ariaLabel,
    className,
    children,
    onCollapse,
    onExpand,
    overlayStyle,
    pointer,
    ...rest
}) => {
    const hostRef = useRef<HTMLElement>(null);
    const { isExpanded, collapseTooltip } = useTooltip({ onExpand, onCollapse, initialExpanded: true, hostRef });
    const containerRef = useRef<FC<TooltipProps>>(null);
    const content = findComponent(children, EbayTourtipContent);
    if (!content) {
        throw new Error(`EbayTourtip: Please use a EbayTourtipContent that defines the content of the tourtip`);
    }
    const { children: contentChildren, ...contentProps } = content.props;
    const host = findComponent(children, EbayTourtipHost);
    if (!host) {
        throw new Error(`EbayTourtip: Please use a EbayTourtipHost that defines the host of the tourtip`);
    }
    const heading = findComponent(children, EbayTourtipHeading);
    const footer = findComponent(children, EbayTourtipFooter);

    return (
        <Tooltip {...rest} className={className} type="tourtip" isExpanded={isExpanded} ref={containerRef}>
            <TooltipHost {...host.props} forwardedRef={hostRef} aria-label={ariaLabel} aria-expanded={isExpanded} />
            <TooltipContent
                {...contentProps}
                a11yCloseText={a11yCloseText}
                onClose={collapseTooltip}
                pointer={pointer}
                showCloseButton
                style={overlayStyle}
                type="tourtip"
            >
                {heading}
                {contentChildren}
                {footer && <TooltipFooter type="tourtip">{footer}</TooltipFooter>}
            </TooltipContent>
        </Tooltip>
    );
};
export default EbayTourtip;
