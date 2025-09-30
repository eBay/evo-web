import React, { FC, ReactElement } from "react";
import cx from "classnames";
import { EbayEventHandler } from "../common/event-utils/types";
import { EbayIconButton } from "../ebay-icon-button";
import { EbayMenuButton, EbayMenuButtonItem } from "../ebay-menu-button";
import { EbayFilePreviewCardActionProps } from "./ebay-file-preview-card-action";

import { FilePreviewCardMenuAction, FilePreviewCardMenuActionHandler } from "./types";
import { EbayIconClose16 } from "../ebay-icon/icons/ebay-icon-close-16";
import { EbayIconDelete16 } from "../ebay-icon/icons/ebay-icon-delete-16";

export type FilePreviewActionProps = {
    menuActions?: FilePreviewCardMenuAction[];
    deleteText?: string;
    status?: "uploading";
    a11yCancelUploadText?: string;
    onMenuAction?: FilePreviewCardMenuActionHandler;
    onCancel?: EbayEventHandler<HTMLElement>;
    onDelete?: EbayEventHandler<HTMLElement>;
    onAction?: EbayEventHandler<HTMLElement>;
    action: ReactElement<EbayFilePreviewCardActionProps>;
};

const FilePreviewAction: FC<FilePreviewActionProps> = ({
    status,
    menuActions,
    onMenuAction,
    deleteText,
    onCancel,
    onDelete,
    onAction,
    a11yCancelUploadText,
    action,
}) => {
    const handleMenuSelect: FilePreviewCardMenuActionHandler = (e, selectedProps) => {
        if (selectedProps) {
            const index = selectedProps.checked?.[0];
            const eventName =
                menuActions && index !== undefined && index in menuActions ? menuActions[index].event : null;

            if (eventName && onMenuAction) {
                onMenuAction(e, { ...selectedProps, eventName });
            } else if (onDelete) {
                // on multiple action menu click, the Delete click will trigger onDelete, not onMenuAction.
                // This is the current behavior on marko's ebay-ui
                onDelete(e);
            }
        }
    };

    if (status === "uploading") {
        return (
            <EbayIconButton
                aria-label={a11yCancelUploadText}
                onClick={onCancel}
                className="file-preview-card__action"
                icon={<EbayIconClose16 />}
            />
        );
    }
    if (menuActions?.length) {
        return (
            <>
                <EbayMenuButton variant="overflow" className="file-preview-card__action" onSelect={handleMenuSelect}>
                    {menuActions.map((action) => (
                        <EbayMenuButtonItem value={action.event} key={action.label}>
                            {action.label}
                        </EbayMenuButtonItem>
                    ))}

                    <EbayMenuButtonItem key="delete" value="delete">
                        {deleteText}
                    </EbayMenuButtonItem>
                </EbayMenuButton>
            </>
        );
    }

    if (action?.props && action.props.icon && action.props["aria-label"]) {
        return (
            <EbayIconButton
                onClick={onAction}
                className={cx("file-preview-card__action", action.props.className)}
                {...action.props}
            />
        );
    }

    if (deleteText) {
        return (
            <EbayIconButton
                aria-label={deleteText}
                className="file-preview-card__action"
                icon={<EbayIconDelete16 />}
                onClick={onDelete}
            />
        );
    }

    return <></>;
};

export default FilePreviewAction;
