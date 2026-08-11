import React, { ComponentProps, FC, useState } from "react";
import cx from "classnames";

import { getColorForText, isFit } from "./utils";
import { Size, Color } from "./types";
import { AvatarContext } from "./context";
import { EbayIconAvatarSignedOut } from "../ebay-icon/icons/ebay-icon-avatar-signed-out";

export type EbayAvatarProps = ComponentProps<"div"> & {
    size?: Size | `${Size}`;
    color?: Color;
    username?: string;
    knownAspectRatio?: number;
};

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

    return (
        <AvatarContext.Provider value={{ setImagePlacement }}>
            <div
                {...rest}
                role="img"
                className={cx(
                    "avatar",
                    className,
                    size && `avatar--${size}`,
                    imagePlacement === "fit" && "avatar--fit",
                    username && !children && `avatar--${getColorForText(username, color)}`,
                )}
            >
                {children || username?.charAt(0).toUpperCase() || <EbayIconAvatarSignedOut />}
            </div>
        </AvatarContext.Provider>
    );
};

export default EbayAvatar;
