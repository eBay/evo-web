import classNames from "classnames";
import { EvoItemTile } from "../item-tile/item-tile";
import type { EvoItemTileGroupProps } from "./types";
import "@ebay/skin/layout-grid.mjs";
import "@ebay/skin/item-tile-group.mjs";

/**
 * Item tile groups render tile data in a semantic list. The group controls
 * grid/list styling while each item retains its own named content and action.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoItemTileGroup } from "@evo-web/react/item-tile-group";
 * import { EvoItemTileTitle } from "@evo-web/react/item-tile";
 *
 * <EvoItemTileGroup
 *   items={[{ href: "/listing", title: <EvoItemTileTitle>Phone</EvoItemTileTitle> }]}
 * />
 * ```
 *
 * @summary Responsive grid or list of item tiles.
 */
export function EvoItemTileGroup({
  className,
  items,
  layout = "gallery",
  ref,
  ...rest
}: EvoItemTileGroupProps) {
  return (
    <div
      {...rest}
      ref={ref}
      className={classNames(
        "layout-grid",
        "item-tile-group",
        layout === "list" && "item-tile-group--list-view",
        className,
      )}
    >
      <ul>
        {items.map((item, index) => (
          <li key={item.id ?? index}>
            <EvoItemTile {...item} layout={layout} />
          </li>
        ))}
      </ul>
    </div>
  );
}
