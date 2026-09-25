import classNames from "classnames";
import type { EvoItemTileSupertitleProps } from "./types";

/** Short label placed before the listing title. @summary Item tile supertitle. */
export function EvoItemTileSupertitle({
  className,
  ...rest
}: EvoItemTileSupertitleProps) {
  return (
    <div
      {...rest}
      className={classNames("item-tile__section-primary", className)}
    />
  );
}
