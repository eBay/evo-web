import React, { FC, ComponentProps } from 'react'
import cx from 'classnames'
import { EbayEventHandler } from '../common/event-utils/types'
import { filterByType, findComponent } from '../common/component-utils'
import { EbayFilePreviewCardAction } from '../ebay-file-preview-card'
import { FilePreviewType, EbayFilePreviewCard } from '../ebay-file-preview-card'
import EbayItemTileSectionSuperTitle from './item-tile-section-super-title'
import EbayItemTileSectionTitle from './item-tile-section-title'
import EbayItemTileSectionSubTitle from './item-tile-section-sub-title'
import EbayItemTileSectionDescription from './item-tile-section-description'
import EbayItemTileSectionSecondary from './item-tile-section-secondary'
import EbayItemTileSectionTertiary from './item-tile-section-tertiary'
import { ItemTileLayout } from './types'

export type EbayItemTileProps = ComponentProps<'div'> & {
    layout?: ItemTileLayout
    href?: string
    file?: File | FilePreviewType
    onAction?: EbayEventHandler<HTMLElement>
}

const EbayItemTile: FC<EbayItemTileProps> = ({
    file,
    href,
    layout,
    className,
    onAction,
    children,
    ...rest
}) => {
    const supertitle = findComponent(children, EbayItemTileSectionSuperTitle)
    const title = findComponent(children, EbayItemTileSectionTitle)
    const subtitle = findComponent(children, EbayItemTileSectionSubTitle)
    const action = findComponent(children, EbayFilePreviewCardAction)
    const descriptions = filterByType(children, EbayItemTileSectionDescription)

    return (
        <div
            className={cx(className, 'item-tile', {
                'item-tile--list-view': layout === 'list'
            })}
            {...rest}
        >
            {file && (
                <div className="item-tile__header">
                    <EbayFilePreviewCard
                        file={file}
                        href={href}
                        onAction={onAction}
                    >
                        {action}
                    </EbayFilePreviewCard>
                </div>
            )}
            <div className="item-tile__body">
                {supertitle}
                <EbayItemTileSectionSecondary
                    title={title}
                    subtitle={subtitle}
                />
                <EbayItemTileSectionTertiary descriptions={descriptions} />
            </div>
        </div>
    )
}

export default EbayItemTile
