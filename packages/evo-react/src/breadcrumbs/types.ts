import type { ComponentProps, ComponentType, ReactNode } from "react";

type DataAttributes = Record<`data-${string}`, string>;

export type AnchorItem = Omit<ComponentProps<"a">, "children"> &
  DataAttributes & {
    /** Link destination. Its presence renders the item as an anchor. */
    href: string;
    /** Custom component used in place of the native anchor, such as a framework Link. */
    as?: ComponentType<ComponentProps<"a">>;
    /** Breadcrumb item content. */
    content: ReactNode;
  };

export type ButtonItem = Omit<ComponentProps<"button">, "children"> &
  DataAttributes & {
    href?: never;
    as?: never;
    /** Breadcrumb item content. */
    content: ReactNode;
  };

export type BreadcrumbItem = AnchorItem | ButtonItem;

export type EvoBreadcrumbsProps = Omit<ComponentProps<"nav">, "role"> & {
  /** Clipped heading text that labels the breadcrumb navigation region. English default to be overridden is `"Page navigation"`. */
  a11yHeadingText?: string;
  /** HTML heading tag used for the clipped heading. Defaults to `h2`. */
  a11yHeadingTag?: keyof HTMLElementTagNameMap;
  /** List of items rendered as anchors when `href` is present or buttons otherwise. */
  items: BreadcrumbItem[] | undefined;
  a11yMenuButtonText?: string;
};
