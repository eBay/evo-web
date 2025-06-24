import React, { FC, Ref, SVGProps, useEffect, useState } from "react";
import classNames from "classnames";
import { withForwardRef } from "../common/component-utils";
import { randomId } from "../common/random-id";
import { Icon } from "./types";
import type { Icon as FlagIcon } from "../ebay-flag";

export type A11yVariant = "label";

export type EbayIconProps = SVGProps<SVGSVGElement> & {
    className?: string;
    name: Icon | FlagIcon;
    noSkinClasses?: boolean;
    a11yText?: string;
    a11yVariant?: A11yVariant;
    forwardedRef?: Ref<SVGSVGElement>;
    /**
     * These properties are used by EbayImagePlaceholder and for flags.
     * NOTE: The flag "@deprecated" is only to not show this property in the autocomplete list on the top
     * @deprecated
     */
    __type?: "icon" | "flag" | "none";
};

const EbayIcon: FC<EbayIconProps> = ({
    name,
    className: extraClass,
    noSkinClasses = false,
    a11yText,
    a11yVariant,
    forwardedRef,
    __type = "icon",
    ...rest
}) => {
    const [rId, setRandomId] = useState("");

    useEffect(() => {
        setRandomId(randomId());
    }, []);

    const withAriaLabel = a11yVariant === "label";
    const a11yTextId = a11yText && `icon-title-${rId}`;
    const a11yProps = a11yText
        ? {
              "aria-labelledby": withAriaLabel ? undefined : a11yTextId,
              "aria-label": withAriaLabel ? a11yText : undefined,
              role: "img",
          }
        : {
              "aria-hidden": true,
          };
    const kebabName = kebabCased(name);
    const size = getIconSize(kebabName) || kebabName;

    const classNamePrefix = __type === "flag" ? "flag" : "icon";
    const skinClassName = [`${classNamePrefix}`, `${classNamePrefix}--${size}`, getFilledIconName(kebabName)]
        .filter(Boolean)
        .join(" ");
    const className = classNames(extraClass, { [skinClassName]: !noSkinClasses });

    const iconPrefix = ["icon", "flag"].includes(__type) ? `${__type}-` : "";

    return (
        <svg
            {...rest}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            focusable={false}
            ref={forwardedRef}
            {...a11yProps}
        >
            {a11yText && !withAriaLabel && <title id={a11yTextId}>{a11yText}</title>}
            <use xlinkHref={`#${iconPrefix}${kebabName}`} />
        </svg>
    );
};

// This function extract the size of the icon name.
// The icon can have these name structures:
// - icon-name-24
// - icon-name-24-colored
// - icon-name-filled-24
// - icon-name-filled-24-colored
// - icon-name
function getIconSize(iconName: string) {
    const iconNameArray = iconName.split("-");
    const size = iconNameArray[iconNameArray.length - 1];

    if (size === "colored") {
        return iconNameArray[iconNameArray.length - 2];
    }

    if (isNaN(Number(size))) {
        return "";
    }

    return size;
}

function getFilledIconName(iconName: string) {
    const iconNameArray = iconName.split("-");
    const filledIndex = iconNameArray.indexOf("filled");

    if (filledIndex === -1) {
        return "";
    }

    return `icon--${iconNameArray.slice(0, filledIndex + 1).join("-")}`;
}

export function kebabCased(str: string): string {
    return str.replace(/([0-9]+)/g, (s, n) => `-${n}`).replace(/([A-Z])/g, (s, c) => `-${c.toLowerCase()}`);
}

export default withForwardRef(EbayIcon);
