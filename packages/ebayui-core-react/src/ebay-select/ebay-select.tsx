import React, { ChangeEvent, cloneElement, ComponentProps, FC, useState, FocusEvent } from "react";
import classNames from "classnames";
import EbaySelectOption from "./ebay-select-option";
import { filterByType, withForwardRef } from "../common/component-utils";
import { useFloatingLabel } from "../common/floating-label-utils/hooks";
import { EbayChangeEventHandler } from "../common/event-utils/types";
import { EbayIconChevronDown12 } from "../ebay-icon/icons/ebay-icon-chevron-down-12";

const isControlled = (value) => typeof value !== "undefined";

type SelectValue = string | ReadonlyArray<string> | number;
export type ChangeEventProps = { index: number; selected: string[] };
export type EbaySelectProps = Omit<ComponentProps<"select">, "onChange"> & {
    borderless?: boolean;
    defaultValue?: SelectValue;
    onChange?: EbayChangeEventHandler<HTMLSelectElement, ChangeEventProps>;
    floatingLabel?: string;
    forwardedRef?: React.Ref<HTMLSelectElement>;
    inputSize?: "default" | "large";
    invalid?: boolean;
};

const EbaySelect: FC<EbaySelectProps> = ({
    value: controlledValue,
    defaultValue,
    className,
    borderless,
    name,
    disabled,
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    floatingLabel: floatingLabelText,
    forwardedRef,
    children,
    inputSize,
    invalid,
    ...rest
}) => {
    const isFieldInvalid = invalid || rest["aria-invalid"] === "true";
    const [value, setValue] = useState<SelectValue>(defaultValue);
    const floatingLabel = useFloatingLabel({
        text: floatingLabelText,
        disabled: disabled,
        size: inputSize,
        invalid: isFieldInvalid,
    });

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value: newValue, selectedIndex } = e.target;

        if (!isControlled(controlledValue)) {
            setValue(newValue);
        }

        onChange(e, { index: selectedIndex, selected: [newValue] });
    };

    const handleBlur = (event: FocusEvent<HTMLSelectElement>) => {
        onBlur(event);
    };

    const handleFocus = (event: FocusEvent<HTMLSelectElement>) => {
        onFocus(event);
    };

    const selectClassName = classNames("select", className, {
        "select--borderless": borderless,
        "select--large": inputSize === `large`,
    });

    return (
        <floatingLabel.Container>
            <floatingLabel.Label htmlFor={rest.id} />
            <span className={selectClassName}>
                <select
                    {...rest}
                    name={name}
                    value={isControlled(controlledValue) ? controlledValue : value}
                    disabled={disabled}
                    onChange={handleSelectChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    ref={forwardedRef}
                >
                    {options(children)}
                </select>
                <EbayIconChevronDown12 height="8" width="8" />
            </span>
        </floatingLabel.Container>
    );
};

export default withForwardRef<EbaySelectProps>(EbaySelect);

function optionGroups(data) {
    const optGroups = {};

    data.forEach((opt) => {
        const option = opt.props;
        if (option.optgroup) {
            if (!Object.prototype.hasOwnProperty.call(optGroups, option.optgroup)) {
                optGroups[option.optgroup] = [];
            }
            optGroups[option.optgroup].push(option);
        }
    });

    return optGroups;
}

function options(children) {
    const renderedGroups = [];
    const allOptions = [];
    let optGroups = {};
    let withinGroup = false;

    const childrenOpts = filterByType(children, EbaySelectOption).map((c) => cloneElement(c, {}));

    if (childrenOpts) {
        optGroups = optionGroups(childrenOpts);
        let currentGroupName;
        childrenOpts.forEach((option, idx) => {
            const { children: optionChildren, optgroup, ...optionProps } = option.props;
            withinGroup = optgroup && renderedGroups.indexOf(optgroup) === -1;

            if (withinGroup) {
                // This will always be true when the very first group is encountered.
                currentGroupName = optgroup;
                const currentGroupOptions = optGroups[currentGroupName];
                const opts = currentGroupOptions.map((groupOption) => {
                    const { children: groupOptionChildren, optgroup: _, ...groupOptionProps } = groupOption;
                    return (
                        <EbaySelectOption key={`opt-${groupOption.value}`} {...groupOptionProps}>
                            {groupOptionChildren}
                        </EbaySelectOption>
                    );
                });
                allOptions.push(
                    <optgroup key={idx} label={optgroup}>
                        {opts}
                    </optgroup>,
                );
                renderedGroups.push(optgroup);
            } else if (!optgroup) {
                /**
                 * The check below is necessary because we could still be in a group which has already
                 * been added to the renderedGroups array. In that case it will be skipped.
                 */
                allOptions.push(
                    <EbaySelectOption key={idx} {...optionProps}>
                        {optionChildren}
                    </EbaySelectOption>,
                );
            }
        });
        return allOptions;
    }
}
