import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type TabPanelProps = ComponentProps<"div"> & {
    index?: number;
    parentId?: string;
    selected?: boolean;
};

const TabPanel: FC<TabPanelProps> = ({ children, index, parentId, selected, className, ...rest }) => (
    <div
        {...rest}
        aria-labelledby={`default-tab-${index}`}
        className={classNames(className, "tabs__panel")}
        id={`${parentId || "default"}-tabpanel-${index}`}
        role="tabpanel"
        hidden={!selected}
    >
        <div className="tabs__cell">{children}</div>
    </div>
);

export default TabPanel;
