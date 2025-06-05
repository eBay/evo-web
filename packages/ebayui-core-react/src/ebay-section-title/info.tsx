import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type Props = ComponentProps<"div">;

const Info: FC<Props> = ({ className, children, ...rest }) => (
    <div {...rest} className={classNames(className, "section-title__info")}>
        {children}
    </div>
);

export default Info;
