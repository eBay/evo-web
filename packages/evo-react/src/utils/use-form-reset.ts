import { useEffect, useRef } from "react";
import type { RefObject } from "react";

type FormControl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export function useFormReset<Value>(
  ref: RefObject<HTMLElement | null | undefined>,
  defaultValue: Value,
  setValue: (value: Value) => void,
) {
  const pendingResets = useRef(new Set<ReturnType<typeof setTimeout>>());
  useEffect(() => {
    const timers = pendingResets.current;
    return () => {
      timers.forEach(clearTimeout);
      timers.clear();
    };
  }, []);

  useEffect(() => {
    const element = ref.current;
    const control =
      element && "form" in element
        ? (element as FormControl)
        : element?.querySelector<FormControl>("input, textarea, select");
    const form = control?.form;
    if (!form) return;

    const handleReset = (event: Event) => {
      // React's delegated reset handlers must finish before checking cancellation.
      const timer = setTimeout(() => {
        pendingResets.current.delete(timer);
        if (!event.defaultPrevented) setValue(defaultValue);
      }, 0);
      pendingResets.current.add(timer);
    };

    form.addEventListener("reset", handleReset);
    return () => {
      form.removeEventListener("reset", handleReset);
    };
  });
}
