import classNames from "classnames";
import type { Ref, RefObject } from "react";
import { MenuItemsProvider, useMenuContext } from "./context";
import type { EvoMenuItemsProps } from "./types";
import { useRefTee } from "../utils/use-ref-tee";
import { useRovingTabIndex } from "../utils/use-roving-tab-index";
import { useTypeahead } from "../utils/use-typeahead";

export function EvoMenuItems({
  a11yText,
  a11yLabelId,
  className,
  children,
  onKeyDown,
  onKeyDownCapture,
  ref,
  ...rest
}: EvoMenuItemsProps) {
  const {
    baseClass,
    classPrefix,
    reverse,
    fixed,
    fixWidth,
    typeaheadTimeoutLength,
  } = useMenuContext();
  const [rootRef, internalRootRef] = useRefTee<HTMLElement | null>(
    ref as Ref<HTMLElement | null>,
    null,
  );
  const rovingTabIndex = useRovingTabIndex<string>({
    containerRef: internalRootRef as RefObject<HTMLElement | null>,
    orientation: "both",
    shouldFocusWrap: true,
  });
  const { typeaheadProps } = useTypeahead({
    getItems: rovingTabIndex.getItems,
    focusedKey: rovingTabIndex.focusedKey,
    onMatch: rovingTabIndex.focusKey,
    timeoutLength: typeaheadTimeoutLength,
  });

  return (
    <MenuItemsProvider rovingTabIndex={rovingTabIndex}>
      <div
        {...rest}
        ref={rootRef}
        aria-label={a11yText}
        aria-labelledby={a11yLabelId}
        role="menu"
        tabIndex={-1}
        className={classNames(
          `${baseClass}__items`,
          !classPrefix && reverse && `${baseClass}__items--reverse`,
          !classPrefix && fixed && `${baseClass}__items--fixed`,
          !classPrefix && fixWidth && `${baseClass}__items--fix-width`,
          className,
        )}
        onKeyDownCapture={(event) => {
          onKeyDownCapture?.(event);
          if (!event.defaultPrevented) {
            typeaheadProps.onKeyDownCapture(event);
          }
        }}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (event.defaultPrevented) {
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
    </MenuItemsProvider>
  );
}
