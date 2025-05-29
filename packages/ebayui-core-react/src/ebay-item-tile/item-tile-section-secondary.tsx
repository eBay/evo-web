import React, { FC, ReactNode } from 'react'

type EbayTileSectionSecondaryProps = {
    title: ReactNode
    subtitle: ReactNode
}

const EbayTileSectionSecondary: FC<EbayTileSectionSecondaryProps> = ({
    title,
    subtitle
}) => {
    if (title || subtitle) {
        return (
            <div className="item-tile__section-secondary">
                {title}
                {subtitle}
            </div>
        )
    }
    return <></>
}

export default EbayTileSectionSecondary
