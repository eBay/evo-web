import React from "react";
import { EbayTextbox } from "../../ebay-textbox";
import { EbaySwitch } from "../../ebay-switch";
import { EbayCheckbox } from "../../ebay-checkbox";
import { EbayField, EbayLabel, EbayFieldDescription } from "../index";

export default {
    title: "form input/ebay-field",
};

export const DefaultInline = {
    render: () => (
        <div>
            <EbayField>
                <EbayLabel>Label for textbox</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label for switch</EbayLabel>
                <EbaySwitch value="123" id="switch-1" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label for checkbox</EbayLabel>
                <EbayCheckbox defaultChecked id="checkbox-2" />
            </EbayField>
        </div>
    ),

    name: "Default - inline",
};

export const Block = () => (
    <div>
        <EbayField layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
        <EbayField layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
        <EbayField layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
    </div>
);

export const BlockAndInlineCombination = {
    render: () => (
        <div>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 2</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField layout="block">
                <EbayLabel>Label 3</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 4</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 5</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>
    ),

    name: "Block and inline combination",
};

export const Required = {
    render: () => (
        <div>
            <EbayField>
                <EbayLabel required>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>
    ),

    name: "required",
};

export const WithDescription = {
    render: () => (
        <div>
            <EbayField layout="block">
                <EbayLabel stacked htmlFor="field1">
                    Label 1
                </EbayLabel>
                <EbayTextbox placeholder="placeholder text" id="field1" />
                <EbayFieldDescription>Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked>Label 2</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
                <EbayFieldDescription type="confirmation">Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked>Label 3</EbayLabel>
                <EbayTextbox placeholder="placeholder text" invalid />
                <EbayFieldDescription type="attention">Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked htmlFor="field4">
                    Label 4
                </EbayLabel>
                <EbayTextbox placeholder="placeholder text" id="field4" />
                <EbayFieldDescription type="confirmation" position="below">
                    Some description Text
                </EbayFieldDescription>
            </EbayField>
        </div>
    ),

    name: "with description",
};

export const LabelsOnTheRight = {
    render: () => (
        <>
            <p>
                <EbayField>
                    <EbayTextbox placeholder="placeholder text" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
            <p>
                <EbayField>
                    <EbaySwitch value="123" id="switch-1" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
            <p>
                <EbayField>
                    <EbayCheckbox defaultChecked id="checkbox-2" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
        </>
    ),

    name: "Labels on the right",
};
