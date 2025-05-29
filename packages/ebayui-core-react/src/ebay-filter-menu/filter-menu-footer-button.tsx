import React, { ComponentProps, FC, ReactNode } from "react";
import { Variant } from "./types";
import classNames from "classnames";

export type EbayFilterMenuFooterButtonProps = Omit<ComponentProps<"button">, "type" | "children"> & {
    children: ReactNode;
    /**
     * These properties are used by EbayFilterMenu.
     * NOTE: The flag "@deprecated" is only to not show this property in the autocomplete list on the top
     * @deprecated
     */
    __classPrefix?: string;
    /** @deprecated */
    __variant?: Variant;
};

const EbayFilterMenuFooterButton: FC<EbayFilterMenuFooterButtonProps> = ({
    __classPrefix,
    __variant,
    className,
    onClick,
    ...rest
}) => {
    const isForm = __variant === "form";

    return (
        <button
            {...rest}
            type={isForm ? "submit" : "button"}
            className={classNames(className, `${__classPrefix}__footer`)}
            onClick={!isForm ? onClick : undefined}
        />
    );
};

export default EbayFilterMenuFooterButton;
