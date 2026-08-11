import React, { CSSProperties, FC, useEffect, useRef } from "react";
import { findComponent } from "../common/component-utils";
import {
    Tooltip,
    TooltipHost,
    TooltipContent,
    TooltipProps,
    PointerDirection,
    useTooltip,
} from "../common/tooltip-utils";
import EbayTooltipContent from "./ebay-tooltip-content";
import EbayTooltipHost from "./ebay-tooltip-host";
import { handleEscapeKeydown } from "../events";
import { useFloatingTooltip } from "../common/floating-ui";

// @todo: this type is weird, we should improve it
type Props = Omit<TooltipProps, "ref"> & {
    noHover?: boolean;
    open?: boolean;
    onExpand?: () => void;
    onCollapse?: () => void;
    pointer?: PointerDirection;
    overlayStyle?: CSSProperties;
    offset?: number;
    noFlip?: boolean;
    noShift?: boolean;
    notInline?: boolean;
};

const EbayTooltip: FC<Props> = ({
    className,
    pointer,
    overlayStyle,
    noHover,
    open,
    offset,
    noFlip,
    noShift,
    notInline,
    onFocus = () => {},
    onBlur = () => {},
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    onExpand,
    onCollapse,
    children,
    ...rest
}) => {
    const hostRef = useRef<HTMLElement>(null);
    const { isExpanded, expandTooltip, collapseTooltip } = useTooltip({ onCollapse, onExpand, expanded: open });
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    const { overlayStyles, arrowStyles, refs } = useFloatingTooltip({
        open: isExpanded,
        hostRef,
        options: {
            pointer,
            offset,
            noFlip,
            noShift,
            notInline,
        },
    });

    useEffect(() => {
        const handleKeydown = function (event: KeyboardEvent) {
            handleEscapeKeydown(event as unknown as React.KeyboardEvent, collapseTooltip);
        };

        if (isExpanded) {
            document.addEventListener("keydown", handleKeydown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [isExpanded]);

    const handleOnMouseEnter = (event) => {
        onMouseEnter(event);
        if (!noHover) {
            clearTimeout(timeoutRef.current);
            expandTooltip();
        }
    };

    const handleOnMouseLeave = (event) => {
        onMouseLeave(event);
        if (!noHover) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                collapseTooltip();
            }, 300);
        }
    };

    const handleOnFocus = (event) => {
        onFocus(event);
        expandTooltip();
    };

    const handleOnBlur = (event) => {
        onBlur(event);
        collapseTooltip();
    };

    const content = findComponent(children, EbayTooltipContent);
    const host = findComponent(children, EbayTooltipHost);

    if (!host) {
        throw new Error(`EbayTooltip: Please use a EbayTooltipHost that defines the host of the tooltip`);
    }

    if (!content) {
        throw new Error(`EbayTooltip: Please use a EbayTooltipContent that defines the content of the tooltip`);
    }

    return (
        <Tooltip
            {...rest}
            className={className}
            type="tooltip"
            isExpanded={isExpanded}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            <TooltipHost {...host.props} forwardedRef={hostRef} />
            <TooltipContent
                {...content.props}
                type="tooltip"
                style={{ ...overlayStyles, ...overlayStyle }}
                pointer={pointer}
                arrowStyle={arrowStyles}
                overlayRef={refs.setOverlay}
                arrowRef={refs.arrow}
            />
        </Tooltip>
    );
};

export default EbayTooltip;
