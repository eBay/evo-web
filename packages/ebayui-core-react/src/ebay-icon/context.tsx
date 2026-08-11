import React, { createContext, type ReactNode, useRef } from "react";

export const IconContext = createContext<Set<string>>(null);

export const ROOT_ID = "ebayui-svg-symbols";
export const EbayIconProvider = ({ children }: { children: ReactNode }) => {
    // Use ref to maintain the same Set instance across re-renders
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
};
