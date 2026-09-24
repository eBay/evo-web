import type { ComponentProps } from "react";

export type FakeLinkVariant = "inline" | "standalone";

export type EvoFakeLinkProps = ComponentProps<"button"> & {
  /** Adds standalone link styling. Omit or use `"inline"` in text context. */
  variant?: FakeLinkVariant;
};
