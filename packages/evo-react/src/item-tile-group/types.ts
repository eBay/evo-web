import type { ComponentProps } from "react";
import type { EvoItemTileProps, ItemTileLayout } from "../item-tile/types";

/** Item tile data; action callbacks belong to each tile's named action slot. */
export type ItemTileGroupItem = EvoItemTileProps;

export type EvoItemTileGroupProps = Omit<ComponentProps<"div">, "children"> & {
  /** Tile data rendered in order, each inside an `<li>`. */
  items: readonly ItemTileGroupItem[];
  /** Shared gallery or list layout; defaults to `"gallery"`. */
  layout?: ItemTileLayout;
};
