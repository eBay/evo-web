import { useState } from "react";
import classNames from "classnames";
import type { EvoAvatarProps } from "./types";
import { AvatarProvider } from "./context";
import { getColorForText, isFit } from "./utils";
import { EvoIconAvatarSignedOut } from "../icon/icons/avatar-signed-out";
import "@ebay/skin/avatar.mjs";

/**
 * Avatars are visual representations of users and stores.
 *
 * `EvoAvatar` can render an `EvoAvatarImage`, a `username` initial, or a
 * signed-out fallback. Custom `children` take precedence over those choices,
 * and the parent supplies the accessible image label through `a11yText`.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoAvatar, EvoAvatarImage } from "@evo-web/react/avatar";
 *
 * <EvoAvatar a11yText="Signed in as Alex">
 *   <EvoAvatarImage src="/profiles/alex.jpg" />
 * </EvoAvatar>
 * ```
 *
 * @summary Profile identity indicator.
 */
export function EvoAvatar({
  size,
  color,
  username,
  children,
  className,
  knownAspectRatio,
  a11yText = "avatar",
  ...rest
}: EvoAvatarProps) {
  const [imagePlacement, setImagePlacement] = useState<"fit" | "cover">(
    isFit(knownAspectRatio) ? "fit" : "cover",
  );

  return (
    <AvatarProvider setImagePlacement={setImagePlacement}>
      <div
        {...rest}
        role="img"
        aria-label={a11yText ?? undefined}
        className={classNames(
          "avatar",
          className,
          size && `avatar--${size}`,
          imagePlacement === "fit" && "avatar--fit",
          username &&
            !children &&
            `avatar--${getColorForText(username, color)}`,
        )}
      >
        {children || username?.charAt(0).toUpperCase() || (
          <EvoIconAvatarSignedOut />
        )}
      </div>
    </AvatarProvider>
  );
}
