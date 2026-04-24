import { SVGProps, use, useId, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import { IconContext, ROOT_ID } from "./context";
import "@ebay/skin/icon.mjs";

export type A11yVariant = "label";

function createRoot(): SVGSVGElement {
  const rootSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  rootSvg.id = ROOT_ID;
  // Apply "hidden styles" to the svg. We don't use display none because then the svg will not be rendered.
  rootSvg.style.position = "absolute";
  rootSvg.style.width = "0";
  rootSvg.style.height = "0";
  return rootSvg;
}

export type EvoIconProps = SVGProps<SVGSVGElement> & {
  /**
   * Internal use only - icon name (camelCase). Use __name to avoid conflict with SVG name attribute.
   * @internal
   */
  __name: string;
  a11yText?: string;
  a11yVariant?: A11yVariant;
  prominent?: boolean;
  /**
   * Internal use only - SVG symbol content
   * @internal
   */
  __symbol?: string;
};

const fallbackLookup = new Set<string>();

export function EvoIcon({
  __name,
  className: extraClass,
  a11yText,
  a11yVariant,
  prominent,
  __symbol,
  ...rest
}: EvoIconProps): React.JSX.Element {
  const id = useId();
  const defRef = useRef<SVGDefsElement | null>(null);
  const [hideDefsElement, setHideDefsElement] = useState(false);

  let lookup = use(IconContext);
  if (!lookup) {
    lookup = fallbackLookup;

    // On the server, we clean up the fallback "Set" after the first microtask is completed.
    // This is to make sure that the next request received has an empty "lookup" Set.
    // On the browser this is not an issue since there is always one single instance per page.
    if (typeof window === "undefined" && typeof setImmediate !== "undefined") {
      console.warn(
        `Icon "${__name}" used without wrapping it in a <EvoIconProvider />, for better server performance make sure to wrap your application with <EvoIconProvider> component.`,
      );

      setImmediate(() => {
        fallbackLookup.clear();
      });
    }
  }

  let inlineSvg = "";
  if (!lookup?.has(__name)) {
    if (typeof window === "undefined") {
      lookup?.add(__name);
    }

    inlineSvg = __symbol || "";
  }

  useLayoutEffect(() => {
    if (!__symbol) return;

    let rootSvg: SVGSVGElement;
    const existingRoot = document.getElementById(ROOT_ID);

    if (existingRoot) {
      if (existingRoot instanceof SVGSVGElement) {
        rootSvg = existingRoot;
      } else {
        console.warn(`Invalid "#${ROOT_ID}" element, creating a new one`);
        existingRoot?.parentNode?.removeChild(existingRoot);
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
      if (symbol && !lookup?.has(__name)) {
        lookup?.add(__name);
        rootSvg.appendChild(symbol);
      }

      setHideDefsElement(true);
    }
  }, []);

  const withAriaLabel = a11yVariant === "label";
  const a11yTextId = a11yText ? `icon-title-${id}` : undefined;
  const a11yProps = a11yText
    ? {
        "aria-labelledby": withAriaLabel ? undefined : a11yTextId,
        "aria-label": withAriaLabel ? a11yText : undefined,
        role: "img",
      }
    : {
        "aria-hidden": true,
      };

  const kebabName = kebabCased(__name);
  const size = getIconSize(kebabName) || kebabName;

  const className = classNames(
    `icon`,
    `icon--${size}`,
    getFilledIconName(kebabName),
    extraClass,
    {
      "icon--prominent": prominent,
    },
  );

  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      {...a11yProps}
    >
      {a11yText && !withAriaLabel && <title id={a11yTextId}>{a11yText}</title>}
      <use xlinkHref={`#icon-${kebabName}`} />

      {!hideDefsElement && inlineSvg ? (
        <defs
          ref={defRef}
          dangerouslySetInnerHTML={{ __html: inlineSvg }}
          suppressHydrationWarning
        />
      ) : null}
    </svg>
  );
}

// Extract the size from icon name
// Icon name structures:
// - icon-name-24
// - icon-name-24-colored
// - icon-name-filled-24
// - icon-name-filled-24-colored
// - icon-name
function getIconSize(iconName: string): string {
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

function getFilledIconName(iconName: string): string {
  const iconNameArray = iconName.split("-");
  const filledIndex = iconNameArray.indexOf("filled");

  if (filledIndex === -1) {
    return "";
  }

  return `icon--${iconNameArray.slice(0, filledIndex + 1).join("-")}`;
}

export function kebabCased(str: string): string {
  return str
    .replace(/([0-9]+)/g, (_s, n) => `-${n}`)
    .replace(/([A-Z])/g, (_s, c) => `-${c.toLowerCase()}`);
}
