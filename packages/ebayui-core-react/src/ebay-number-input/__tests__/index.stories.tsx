import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayNumberInput } from "../index";

const meta: Meta<typeof EbayNumberInput> = {
    component: EbayNumberInput,
    title: "form input/ebay-number-input",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `The \`EbayNumberInput\` component provides a numeric input field with increment and decrement buttons.

## Usage

### Import

\`\`\`jsx harmony
import { EbayNumberInput } from "@ebay/ui-core-react/ebay-number-input";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/number-input";
import "@ebay/skin/textbox";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/number-input.css";
@import "@ebay/skin/textbox.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayNumberInput min={1} max={10} value={5} label="Quantity" />
\`\`\``,
            },
        },
    },
    argTypes: {
        value: { description: "The current value of the input", control: "text" },
        min: { description: "The minimum allowed value", control: "text" },
        max: { description: "The maximum allowed value", control: "text" },
        label: { description: "Label text to display with the input", control: "text" },
        a11yDeleteText: {
            description:
                "Accessibility text for the delete button. When provided, the decrement button will be replaced with a delete button when the value reaches the minimum",
            control: "text",
        },
        onChange: {
            description: "Called when the value changes (either through direct input or button clicks)",
            action: "onChange",
            table: { category: "Events" },
        },
        onInputChange: {
            description: "Called when the input value changes directly",
            action: "onInputChange",
            table: { category: "Events" },
        },
        onFocus: {
            description: "Called when the input receives focus",
            action: "onFocus",
            table: { category: "Events" },
        },
        onBlur: { description: "Called when the input loses focus", action: "onBlur", table: { category: "Events" } },
        onKeyDown: { description: "Called on keydown event", action: "onKeyDown", table: { category: "Events" } },
        onKeyPress: { description: "Called on keypress event", action: "onKeyPress", table: { category: "Events" } },
        onKeyUp: { description: "Called on keyup event", action: "onKeyUp", table: { category: "Events" } },
        onDeleteClick: {
            description:
                "Called when the delete button is clicked (only visible when `a11yDeleteText` is provided and value is at minimum)",
            action: "onDeleteClick",
            table: { category: "Events" },
        },
        onIncrement: {
            description: "Called when the increment button is clicked",
            action: "onIncrement",
            table: { category: "Events" },
        },
        onDecrement: {
            description: "Called when the decrement button is clicked",
            action: "onDecrement",
            table: { category: "Events" },
        },
    },
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

export const WithAriaLabel: StoryFn<typeof EbayNumberInput> = () => (
    <EbayNumberInput min={1} max={10} value={1} aria-label="Qty" />
);
