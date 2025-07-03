import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayNumberInput } from "../index";

const meta: Meta<typeof EbayNumberInput> = {
    component: EbayNumberInput,
    title: "form input/ebay-number-input",
};

export default meta;

export const Default: StoryFn<typeof EbayNumberInput> = () => <EbayNumberInput />;

export const WithCustomMinAndMax: StoryFn<typeof EbayNumberInput> = () => (
    <EbayNumberInput min={20} max={30} value={20} />
);

export const WithDelete: StoryFn<typeof EbayNumberInput> = () => (
    <EbayNumberInput min={1} max={30} value={1} a11yDeleteText={"Delete"} />
);

export const WithLabel: StoryFn<typeof EbayNumberInput> = () => (
    <EbayNumberInput min={1} max={10} value={1} label={"Enter a number"} />
);
