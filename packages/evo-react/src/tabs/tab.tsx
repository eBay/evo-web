import classNames from "classnames";
import type { Ref, RefObject } from "react";
import { useRefTee } from "../utils/use-ref-tee";
import { useRovingTabIndexItem } from "../utils/use-roving-tab-index";
import {
  getTabId,
  getTabPanelId,
  useTabListContext,
  useTabsContext,
} from "./context";
import type { EvoTabProps, TabId } from "./types";

export function EvoTab<Id extends TabId>({
  id,
  disabled = false,
  className,
  children,
  onClick,
  onFocus,
  onKeyDown,
  onMouseDown,
  ref,
  ...rest
}: EvoTabProps<Id>) {
  const { tabsId, selected, activation, select } = useTabsContext();
  const { rovingTabIndex } = useTabListContext();
  const [tabRef, internalTabRef] = useRefTee<HTMLDivElement | null>(
    ref as Ref<HTMLDivElement | null>,
    null,
  );
  const { tabIndex: rovingTabIndexValue, onFocus: onRovingFocus } =
    useRovingTabIndexItem({
      rovingTabIndex,
      item: {
        key: id,
        ref: internalTabRef as RefObject<HTMLElement | null>,
        disabled,
      },
    });
  const isSelected = Object.is(selected, id);
  const tabIndex =
    rovingTabIndex.focusedKey === null && isSelected && !disabled
      ? 0
      : rovingTabIndexValue;

  return (
    <div
      {...rest}
      ref={tabRef}
      id={getTabId(tabsId, id)}
      role="tab"
      aria-controls={getTabPanelId(tabsId, id)}
      aria-selected={isSelected}
      aria-disabled={disabled || undefined}
      tabIndex={tabIndex}
      className={classNames("tabs__item", className)}
      onMouseDown={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        onMouseDown?.(event);
      }}
      onFocus={(event) => {
        if (disabled) {
          return;
        }
        onRovingFocus(event);
        onFocus?.(event);
      }}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        onClick?.(event);
        if (!event.defaultPrevented) {
          rovingTabIndex.setFocusedKey(id);
          select(id);
        }
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (
          disabled ||
          event.defaultPrevented ||
          activation !== "manual" ||
          (event.key !== "Enter" && event.key !== " ")
        ) {
          return;
        }

        event.preventDefault();
        select(id);
      }}
    >
      <span>{children}</span>
    </div>
  );
}
