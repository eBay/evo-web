import { useCallback, useRef } from "react";
import type { Ref } from "react";

export function useRefTee<T>(ref: Ref<T> | undefined, initialValue: T) {
  const internalRef = useRef<T>(initialValue);

  const teeRef = useCallback(
    (node: T) => {
      internalRef.current = node;

      if (ref) {
        if (typeof ref === "function") {
          ref(node);
        } else {
          ref.current = node;
        }
      }
    },
    [ref],
  );

  return [teeRef, internalRef] as const;
}
