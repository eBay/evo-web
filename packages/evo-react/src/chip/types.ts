import type { ComponentProps } from "react";

export type EvoChipProps = ComponentProps<"span">;

export type EvoChipTextProps = Omit<ComponentProps<"span">, "id">;

export type EvoChipDeleteButtonProps = Omit<
  ComponentProps<"button">,
  "aria-describedby" | "aria-label" | "children" | "type"
> & {
  /** Accessible label for the delete button. English default to be overridden is `"delete"`. */
  a11yText?: string;
};
