import { useId } from "react";
import classNames from "classnames";
import type { AnchorItem, ButtonItem, EvoBreadcrumbsProps } from "./types";
import { EvoIconChevronRight12 } from "../icon/icons/chevron-right-12";

import "@ebay/skin/breadcrumbs.mjs";
import "@ebay/skin/utility.mjs";

function BreadcrumbLink({
  item,
  isLast,
}: {
  item: AnchorItem;
  isLast: boolean;
}) {
  const { content, as: Component = "a", href, ...rest } = item;

  return (
    <Component
      {...rest}
      href={href}
      aria-current={isLast ? "location" : undefined}
    >
      {content}
    </Component>
  );
}

function BreadcrumbButton({
  item,
  isLast,
}: {
  item: ButtonItem;
  isLast: boolean;
}) {
  const { content, ...rest } = item;

  return (
    <button {...rest} aria-current={isLast ? "location" : undefined}>
      {content}
    </button>
  );
}

export function EvoBreadcrumbs({
  a11yHeadingText = "Page navigation",
  a11yHeadingTag: HeadingTag = "h2",
  items,
  className,
  ...rest
}: EvoBreadcrumbsProps) {
  const headingId = useId();

  if (!items) {
    return null;
  }

  const lastIndex = items.length - 1;

  return (
    <nav
      {...rest}
      role="navigation"
      aria-labelledby={headingId}
      className={classNames("breadcrumbs", "breadcrumb--overflow", className)}
    >
      <HeadingTag id={headingId} className="clipped">
        {a11yHeadingText}
      </HeadingTag>
      {/*
        TODO: Implement overflow/collapse behaviour once EvoFakeMenuButton is available.
        Same logic as evo-marko
      */}
      <ul>
        {items.map((item, index) => {
          const isLast = index === lastIndex;
          const isLink = "href" in item && item.href !== undefined;

          return (
            <li key={index}>
              {isLink ? (
                <BreadcrumbLink item={item} isLast={isLast} />
              ) : (
                <BreadcrumbButton item={item} isLast={isLast} />
              )}
              {!isLast && <EvoIconChevronRight12 />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
