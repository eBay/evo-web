import { createContext } from "react";

export const AvatarContext = createContext<{
    setImagePlacement: (value: "fit" | "cover") => void;
} | null>(null);
