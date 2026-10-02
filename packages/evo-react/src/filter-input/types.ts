import type { EvoInputProps } from "../input";

export type FilterInputSize = "large" | "small";

export type EvoFilterInputProps = Omit<
  EvoInputProps,
  | "aria-controls"
  | "children"
  | "fluid"
  | "inputSize"
  | "postfix"
  | "prefix"
  | "size"
  | "type"
  | "placeholder"
> & {
  /**
   * Names the results element controlled by the search box. The matching
   * element must have this `id` so `aria-controls` points to it.
   */
  a11yControlsId: string;
  /** Shows a clear button with this accessible name when provided. */
  a11yClearButtonText?: string;
  /** Called with the new text after typing or activating the clear button. */
  onValueChange?: (value: string) => void;
  /** Search hint. Defaults to `"Filter"` at runtime. */
  placeholder: string;
  /** Applies the large or small filter treatment. */
  size?: FilterInputSize;
};
