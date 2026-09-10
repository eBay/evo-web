import { createContext, useRef, type ReactNode } from "react";

export const IconContext = createContext<Set<string> | null>(null);

export const ROOT_ID = "evo-web-svg-symbols";

/**
 * `EvoIconProvider` shares SVG symbols across descendant icons to avoid duplicate
 * markup. Icons still work without it, but each icon may include its own symbol
 * definition.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoIconProvider } from "@evo-web/react/icon";
 * import { EvoIconCart16 } from "@evo-web/react/icons/cart-16";
 *
 * <EvoIconProvider>
 *   <EvoIconCart16 a11yText="Shopping cart" />
 * </EvoIconProvider>
 * ```
 *
 * @summary Shared SVG symbol provider.
 */
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
