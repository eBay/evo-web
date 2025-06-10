import React, { FC, ReactNode } from "react";

type EbayTileSectionSecondaryProps = {
    title: ReactNode;
    subtitle: ReactNode;
    descriptions: ReactNode[];
};

const EbayTileSectionSecondary: FC<EbayTileSectionSecondaryProps> = ({ title, subtitle, descriptions }) => {
    return (
        <>
            {title || subtitle ? (
                <div className="item-tile__section-secondary">
                    {title}
                    {subtitle}
                </div>
            ) : null}
            {descriptions?.length ? <div className="item-tile__section-tertiary">{descriptions}</div> : null}
        </>
    );
};

export default EbayTileSectionSecondary;
