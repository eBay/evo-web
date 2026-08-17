import classNames from "classnames";
import { FakeMenuProvider } from "./context";
import type { EvoFakeMenuProps } from "./types";
import "@ebay/skin/menu.mjs";

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
