import { useCallback, useRef } from "react";
import type { Ref } from "react";

type RefTeeInput<T> = Ref<T> | readonly (Ref<T> | undefined)[];

export function useRefTee<T>(ref?: RefTeeInput<T>, initialValue?: T) {
  const internalRef = useRef<T | null>(initialValue ?? null);
  const refs: readonly (Ref<T> | undefined)[] = Array.isArray(ref)
    ? ref
    : [ref as Ref<T> | undefined];

  const teeRef = useCallback((node: T | null) => {
    internalRef.current = node;

    const cleanups = refs.map((currentRef) => {
      if (typeof currentRef === "function") {
        const cleanup = currentRef(node);
        return typeof cleanup === "function" ? cleanup : () => currentRef(null);
      } else if (currentRef) {
        currentRef.current = node;
        return () => {
          currentRef.current = null;
        };
      }
    });

    if (node !== null) {
      return () => {
        internalRef.current = null;
        cleanups.forEach((cleanup) => cleanup?.());
      };
    }
  }, refs);

  return [teeRef, internalRef] as const;
}
