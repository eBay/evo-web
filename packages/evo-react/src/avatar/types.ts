import type { ComponentProps } from "react";

export type Size = 32 | 40 | 48 | 56 | 64 | 96 | 128;
export type Color =
  | "teal"
  | "light-teal"
  | "green"
  | "lime"
  | "yellow"
  | "orange"
  | "magenta"
  | "pink";

export type EvoAvatarProps = Omit<ComponentProps<"div">, "role"> & {
  size?: Size | `${Size}`;
  color?: Color;
  username?: string;
  knownAspectRatio?: number;
  /**
   * The `aria-label` of the avatar.
   *
   * English default to be overridden is `"avatar"`
   *
   * Pass `null` explicitly _only_ if alternative accessibility information is present
   */
  a11yText?: string | null;
};

export type EvoAvatarImageProps = Omit<ComponentProps<"img">, "alt">;
