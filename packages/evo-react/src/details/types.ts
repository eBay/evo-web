import type {
  ComponentProps,
  ElementType,
  ReactNode,
  SyntheticEvent,
} from "react";

export type Size = "regular" | "small";
export type Alignment = "regular" | "center";

export type EvoDetailsProps = Omit<ComponentProps<"details">, "onToggle"> & {
  /** Selects the regular or small summary treatment. Defaults to `"regular"`. */
  size?: Size;
  /** Controls summary alignment. Defaults to `"regular"`. */
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
  /** Element used for the content region. Defaults to `div`. */
  as?: ElementType;
  /** Information revealed when the details section is open. */
  children?: ReactNode;
};
