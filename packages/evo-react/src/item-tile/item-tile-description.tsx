import type { EvoItemTileDescriptionProps } from "./types";

/**
 * A detail line in the tertiary section. Render as a `p` by default or choose
 * another native element with `as`.
 *
 * @summary Item tile description line.
 */
export function EvoItemTileDescription({
  as: Component = "p",
  ...rest
}: EvoItemTileDescriptionProps) {
  return <Component {...rest} />;
}
