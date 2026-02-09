import { Story } from "@storybook/marko";
import Readme from "./README.md";
import fixed from "./examples/default.marko";
import code from "./examples/default.marko?raw";
import component, { type Input } from "./index.marko";

export default {
    title: "graphics & icons/ebay-flag",
    component: component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        a11yText: {
            description: "The aria label for the outer container.",
        },
        flag: {
            description: "The 2 letter country code of what flag to display",
            type: "string",
        },
    },
};
export const Default: Story<Input> = (args: Input) => ({
    input: args,
    component: fixed,
});
Default.args = {};
Default.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
