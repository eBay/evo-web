import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type TabProps = ComponentProps<"li"> & {
    href: string;
    ariaCurrent?: "page" | "true";
};

const Tab: FC<TabProps> = ({ children, href, ariaCurrent, className, ...rest }) => (
    <li {...rest} className={classNames(className, "fake-tabs__item")}>
        <a href={href} aria-current={ariaCurrent}>
            {children}
        </a>
    </li>
);

export default Tab;
