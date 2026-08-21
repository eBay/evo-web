import { useCallback, useRef } from "react";
import type { Ref } from "react";

type RefTeeInput<T> = Ref<T> | readonly (Ref<T> | undefined)[];

export function useRefTee<T>(ref?: RefTeeInput<T>, initialValue?: T) {
  const internalRef = useRef(initialValue);
  const refs: readonly (Ref<T> | undefined)[] = Array.isArray(ref)
    ? ref
    : [ref as Ref<T> | undefined];

  const teeRef = useCallback((node: T) => {
    internalRef.current = node;

    refs.forEach((currentRef) => {
      if (typeof currentRef === "function") {
        currentRef(node);
      } else if (currentRef) {
        currentRef.current = node;
      }
    });
  }, refs);

  return [teeRef, internalRef] as const;
}
