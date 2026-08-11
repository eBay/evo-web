import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

export type EbayListboxOptionDescriptionProps = ComponentProps<"div">;

export const EbayListboxOptionDescription: FC<EbayListboxOptionDescriptionProps> = ({
    children,
    className,
    ...rest
}) => (
    <div className={classNames("listbox__description", className)} {...rest}>
        {children}
    </div>
);
