import { useRef } from "react";
import { autoUpdate, flip, offset, shift, arrow, inline, useFloating, type Placement } from "@floating-ui/react";
import { PointerDirection } from "./tooltip-utils/types";

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
    strategy?: "fixed" | "absolute";
};

export function useFloatingDropdown({ open, options }: FloatingDropdownHookArgs): FloatingDropdownHookReturn {
    const { floatingStyles, refs } = useFloating({
        placement: options?.reverse ? "bottom-end" : "bottom-start",
        strategy: options?.strategy,
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

const POINTER_TO_PLACEMENT: Record<PointerDirection, Placement> = {
    left: "right",
    "left-top": "right-start",
    "left-bottom": "right-end",
    right: "left",
    "right-top": "left-start",
    "right-bottom": "left-end",
    top: "bottom",
    "top-left": "bottom-start",
    "top-right": "bottom-end",
    bottom: "top",
    "bottom-left": "top-start",
    "bottom-right": "top-end",
};

export type FloatingTooltipHookArgs = {
    open?: boolean;
    hostRef?: React.RefObject<HTMLElement>;
    options?: FloatingTooltipHookOptions;
};

export type FloatingTooltipHookOptions = {
    offset?: number;
    pointer?: PointerDirection;
    placement?: Placement;
    noFlip?: boolean;
    noShift?: boolean;
    notInline?: boolean;
    strategy?: "fixed" | "absolute";
};

export type FloatingTooltipHookReturn = {
    overlayStyles: ReturnType<typeof useFloating>["floatingStyles"];
    arrowStyles: React.CSSProperties;
    refs: {
        host: ReturnType<typeof useFloating>["refs"]["reference"];
        overlay: ReturnType<typeof useFloating>["refs"]["floating"];
        arrow: React.RefObject<HTMLElement>;
        setHost: ReturnType<typeof useFloating>["refs"]["setReference"];
        setOverlay: ReturnType<typeof useFloating>["refs"]["setFloating"];
    };
};

export function useFloatingTooltip({ open, hostRef, options }: FloatingTooltipHookArgs): FloatingTooltipHookReturn {
    const arrowRef = useRef<HTMLElement>(null);
    const placement = options?.placement ?? POINTER_TO_PLACEMENT[options?.pointer ?? "bottom"];

    const middleware = [
        offset(options?.offset ?? 6),
        !options?.notInline && inline(),
        !options?.noFlip && flip({ fallbackAxisSideDirection: "end", flipAlignment: false }),
        !options?.noShift && shift(),
        arrow({ element: arrowRef, padding: 20 }),
    ].filter(Boolean);

    const {
        floatingStyles,
        refs,
        middlewareData,
        placement: finalPlacement,
    } = useFloating({
        placement,
        strategy: options?.strategy ?? "absolute",
        open,
        middleware,
        whileElementsMounted: autoUpdate,
        elements: {
            reference: hostRef?.current,
        },
    });

    const arrowStyles: React.CSSProperties = {};
    if (middlewareData.arrow) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow;
        const staticSide = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right",
        }[finalPlacement.split("-")[0]] as "top" | "right" | "bottom" | "left";

        arrowStyles.left = arrowX != null ? `${arrowX}px` : "";
        arrowStyles.top = arrowY != null ? `${arrowY}px` : "";
        arrowStyles.right = "";
        arrowStyles.bottom = "";
        arrowStyles[staticSide] = "-4px";
    }

    return {
        overlayStyles: floatingStyles,
        arrowStyles,
        refs: {
            host: refs.reference,
            overlay: refs.floating,
            arrow: arrowRef,
            setHost: refs.setReference,
            setOverlay: refs.setFloating,
        },
    };
}
