import {
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./examples/default.marko";
import WithPrevButtonTemplate from "./examples/with-prev-button.marko";
import WithPrevButtonCode from "./examples/with-prev-button.marko?raw";
import WithFooterTemplate from "./examples/with-footer.marko";
import WithFooterCode from "./examples/with-footer.marko?raw";
import type { Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
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
    title: "dialogs/ebay-panel-dialog",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        open: {
            type: "boolean",
            control: { type: "boolean" },
            description: "Whether dialog is open.",
            table: {
                disable: true,
            },
        },
        position: {
            control: { type: "text" },
            description:
                '"end" or "start", defaults to "start", the position of the panel, either at the start (left side) of the page, or end (right side) of the page.',
        },
        focus: {
            control: { type: "text" },
            description:
                "An id for an element which will receive focus when the dialog opens (defaults to close button)",
        },
        closeFocus: {
            control: { type: "text" },
            description:
                "An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened",
        },
        a11yCloseText: {
            control: { type: "text" },
            description: "A11y text for close button and mask.",
        },
        prevButton: {
            name: "@prevButton",
            control: { type: "object" },
            table: {
                category: "@attribute tags",
            },
            description:
                "Previous button, shows up before header. Usually a chevron-left icon.",
        },
        onOpen: {
            action: "on-open",
            description: "Triggered on dialog opened",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onClose: {
            action: "on-close",
            description: "Triggered on dialog closed.",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onPrevButtonClick: {
            action: "on-prev-button-click",
            description: "Triggered when previous button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    a11yCloseText: "Close Panel",
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-panel-dialog", Default.args),
        },
    },
}

export const WithPrevButton = buildExtensionTemplate(
    WithPrevButtonTemplate,
    WithPrevButtonCode,
);

export const WithFooter = buildExtensionTemplate(
    WithFooterTemplate,
    WithFooterCode,
);