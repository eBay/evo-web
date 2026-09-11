import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { RefObject } from "react";

export type ActiveDescendantItem<Key, Data> = {
  key: Key;
  id: string;
  ref: RefObject<HTMLElement | null>;
  data: Data;
};

export type ActiveDescendant<Key, Data> = {
  activeKey: Key | null;
  registerItem: (item: ActiveDescendantItem<Key, Data>) => () => void;
  getActiveItem: () => ActiveDescendantItem<Key, Data> | undefined;
  activateNext: () => ActiveDescendantItem<Key, Data> | undefined;
  activatePrevious: () => ActiveDescendantItem<Key, Data> | undefined;
  reset: () => void;
};

type UseActiveDescendantOptions = {
  containerRef: RefObject<HTMLElement | null>;
  shouldWrap?: boolean;
  scrollIntoView?: ScrollIntoViewOptions;
};

type UseActiveDescendantItemOptions<Key, Data> = {
  activeDescendant: ActiveDescendant<Key, Data>;
  item: ActiveDescendantItem<Key, Data>;
  enabled?: boolean;
};

function compareDomOrder<Key, Data>(
  first: ActiveDescendantItem<Key, Data>,
  second: ActiveDescendantItem<Key, Data>,
) {
  const firstElement = first.ref.current;
  const secondElement = second.ref.current;

  if (!firstElement || !secondElement || firstElement === secondElement) {
    return 0;
  }

  return firstElement.compareDocumentPosition(secondElement) &
    Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : 1;
}

export function useActiveDescendant<Key, Data>({
  containerRef,
  scrollIntoView,
  shouldWrap = true,
}: UseActiveDescendantOptions): ActiveDescendant<Key, Data> {
  const itemsRef = useRef(new Map<Key, ActiveDescendantItem<Key, Data>>());
  const [activeKey, setActiveKeyState] = useState<Key | null>(null);
  const activeKeyRef = useRef<Key | null>(null);
  activeKeyRef.current = activeKey;

  const getItems = useCallback(() => {
    const container = containerRef.current;

    return [...itemsRef.current.values()]
      .filter(({ ref }) => {
        const element = ref.current;
        return Boolean(element && container?.contains(element));
      })
      .sort(compareDomOrder);
  }, [containerRef]);

  const getActiveItem = useCallback(() => {
    const key = activeKeyRef.current;
    if (key === null) {
      return undefined;
    }

    return getItems().find((item) => item.key === key);
  }, [getItems]);

  const activateKey = useCallback(
    (key: Key | null) => {
      if (key === null) {
        activeKeyRef.current = null;
        setActiveKeyState(null);
        return;
      }

      const item = itemsRef.current.get(key);
      if (!item || !item.ref.current) {
        return;
      }

      activeKeyRef.current = key;
      setActiveKeyState(key);
      if (scrollIntoView) {
        item.ref.current.scrollIntoView?.(scrollIntoView);
      }
    },
    [scrollIntoView],
  );

  const reset = useCallback(() => {
    activateKey(null);
  }, [activateKey]);

  const registerItem = useCallback(
    (item: ActiveDescendantItem<Key, Data>) => {
      const key = item.key;
      itemsRef.current.set(key, item);

      return () => {
        if (itemsRef.current.get(key) !== item) {
          return;
        }

        itemsRef.current.delete(key);
        if (activeKeyRef.current === key) {
          activateKey(null);
        }
      };
    },
    [activateKey],
  );

  const move = useCallback(
    (direction: 1 | -1) => {
      const items = getItems();
      if (items.length === 0) {
        return undefined;
      }

      const currentIndex = items.findIndex(
        ({ key }) => key === activeKeyRef.current,
      );
      let nextIndex: number | null;

      if (currentIndex === -1) {
        nextIndex = direction === 1 ? 0 : items.length - 1;
      } else {
        const rawIndex = currentIndex + direction;
        if (rawIndex < 0 || rawIndex >= items.length) {
          nextIndex = shouldWrap ? null : currentIndex;
        } else {
          nextIndex = rawIndex;
        }
      }

      if (nextIndex === null) {
        activateKey(null);
        return undefined;
      }

      const nextItem = items[nextIndex];
      activateKey(nextItem.key);
      return nextItem;
    },
    [activateKey, getItems, shouldWrap],
  );

  const activateNext = useCallback(() => move(1), [move]);
  const activatePrevious = useCallback(() => move(-1), [move]);

  return useMemo(
    () => ({
      activeKey,
      registerItem,
      getActiveItem,
      activateNext,
      activatePrevious,
      reset,
    }),
    [
      activeKey,
      activateNext,
      activatePrevious,
      getActiveItem,
      registerItem,
      reset,
    ],
  );
}

export function useActiveDescendantItem<Key, Data>({
  activeDescendant,
  item,
  enabled = true,
}: UseActiveDescendantItemOptions<Key, Data>): { isActive: boolean } {
  const itemRef = useRef(item);
  itemRef.current.key = item.key;
  itemRef.current.id = item.id;
  itemRef.current.ref = item.ref;
  itemRef.current.data = item.data;

  useLayoutEffect(() => {
    if (!enabled) {
      return;
    }

    return activeDescendant.registerItem(itemRef.current);
  }, [activeDescendant.registerItem, enabled]);

  return {
    isActive: enabled && activeDescendant.activeKey === item.key,
  };
}
