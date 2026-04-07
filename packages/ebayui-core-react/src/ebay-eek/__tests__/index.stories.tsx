import React from "react";
import { EbayEek, EbayEekProps } from "../index";
import { StoryObj, StoryFn, Meta } from "@storybook/react-vite";

const meta: Meta<typeof EbayEek> = {
    component: EbayEek,
    title: "graphics & icons/ebay-eek",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `This component displays the current European Union Energy (EEK) rating of certain items that consume energy.

## Usage

### Import

\`\`\`jsx harmony
import { EbayEek } from "@ebay/ui-core-react/ebay-eek";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/eek";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/eek.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayEek max="A+++" min="E" rating="C" />
\`\`\``,
            },
        },
    },
    argTypes: {
        rating: { description: "The energy rating", control: "text" },
        max: { description: "The maximum range", control: "text" },
        min: { description: "The minimum range", control: "text" },
        a11yText: { description: "Accessible label for the energy rating figure", control: "text" },
    },
};

export default meta;

export const RegularA: StoryFn<EbayEekProps> = (args) => (
    <>
        <div>
            <EbayEek {...args} max="A" min="G" rating="A" />
            <EbayEek {...args} max="A" min="G" rating="B" />
            <EbayEek {...args} max="A" min="G" rating="C" />
            <EbayEek {...args} max="A" min="G" rating="D" />
            <EbayEek {...args} max="A" min="G" rating="E" />
            <EbayEek {...args} max="A" min="G" rating="F" />
            <EbayEek {...args} max="A" min="G" rating="G" />
        </div>
    </>
);

export const A: StoryObj<EbayEekProps> = {
    render: (args) => (
        <>
            <div>
                <EbayEek {...args} max="A++" min="E" rating="A++" />
                <EbayEek {...args} max="A++" min="E" rating="A+" />
                <EbayEek {...args} max="A++" min="E" rating="A" />
                <EbayEek {...args} max="A++" min="E" rating="B" />
                <EbayEek {...args} max="A++" min="E" rating="C" />
                <EbayEek {...args} max="A++" min="E" rating="D" />
                <EbayEek {...args} max="A++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek {...args} max="A++" min="G" rating="A++" />
                <EbayEek {...args} max="A++" min="G" rating="A+" />
                <EbayEek {...args} max="A++" min="G" rating="A" />
                <EbayEek {...args} max="A++" min="G" rating="B" />
                <EbayEek {...args} max="A++" min="G" rating="C" />
                <EbayEek {...args} max="A++" min="G" rating="D" />
                <EbayEek {...args} max="A++" min="G" rating="E" />
                <EbayEek {...args} max="A++" min="G" rating="F" />
                <EbayEek {...args} max="A++" min="G" rating="G" />
            </div>
        </>
    ),

    name: "A++",
};

export const ValidA: StoryObj<EbayEekProps> = {
    render: (args) => (
        <>
            <div>
                <EbayEek {...args} max="A+++" min="D" rating="A+++" />
                <EbayEek {...args} max="A+++" min="D" rating="A++" />
                <EbayEek {...args} max="A+++" min="D" rating="A+" />
                <EbayEek {...args} max="A+++" min="D" rating="A" />
                <EbayEek {...args} max="A+++" min="D" rating="B" />
                <EbayEek {...args} max="A+++" min="D" rating="C" />
                <EbayEek {...args} max="A+++" min="D" rating="D" />
            </div>
            <div>
                <EbayEek {...args} max="A+++" min="E" rating="A+++" />
                <EbayEek {...args} max="A+++" min="E" rating="A++" />
                <EbayEek {...args} max="A+++" min="E" rating="A+" />
                <EbayEek {...args} max="A+++" min="E" rating="A" />
                <EbayEek {...args} max="A+++" min="E" rating="B" />
                <EbayEek {...args} max="A+++" min="E" rating="C" />
                <EbayEek {...args} max="A+++" min="E" rating="D" />
                <EbayEek {...args} max="A+++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek {...args} max="A+++" min="G" rating="A+++" />
                <EbayEek {...args} max="A+++" min="G" rating="A++" />
                <EbayEek {...args} max="A+++" min="G" rating="A+" />
                <EbayEek {...args} max="A+++" min="G" rating="A" />
                <EbayEek {...args} max="A+++" min="G" rating="B" />
                <EbayEek {...args} max="A+++" min="G" rating="C" />
                <EbayEek {...args} max="A+++" min="G" rating="D" />
                <EbayEek {...args} max="A+++" min="G" rating="E" />
                <EbayEek {...args} max="A+++" min="G" rating="F" />
                <EbayEek {...args} max="A+++" min="G" rating="G" />
            </div>
        </>
    ),

    name: "Valid A+++",
};

export const InvalidCombinations: StoryFn<EbayEekProps> = (args) => (
    <>
        <EbayEek {...args} max="B" min="G" rating="D" />
        <EbayEek {...args} max="A" min="G" rating="A+++" />
        <EbayEek {...args} max="A++" min="B" rating="A++" />
        <EbayEek {...args} max="A+" min="B" rating="A++" />
    </>
);
