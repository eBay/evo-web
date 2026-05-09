import { useCallback, useRef } from "react";
import type { Ref } from "react";

export function useComposedRef<T>(...refs: (Ref<T> | undefined)[]) {
  const internalRef = useRef<T>(null);

  const composedRef = useCallback(
    (node: T | null) => {
      internalRef.current = node;
      for (const ref of refs) {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );

  return [composedRef, internalRef] as const;
}
