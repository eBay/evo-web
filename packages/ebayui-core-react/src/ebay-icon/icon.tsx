import React, { FC, Ref, SVGProps, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import { withForwardRef } from "../common/component-utils";
import { randomId } from "../common/random-id";
import { Icon } from "./types";
import type { Icon as FlagIcon } from "../ebay-flag";
import { IconContext, ROOT_ID } from "./context";

export type A11yVariant = "label";

function createRoot(): SVGElement {
    const rootSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    rootSvg.id = ROOT_ID;
    // Apply "hidden styles" to the svg. We don't use display none because then the svg will not be rendered.
    rootSvg.style.position = "absolute";
    rootSvg.style.width = "0";
    rootSvg.style.height = "0";
    return rootSvg;
}

export type EbayIconProps = SVGProps<SVGSVGElement> & {
    className?: string;
    name: Icon | FlagIcon;
    noSkinClasses?: boolean;
    a11yText?: string;
    a11yVariant?: A11yVariant;
    forwardedRef?: Ref<SVGSVGElement>;
    prominent?: boolean;
    /**
     * These properties are used by EbayImagePlaceholder and for flags.
     * NOTE: The flag "@deprecated" is only to not show this property in the autocomplete list on the top
     * @deprecated
     */
    __type?: "icon" | "flag" | "none";
    /**
     * @deprecated
     */
    __symbol?: string;
};

const fallbackLookup = new Set<string>();

const EbayIcon: FC<EbayIconProps> = ({
    name,
    className: extraClass,
    noSkinClasses = false,
    a11yText,
    a11yVariant,
    forwardedRef,
    prominent,
    __type = "icon",
    __symbol,
    ...rest
}) => {
    const [rId, setRandomId] = useState("");

    useEffect(() => {
        setRandomId(randomId());
    }, []);

    const defRef = useRef<SVGDefsElement | null>(null);
    const [hideDefsElement, setHideDefsElement] = useState(false);

    let lookup = useContext(IconContext);
    if (!lookup) {
        lookup = fallbackLookup;

        // On the server, we clean up the fallback "Set" after the first microtask is completed.
        // This is to make sure that the next request received has an empty "lookup" Set.
        // On the browser this is not an issue since there is always one single instance per page.
        // Note that this approach doesn't work 100% correct for the new "use()" hook as we will
        // clear the lookup before icons that are rendered after the "use()" are discovered.
        if (typeof window === "undefined" && typeof setImmediate !== "undefined") {
            console.warn(
                `Icon "${name}" used without wrapping it in a <EbayIconProvider />, for better server performance make sure to wrap your application with <EbayIconProvider> component.`,
            );

            setImmediate(() => {
                fallbackLookup.clear();
            });
        }
    }

    let inlineSvg: string;
    if (!lookup?.has(name)) {
        if (typeof window === "undefined") {
            lookup?.add(name);
        }

        inlineSvg = __symbol || "";
    } else {
        inlineSvg = ``;
    }

    useLayoutEffect(() => {
        if (!__symbol) return;
        let rootSvg: SVGElement;
        if (document.getElementById(ROOT_ID)) {
            const element = document.getElementById(ROOT_ID);

            if (element instanceof SVGElement) {
                rootSvg = element;
            } else {
                console.warn(`Invalid "#${ROOT_ID}" element, creating a new one`);
                element?.parentNode?.removeChild(element);
                rootSvg = createRoot();
                document.body.insertBefore(rootSvg, document.body.lastChild);
            }
        } else {
            rootSvg = createRoot();
            document.body.insertBefore(rootSvg, document.body.lastChild);
        }

        if (defRef.current) {
            const defs = defRef.current;
            const symbol = defs.querySelector("symbol");
            if (symbol) {
                lookup?.add(name);
                rootSvg.appendChild(symbol);
            }

            setHideDefsElement(true);
        }
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
    const className = classNames(extraClass, {
        [skinClassName]: !noSkinClasses,
        [`${classNamePrefix}--prominent`]: prominent,
    });

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

            {!hideDefsElement ? (
                <defs ref={defRef} dangerouslySetInnerHTML={{ __html: inlineSvg }} suppressHydrationWarning />
            ) : null}
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
