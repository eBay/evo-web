import classNames from "classnames";
import { MenuProvider } from "./context";
import type { EvoMenuProps } from "./types";
import "@ebay/skin/menu.mjs";

/**
 * Menus present contextually related actions or choices in a temporary list.
 *
 * `EvoMenuItems` provides arrow-key and typeahead navigation. Ordinary items
 * perform commands, radio groups select one value, and checkbox groups select
 * multiple values. The items region needs an accessible name through
 * `a11yText` or `a11yLabelId`.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoMenu, EvoMenuItem, EvoMenuItems } from "@evo-web/react/menu";
 *
 * <EvoMenu>
 *   <EvoMenuItems a11yText="Account actions">
 *     <EvoMenuItem>View profile</EvoMenuItem>
 *   </EvoMenuItems>
 * </EvoMenu>
 * ```
 *
 * @summary Keyboard-navigable command menu.
 */
export function EvoMenu({
  variant = "none",
  classPrefix,
  reverse = false,
  fixed = false,
  fixWidth = false,
  typeaheadTimeoutLength,
  className,
  children,
  ...rest
}: EvoMenuProps) {
  const baseClass = classPrefix || "menu";

  return (
    <MenuProvider
      baseClass={baseClass}
      classPrefix={classPrefix}
      variant={variant}
      reverse={reverse}
      fixed={fixed}
      fixWidth={fixWidth}
      typeaheadTimeoutLength={typeaheadTimeoutLength}
    >
      <span
        {...rest}
        className={classNames(
          classPrefix ? `${baseClass}__menu` : "menu",
          variant === "filter" && `${baseClass}--filter`,
          classPrefix && reverse && `${baseClass}__menu--reverse`,
          classPrefix && fixed && `${baseClass}__menu--fixed`,
          classPrefix && fixWidth && `${baseClass}__menu--fix-width`,
          className,
        )}
      >
        {children}
      </span>
    </MenuProvider>
  );
}
