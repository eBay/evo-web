import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import WithIconTemplate from "./examples/tone.marko";
import WithIconTemplateCode from "./examples/tone.marko?raw";
import Component, { type Input } from "./index.marko";

const Template: Story<Input> = (args: Input) => ({
    input: {
        ...args,
        renderBody: (args.renderBody
            ? (out: any) => {
                  out.html(args.renderBody);
              }
            : null) as any,
    },
});

export default {
    title: "graphics & icons/ebay-signal",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        tone: {
            type: "enum",
            control: { type: "select" },
            options: [
                "neutral",
                "information",
                "positive",
                "warning",
                "attention",
            ],
        },
        emphasis: {
            type: "enum",
            control: { type: "select" },
            options: ["default", "strong", "subtle"],
        },
        icon: {
            name: "@icon",
            description:
                "Optional leading 12px icon, rendered before the label. See the WithIcon story",
            table: { category: "@Attribute Tags" },
        },
        status: {
            type: "enum",
            control: { type: "select" },
            options: ["trustworthy", "recent", "time-sensitive", "neutral"],
            description:
                "Deprecated: use `tone`. trustworthy → information, recent → positive, time-sensitive → attention, neutral → neutral",
        },
    },
};
export const Standard = Template.bind({});
Standard.args = {
    renderBody: `Signal text` as any,
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-signal", Standard.args),
        },
    },
};

export const WithIcon = buildExtensionTemplate(
    WithIconTemplate,
    WithIconTemplateCode,
);
