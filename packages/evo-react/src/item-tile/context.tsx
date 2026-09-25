import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

type ItemTileContextValue = { href?: string };
const ItemTileContext = createContext<ItemTileContextValue | null>(null);

export function useItemTile() {
  return use(ItemTileContext);
}

export function ItemTileProvider({
  children,
  href,
}: ItemTileContextValue & { children: ReactNode }) {
  const value = useMemo(() => ({ href }), [href]);
  return <ItemTileContext value={value}>{children}</ItemTileContext>;
}
