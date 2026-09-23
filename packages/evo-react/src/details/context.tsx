import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
import type { EvoDetailsProps, Size, Alignment } from "./types";

export type DetailsContextValue = {
  size?: Size;
  alignment?: Alignment;
  a11yHeadingTag?: EvoDetailsProps["a11yHeadingTag"];
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
  a11yHeadingTag,
  children,
}: DetailsProviderProps) {
  const value = useMemo(
    () => ({ size, alignment, a11yHeadingTag }),
    [size, alignment, a11yHeadingTag],
  );
  return <DetailsContext value={value}>{children}</DetailsContext>;
}
