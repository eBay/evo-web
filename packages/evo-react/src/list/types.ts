import type { ComponentProps } from "react";

export type EvoListProps = ComponentProps<"div"> & {
  /** Accessible name for the list. Use this or `a11yLabelId`. */
  a11yText?: string;
  /** ID of visible text naming the list. Use this or `a11yText`. */
  a11yLabelId?: string;
};

export type EvoListItemProps =
  | (ComponentProps<"div"> & {
      /** Renders the static item body as a `<div>` by default. */
      as?: "div";
    })
  | (ComponentProps<"button"> & {
      /** Renders an interactive item as a native `<button>`. */
      as: "button";
    })
  | (ComponentProps<"a"> & {
      /** Renders a navigation item as a native `<a>`. */
      as: "a";
    });

export type EvoListItemBodyProps = ComponentProps<"div">;
export type EvoListItemLeadingProps = ComponentProps<"div">;
export type EvoListItemTrailingProps = ComponentProps<"div">;
export type EvoListSeparatorProps = ComponentProps<"hr">;
