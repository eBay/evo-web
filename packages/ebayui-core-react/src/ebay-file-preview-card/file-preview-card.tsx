import React, { FC, useMemo, ComponentProps, ElementType } from 'react'
import { EbayEventHandler } from '../common/event-utils/types'
import EbayFilePreviewAction from './file-preview-action'
import EbayFilePreviewContent from './file-preview-content'
import EbayFilePreviewLabel from './file-preview-label'
import {
    FilePreviewCardMenuAction,
    FilePreviewCardMenuActionHandler,
    FilePreviewType
} from './types'

export type EbayFilePreviewCardProps = ComponentProps<'div'> & {
    a11yCancelUploadText?: string
    as?: ElementType
    deleteText?: string
    file?: File | FilePreviewType
    status?: 'uploading'
    infoText?: string
    menuActions?: FilePreviewCardMenuAction[]
    seeMore?: number
    a11ySeeMoreText?: string
    footerTitle?: string
    footerSubtitle?: string
    onMenuAction?: FilePreviewCardMenuActionHandler
    onSeeMore?: EbayEventHandler<HTMLElement>
    onDelete?: EbayEventHandler<HTMLElement>
    onCancel?: EbayEventHandler<HTMLElement>
}

const EbayFileInput: FC<EbayFilePreviewCardProps> = ({
    a11yCancelUploadText,
    status,
    as: CardEl = 'div',
    file: rawFile,
    seeMore,
    deleteText,
    footerTitle,
    footerSubtitle,
    a11ySeeMoreText,
    menuActions,
    infoText,
    onCancel,
    onDelete,
    onMenuAction,
    onSeeMore,
    ...rest
}) => {
    const previewFile = useMemo(() => {
        if (!rawFile) return undefined
        let file = rawFile as Exclude<typeof rawFile, File | undefined>
        let type
        if (rawFile?.type?.startsWith('image')) {
            type = 'image'
        } else if (rawFile?.type?.startsWith('video')) {
            type = 'video'
        }
        if (rawFile instanceof File) {
            file = {
                name: rawFile.name,
                type,
                src: type ? URL.createObjectURL(rawFile) : undefined
            }
        }
        file.type = type
        return file
    }, [rawFile])

    return (
        <CardEl className="file-preview-card" {...rest}>
            <div className="file-preview-card__body">
                <EbayFilePreviewContent
                    file={previewFile}
                    status={status}
                    seeMore={seeMore}
                />
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
                    <EbayFilePreviewAction
                        a11yCancelUploadText={a11yCancelUploadText}
                        status={status}
                        menuActions={menuActions}
                        onMenuAction={onMenuAction}
                        deleteText={deleteText}
                        onCancel={onCancel}
                        onDelete={onDelete}
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
    )
}

export default EbayFileInput
