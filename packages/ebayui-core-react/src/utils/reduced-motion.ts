import { useSyncExternalStore } from "react";

export function useReducedMotion(): boolean {
    return useSyncExternalStore(
        () => () => {},
        () => isReducedMotion(),
        () => false,
    );
}

export function isReducedMotion(): boolean {
    return Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches);
}
