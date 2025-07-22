import { useEffect, useRef, useSyncExternalStore } from "react";
import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react";
import Expander from "makeup-expander";
import { createLinear } from "makeup-active-descendant";

export type FloatingDropdownHookReturn = {
    overlayStyles: ReturnType<typeof useFloating>["floatingStyles"];
    refs: {
        host: ReturnType<typeof useFloating>["refs"]["reference"];
        overlay: ReturnType<typeof useFloating>["refs"]["floating"];
        setHost: ReturnType<typeof useFloating>["refs"]["setReference"];
        setOverlay: ReturnType<typeof useFloating>["refs"]["setFloating"];
    };
};

export type FloatingDropdownHookArgs = {
    open?: boolean;
    options?: FloatingDropdownHookOptions;
};

export type FloatingDropdownHookOptions = {
    offset?: number;
    reverse?: boolean;
};

export function useFloatingDropdown({ open, options }: FloatingDropdownHookArgs): FloatingDropdownHookReturn {
    const { floatingStyles, refs } = useFloating({
        placement: options?.reverse ? "bottom-end" : "bottom-start",
        open,
        middleware: [offset(options?.offset ?? 4), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    return {
        overlayStyles: floatingStyles,
        refs: {
            host: refs.reference,
            overlay: refs.floating,
            setHost: refs.setReference,
            setOverlay: refs.setFloating,
        },
    };
}

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
    const expander = useRef<typeof Expander>(null);
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

type AutoIndexType =
    | "none"
    | "current"
    | "interactive"
    | "ariaChecked"
    | "ariaSelected"
    | "ariaSelectedOrInteractive"
    | number;

export type ActiveDescendantChangeHandler = (event: ActiveDescendantChangeEvent, data: { toIndex: number }) => void;

export type ActiveDescendantHookArgs = {
    ref: React.MutableRefObject<HTMLElement>;
    focusElementRef?: React.MutableRefObject<HTMLElement>;
    itemContainerRef?: React.MutableRefObject<HTMLElement>;
    disabled?: boolean;
    onChange?: ActiveDescendantChangeHandler;
    options: {
        activeDescendantClassName: string;
        autoInit?: AutoIndexType;
        autoReset?: AutoIndexType;
        autoScroll?: boolean;
        axis?: "both" | "x" | "y";
        ignoreByDelegateSelector?: string;
        wrap?: boolean;
    };
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
    const activeDescendantRef = useRef<typeof createLinear>(null);

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
