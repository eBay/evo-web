import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

export type InfotipContextValue = {
  headingId: string;
  setHeadingId: (id: string) => void;
};

const InfotipContext = createContext<InfotipContextValue | null>(null);

export function useInfotipContext() {
  const value = use(InfotipContext);

  if (!value) {
    throw new Error(
      "EvoInfotip sub-components must be used within an EvoInfotip component",
    );
  }

  return value;
}

type InfotipProviderProps = InfotipContextValue & {
  children: ReactNode;
};

export function InfotipProvider({
  headingId,
  setHeadingId,
  children,
}: InfotipProviderProps) {
  const value = useMemo(
    () => ({ headingId, setHeadingId }),
    [headingId, setHeadingId],
  );

  return <InfotipContext value={value}>{children}</InfotipContext>;
}
