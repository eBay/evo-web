import type { Ref, RefObject } from "react";
import classNames from "classnames";
import { FilterMenuItemsProvider, useFilterMenu } from "./context";
import type { EvoFilterMenuItemsProps } from "./types";
import { useRefTee } from "../utils/use-ref-tee";
import { useRovingTabIndex } from "../utils/use-roving-tab-index";
import { useTypeahead } from "../utils/use-typeahead";

/**
 * Region for `EvoFilterMenuItem` children. In menu mode it provides the menu
 * role, roving arrow-key navigation, and typeahead. Supply an accessible name
 * through `a11yText` or `a11yLabelId` on the parent menu.
 *
 * @summary Keyboard navigable filter choices.
 */
export function EvoFilterMenuItems({
  children,
  className,
  onKeyDown,
  onKeyDownCapture,
  ref,
  ...rest
}: EvoFilterMenuItemsProps) {
  const { isForm, baseClass, a11yText, a11yLabelId, itemsId } = useFilterMenu();
  const [rootRef, internalRef] = useRefTee<HTMLElement | null>(
    ref as Ref<HTMLElement | null>,
    null,
  );
  const rovingTabIndex = useRovingTabIndex<string>({
    containerRef: internalRef as RefObject<HTMLElement | null>,
    orientation: "vertical",
    shouldFocusWrap: true,
  });
  const { typeaheadProps } = useTypeahead({
    getItems: rovingTabIndex.getItems,
    focusedKey: rovingTabIndex.focusedKey,
    onMatch: rovingTabIndex.focusKey,
  });
  return (
    <FilterMenuItemsProvider rovingTabIndex={rovingTabIndex}>
      <div
        {...rest}
        id={itemsId}
        ref={rootRef}
        role={isForm ? undefined : "menu"}
        aria-label={a11yText}
        aria-labelledby={a11yLabelId}
        tabIndex={isForm ? undefined : -1}
        className={classNames(`${baseClass}__items`, className)}
        onKeyDownCapture={(event) => {
          onKeyDownCapture?.(event);
          if (!isForm && !event.defaultPrevented) {
            typeaheadProps.onKeyDownCapture(event);
          }
        }}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (isForm || event.defaultPrevented) {
            return;
          }
          typeaheadProps.onKeyDown(event);
          if (!event.defaultPrevented) {
            rovingTabIndex.onKeyDown(event);
          }
        }}
      >
        {children}
      </div>
    </FilterMenuItemsProvider>
  );
}
