import classNames from "classnames";
import { useItemTile } from "./context";
import type { EvoItemTileTitleProps } from "./types";

/** Listing title link. Uses the tile's `href` unless overridden. @summary Item tile title. */
export function EvoItemTileTitle({
  children,
  className,
  href,
  ...rest
}: EvoItemTileTitleProps) {
  const tile = useItemTile();
  return (
    <a
      {...rest}
      href={href ?? tile?.href}
      className={classNames("item-tile__title", className)}
    >
      {children}
    </a>
  );
}
