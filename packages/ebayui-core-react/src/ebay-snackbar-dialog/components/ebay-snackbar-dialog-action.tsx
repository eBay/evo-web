import classNames from "classnames";
import React, { ComponentProps, ReactElement } from "react";

export const EbaySnackbarDialogAction = ({ className, children, ...rest }: ComponentProps<"button">): ReactElement => (
    <button className={classNames(className, "fake-link")} {...rest}>
        {children}
    </button>
);
