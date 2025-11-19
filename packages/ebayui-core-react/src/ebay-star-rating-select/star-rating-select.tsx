import React, { ComponentProps, FC, useEffect, useState } from "react";
import classNames from "classnames";
import { range } from "../common/range";
import { EbayChangeEventHandler, EbayFocusEventHandler, EbayKeyboardEventHandler } from "../common/event-utils/types";
import { useRandomId } from "../common/random-id";
import { EbayIconStarDynamic } from "../ebay-icon/icons/ebay-icon-star-dynamic";

export type EventProps = { value: number };
type Props = ComponentProps<"div"> & {
    a11yText?: string;
    value?: string;
    a11yStarText?: string[];
    disabled?: boolean;
    name?: string;
    onKeyDown?: EbayKeyboardEventHandler<HTMLInputElement, EventProps>;
    onChange?: EbayChangeEventHandler<HTMLInputElement, EventProps>;
    onFocus?: EbayFocusEventHandler<HTMLInputElement, EventProps>;
};
const stars = range(1, 5);
const getValue = (val) => {
    let value = parseInt(val, 0) || 0;
    if (value > 5) {
        value = 0;
    }
    return value;
};
const EbayStarRatingSelect: FC<Props> = ({
    value = 0,
    a11yText,
    className,
    a11yStarText = [],
    disabled,
    onChange = () => {},
    onFocus = () => {},
    onKeyDown = () => {},
    name,
    ...rest
}) => {
    const rId = useRandomId();
    const inputName = name || `star-rating-${rId}`;
    const [checkedValue, setChecked] = useState(getValue(value));
    useEffect(() => {
        setChecked(getValue(value));
    }, [value]);
    const handleKeyDown = (i: number) => (e) => {
        if (!disabled) {
            setChecked(getValue(i));
            onKeyDown(e, { value: i });
        }
    };
    const handleClick = (i: number) => (e) => {
        if (!disabled) {
            setChecked(getValue(i));
            onChange(e, { value: i });
        }
    };
    const handleFocus = (i: number) => (e) => {
        if (!disabled) {
            setChecked(getValue(i));
            onFocus(e, { value: i });
        }
    };
    return (
        <div
            role={a11yText && "radiogroup"}
            aria-label={a11yText}
            className={classNames("star-rating-select", className)}
            {...rest}
        >
            {stars.map((i) => (
                <span className="star-rating-select__radio" key={i}>
                    <input
                        aria-label={a11yStarText?.[i - 1]}
                        className={classNames("star-rating-select__control", {
                            "star-rating-select__control--filled": i <= checkedValue,
                        })}
                        type="radio"
                        name={inputName}
                        value={i}
                        disabled={disabled}
                        defaultChecked={checkedValue === i}
                        onClick={handleClick(i)}
                        onFocus={handleFocus(i)}
                        onKeyDown={handleKeyDown(i)}
                    />
                    <span className="star-rating-select__radio-icon">
                        <EbayIconStarDynamic className="star-rating__icon" />
                    </span>
                </span>
            ))}
        </div>
    );
};

export default EbayStarRatingSelect;
