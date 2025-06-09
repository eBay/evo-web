import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type Props = ComponentProps<"h2">;

const Title: FC<Props> = ({ children, className, ...rest }) => (
    <h2 {...rest} className={classNames(className, "section-title__title")}>
        {children}
    </h2>
);

export default Title;
