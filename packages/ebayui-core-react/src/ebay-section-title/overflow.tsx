import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type Props = ComponentProps<"div">;

const Overflow: FC<Props> = ({ children, className, ...rest }) => (
    <div {...rest} className={classNames(className, "section-title__overflow")}>
        {children}
    </div>
);

export default Overflow;
