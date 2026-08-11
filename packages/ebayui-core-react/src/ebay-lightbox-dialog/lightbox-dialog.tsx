import React, { CSSProperties, FC } from "react";
import classNames from "classnames";
import { DialogBaseProps, DialogBaseWithState } from "../ebay-dialog-base";
import { DialogCloseEventHandler } from "../ebay-dialog-base/types";

type Mode = "default" | "mini";
type Size = "wide" | "narrow" | "fullscreen" | "large";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Props<T = any> = Omit<DialogBaseProps<T>, "size"> & {
    open?: boolean;
    mode?: Mode;
    size?: Size;
    bannerImgSrc?: string;
    bannerImgPosition?: CSSProperties["backgroundPosition"];
    onClose?: DialogCloseEventHandler;
};

const EbayLightboxDialog: FC<Props> = ({
    open,
    mode,
    size,
    bannerImgSrc,
    bannerImgPosition,
    onClose = () => {},
    ...rest
}) => {
    const top = bannerImgSrc ? (
        <div
            className="lightbox-dialog__image"
            style={{
                backgroundImage: `url(${bannerImgSrc})`,
                backgroundPosition: bannerImgPosition,
            }}
        />
    ) : (
        rest.top
    );

    return (
        <DialogBaseWithState
            buttonPosition="right"
            {...rest}
            classPrefix="lightbox-dialog"
            onCloseBtnClick={onClose}
            onBackgroundClick={onClose}
            className={classNames(rest.className, "lightbox-dialog--mask-fade", {
                [`lightbox-dialog--${size}`]: size,
                "lightbox-dialog--expressive": bannerImgSrc,
            })}
            windowClass={classNames("lightbox-dialog__window--animate", {
                "lightbox-dialog__window--mini": mode === "mini",
            })}
            top={top}
            open={open}
        />
    );
};
export default EbayLightboxDialog;
