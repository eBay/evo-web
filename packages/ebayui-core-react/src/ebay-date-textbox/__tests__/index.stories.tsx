import React, { useState } from "react";
import { StoryFn, Meta, StoryObj } from "@storybook/react-vite";
import { EbayDateTextbox, EbayDateTextboxProps } from "../index";
import { EbayButton } from "../../ebay-button";
import { EbayTextbox } from "../../ebay-textbox";

const story: Meta<typeof EbayDateTextbox> = {
    component: EbayDateTextbox,
    title: "form input/ebay-date-textbox",
};

export const Default: StoryObj<EbayDateTextboxProps> = {};

export const Range: StoryObj<EbayDateTextboxProps> = {
    args: {
        range: true,
    },
};

export const CollpaseOnSelect: StoryObj<EbayDateTextboxProps> = {
    args: {
        collapseOnSelect: true,
    },
};

export const ControlledValues: StoryFn<EbayDateTextboxProps> = (args) => {
    const Component = () => {
        const [value, setValue] = useState("");

        const handleOnChange = (event, { selected }) => {
            setValue(selected || "");
        };

        const handleOnInputChange = (event) => {
            setValue(event.target.value);
        };

        return (
            <>
                <EbayDateTextbox
                    value={value}
                    onChange={handleOnChange}
                    onInputChange={handleOnInputChange}
                    {...args}
                />
                <div style={{ marginTop: 16 }}>
                    <EbayButton onClick={() => setValue("2024-01-03")}>Set to 2024-01-03</EbayButton>
                </div>
            </>
        );
    };

    return <Component />;
};

export const WithFloatingLabel: StoryFn<EbayDateTextboxProps> = (args) => {
    const Component = () => {
        const [value, setValue] = useState("");

        const handleOnChange = (event, { selected }) => {
            setValue(selected || "");
        };

        const handleOnInputChange = (event) => {
            setValue(event.target.value);
        };

        return (
            <EbayDateTextbox value={value} onChange={handleOnChange} onInputChange={handleOnInputChange} {...args}>
                <EbayTextbox floatingLabel="Purchase Price" />
            </EbayDateTextbox>
        );
    };

    return <Component />;
};

export const RangeWithFloatingLabel: StoryFn<EbayDateTextboxProps> = (args) => {
    const Component = () => {
        return (
            <EbayDateTextbox range={true} {...args}>
                <EbayTextbox floatingLabel="Start" />
                <EbayTextbox floatingLabel="End" />
            </EbayDateTextbox>
        );
    };

    return <Component />;
};

export default story;
