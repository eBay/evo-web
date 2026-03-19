import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { EbayIconAudioOff16 } from "../../ebay-icon/icons/ebay-icon-audio-off-16";
import { EbayIconAudioHigh16 } from "../../ebay-icon/icons/ebay-icon-audio-high-16";
import { useShakaControl } from "./use-shaka-control";

type MuteButtonControlProps = {
    a11yMuteText?: string;
    a11yUnmuteText?: string;
};

export const MuteButtonControl: FC<MuteButtonControlProps> = ({ a11yMuteText, a11yUnmuteText }) => {
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(1);

    const { container, videoRef } = useShakaControl("mute_popover", {
        onInit: ({ muted, volume }) => {
            if (muted !== undefined) setMuted(muted);
            if (volume !== undefined) setVolume(volume);
        },
        onVolumeChange: ({ muted, volume }) => {
            setMuted(muted);
            setVolume(volume);
        },
    });

    if (!container) return null;

    const handleClick = () => {
        if (!videoRef.current) return;
        if (!videoRef.current.muted && videoRef.current.volume === 0) {
            videoRef.current.volume = 1;
        } else {
            videoRef.current.muted = !videoRef.current.muted;
        }
    };

    return createPortal(
        <button className="shaka-mute-button shaka-tooltip" onClick={handleClick}>
            {muted || volume === 0 ? (
                <EbayIconAudioOff16 a11yText={a11yUnmuteText || "Unmute"} />
            ) : (
                <EbayIconAudioHigh16 a11yText={a11yMuteText || "Mute"} />
            )}
        </button>,
        container,
    );
};
