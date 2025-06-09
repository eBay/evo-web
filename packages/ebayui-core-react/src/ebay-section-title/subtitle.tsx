import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type Props = ComponentProps<"span">;

const Subtitle: FC<Props> = ({ children, className, ...rest }) => (
    <span {...rest} className={classNames(className, "section-title__subtitle")}>
        {children}
    </span>
);

export default Subtitle;
