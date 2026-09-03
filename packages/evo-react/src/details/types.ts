import type {
  ComponentProps,
  ElementType,
  ReactNode,
  SyntheticEvent,
} from "react";

export type Size = "regular" | "small";
export type Alignment = "regular" | "center";

export type EvoDetailsProps = Omit<ComponentProps<"details">, "onToggle"> & {
  /** Size of the summary. */
  size?: Size;
  /** Alignment of the summary. */
  alignment?: Alignment;
  /** Fired on toggle with `(event, { open })` arguments. */
  onToggle?: (
    event: SyntheticEvent<HTMLDetailsElement>,
    data: { open: boolean },
  ) => void;
};

export type EvoDetailsSummaryProps = ComponentProps<"summary">;

export type EvoDetailsLeadingProps = ComponentProps<"span">;

export type EvoDetailsLabelProps = ComponentProps<"span">;

export type EvoDetailsContentProps = ComponentProps<"div"> & {
  as?: ElementType;
  children?: ReactNode;
};
