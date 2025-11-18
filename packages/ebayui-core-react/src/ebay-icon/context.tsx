import React, { createContext, type ReactNode } from "react";

export const IconContext = createContext<Set<string>>(null);

export const ROOT_ID = "ebayui-svg-symbols";
export const EbayIconProvider = ({ children }: { children: ReactNode }) => (
    <IconContext.Provider value={new Set()}>
        <svg
            id={ROOT_ID}
            style={{ position: "absolute", height: "0px", width: "0px" }}
            focusable={false}
            aria-hidden="true"
        />
        {children}
    </IconContext.Provider>
);
