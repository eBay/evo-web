import React, { ChangeEvent, useState } from "react";
import { action } from "storybook/actions";
import { EbayButton } from "../../ebay-button";
import { EbaySelect, EbaySelectOption, ChangeEventProps } from "../index";

export default {
    title: "form input/ebay-select",
};

export const Basic = () => (
    <>
        <EbaySelect
            name="formSelect"
            onChange={(e: ChangeEvent, props: ChangeEventProps) => action("onChange")(e, props)}
        >
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>
);

export const InvalidSelect = {
    render: () => (
        <>
            <EbaySelect
                name="formSelect"
                value="3"
                aria-invalid="true"
                onChange={action("select-change")}
                aria-label="Please select a option"
            >
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>
    ),

    name: "Invalid select",
};

export const GroupedOptions = {
    render: () => (
        <>
            <EbaySelect name="formSelect" onChange={action("select-change")}>
                <EbaySelectOption value="pre">Option PRE</EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="1">
                    Option 1[Group 1]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="2">
                    Option 2[Group 1]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="3">
                    Option 3[Group 1]
                </EbaySelectOption>
                <EbaySelectOption value="mid">Option MID</EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="4">
                    Option 4[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="5">
                    Option 5[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="6">
                    Option 6[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="7">
                    Option 7[Group 3]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="8">
                    Option 8[Group 3]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="9">
                    Option 9[Group 3]
                </EbaySelectOption>
                <EbaySelectOption value="post">Option POST</EbaySelectOption>
            </EbaySelect>
        </>
    ),

    name: "Grouped options",
};

export const BorderlessSelect = {
    render: () => (
        <>
            <EbaySelect borderless defaultValue="4" name="formSelect" onChange={action("select-change")}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>
    ),

    name: "Borderless select",
};

export const DisabledSelect = {
    render: () => (
        <>
            <EbaySelect className="customclass" disabled name="formSelect">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
            </EbaySelect>
        </>
    ),

    name: "Disabled select",
};

export const UncontrolledComponentWithDefaultValue = {
    render: () => (
        <>
            <EbaySelect name="formSelect" defaultValue="3" onChange={action("select-change")}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>
    ),

    name: "Uncontrolled component with defaultValue",
};

export const ControlledComponent = {
    render: () => {
        const TestControlledComponent = () => {
            const [selectedValue, setSelectedValue] = useState("UK");
            const handleChange = (
                e: ChangeEvent<HTMLSelectElement>,
                {
                    selected,
                }: {
                    index: number;
                    selected: string[];
                },
            ) => {
                setSelectedValue(selected[0]);
            };

            return (
                <div style={{ width: "500px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <EbaySelect name="selectCountry" value={selectedValue} onChange={handleChange}>
                            <EbaySelectOption value="DE">DE</EbaySelectOption>
                            <EbaySelectOption value="US">US</EbaySelectOption>
                            <EbaySelectOption value="UK">UK</EbaySelectOption>
                            <EbaySelectOption value="AU">AU</EbaySelectOption>
                        </EbaySelect>

                        <div style={{ margin: "0 2rem" }}>
                            Current selected: <strong>{selectedValue}</strong>
                        </div>
                        <EbayButton onClick={() => setSelectedValue("US")}>Set selected to US</EbayButton>
                    </div>
                </div>
            );
        };

        return (
            <>
                <TestControlledComponent />
            </>
        );
    },

    name: "Controlled component",
};

export const FloatingLabel = {
    render: () => (
        <>
            <EbaySelect name="formSelect" onChange={action("select-change")} floatingLabel="Label">
                <EbaySelectOption value="">Choose an option</EbaySelectOption>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>
    ),

    name: "Floating label",
};

export const InvalidFloatingLabelSelect = {
    render: () => (
        <>
            <EbaySelect
                name="formSelect"
                value="3"
                aria-invalid="true"
                onChange={action("select-change")}
                floatingLabel="Invalid label"
                aria-label="Please select a option"
            >
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>
    ),

    name: "Invalid floating label select",
};

export const LargeSelect = () => (
    <>
        <EbaySelect name="formSelect" onChange={action("select-change")} floatingLabel="Label" inputSize="large">
            <EbaySelectOption value="">Choose an option</EbaySelectOption>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>
);
