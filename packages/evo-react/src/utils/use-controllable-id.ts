// useControllableId uses an external store (useSyncExternalStore) instead of useState
// so that consumers can safely call set() during render without triggering React's
// "cannot update a parent while rendering a child" warning. Calling setState on a
// parent from a child's render phase is forbidden in React because it would force
// React to discard and restart the current render. With an external store, set() is
// a plain JS mutation outside React's state system — React only re-renders after the
// current cycle completes, via useSyncExternalStore's subscription. useSyncExternalStore
// also prevents tearing in concurrent mode by guaranteeing all components read the
// same snapshot of the store within a single render pass.
import { useId, useRef, useSyncExternalStore } from "react";

type Listener = () => void;

export type IdStore = {
  get: () => string;
  set: (id: string) => void;
  subscribe: (listener: Listener) => () => void;
};

function createIdStore(initialId: string): IdStore {
  let current = initialId;
  const listeners = new Set<Listener>();

  return {
    get: () => current,
    set: (id) => {
      if (id !== current) {
        current = id;
        listeners.forEach((l) => l());
      }
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export function useControllableId(initialId?: string) {
  const generatedId = useId();
  const storeRef = useRef(createIdStore(initialId ?? generatedId));
  const store = storeRef.current;
  const id = useSyncExternalStore(store.subscribe, store.get, store.get);
  return [id, store.set, store] as const;
}
