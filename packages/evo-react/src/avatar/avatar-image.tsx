import type { ComponentProps } from "react";
import { useAvatarContext } from "./context";
import { isFit } from "./utils";
import type { EvoAvatarImageProps } from "./types";

/**
 * Supplies the profile image for an `EvoAvatar`. The image is decorative
 * because the parent avatar provides the accessible label. The avatar chooses
 * `"fit"` or `"cover"` placement after the image loads.
 *
 * @summary Decorative profile image for an avatar.
 */
export function EvoAvatarImage({ onLoad, ...props }: EvoAvatarImageProps) {
  const context = useAvatarContext();

  const handleImageLoad: ComponentProps<"img">["onLoad"] = (event) => {
    if (context) {
      const element = event.target as HTMLImageElement;
      const aspectRatio = element.naturalWidth / element.naturalHeight;
      context.setImagePlacement(isFit(aspectRatio) ? "fit" : "cover");
    }
    onLoad?.(event);
  };

  return <img {...props} alt="" onLoad={handleImageLoad} />;
}
