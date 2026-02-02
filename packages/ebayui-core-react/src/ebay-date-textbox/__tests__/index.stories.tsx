import React, { useState } from "react";
import { StoryFn, Meta, StoryObj } from "@storybook/react-vite";
import { EbayDateTextbox, EbayDateTextboxProps } from "../index";
import { EbayButton } from "../../ebay-button";
import { EbayTextbox } from "../../ebay-textbox";

const story: Meta<typeof EbayDateTextbox> = {
    component: EbayDateTextbox,
    title: "form input/ebay-date-textbox",
};

export const Default: StoryObj<EbayDateTextboxProps> = {
    args: {
        locale: "en-CA",
    },
};

export const Range: StoryObj<EbayDateTextboxProps> = {
    args: {
        range: true,
        locale: "en-CA",
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
                    locale="en-CA"
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

export const LocalizedGerman: StoryObj<EbayDateTextboxProps> = {
    name: "Localized (German - de-DE)",
    args: {
        locale: "de-DE",
    },
};

export const LocalizedBritish: StoryObj<EbayDateTextboxProps> = {
    name: "Localized Range (British English - en-GB)",
    args: {
        locale: "en-GB",
        range: true,
    },
};

export const LocalizedJapanese: StoryObj<EbayDateTextboxProps> = {
    name: "Localized (Japanese - ja)",
    args: {
        locale: "ja",
    },
};

export const LocalizedWithInvalidHandler: StoryFn<EbayDateTextboxProps> = (args) => {
    const Component = () => {
        const [invalidMessage, setInvalidMessage] = useState("");

        const handleInvalidDate = ({ value, index }) => {
            setInvalidMessage(`Invalid date entered: "${value}" at input ${index + 1}`);
            setTimeout(() => setInvalidMessage(""), 3000);
        };

        return (
            <>
                <EbayDateTextbox locale="en-US" onInvalidDate={handleInvalidDate} {...args} />
                {invalidMessage && <div style={{ marginTop: 16, color: "red" }}>{invalidMessage}</div>}
            </>
        );
    };

    return <Component />;
};
LocalizedWithInvalidHandler.storyName = "Localized with Invalid Date Handling";

export default story;
