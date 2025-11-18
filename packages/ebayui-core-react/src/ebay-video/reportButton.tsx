import React, { JSX, ReactNode } from "react";
import { EbayIconFlag24 } from "../ebay-icon/icons/ebay-icon-flag-24";

type ReportButtonProps = {
    callback?: (button: HTMLElement) => void;
    children?: ReactNode;
};

export const ReportButton = ({ callback, children }: ReportButtonProps): JSX.Element => (
    <button className="video-player__report-button" ref={callback}>
        <EbayIconFlag24 />
        {children}
    </button>
);
