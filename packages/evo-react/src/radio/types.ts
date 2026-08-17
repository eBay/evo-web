import type { ComponentProps } from "react";

export type Size = "large";

export type EvoRadioProps = Omit<
  ComponentProps<"input">,
  "children" | "size" | "type"
> & {
  /** Uses the large radio icon. Omit for the default size. */
  size?: Size;
};
