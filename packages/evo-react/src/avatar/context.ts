import { createContext, useContext } from "react";

export type AvatarContextValue = {
  setImagePlacement: (value: "fit" | "cover") => void;
};

export const AvatarContext = createContext<AvatarContextValue | null>(null);

export function useAvatarContext() {
  return useContext(AvatarContext);
}
