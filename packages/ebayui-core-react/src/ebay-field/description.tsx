import React, { ComponentProps, FC } from "react";
import classNames from "classnames";
import { FieldDescriptionType, FieldDescriptionPosition } from "./types";

type DescriptionProps = ComponentProps<"div"> &
    ComponentProps<"span"> & {
        type?: FieldDescriptionType;
        position?: FieldDescriptionPosition;
    };

const Description: FC<DescriptionProps> = ({ type, position = "below", className, children, ...rest }) => {
    const wrapperClassName = classNames(className, "field__description", { [`field__description--${type}`]: type });
    const WrapperElement = position === "below" ? `div` : `span`;

    return (
        <WrapperElement {...rest} className={wrapperClassName}>
            {children}
        </WrapperElement>
    );
};

export default Description;
