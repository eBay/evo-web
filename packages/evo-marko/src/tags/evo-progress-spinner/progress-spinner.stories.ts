import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import { addContent } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
    input: addContent(args),
});
export default {
    title: "progress/evo-progress-spinner",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        size: {
            options: ["small", "large"],
            control: { type: "select" },
            description:
                'size of spinner - can be "small", "large". default is small ',
        },
        ariaLabel: {
            control: { type: "text" },
            description: "Description for accessibility",
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    ariaLabel: "loading",
};

Default.parameters = {
    docs: {
        source: {
            code: tagToString("evo-progress-spinner", Default.args),
        },
    },
};
