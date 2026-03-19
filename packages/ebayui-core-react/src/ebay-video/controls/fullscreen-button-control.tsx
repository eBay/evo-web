import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { EbayIconExpand16 } from "../../ebay-icon/icons/ebay-icon-expand-16";
import { EbayIconContract16 } from "../../ebay-icon/icons/ebay-icon-contract-16";
import { useShakaControl } from "./use-shaka-control";

type FullscreenButtonControlProps = {
    a11yFullscreenText?: string;
    a11yExitFullscreenText?: string;
};

export const FullscreenButtonControl: FC<FullscreenButtonControlProps> = ({
    a11yFullscreenText,
    a11yExitFullscreenText,
}) => {
    const [isFullScreenEnabled, setIsFullScreenEnabled] = useState(false);
    const [isFullScreenSupported, setIsFullScreenSupported] = useState(true);

    const { container, controlsRef } = useShakaControl("fullscreen_button", {
        onInit: ({ isFullScreenEnabled, isFullScreenSupported }) => {
            if (isFullScreenEnabled !== undefined) setIsFullScreenEnabled(isFullScreenEnabled);
            if (isFullScreenSupported !== undefined) setIsFullScreenSupported(isFullScreenSupported);
        },
        onFullscreenChange: ({ isFullScreenEnabled }) => {
            setIsFullScreenEnabled(isFullScreenEnabled);
        },
        onLoadedMetadata: ({ isFullScreenSupported }) => {
            setIsFullScreenSupported(isFullScreenSupported);
        },
        onLoadedData: ({ isFullScreenSupported }) => {
            setIsFullScreenSupported(isFullScreenSupported);
        },
    });

    if (!container || !isFullScreenSupported) return null;

    const handleClick = async () => {
        if (controlsRef.current?.toggleFullScreen) {
            await (controlsRef.current.toggleFullScreen as () => Promise<void>)();
        }
    };

    return createPortal(
        <button className="shaka-fullscreen-button shaka-tooltip" onClick={handleClick}>
            {isFullScreenEnabled ? (
                <EbayIconContract16 a11yText={a11yExitFullscreenText || "Exit fullscreen"} />
            ) : (
                <EbayIconExpand16 a11yText={a11yFullscreenText || "Enter fullscreen"} />
            )}
        </button>,
        container,
    );
};
