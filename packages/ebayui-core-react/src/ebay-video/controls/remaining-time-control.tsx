import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { useShakaControl } from "./use-shaka-control";
import { buildTimeString } from "./time-utils";

export const RemainingTimeControl: FC = () => {
    const [timeText, setTimeText] = useState("0:00");

    const { container } = useShakaControl("remaining_time", {
        onTimeAndSeekRangeUpdated: ({ displayTime, seekRange, isLive }) => {
            const seekRangeSize = seekRange.end - seekRange.start;

            if (!isFinite(seekRangeSize)) {
                setTimeText("0:00");
            } else if (isLive) {
                setTimeText("");
            } else {
                const showHour = seekRangeSize >= 3600;
                const remainingTime = Math.max(0, seekRange.end - displayTime);
                const value = "- " + buildTimeString(remainingTime, showHour);
                setTimeText(value);
            }
        },
    });

    if (!container) return null;

    return createPortal(
        <button className="shaka-remaining-time" disabled>
            {timeText}
        </button>,
        container,
    );
};
