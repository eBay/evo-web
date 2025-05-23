import React, {
    FC,
    ComponentProps,
    isValidElement,
    cloneElement,
    ReactElement
} from 'react'
import cx from 'classnames'
import { EbayEventHandler } from '../common/event-utils/types'
import { EbayIconButton } from '../ebay-icon-button'
import { EbayMenuButton, EbayMenuButtonItem } from '../ebay-menu-button'
import {
    FilePreviewCardMenuAction,
    FilePreviewCardMenuActionHandler
} from './types'

export type EbayFilePreviewActionProps = ComponentProps<'button'> & {
    menuActions?: FilePreviewCardMenuAction[]
    deleteText?: string
    status?: 'uploading'
    a11yCancelUploadText?: string
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
    children
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

    if (isValidElement(children) && children?.props['aria-label']) {
        const child = children as ReactElement<ComponentProps<'button'>>
        return cloneElement(child, {
            onClick: onAction,
            className: cx('file-preview-card__action', child?.props?.className)
        })
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
