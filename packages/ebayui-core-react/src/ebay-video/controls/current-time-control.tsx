import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { useShakaControl } from "./use-shaka-control";
import { buildTimeString } from "./time-utils";

type CurrentTimeControlProps = {
    a11ySkipToLiveText?: string;
};

export const CurrentTimeControl: FC<CurrentTimeControlProps> = ({ a11ySkipToLiveText }) => {
    const [timeText, setTimeText] = useState("0:00");
    const [isLive, setIsLive] = useState(false);

    const { container, videoRef, playerRef } = useShakaControl("current_time", {
        onTimeAndSeekRangeUpdated: ({ displayTime, seekRange, isLive, isSeeking }) => {
            const seekRangeSize = seekRange.end - seekRange.start;

            if (!isFinite(seekRangeSize)) {
                setTimeText("LIVE");
            } else if (isLive) {
                const behindLive = Math.floor(seekRange.end - displayTime);
                const adjustedTime = Math.max(0, behindLive);
                const showHour = seekRangeSize >= 3600;

                if (adjustedTime >= 1 || isSeeking) {
                    setTimeText("- " + buildTimeString(adjustedTime, showHour));
                } else {
                    setTimeText("LIVE");
                }
            } else {
                const showHour = seekRangeSize >= 3600;
                const currentTime = Math.max(0, displayTime - seekRange.start);
                setTimeText(buildTimeString(currentTime, showHour));
            }
        },
        onTracksChanged: ({ isLive }) => {
            setIsLive(isLive);
        },
    });

    if (!container) return null;

    const handleClick = () => {
        if (!videoRef.current || !playerRef.current) return;
        if (isLive) {
            const seekRange = (playerRef.current.seekRange as () => { start: number; end: number })();
            videoRef.current.currentTime = seekRange.end;
        }
    };

    return createPortal(
        <button
            className="shaka-current-time"
            disabled={!isLive}
            onClick={handleClick}
            aria-label={isLive ? a11ySkipToLiveText || "Skip to live" : undefined}
        >
            {timeText}
        </button>,
        container,
    );
};
