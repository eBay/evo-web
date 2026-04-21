import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import AllValuesTemplate from "./examples/all-values.marko";
import AllValuesCode from "./examples/all-values.marko?raw";

export default {
    title: "graphics & icons/evo-star-rating",
    component: Component,
    parameters: {
        docs: {
            description: { component: Readme },
        },
    },
    argTypes: {
        value: {
            type: "number",
            control: { type: "range", min: 0, max: 5, step: 0.5 },
            description:
                "The star rating value from 0 to 5. Supports half values (e.g. 2.5).",
        },
        a11yText: {
            type: { name: "string", required: true },
            control: "text",
            description:
                'Accessible label for the star rating. English default to be overridden is `"${value} out of 5 stars"`.',
        },
        ["<div> attributes" as any]: {
            description:
                "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) will be passed through",
        },
    },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
Default.args = {
    value: 3.5,
};

export const AllValues = buildExtensionTemplate(
    AllValuesTemplate,
    AllValuesCode,
);
