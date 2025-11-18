import React, { FC } from "react";
import { FilePreviewType } from "./types";
import { EbayIconPlay16 } from "../ebay-icon/icons/ebay-icon-play-16";

export type EbayFilePreviewLabelProps = {
    file?: FilePreviewType;
    infoText?: string;
};

const EbayFilePreviewLabel: FC<EbayFilePreviewLabelProps> = ({ file, infoText }) => {
    if (file && file.type !== "image") {
        return (
            <div className="file-preview-card__info">
                {file.type === "video" && <EbayIconPlay16 className="file-preview-card__video-icon" />}
                {infoText || file.name.substring(file.name.lastIndexOf(".") + 1).toUpperCase()}
            </div>
        );
    }
    return <></>;
};

export default EbayFilePreviewLabel;
