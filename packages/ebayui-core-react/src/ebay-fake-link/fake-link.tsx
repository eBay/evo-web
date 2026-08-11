import React, { ComponentProps, FC } from "react";
import { EbayKeyboardEventHandler } from "../events";
import classNames from "classnames";

export type EbayFakeLinkProps = ComponentProps<"button"> & {
    variant?: "inline" | "standalone";
    onEscape?: EbayKeyboardEventHandler<HTMLButtonElement>;
};

const EbayFakeLink: FC<EbayFakeLinkProps> = ({ variant, type, className, onKeyDown, onEscape, ...rest }) => {
    const handleKeyDown: EbayKeyboardEventHandler<HTMLButtonElement> = (event) => {
        onKeyDown?.(event);
        if (event.key === "Escape" || event.key === "Esc") {
            onEscape?.(event);
        }
    };

    return (
        <button
            {...rest}
            className={classNames("fake-link", variant === "standalone" && "standalone-link", className)}
            onKeyDown={handleKeyDown}
            type={type || "button"}
        />
    );
};

export default EbayFakeLink;
