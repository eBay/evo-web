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
  /** The pixel size of the avatar. Only specific sizes are supported. */
  size?: Size | `${Size}`;
  /** Background color override for the initials variant. When omitted, color is derived from the username hash. */
  color?: Color;
  /** The username to display. Determines the background color and first letter. Omit to show the signed-out icon. */
  username?: string;
  /** Optional pre-known image aspect ratio that prevents a flash of incorrectly styled content before load. */
  knownAspectRatio?: number;
  /**
   * Accessible label for the avatar (`aria-label`). English default to be overridden is `"avatar"`.
   * Pass `null` explicitly _only_ if alternative accessibility information is present.
   */
  a11yText?: string | null;
};

export type EvoAvatarImageProps = Omit<ComponentProps<"img">, "alt">;
