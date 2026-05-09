import type { ComponentProps } from "react";

export type BadgeType = "menu" | "icon";

export type EvoBadgeProps = Omit<ComponentProps<"span">, "role" | "aria-label" | "children"> & {
  number?: number | string;
  type?: BadgeType;
  a11yText: string | null;
};
