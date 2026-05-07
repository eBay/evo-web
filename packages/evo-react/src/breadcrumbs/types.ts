import type { ComponentProps, ComponentType, ReactNode } from "react";

type DataAttributes = Record<`data-${string}`, string>;

type AnchorItem = Omit<ComponentProps<"a">, "children"> &
  DataAttributes & {
    href: string;
    as?: ComponentType<ComponentProps<"a">>;
    content: ReactNode;
  };

type ButtonItem = Omit<ComponentProps<"button">, "children"> &
  DataAttributes & {
    href?: never;
    as?: never;
    content: ReactNode;
  };

export type EvoBreadcrumbItem = AnchorItem | ButtonItem;

export type EvoBreadcrumbsProps = Omit<ComponentProps<"nav">, "role"> & {
  a11yHeadingText?: string;
  a11yHeadingTag?: keyof HTMLElementTagNameMap;
  items: EvoBreadcrumbItem[] | undefined;
  a11yMenuButtonText?: string;
};
