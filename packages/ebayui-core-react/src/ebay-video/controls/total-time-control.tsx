import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { useShakaControl } from "./use-shaka-control";
import { buildTimeString } from "./time-utils";

type TotalTimeControlProps = {
    a11ySkipToLiveText?: string;
};

export const TotalTimeControl: FC<TotalTimeControlProps> = ({ a11ySkipToLiveText }) => {
    const [timeText, setTimeText] = useState("");
    const [isLive, setIsLive] = useState(false);

    const { container } = useShakaControl("total_time", {
        onTimeAndSeekRangeUpdated: ({ seekRange }) => {
            const seekRangeSize = seekRange.end - seekRange.start;

            if (isFinite(seekRangeSize) && seekRangeSize) {
                const showHour = seekRangeSize >= 3600;
                setTimeText(buildTimeString(seekRangeSize, showHour));
            }
        },
        onTracksChanged: ({ isLive }) => {
            setIsLive(isLive);
        },
    });

    if (!container) return null;

    return createPortal(
        <button
            className="shaka-current-time"
            disabled
            aria-label={isLive ? a11ySkipToLiveText || "Skip to live" : undefined}
        >
            {timeText}
        </button>,
        container,
    );
};
