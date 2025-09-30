/* eslint-disable jsx-a11y/alt-text */
import React, { ComponentProps, FC, useContext } from "react";
import { AvatarContext } from "./context";
import { isFit } from "./utils";
import { invariant } from "../utils/invariant";

export type EbayAvatarImageProps = ComponentProps<"img">;

const AvatarImage: FC<EbayAvatarImageProps> = ({ onLoad, ...props }) => {
    const context = useContext(AvatarContext);
    invariant(context, "EbayAvatarImage needs to be used with EbayAvatar component");

    const handleImageLoad: ComponentProps<"img">["onLoad"] = (event) => {
        const element = event.target as HTMLImageElement;
        const aspectRatio = element.naturalWidth / element.naturalHeight;

        context.setImagePlacement(isFit(aspectRatio) ? "fit" : "cover");
        onLoad?.(event);
    };
    return <img onLoad={handleImageLoad} {...props} />;
};

export default AvatarImage;
