import React, { FC, ReactNode } from "react";

type EbayTileSectionsProps = {
    title: ReactNode;
    subtitle: ReactNode;
    descriptions: ReactNode[];
};

const EbayTileSections: FC<EbayTileSectionsProps> = ({ title, subtitle, descriptions }) => {
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

export default EbayTileSections;
