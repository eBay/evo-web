import type { ComponentProps } from "react";
import { useAvatarContext } from "./context";
import { isFit } from "./utils";
import type { EvoAvatarImageProps } from "./types";

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
