import { useCallback, useRef } from "react";
import type { Ref } from "react";

export function useRefTee<T>(ref: Ref<T> | undefined, initialValue: T): readonly [Ref<T>, React.RefObject<T>];
export function useRefTee<T>(ref: Ref<T | null> | undefined, initialValue?: null): readonly [Ref<T | null>, React.RefObject<T | null>];
export function useRefTee<T>(ref: Ref<T> | undefined, initialValue?: T) {
  const internalRef = useRef<T>(initialValue as T);

  const teeRef = useCallback(
    (node: T) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<T>).current = node;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref],
  );

  return [teeRef, internalRef] as const;
}
