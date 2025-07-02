import React, { ChangeEvent } from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayCombobox, EbayComboboxButton } from "../index";
import { EbayIcon } from "../../ebay-icon";
import EbayComboboxOption from "../combobox-option";
import countries from "./countries.json";
import { ComboboxSelectHandler } from "../types";

const meta: Meta<typeof EbayCombobox> = {
    component: EbayCombobox,
    title: "form input/ebay-combobox",
    argTypes: {
        name: {
            control: { type: "text" },
            description: "used for the `name` attribute of the `<input>` element",
        },
        borderless: {
            type: "boolean",
            control: { type: "boolean" },
            description: "whether button has borders ",
        },
        disabled: {
            type: "boolean",
            control: { type: "boolean" },
            description: "sets the disabled attribute of the input",
        },
        expanded: {
            control: { type: "boolean" },
            description: "sets whether the listbox is expanded",
        },
        autocomplete: {
            control: { type: "select" },
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
            options: ["list", "none"],
            description:
                "default is `none`; available values are `none` or `list`. For list, will automatically filter results while typing.",
        },
        listSelection: {
            control: { type: "select" },
            table: {
                defaultValue: {
                    summary: "automatic",
                },
            },
            options: ["manual", "automatic"],
            description:
                "default is `automatic`; available values are `automatic`, `manual`. If set to automatic will automatically fill in the input with the currently highlighted item when using the up/down keys.",
        },
        floatingLabel: {
            control: { type: "text" },
            description: "The label to show on the combobox which moves up when focused",
        },
        fluid: {
            control: { type: "boolean" },
            type: "boolean",
            description: "If true, combobox will span the entire width of it's container",
        },

        onCollapse: {
            action: "onCollapse",
            table: {
                category: "Events",
            },
            description: " collapsed content",
        },
        onExpand: {
            action: "onExpand",
            table: {
                category: "Events",
            },
            description: " expanded content",
        },
        onChange: {
            action: "onChange",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { currentInputValue, selectedOption: { text, value } }",
                },
            },

            description: "same as the `onChange` event, which fires on blur",
        },
        onInputChange: {
            action: "onInputChange",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { currentInputValue, selectedOption: { text, value } }",
                },
            },
            description: "same as the `onInput` event, which fires with every keypress",
        },
        onSelect: {
            action: "onSelect",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { currentInputValue, selectedOption: { text, value } }",
                },
            },
            description: "similar to a `<select>`, which fires when an option is clicked or selected",
        },
        onFloatingLabelInit: {
            action: "onFloatingLabelInit",
            table: {
                category: "Events",
            },
            description: "when floating label finishes initializing",
        },
        onFocus: {
            action: "onFocus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { currentInputValue, selectedOption: { text, value } }",
                },
            },

            description: "same as the `onFocus` event, which fires on focus",
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayCombobox> = (args) => (
    <EbayCombobox {...args}>
        <EbayComboboxOption text="August Campaign" />
        <EbayComboboxOption text="4th of July Sale (paused)" />
        <EbayComboboxOption text="Basic Offer" />
        <EbayComboboxOption text="Basic Offer 1" />
        <EbayComboboxOption text="Basic Offer 2" />
    </EbayCombobox>
);

export const FloatingLabel: StoryFn<typeof EbayCombobox> = (args) => (
    <EbayCombobox {...args} floatingLabel={args.floatingLabel || "Default Label"}>
        <EbayComboboxOption text="August Campaign" />
        <EbayComboboxOption text="4th of July Sale (paused)" />
        <EbayComboboxOption text="Basic Offer" />
        <EbayComboboxOption text="Basic Offer 1" />
        <EbayComboboxOption text="Basic Offer 2" />
    </EbayCombobox>
);

export const AutomaticallyFilterResults: StoryFn<typeof EbayCombobox> = (args) => (
    <EbayCombobox {...args} autocomplete="list">
        <EbayComboboxOption text="August Campaign" />
        <EbayComboboxOption text="4th of July Sale (paused)" />
        <EbayComboboxOption text="Basic Offer" />
        <EbayComboboxOption text="Basic Offer 1" />
        <EbayComboboxOption text="Basic Offer 2" />
    </EbayCombobox>
);

export const SearchFiltering: StoryFn<typeof EbayCombobox> = (args) => {
    const [options, setOptions] = React.useState(countries);
    const [autocomplete, setAutocomplete] = React.useState<"list" | "none">("none");
    const [value, setValue] = React.useState("");

    const timeoutRef = React.useRef<number>();

    const searchCountry = (searchTerm): Promise<typeof countries> => {
        return new Promise((resolve) => {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                const filteredOptions = countries
                    .filter((country) => country.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
                    .slice(0, 10);
                resolve(filteredOptions);
            }, 500) as unknown as number;
        });
    };

    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>, data?: { currentInputValue: string }) => {
        setAutocomplete("none");
        setValue(data?.currentInputValue || "");
        const filteredOptions = await searchCountry(data?.currentInputValue || "");
        setOptions(filteredOptions);
        setAutocomplete("list");
    };

    const handleSelect: ComboboxSelectHandler = (event, data) => {
        setValue(data.currentInputValue);
    };

    return (
        <EbayCombobox
            {...args}
            name="country"
            autocomplete={autocomplete}
            value={value}
            onInputChange={handleInputChange}
            onSelect={handleSelect}
        >
            <EbayComboboxButton onClick={() => setValue("")}>
                <EbayIcon name="clear16" />
            </EbayComboboxButton>
            {options.map((option) => (
                <EbayComboboxOption key={option.name} text={option.name} value={option.code} />
            ))}
        </EbayCombobox>
    );
};
