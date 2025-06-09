import React, { JSX, ReactNode } from "react";
import { EbayIcon } from "../ebay-icon";

type ReportButtonProps = {
    callback?: (button: HTMLElement) => void;
    children?: ReactNode;
};

export const ReportButton = ({ callback, children }: ReportButtonProps): JSX.Element => (
    <button className="video-player__report-button" ref={callback}>
        <EbayIcon name="flag24" />
        {children}
    </button>
);
