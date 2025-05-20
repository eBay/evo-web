import React, { FC, ReactNode } from 'react'

type EbayTileSectionTertiaryProps = {
    descriptions: ReactNode[]
}

const EbayTileSectionTertiary: FC<EbayTileSectionTertiaryProps> = ({
    descriptions
}) => {
    if (descriptions && descriptions.length < 1) return <></>
    return <div className="item-tile__section-tertiary">{descriptions}</div>
}

export default EbayTileSectionTertiary
