import { useCallback, useLayoutEffect, useRef, useState } from "react";
import type {
  FocusEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  RefObject,
} from "react";

export type RovingTabIndexItem<Key> = {
  key: Key;
  ref: RefObject<HTMLElement | null>;
  disabled: boolean;
  textValue?: string;
};

export type RovingTabIndex<Key> = {
  focusedKey: Key | null;
  registerItem: (item: RovingTabIndexItem<Key>) => () => void;
  refreshItem: (key: Key) => void;
  getItems: () => readonly RovingTabIndexItem<Key>[];
  focusKey: (key: Key) => void;
  setFocusedKey: (key: Key) => void;
  onKeyDown: KeyboardEventHandler<HTMLElement>;
};

type UseRovingTabIndexOptions = {
  containerRef: RefObject<HTMLElement | null>;
  orientation?: "vertical" | "horizontal" | "both";
  shouldFocusWrap?: boolean;
  initialFocus?: "first" | "last";
};

type UseRovingTabIndexItemOptions<Key> = {
  rovingTabIndex: RovingTabIndex<Key>;
  item: RovingTabIndexItem<Key>;
};

function compareDomOrder<Key>(
  first: RovingTabIndexItem<Key>,
  second: RovingTabIndexItem<Key>,
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

export function useRovingTabIndex<Key>({
  containerRef,
  orientation = "vertical",
  shouldFocusWrap = false,
  initialFocus = "first",
}: UseRovingTabIndexOptions): RovingTabIndex<Key> {
  const itemsRef = useRef(new Map<Key, RovingTabIndexItem<Key>>());
  const didInitializeRef = useRef(false);
  const [focusedKey, setFocusedKeyState] = useState<Key | null>(null);
  const focusedKeyRef = useRef<Key | null>(null);
  focusedKeyRef.current = focusedKey;

  const getItems = useCallback(() => {
    const container = containerRef.current;

    return [...itemsRef.current.values()]
      .filter(({ ref }) => {
        const element = ref.current;
        return Boolean(element && container?.contains(element));
      })
      .sort(compareDomOrder);
  }, [containerRef]);

  const getEnabledItems = useCallback(
    () => getItems().filter(({ disabled }) => !disabled),
    [getItems],
  );

  const setFocusedKey = useCallback((key: Key) => {
    const item = itemsRef.current.get(key);
    if (!item || item.disabled || !item.ref.current) {
      return;
    }

    focusedKeyRef.current = key;
    setFocusedKeyState(key);
  }, []);

  const focusKey = useCallback(
    (key: Key) => {
      const item = itemsRef.current.get(key);
      if (!item || item.disabled || !item.ref.current) {
        return;
      }

      setFocusedKey(key);
      item.ref.current.focus();
    },
    [setFocusedKey],
  );

  const findFallbackKey = useCallback(
    (excludedKey?: Key) => {
      const enabledItems = getEnabledItems().filter(
        ({ key }) => key !== excludedKey,
      );
      const fallbackItem =
        initialFocus === "last"
          ? enabledItems[enabledItems.length - 1]
          : enabledItems[0];
      return fallbackItem?.key ?? null;
    },
    [getEnabledItems, initialFocus],
  );

  const registerItem = useCallback(
    (item: RovingTabIndexItem<Key>) => {
      itemsRef.current.set(item.key, item);

      if (focusedKeyRef.current === null && !item.disabled) {
        setFocusedKey(item.key);
      }

      return () => {
        if (itemsRef.current.get(item.key) !== item) {
          return;
        }

        itemsRef.current.delete(item.key);
        if (focusedKeyRef.current === item.key) {
          const fallbackKey = findFallbackKey(item.key);
          focusedKeyRef.current = fallbackKey;
          setFocusedKeyState(fallbackKey);
        }
      };
    },
    [findFallbackKey, setFocusedKey],
  );

  const refreshItem = useCallback(
    (key: Key) => {
      const item = itemsRef.current.get(key);
      if (!item || !item.disabled || focusedKeyRef.current !== key) {
        return;
      }

      const fallbackKey = findFallbackKey(key);
      focusedKeyRef.current = fallbackKey;
      setFocusedKeyState(fallbackKey);
    },
    [findFallbackKey],
  );

  useLayoutEffect(() => {
    if (didInitializeRef.current) {
      return;
    }

    const enabledItems = getEnabledItems();
    const initialItem =
      initialFocus === "last"
        ? enabledItems[enabledItems.length - 1]
        : enabledItems[0];
    if (initialItem) {
      setFocusedKey(initialItem.key);
      didInitializeRef.current = true;
    }
  }, [getEnabledItems, initialFocus, setFocusedKey]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.defaultPrevented) {
        return;
      }

      const enabledItems = getEnabledItems();
      if (enabledItems.length === 0) {
        return;
      }

      const currentIndex = enabledItems.findIndex(
        ({ key }) => key === focusedKeyRef.current,
      );
      let nextIndex: number | undefined;

      if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = enabledItems.length - 1;
      } else {
        const previousKeys =
          orientation === "both"
            ? ["ArrowUp", "ArrowLeft"]
            : [orientation === "vertical" ? "ArrowUp" : "ArrowLeft"];
        const nextKeys =
          orientation === "both"
            ? ["ArrowDown", "ArrowRight"]
            : [orientation === "vertical" ? "ArrowDown" : "ArrowRight"];
        const direction = previousKeys.includes(event.key)
          ? -1
          : nextKeys.includes(event.key)
            ? 1
            : 0;

        if (direction === 0) {
          return;
        }

        if (currentIndex === -1) {
          nextIndex = direction === 1 ? 0 : enabledItems.length - 1;
        } else {
          nextIndex = currentIndex + direction;
          if (shouldFocusWrap) {
            nextIndex = (nextIndex + enabledItems.length) % enabledItems.length;
          } else {
            nextIndex = Math.min(
              Math.max(nextIndex, 0),
              enabledItems.length - 1,
            );
          }
        }
      }

      const nextItem = enabledItems[nextIndex];
      if (nextItem) {
        event.preventDefault();
        focusKey(nextItem.key);
      }
    },
    [focusKey, getEnabledItems, orientation, shouldFocusWrap],
  );

  return {
    focusedKey,
    registerItem,
    refreshItem,
    getItems,
    focusKey,
    setFocusedKey,
    onKeyDown,
  };
}

export function useRovingTabIndexItem<Key>({
  rovingTabIndex,
  item,
}: UseRovingTabIndexItemOptions<Key>): {
  isFocused: boolean;
  tabIndex: 0 | -1;
  onFocus: FocusEventHandler<HTMLElement>;
} {
  const itemRef = useRef(item);
  itemRef.current.key = item.key;
  itemRef.current.ref = item.ref;
  itemRef.current.disabled = item.disabled;
  itemRef.current.textValue = item.textValue;

  useLayoutEffect(
    () => rovingTabIndex.registerItem(itemRef.current),
    [rovingTabIndex.registerItem],
  );

  useLayoutEffect(() => {
    rovingTabIndex.refreshItem(item.key);
  }, [item.disabled, item.key, rovingTabIndex]);

  const isFocused = !item.disabled && rovingTabIndex.focusedKey === item.key;

  return {
    isFocused,
    tabIndex: isFocused ? 0 : -1,
    onFocus: () => rovingTabIndex.setFocusedKey(item.key),
  };
}
