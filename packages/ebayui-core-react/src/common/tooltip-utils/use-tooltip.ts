import { useState, useEffect, RefObject } from "react";

type UseTooltipArgs = {
    onExpand?: () => void;
    onCollapse?: () => void;
    initialExpanded?: boolean;
    open?: boolean;
    hostRef?: RefObject<HTMLElement>;
};

type UseTooltip = {
    isExpanded: boolean;
    expandTooltip: () => void;
    collapseTooltip: () => void;
};

export const useTooltip = ({
    onExpand,
    onCollapse,
    initialExpanded = false,
    open,
    hostRef,
}: UseTooltipArgs): UseTooltip => {
    const [isExpanded, setIsExpanded] = useState(open ?? initialExpanded);

    useEffect(() => {
        if (open !== undefined) {
            setIsExpanded(open);
        }
    }, [open]);
    const expandTooltip = () => {
        setIsExpanded(true);
        if (onExpand) {
            onExpand();
        }
    };

    const collapseTooltip = () => {
        setIsExpanded(false);
        if (onCollapse) {
            onCollapse();
        }

        hostRef?.current?.focus();
    };

    return {
        isExpanded,
        expandTooltip,
        collapseTooltip,
    };
};
