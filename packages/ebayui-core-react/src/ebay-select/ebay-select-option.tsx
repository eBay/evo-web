import React, { ComponentProps, FC } from "react";

type OptionProps = ComponentProps<"option"> & {
    optgroup?: string;
};

const EbaySelectOption: FC<OptionProps> = ({ children, ...rest }) => <option {...rest}>{children}</option>;

export default EbaySelectOption;
