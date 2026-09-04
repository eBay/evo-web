import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function getMediaQueryList() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return undefined;
  }

  return window.matchMedia(REDUCED_MOTION_QUERY);
}

function getSnapshot() {
  return getMediaQueryList()?.matches ?? false;
}

function subscribe(onStoreChange: () => void) {
  const mediaQueryList = getMediaQueryList();

  if (!mediaQueryList) {
    return () => {};
  }

  const listener = () => onStoreChange();

  if (mediaQueryList.addEventListener) {
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }

  mediaQueryList.addListener(listener);
  return () => mediaQueryList.removeListener(listener);
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
