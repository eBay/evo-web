import classNames from "classnames";
import { FakeMenuProvider } from "./context";
import type { EvoFakeMenuProps } from "./types";
import "@ebay/skin/menu.mjs";

/**
 * Fake menus display a compact list of links or buttons without the interactive
 * menu keyboard model.
 *
 * Use them for ordinary navigation or actions. `current` marks the current
 * destination, `as` adapts router links, and badges and separators are
 * optional.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoFakeMenu,
 *   EvoFakeMenuItem,
 *   EvoFakeMenuItems,
 * } from "@evo-web/react/fake-menu";
 *
 * <EvoFakeMenu>
 *   <EvoFakeMenuItems>
 *     <EvoFakeMenuItem href="/account">Account</EvoFakeMenuItem>
 *   </EvoFakeMenuItems>
 * </EvoFakeMenu>
 * ```
 *
 * @summary URL-oriented menu container.
 */
export function EvoFakeMenu({
  classPrefix,
  reverse = false,
  fixed = false,
  fixWidth = false,
  className,
  children,
  ...rest
}: EvoFakeMenuProps) {
  const baseClass = classPrefix || "fake-menu";

  return (
    <FakeMenuProvider baseClass={baseClass}>
      <span
        {...rest}
        className={classNames(
          classPrefix ? `${baseClass}__menu` : "fake-menu",
          reverse && `${baseClass}__menu--reverse`,
          fixed && `${baseClass}__menu--fixed`,
          fixWidth && `${baseClass}__menu--fix-width`,
          className,
        )}
      >
        {children}
      </span>
    </FakeMenuProvider>
  );
}
