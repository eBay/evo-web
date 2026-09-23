import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
import type { Size, Alignment } from "./types";

export type DetailsContextValue = {
  size?: Size;
  alignment?: Alignment;
};

export const DetailsContext = createContext<DetailsContextValue>({});

export function useDetailsContext() {
  return use(DetailsContext);
}

type DetailsProviderProps = DetailsContextValue & {
  children: ReactNode;
};

export function DetailsProvider({
  size,
  alignment,
  children,
}: DetailsProviderProps) {
  const value = useMemo(() => ({ size, alignment }), [size, alignment]);
  return <DetailsContext value={value}>{children}</DetailsContext>;
}
