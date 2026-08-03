import { useCallback, useEffect, useMemo, useRef } from "react";
import type { KeyboardEventHandler } from "react";
import type { RovingTabIndexItem } from "./use-roving-tab-index";

const DEFAULT_TIMEOUT_LENGTH = 2000;

type UseTypeaheadOptions<Key> = {
  getItems: () => readonly RovingTabIndexItem<Key>[];
  focusedKey: Key | null;
  onMatch: (key: Key) => void;
  timeoutLength?: number;
};

type TypeaheadProps = {
  onKeyDownCapture: KeyboardEventHandler<HTMLElement>;
  onKeyDown: KeyboardEventHandler<HTMLElement>;
};

function getSearchCharacter(key: string) {
  return key.length === 1 || !/^[A-Z]/i.test(key) ? key : "";
}

export function useTypeahead<Key>({
  getItems,
  focusedKey,
  onMatch,
  timeoutLength = DEFAULT_TIMEOUT_LENGTH,
}: UseTypeaheadOptions<Key>): { typeaheadProps: TypeaheadProps } {
  const searchRef = useRef("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const collator = useMemo(
    () =>
      new Intl.Collator(undefined, { usage: "search", sensitivity: "base" }),
    [],
  );

  const clearSearch = useCallback(() => {
    searchRef.current = "";
    clearTimeout(timeoutRef.current);
    timeoutRef.current = undefined;
  }, []);

  const scheduleClear = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(clearSearch, timeoutLength);
  }, [clearSearch, timeoutLength]);

  const findMatch = useCallback(
    (search: string) => {
      const items = getItems().filter(
        ({ disabled, ref }) => !disabled && ref.current,
      );
      if (items.length === 0) {
        return undefined;
      }

      const focusedIndex = items.findIndex(({ key }) => key === focusedKey);
      const searchOrder =
        focusedIndex === -1
          ? items
          : [
              ...items.slice(focusedIndex + 1),
              ...items.slice(0, focusedIndex + 1),
            ];

      return searchOrder.find(({ ref, textValue }) => {
        const itemText = (textValue ?? ref.current?.textContent ?? "").trim();
        return (
          itemText.length > 0 &&
          collator.compare(itemText.slice(0, search.length), search) === 0
        );
      });
    },
    [collator, focusedKey, getItems],
  );

  const search = useCallback(
    (character: string) => {
      searchRef.current += character;
      const match = findMatch(searchRef.current);

      if (!match) {
        clearSearch();
        return false;
      }

      onMatch(match.key);
      scheduleClear();
      return true;
    },
    [clearSearch, findMatch, onMatch, scheduleClear],
  );

  const onKeyDownCapture = useCallback<KeyboardEventHandler<HTMLElement>>(
    (event) => {
      if (
        searchRef.current.length === 0 ||
        event.key !== " " ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      search(" ");
    },
    [search],
  );

  const onKeyDown = useCallback<KeyboardEventHandler<HTMLElement>>(
    (event) => {
      const character = getSearchCharacter(event.key);
      if (
        !character ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        (searchRef.current.length === 0 && character === " ")
      ) {
        return;
      }

      if (search(character)) {
        event.preventDefault();
      }
    },
    [search],
  );

  useEffect(() => clearSearch, [clearSearch]);

  return {
    typeaheadProps: {
      onKeyDownCapture,
      onKeyDown,
    },
  };
}
