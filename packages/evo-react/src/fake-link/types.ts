import type { ComponentProps, KeyboardEvent } from "react";

export type FakeLinkVariant = "inline" | "standalone";

export type EvoFakeLinkProps = ComponentProps<"button"> & {
  /** Adds standalone link styling. Omit or use `"inline"` in text context. */
  variant?: FakeLinkVariant;
  /** Called after `onKeyDown` when the enabled button receives `Escape`. */
  onEscape?: (event: KeyboardEvent<HTMLButtonElement>) => void;
};
