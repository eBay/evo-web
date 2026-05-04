import { createContext, useContext } from "react";
import type { Size, Alignment } from "./types";

export type DetailsContextValue = {
  size?: Size;
  alignment?: Alignment;
};

export const DetailsContext = createContext<DetailsContextValue>({});

export function useDetailsContext() {
  return useContext(DetailsContext);
}
