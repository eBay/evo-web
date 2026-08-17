import type { ComponentProps } from "react";

export type Size = "large";

export type EvoCheckboxProps = Omit<
  ComponentProps<"input">,
  "children" | "size" | "type"
> & {
  /** Uses the large checkbox icon. Omit for the default size. */
  size?: Size;
};
