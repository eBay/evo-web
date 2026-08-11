import classNames from "classnames";
import React, { ComponentProps, FC } from "react";

export type EbayComboboxOptionProps = Omit<ComponentProps<"div">, "children"> & {
    text: string;
    // We use "value" to detect if it is selected or not on EbayCombobox

    value?: string;
    selected?: boolean;
};

const EbayComboboxOption: FC<EbayComboboxOptionProps> = ({ text, className, selected, ...rest }) => (
    <div
        {...rest}
        role="option"
        className={classNames("combobox__option", className)}
        tabIndex={-1}
        aria-selected={selected}
    >
        {text}
    </div>
);

export default EbayComboboxOption;
