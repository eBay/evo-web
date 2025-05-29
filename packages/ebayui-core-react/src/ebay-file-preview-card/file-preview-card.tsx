import React, { FC, useMemo, ComponentProps, ElementType } from "react";
import cx from "classnames";
import { EbayEventHandler } from "../common/event-utils/types";
import { findComponent } from "../common/component-utils";
import FilePreviewAction from "./file-preview-action";
import EbayFilePreviewContent from "./file-preview-content";
import EbayFilePreviewLabel from "./file-preview-label";
import EbayFilePreviewCardAction from "./ebay-file-preview-card-action";

import { FilePreviewCardMenuAction, FilePreviewCardMenuActionHandler, FilePreviewType } from "./types";

export type EbayFilePreviewCardProps = ComponentProps<"div"> & {
    a11yCancelUploadText?: string;
    as?: ElementType;
    deleteText?: string;
    file?: File | FilePreviewType;
    status?: "uploading";
    infoText?: string;
    menuActions?: FilePreviewCardMenuAction[];
    seeMore?: number;
    a11ySeeMoreText?: string;
    footerTitle?: string;
    footerSubtitle?: string;
    href?: string;
    onMenuAction?: FilePreviewCardMenuActionHandler;
    onSeeMore?: EbayEventHandler<HTMLElement>;
    onDelete?: EbayEventHandler<HTMLElement>;
    onCancel?: EbayEventHandler<HTMLElement>;
    onAction?: EbayEventHandler<HTMLElement>;
};

const EbayFilePreviewCard: FC<EbayFilePreviewCardProps> = ({
    a11yCancelUploadText,
    status,
    as: CardEl = "div",
    file: rawFile,
    seeMore,
    deleteText,
    footerTitle,
    footerSubtitle,
    a11ySeeMoreText,
    menuActions,
    infoText,
    href,
    onCancel,
    onDelete,
    onMenuAction,
    onSeeMore,
    onAction,
    className,
    children,
    ...rest
}) => {
    const action = findComponent(children, EbayFilePreviewCardAction);
    const previewFile = useMemo(() => {
        if (!rawFile) return undefined;
        let file = rawFile as Exclude<typeof rawFile, File | undefined>;
        let type;
        if (rawFile?.type?.startsWith("image")) {
            type = "image";
        } else if (rawFile?.type?.startsWith("video")) {
            type = "video";
        }
        if (rawFile instanceof File) {
            file = {
                name: rawFile.name,
                type,
                src: type ? URL.createObjectURL(rawFile) : undefined,
            };
        }
        file.type = type;
        return file;
    }, [rawFile]);

    return (
        <CardEl className={cx("file-preview-card", className)} {...rest}>
            <div className="file-preview-card__body">
                {href ? (
                    <a href={href}>
                        <EbayFilePreviewContent file={previewFile} status={status} seeMore={seeMore} />
                    </a>
                ) : (
                    <EbayFilePreviewContent file={previewFile} status={status} seeMore={seeMore} />
                )}
                {/*
                    in Marko implementation, when there is seeMore prop,
                    there is no menu action button or delete button
                 */}
                {seeMore && seeMore > 0 ? (
                    <button
                        type="button"
                        className="file-preview-card__see-more"
                        onClick={onSeeMore}
                        aria-label={a11ySeeMoreText}
                    >
                        <span>+{seeMore}</span>
                    </button>
                ) : (
                    <FilePreviewAction
                        a11yCancelUploadText={a11yCancelUploadText}
                        status={status}
                        menuActions={menuActions}
                        onMenuAction={onMenuAction}
                        deleteText={deleteText}
                        onCancel={onCancel}
                        onDelete={onDelete}
                        onAction={onAction}
                        action={action}
                    />
                )}
                <EbayFilePreviewLabel file={previewFile} infoText={infoText} />
            </div>
            {footerTitle && (
                <div className="file-preview-card__footer">
                    <span>{footerTitle}</span>
                    {footerSubtitle && <span>{footerSubtitle}</span>}
                </div>
            )}
        </CardEl>
    );
};

export default EbayFilePreviewCard;
