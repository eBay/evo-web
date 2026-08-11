import classNames from "classnames";
import { useLayoutEffect } from "react";
import type { Ref, RefObject } from "react";
import { useRefTee } from "../utils/use-ref-tee";
import { useRovingTabIndex } from "../utils/use-roving-tab-index";
import { TabListProvider, useTabsContext } from "./context";
import type { EvoTabListProps, TabId } from "./types";

export function EvoTabList({
  className,
  children,
  onKeyDown,
  ref,
  ...rest
}: EvoTabListProps) {
  const { selected, activation, select } = useTabsContext();
  const [tabListRef, internalTabListRef] = useRefTee<HTMLDivElement | null>(
    ref as Ref<HTMLDivElement | null>,
    null,
  );
  const rovingTabIndex = useRovingTabIndex<TabId>({
    containerRef: internalTabListRef as RefObject<HTMLElement | null>,
    orientation: "horizontal",
    shouldFocusWrap: true,
  });

  useLayoutEffect(() => {
    rovingTabIndex.setFocusedKey(selected);
  }, [rovingTabIndex.setFocusedKey, selected]);

  return (
    <TabListProvider rovingTabIndex={rovingTabIndex}>
      <div
        {...rest}
        ref={tabListRef}
        role="tablist"
        tabIndex={-1}
        className={classNames("tabs__items", className)}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (event.defaultPrevented) {
            return;
          }

          rovingTabIndex.onKeyDown(event);
          // The consumer check above happens before roving navigation. The
          // roving handler prevents the event only when it moves focus, so we
          // check defaultPrevented again to determine whether to auto-select.
          if (event.defaultPrevented && activation === "auto") {
            const focusedTab = rovingTabIndex
              .getItems()
              .find((item) => item.ref.current === document.activeElement);
            if (focusedTab) {
              select(focusedTab.key);
            }
          }
        }}
      >
        {children}
      </div>
    </TabListProvider>
  );
}
