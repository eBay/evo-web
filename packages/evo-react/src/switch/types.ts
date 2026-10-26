import type { ComponentProps } from "react";

export type EvoSwitchProps = Omit<
  ComponentProps<"input">,
  "type" | "role" | "children" | "aria-checked"
>;
