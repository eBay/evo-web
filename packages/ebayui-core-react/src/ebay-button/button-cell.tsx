import React, { ComponentProps, FC } from "react";

type ButtonType = "cta" | "fake" | "expand" | "default";
type Props = ComponentProps<"span"> & {
    type?: ButtonType;
};

const classNames: { [key in ButtonType]: string } = {
    cta: "cta-",
    fake: "fake-",
    expand: "expand-",
    default: "",
};

const EbayButtonCell: FC<Props> = ({ type = "default", children, ...rest }) => (
    <span className={`${classNames[type]}btn__cell`} {...rest}>
        <>{children}</>
    </span>
);

export default EbayButtonCell;
