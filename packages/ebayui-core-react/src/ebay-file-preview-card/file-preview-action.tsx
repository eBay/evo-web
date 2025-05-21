import React, { FC } from 'react'
import { EbayEventHandler } from '../common/event-utils/types'
import { Icon } from '../ebay-icon'
import { EbayIconButton } from '../ebay-icon-button'
import { EbayMenuButton, EbayMenuButtonItem } from '../ebay-menu-button'
import {
    FilePreviewCardMenuAction,
    FilePreviewCardMenuActionHandler
} from './types'

export type EbayFilePreviewActionProps = {
    menuActions?: FilePreviewCardMenuAction[]
    deleteText?: string
    status?: 'uploading'
    a11yCancelUploadText?: string
    icon?: Icon
    iconAriaLabel?: string
    onMenuAction?: FilePreviewCardMenuActionHandler
    onCancel?: EbayEventHandler<HTMLElement>
    onDelete?: EbayEventHandler<HTMLElement>
    onAction?: EbayEventHandler<HTMLElement>
}

const EbayFilePreviewAction: FC<EbayFilePreviewActionProps> = ({
    status,
    menuActions,
    onMenuAction,
    deleteText,
    onCancel,
    onDelete,
    onAction,
    a11yCancelUploadText,
    icon,
    iconAriaLabel
}) => {
    const handleMenuSelect: FilePreviewCardMenuActionHandler = (
        e,
        selectedProps
    ) => {
        if (selectedProps) {
            const index = selectedProps.checked?.[0]
            const eventName =
                menuActions && index !== undefined && index in menuActions
                    ? menuActions[index].event
                    : null

            if (eventName && onMenuAction) {
                onMenuAction(e, { ...selectedProps, eventName })
            } else if (onDelete) {
                // on multiple action menu click, the Delete click will trigger onDelete, not onMenuAction.
                // This is the current behavior on marko's ebay-ui
                onDelete(e)
            }
        }
    }

    if (status === 'uploading') {
        return (
            <EbayIconButton
                aria-label={a11yCancelUploadText}
                onClick={onCancel}
                className="file-preview-card__action"
                icon="close16"
            />
        )
    }
    if (menuActions?.length) {
        return (
            <>
                <EbayMenuButton
                    variant="overflow"
                    className="file-preview-card__action"
                    onSelect={handleMenuSelect}
                >
                    {menuActions.map((action) => (
                        <EbayMenuButtonItem
                            value={action.event}
                            key={action.label}
                        >
                            {action.label}
                        </EbayMenuButtonItem>
                    ))}

                    <EbayMenuButtonItem key="delete" value="delete">
                        {deleteText}
                    </EbayMenuButtonItem>
                </EbayMenuButton>
            </>
        )
    }

    if (icon && iconAriaLabel) {
        return (
            <EbayIconButton
                aria-label={iconAriaLabel}
                className="file-preview-card__action"
                icon={icon}
                onClick={onAction}
            />
        )
    }

    if (deleteText) {
        return (
            <EbayIconButton
                aria-label={deleteText}
                className="file-preview-card__action"
                icon="delete16"
                onClick={onDelete}
            />
        )
    }

    return <></>
}

export default EbayFilePreviewAction
