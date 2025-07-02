import React from "react";
import { EbayEek, EbayEekProps } from "../index";
import { StoryObj, StoryFn, Meta } from "@storybook/react-vite";

const meta: Meta<typeof EbayEek> = {
    component: EbayEek,
    title: "graphics & icons/ebay-eek",
};

export default meta;

export const RegularA: StoryFn<EbayEekProps> = () => (
    <>
        <div>
            <EbayEek max="A" min="G" rating="A" />
            <EbayEek max="A" min="G" rating="B" />
            <EbayEek max="A" min="G" rating="C" />
            <EbayEek max="A" min="G" rating="D" />
            <EbayEek max="A" min="G" rating="E" />
            <EbayEek max="A" min="G" rating="F" />
            <EbayEek max="A" min="G" rating="G" />
        </div>
    </>
);

export const A: StoryObj<EbayEekProps> = {
    render: () => (
        <>
            <div>
                <EbayEek max="A++" min="E" rating="A++" />
                <EbayEek max="A++" min="E" rating="A+" />
                <EbayEek max="A++" min="E" rating="A" />
                <EbayEek max="A++" min="E" rating="B" />
                <EbayEek max="A++" min="E" rating="C" />
                <EbayEek max="A++" min="E" rating="D" />
                <EbayEek max="A++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek max="A++" min="G" rating="A++" />
                <EbayEek max="A++" min="G" rating="A+" />
                <EbayEek max="A++" min="G" rating="A" />
                <EbayEek max="A++" min="G" rating="B" />
                <EbayEek max="A++" min="G" rating="C" />
                <EbayEek max="A++" min="G" rating="D" />
                <EbayEek max="A++" min="G" rating="E" />
                <EbayEek max="A++" min="G" rating="F" />
                <EbayEek max="A++" min="G" rating="G" />
            </div>
        </>
    ),

    name: "A++",
};

export const ValidA: StoryObj<EbayEekProps> = {
    render: () => (
        <>
            <div>
                <EbayEek max="A+++" min="D" rating="A+++" />
                <EbayEek max="A+++" min="D" rating="A++" />
                <EbayEek max="A+++" min="D" rating="A+" />
                <EbayEek max="A+++" min="D" rating="A" />
                <EbayEek max="A+++" min="D" rating="B" />
                <EbayEek max="A+++" min="D" rating="C" />
                <EbayEek max="A+++" min="D" rating="D" />
            </div>
            <div>
                <EbayEek max="A+++" min="E" rating="A+++" />
                <EbayEek max="A+++" min="E" rating="A++" />
                <EbayEek max="A+++" min="E" rating="A+" />
                <EbayEek max="A+++" min="E" rating="A" />
                <EbayEek max="A+++" min="E" rating="B" />
                <EbayEek max="A+++" min="E" rating="C" />
                <EbayEek max="A+++" min="E" rating="D" />
                <EbayEek max="A+++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek max="A+++" min="G" rating="A+++" />
                <EbayEek max="A+++" min="G" rating="A++" />
                <EbayEek max="A+++" min="G" rating="A+" />
                <EbayEek max="A+++" min="G" rating="A" />
                <EbayEek max="A+++" min="G" rating="B" />
                <EbayEek max="A+++" min="G" rating="C" />
                <EbayEek max="A+++" min="G" rating="D" />
                <EbayEek max="A+++" min="G" rating="E" />
                <EbayEek max="A+++" min="G" rating="F" />
                <EbayEek max="A+++" min="G" rating="G" />
            </div>
        </>
    ),

    name: "Valid A+++",
};

export const InvalidCombinations: StoryFn<EbayEekProps> = () => (
    <>
        <EbayEek max="B" min="G" rating="D" />
        <EbayEek max="A" min="G" rating="A+++" />
        <EbayEek max="A++" min="B" rating="A++" />
        <EbayEek max="A+" min="B" rating="A++" />
    </>
);
