import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { useShakaControl } from "./use-shaka-control";
import { buildTimeString } from "./time-utils";

export const TotalTimeControl: FC = () => {
    const [timeText, setTimeText] = useState("");

    const { container } = useShakaControl("total_time", {
        onTimeAndSeekRangeUpdated: ({ seekRange }) => {
            const seekRangeSize = seekRange.end - seekRange.start;

            if (isFinite(seekRangeSize) && seekRangeSize) {
                const showHour = seekRangeSize >= 3600;
                setTimeText(buildTimeString(seekRangeSize, showHour));
            }
        },
    });

    if (!container) return null;

    return createPortal(<span className="shaka-current-time">{timeText}</span>, container);
};
