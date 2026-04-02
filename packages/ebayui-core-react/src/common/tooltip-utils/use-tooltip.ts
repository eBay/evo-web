import { useState, RefObject } from "react";

type UseTooltipArgs = {
    onExpand?: () => void;
    onCollapse?: () => void;
    initialExpanded?: boolean;
    expanded?: boolean;
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
    expanded,
    hostRef,
}: UseTooltipArgs): UseTooltip => {
    const [isExpanded, setIsExpanded] = useState(initialExpanded);

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
        isExpanded: expanded !== undefined ? expanded : isExpanded,
        expandTooltip,
        collapseTooltip,
    };
};
