import type { EvoIconComponentProps } from "../icon/icons/types";

export type EvoImagePlaceholderProps = Omit<
  EvoIconComponentProps,
  | "prominent"
  | "aria-label"
  | "aria-labelledby"
  | "aria-hidden"
  | "role"
  | "children"
  | "dangerouslySetInnerHTML"
>;
