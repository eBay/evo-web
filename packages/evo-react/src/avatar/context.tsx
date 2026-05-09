import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

export type AvatarContextValue = {
  setImagePlacement: (value: "fit" | "cover") => void;
};

export const AvatarContext = createContext<AvatarContextValue | null>(null);

export function useAvatarContext() {
  return use(AvatarContext);
}

type AvatarProviderProps = AvatarContextValue & {
  children: ReactNode;
};

export function AvatarProvider({
  setImagePlacement,
  children,
}: AvatarProviderProps) {
  const value = useMemo(
    () => ({ setImagePlacement }),
    [setImagePlacement],
  );
  return <AvatarContext value={value}>{children}</AvatarContext>;
}
