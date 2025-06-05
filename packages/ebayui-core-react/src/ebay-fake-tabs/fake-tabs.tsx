import React, { cloneElement, ComponentProps, FC } from "react";
import classNames from "classnames";

import { excludeComponent, filterByType } from "../common/component-utils";
import Tab from "./tab";

type FakeTabsProps = ComponentProps<"div"> & {
    selectedIndex?: number;
    tabMatchesCurrentUrl?: boolean;
};

const EbayFakeTabs: FC<FakeTabsProps> = ({ selectedIndex = 0, tabMatchesCurrentUrl, className, children, ...rest }) => {
    const ariaCurrent = tabMatchesCurrentUrl === false ? "true" : "page";
    const tabHeadings = filterByType(children, Tab).map((item, i) =>
        cloneElement(item, {
            ...item.props,
            ariaCurrent: selectedIndex === i ? ariaCurrent : null,
        }),
    );
    const tabContent = excludeComponent(children, Tab);

    return (
        <div {...rest} className={classNames(className, "fake-tabs")}>
            <ul className="fake-tabs__items">{tabHeadings}</ul>
            <div className="fake-tabs__content">
                <div className="fake-tabs__cell">{tabContent}</div>
            </div>
        </div>
    );
};

export default EbayFakeTabs;
