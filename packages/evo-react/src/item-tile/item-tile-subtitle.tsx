import classNames from "classnames";
import type { EvoItemTileSubtitleProps } from "./types";

/** Supporting text below the title. @summary Item tile subtitle. */
export function EvoItemTileSubtitle({
  className,
  ...rest
}: EvoItemTileSubtitleProps) {
  return (
    <div {...rest} className={classNames("item-tile__subtitle", className)} />
  );
}
