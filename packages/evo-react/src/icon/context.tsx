import { createContext, useRef, type ReactNode } from "react";

export const IconContext = createContext<Set<string> | null>(null);

export const ROOT_ID = "evo-web-svg-symbols";

export function EvoIconProvider({ children }: { children: ReactNode }) {
  const lookupRef = useRef<Set<string>>(new Set());

  return (
    <IconContext.Provider value={lookupRef.current}>
      <svg
        id={ROOT_ID}
        style={{ position: "absolute", height: "0px", width: "0px" }}
        focusable={false}
        aria-hidden="true"
      />
      {children}
    </IconContext.Provider>
  );
}
