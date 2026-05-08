import type { ComponentProps, ComponentType, ReactNode } from "react";

type DataAttributes = Record<`data-${string}`, string>;

export type AnchorItem = Omit<ComponentProps<"a">, "children"> &
  DataAttributes & {
    href: string;
    as?: ComponentType<ComponentProps<"a">>;
    content: ReactNode;
  };

export type ButtonItem = Omit<ComponentProps<"button">, "children"> &
  DataAttributes & {
    href?: never;
    as?: never;
    content: ReactNode;
  };

export type BreadcrumbItem = AnchorItem | ButtonItem;

export type EvoBreadcrumbsProps = Omit<ComponentProps<"nav">, "role"> & {
  a11yHeadingText?: string;
  a11yHeadingTag?: keyof HTMLElementTagNameMap;
  items: BreadcrumbItem[] | undefined;
  a11yMenuButtonText?: string;
};
