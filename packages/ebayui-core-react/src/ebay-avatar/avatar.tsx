import React, { ComponentProps, FC, useState } from "react";
import cx from "classnames";
import { EbayIcon } from "../ebay-icon";
import { getColorForText } from "./utils";
import { Size, Color } from "./types";
import { findComponent } from "../utils";
import EbayAvatarImage from "./avatar-image";

export type EbayAvatarProps = ComponentProps<"div"> & {
    size?: Size | `${Size}`;
    color?: Color;
    username?: string;
    knownAspectRatio?: number;
};

function isFit(aspectRation?: number): boolean {
    return aspectRation && (aspectRation < 3 / 4 || aspectRation < 4 / 3);
}

const EbayAvatar: FC<EbayAvatarProps> = ({
    size,
    color,
    username,
    children,
    className,
    knownAspectRatio,
    ...rest
}: EbayAvatarProps) => {
    const [imagePlacement, setImagePlacement] = useState<"fit" | "cover">(isFit(knownAspectRatio) ? "fit" : "cover");
    const img = findComponent(children, EbayAvatarImage);

    const handleImageLoad: ComponentProps<"img">["onLoad"] = (event) => {
        const element = event.target as HTMLImageElement;
        const aspectRatio = element.naturalWidth / element.naturalHeight;

        setImagePlacement(isFit(aspectRatio) ? "fit" : "cover");
    };

    return (
        <div
            {...rest}
            role="img"
            className={cx(
                "avatar",
                className,
                size && `avatar--${size}`,
                imagePlacement === "fit" && "avatar--fit",
                username && !img && `avatar--${getColorForText(username, color)}`,
            )}
        >
            {React.Children.count(children) > 0
                ? (img &&
                      React.cloneElement<ComponentProps<"img">>(img, {
                          onLoad(event) {
                              img.props.onLoad?.(event);
                              handleImageLoad(event);
                          },
                      })) ||
                  children
                : username?.charAt(0).toUpperCase() || <EbayIcon name="avatarSignedOut" />}
        </div>
    );
};

export default EbayAvatar;
