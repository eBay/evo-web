import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayTextbox, EbayTextboxProps } from "../../ebay-textbox";
import { EbayField, EbayLabel, EbayFieldDescription } from "../../ebay-field";
import { EbayCharacterCount, EbayCharacterCountProps } from "../index";

export default {
    title: "building blocks/ebay-character-count",
    component: EbayCharacterCount,
    parameters: {
        docs: {
            description: {
                component: "A component to display character count with optional clipped text.",
            },
        },
    },
    argTypes: {
        children: {
            description: "If set, will override the default body content",
        },
        value: {
            control: { type: "text" },
            description: "String to count characters from, or a number representing the current character count",
        },
        max: {
            control: { type: "number" },
            description: "Maximum number of characters allowed in the input.",
        },
        clippedText: {
            control: { type: "text" },
            description: "Clipped text should be provided after the character count for screen readers to announce.",
        },
        onChange: {
            action: "onChange",
            description: "Triggered when the character count changes. Debounced by 500ms.",
        },
    },
} as Meta;

export const Default: StoryFn<EbayCharacterCountProps> = (args) => <EbayCharacterCount {...args} />;

Default.args = {
    value: "Hello world",
    clippedText: "characters remaining",
    max: 120,
};

export const InField: StoryFn<EbayCharacterCountProps> = (args) => {
    const [inputValue, setInputValue] = React.useState(args.value || "");
    const [inputAriaLive, setInputAriaLive] = React.useState<"polite" | "off">("off");

    const handleTextChange: EbayTextboxProps["onInputChange"] = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleCharCountChange: EbayCharacterCountProps["onChange"] = (event) => {
        setInputAriaLive(event.inputAriaLive);
    };

    return (
        <EbayField>
            <EbayLabel stacked htmlFor="my-input">
                Field Label
            </EbayLabel>

            <span className="field__control">
                <EbayTextbox
                    value={inputValue}
                    type="text"
                    aria-describedby="my-input-description my-input-charcount"
                    id="my-input"
                    aria-live={inputAriaLive}
                    onInputChange={handleTextChange}
                />
            </span>
            <EbayFieldDescription type="group">
                <span id="my-input-description">Brief description</span>

                <EbayCharacterCount
                    {...args}
                    id="my-input-charcount"
                    value={inputValue}
                    onChange={handleCharCountChange}
                />
            </EbayFieldDescription>
        </EbayField>
    );
};
InField.args = {
    clippedText: "characters remaining",
    max: 120,
};

export const CustomText: StoryFn<EbayCharacterCountProps> = (args) => {
    const [inputValue, setInputValue] = React.useState(String(args.value || ""));
    const [charCount, setCharCount] = React.useState(inputValue.length);
    const [inputAriaLive, setInputAriaLive] = React.useState<"polite" | "off">("off");

    const handleTextChange: EbayTextboxProps["onInputChange"] = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleCharCountChange: EbayCharacterCountProps["onChange"] = (event) => {
        setInputAriaLive(event.inputAriaLive);
        setCharCount(event.count);
    };

    return (
        <EbayField>
            <EbayLabel stacked htmlFor="my-input">
                Field Label
            </EbayLabel>

            <span className="field__control">
                <EbayTextbox
                    value={inputValue}
                    type="text"
                    aria-describedby="my-input-description my-input-charcount"
                    id="my-input"
                    aria-live={inputAriaLive}
                    onInputChange={handleTextChange}
                />
            </span>
            <EbayFieldDescription type={charCount > args.max ? "attention" : "group"}>
                <span id="my-input-description">Description</span>

                <EbayCharacterCount
                    {...args}
                    id="my-input-charcount"
                    value={inputValue}
                    onChange={handleCharCountChange}
                >
                    {charCount} of {args.max} ({args.max - charCount} remaining)
                </EbayCharacterCount>
            </EbayFieldDescription>
        </EbayField>
    );
};

CustomText.args = {
    value: "Custom",
    clippedText: "custom clipped text",
    max: 150,
};
