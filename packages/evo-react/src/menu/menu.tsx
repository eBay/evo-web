import classNames from "classnames";
import { MenuProvider } from "./context";
import type { EvoMenuProps } from "./types";
import "@ebay/skin/menu.mjs";

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
