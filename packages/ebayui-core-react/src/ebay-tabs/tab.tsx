import React, { ComponentProps, FC, RefCallback } from "react";
import classNames from "classnames";

type TabProps = ComponentProps<"div"> & {
    index?: number;
    parentId?: string;
    selected?: boolean;
    focused?: boolean;
    refCallback?: RefCallback<HTMLElement>;
};

const Tab: FC<TabProps> = ({ children, index, parentId, selected, focused, className, refCallback, ...rest }) => (
    <div
        {...rest}
        ref={refCallback}
        aria-controls={`${parentId || "default"}-tabpanel-${index}`}
        aria-selected={selected}
        className={classNames(className, "tabs__item")}
        id={`${parentId || "default"}-tab-${index}`}
        role="tab"
        tabIndex={focused ? 0 : -1}
    >
        <span>{children}</span>
    </div>
);

export default Tab;
