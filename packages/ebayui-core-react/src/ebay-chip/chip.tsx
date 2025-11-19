import React, { ComponentProps, FC } from "react";
import { EbayMouseEventHandler } from "../events";
import { useRandomId } from "../utils";
import { EbayIconClose12 } from "../ebay-icon/icons/ebay-icon-close-12";

export type EbayChipProps = {
    a11yDeleteButtonText?: string;
    onDelete: EbayMouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    children: React.ReactNode;
} & ComponentProps<"span">;

const EbayChip: FC<EbayChipProps> = ({ a11yDeleteButtonText, onDelete, disabled, children, ...rest }) => {
    const id = useRandomId();

    return (
        <span {...rest} className="chip">
            <span id={id} className="ebay-chip__text">
                {children}
            </span>
            {a11yDeleteButtonText ? (
                <button
                    type="button"
                    className="chip__button"
                    aria-label={a11yDeleteButtonText}
                    aria-describedby={id}
                    disabled={disabled}
                    onClick={onDelete}
                >
                    <EbayIconClose12 />
                </button>
            ) : null}
        </span>
    );
};

export default EbayChip;
