import React from "react";
import { Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";

import { EbayListbox, EbayListboxOption, EbayListboxOptionDescription } from "../";

const meta: Meta<typeof EbayListbox> = {
    title: "building blocks/ebay-listbox",
    argTypes: {
        name: {
            control: { type: "text" },
            description: "used for the `name` attribute of the native `<select>`",
        },
        disabled: {
            control: { type: "boolean" },
            description: "If true, the listbox is disabled",
        },
        listSelection: {
            table: {
                defaultValue: {
                    summary: "manual",
                },
            },
            description:
                "If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",
            options: ["manual", "auto"],
            control: { type: "select" },
        },
        maxHeight: {
            control: { type: "text" },
            description: "The max height of the listbox",
        },
        typeaheadTimeoutLength: {
            control: { type: "number" },
            description: "The time in milliseconds to wait before the typeahead search resets",
            table: {
                defaultValue: {
                    summary: "1300",
                },
            },
        },
        onChange: {
            action: "onChange",
            description: "Triggered on item clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { index, selected, wasClicked }",
                },
            },
        },
        onEscape: {
            action: "onEscape",
            description: "Triggered on esc key pressed",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};
export default meta;

export const Default = (args) => (
    <EbayListbox {...args}>
        <EbayListboxOption value="AA" text="Option 1" />
        <EbayListboxOption value="BB" text="Option 2" />
        <EbayListboxOption value="CC" text="Option 3" />
    </EbayListbox>
);

export const WithDescription = (args) => (
    <EbayListbox {...args}>
        <EbayListboxOption value="AA" text="Option 1">
            <EbayListboxOptionDescription>Option 1 extra info</EbayListboxOptionDescription>
        </EbayListboxOption>
        <EbayListboxOption value="BB" text="Option 2">
            <EbayListboxOptionDescription>Option 2 extra info</EbayListboxOptionDescription>
        </EbayListboxOption>
        <EbayListboxOption value="CC" text="Option 3">
            <EbayListboxOptionDescription>Option 3 extra info</EbayListboxOptionDescription>
        </EbayListboxOption>
    </EbayListbox>
);

export const WithDisabled = (args) => (
    <EbayListbox {...args}>
        <EbayListboxOption value="AA" text="Option 1" />
        <EbayListboxOption value="BB" text="Option 2" disabled />
        <EbayListboxOption value="CC" text="Option 3" />
    </EbayListbox>
);

export const WithManyOptions = () => (
    <EbayListbox name="formFieldName">
        {Array.from({ length: 20 }, (_, i) => (
            <EbayListboxOption key={i} value={i.toString()} text={`Option ${i + 1}`} />
        ))}
    </EbayListbox>
);

export const WithActions = (args) => (
    <EbayListbox {...args} name="formFieldName" onChange={action("onChange")} onEscape={action("onEscape")}>
        <EbayListboxOption value="AA" text="Option 1" />
        <EbayListboxOption value="BB" text="Option 2" />
        <EbayListboxOption value="CC" text="Option 3" />
    </EbayListbox>
);
