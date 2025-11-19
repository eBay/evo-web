import React, { ComponentProps, FC, RefObject, ReactNode, ReactElement } from "react";
import classNames from "classnames/dedupe";
import { EbayIcon, Icon } from "../ebay-icon";
import { withForwardRef } from "../common/component-utils/forwardRef";
import { Variant } from "./types";

export type InfotipHostProps = Omit<ComponentProps<"button">, "children"> & {
    icon?: Icon | ReactElement;
    forwardedRef?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
    variant?: Variant;
    children?: (({ icon }) => ReactNode) | ReactNode;
};

const EbayInfotipHost: FC<InfotipHostProps> = ({ icon, className, children, forwardedRef, variant, ...rest }) => {
    const classPrefix = variant === "modal" ? "dialog--mini" : "infotip";
    const buttonIcon = typeof icon === "string" ? <EbayIcon name={icon} /> : icon;
    const buttonContent = children instanceof Function ? children({ icon: buttonIcon }) : children;

    return (
        <button
            {...rest}
            className={classNames("icon-btn icon-btn--transparent", className, `${classPrefix}__host`)}
            type="button"
            ref={forwardedRef}
        >
            {buttonContent || buttonIcon || null}
        </button>
    );
};

export default withForwardRef(EbayInfotipHost);
