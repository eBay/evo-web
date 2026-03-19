import React, { FC, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { EbayIconFlag16 } from "../../ebay-icon/icons/ebay-icon-flag-16";
import { useShakaControl } from "./use-shaka-control";

type ReportButtonControlProps = {
    reportText?: string;
    a11yReportText?: string;
    onReport?: (event?: MouseEvent<HTMLButtonElement>) => void;
};

export const ReportButtonControl: FC<ReportButtonControlProps> = ({ reportText, a11yReportText, onReport }) => {
    const { container } = useShakaControl("report");

    if (!container) return null;

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (onReport) {
            onReport(e);
        }
    };

    return createPortal(
        <button
            className="video-player__report-button"
            onClick={handleClick}
            aria-label={a11yReportText || reportText || "Report"}
        >
            <EbayIconFlag16 />
        </button>,
        container,
    );
};
