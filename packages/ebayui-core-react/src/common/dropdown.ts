import { useEffect, useRef, useSyncExternalStore } from "react";
import Expander from "makeup-expander";
import { ActiveDescendantOptions, createLinear, LinearActiveDescendant } from "makeup-active-descendant";

export type { FloatingDropdownHookReturn, FloatingDropdownHookArgs, FloatingDropdownHookOptions } from "./floating-ui";
export { useFloatingDropdown } from "./floating-ui";

type ElementId = string;
export type ExpanderHookArgs<T extends HTMLElement> = {
    ref: React.MutableRefObject<T> | null;
    expanded?: boolean;
    options: {
        contentSelector: string;
        hostSelector: string;
        expandedClass?: string;
        autoCollapse?: boolean;
        expandOnFocus?: boolean;
        expandOnClick?: boolean;
        collapseOnFocusOut?: boolean;
        collapseOnMouseOut?: boolean;
        collapseOnClickOut?: boolean;
        collapseOnHostFocus?: boolean;
        expandOnHover?: boolean;
        focusManagement?: "content" | "focusable" | "interactive" | ElementId;
        simulateSpacebarClick?: boolean;
        alwaysDoFocusManagement?: boolean;
        ariaControls?: boolean;
    };
    onExpand?: () => void;
    onCollapse?: () => void;
};

export type ExpanderHookReturn = {
    isExpanded: boolean;
    expand(): void;
    collapse(): void;
};

export function useExpander<T extends HTMLElement>(
    { ref, expanded, options, onExpand, onCollapse }: ExpanderHookArgs<T>,
    deps?: React.DependencyList,
): ExpanderHookReturn {
    const expander = useRef<Expander>(null);
    const isExpanded = useSyncExternalStore(
        (listener) => {
            function handleExpand() {
                listener();
                onExpand?.();
            }

            function handleCollapse() {
                listener();
                onCollapse?.();
            }

            ref?.current?.addEventListener("expander-expand", handleExpand);
            ref?.current?.addEventListener("expander-collapse", handleCollapse);

            return () => {
                ref?.current?.removeEventListener("expander-expand", handleExpand);
                ref?.current?.removeEventListener("expander-collapse", handleCollapse);
            };
        },
        () => expander.current?.expanded,
        () => false,
    );

    useEffect(() => {
        if (ref?.current) {
            expander.current = new Expander(ref.current, options);
        }

        return () => {
            expander.current?.destroy();
        };
    }, deps || []);

    useEffect(() => {
        if (expander.current && expanded !== undefined) {
            expander.current.expanded = expanded;
        }
    }, [expanded]);

    return {
        isExpanded,
        expand: () => {
            if (expander.current) {
                expander.current.expanded = true;
            }
        },
        collapse: () => {
            if (expander.current) {
                expander.current.expanded = false;
            }
        },
    };
}

export type ActiveDescendantChangeHandler = (event: ActiveDescendantChangeEvent, data: { toIndex: number }) => void;

export type ActiveDescendantHookArgs = {
    ref: React.MutableRefObject<HTMLElement>;
    focusElementRef?: React.MutableRefObject<HTMLElement>;
    itemContainerRef?: React.MutableRefObject<HTMLElement>;
    disabled?: boolean;
    onChange?: ActiveDescendantChangeHandler;
    options: ActiveDescendantOptions;
};

export type ActiveDescendantHookReturn = {
    setIndex: (index: number) => void;
    getIndex: () => number;
};

export interface ActiveDescendantChangeEvent extends Event {
    detail: {
        toIndex: number;
    };
}

export function useActiveDescendant({
    ref,
    focusElementRef,
    itemContainerRef,
    onChange = () => null,
    disabled,
    options,
}: ActiveDescendantHookArgs): ActiveDescendantHookReturn {
    const activeDescendantRef = useRef<LinearActiveDescendant>(null);

    useEffect(() => {
        const handleChange = (event: ActiveDescendantChangeEvent) => {
            const data = {
                toIndex: event.detail.toIndex,
            };

            onChange(event, data);
        };

        if (!disabled) {
            activeDescendantRef.current = createLinear(
                ref.current,
                focusElementRef ? focusElementRef.current : ref.current,
                itemContainerRef ? itemContainerRef.current : ref.current,
                "[role=option]",
                options,
            );

            ref.current.addEventListener("activeDescendantChange", handleChange);
        }

        return () => {
            activeDescendantRef.current?.reset();
            activeDescendantRef.current?.destroy();
            ref.current?.removeEventListener("activeDescendantChange", handleChange);
        };
    }, [disabled, onChange]);

    return {
        setIndex(index: number) {
            activeDescendantRef.current.index = index;
        },
        getIndex() {
            return activeDescendantRef.current.index;
        },
    };
}
