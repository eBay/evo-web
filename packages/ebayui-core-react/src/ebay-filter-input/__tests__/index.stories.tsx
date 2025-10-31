import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayFilterInput } from "../index";
import { EbayButton } from "../../ebay-button";

const meta: Meta<typeof EbayFilterInput> = {
    component: EbayFilterInput,
    title: "form input/ebay-filter-input",
    argTypes: {
        size: {
            description: "Filter input size",
            table: {
                defaultValue: {
                    summary: "large",
                },
            },
            options: ["small", "large"],
            control: { type: "select" },
        },
        placeholder: {
            type: "string",
            description: "Placeholder text",
            table: {
                defaultValue: {
                    summary: "Filter",
                },
            },
        },
        a11yClearButton: {
            type: "string",
            description: "Aria-label for clear button. When provided, shows clear button",
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        a11yControlsId: {
            type: "string",
            description: "ID of element that this input controls (for aria-controls)",
        },
        defaultValue: {
            type: "string",
            description: "Default value for uncontrolled input",
        },
        value: {
            type: "string",
            description: "Value for controlled input",
        },
        disabled: {
            type: "boolean",
            description: "Whether the input is disabled",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        onInputChange: {
            action: "onInputChange",
            description: "Triggered on input value change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "(event, { value }) => {}",
                },
            },
        },
        onClear: {
            action: "onClear",
            description: "Triggered when clear button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "(event, { value }) => {}",
                },
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayFilterInput> = (args) => <EbayFilterInput {...args} />;

export const WithClearButton: StoryFn<typeof EbayFilterInput> = (args) => (
    <EbayFilterInput {...args} a11yClearButton="Clear filter" />
);

export const WithDefaultValue: StoryFn<typeof EbayFilterInput> = (args) => (
    <EbayFilterInput {...args} defaultValue="Initial value" a11yClearButton="Clear filter" />
);

export const LargeSize: StoryFn<typeof EbayFilterInput> = (args) => (
    <EbayFilterInput {...args} size="large" a11yClearButton="Clear filter" />
);

export const SmallSize: StoryFn<typeof EbayFilterInput> = (args) => (
    <EbayFilterInput {...args} size="small" a11yClearButton="Clear filter" />
);

export const Disabled: StoryFn<typeof EbayFilterInput> = (args) => (
    <EbayFilterInput {...args} disabled a11yClearButton="Clear filter" />
);

export const CustomPlaceholder: StoryFn<typeof EbayFilterInput> = (args) => (
    <EbayFilterInput {...args} placeholder="Search items..." a11yClearButton="Clear search" />
);

export const Controlled: StoryFn<typeof EbayFilterInput> = (args) => {
    const [value, setValue] = useState("Controlled value");

    return (
        <div>
            <EbayFilterInput
                {...args}
                value={value}
                a11yClearButton="Clear filter"
                onInputChange={(e, data) => setValue(data!.value)}
                onClear={() => setValue("")}
            />
            <div style={{ marginTop: "8px" }}>
                Current value: <strong>{value}</strong>
            </div>
            <EbayButton onClick={() => setValue("Controlled value")}>Set initial value</EbayButton>
        </div>
    );
};

export const Uncontrolled: StoryFn<typeof EbayFilterInput> = (args) => {
    const [lastValue, setLastValue] = useState("");

    return (
        <div>
            <EbayFilterInput
                {...args}
                defaultValue="Initial value"
                a11yClearButton="Clear filter"
                onInputChange={(e, data) => setLastValue(data!.value)}
            />
            <div style={{ marginTop: "8px" }}>
                Last input value: <strong>{lastValue}</strong>
            </div>
        </div>
    );
};

export const WithControlledList: StoryFn<typeof EbayFilterInput> = (args) => {
    const [filterValue, setFilterValue] = useState("");
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
    const filteredItems = items.filter((item) => item.toLowerCase().includes(filterValue.toLowerCase()));

    return (
        <div>
            <EbayFilterInput
                {...args}
                value={filterValue}
                a11yClearButton="Clear filter"
                a11yControlsId="filtered-list"
                placeholder="Filter items..."
                onInputChange={(e, data) => setFilterValue(data!.value)}
                onClear={() => setFilterValue("")}
            />
            <ul id="filtered-list" style={{ marginTop: "8px", listStyle: "none", padding: 0 }}>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <li key={item} style={{ padding: "4px 0" }}>
                            {item}
                        </li>
                    ))
                ) : (
                    <li style={{ padding: "4px 0", color: "#999" }}>No items found</li>
                )}
            </ul>
        </div>
    );
};

export const Collection: StoryFn<typeof EbayFilterInput> = (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
        <EbayFilterInput {...args} placeholder="Default" />
        <EbayFilterInput {...args} placeholder="With clear button" a11yClearButton="Clear" />
        <EbayFilterInput {...args} size="large" placeholder="Large size" a11yClearButton="Clear" />
        <EbayFilterInput {...args} size="small" placeholder="Small size" a11yClearButton="Clear" />
        <EbayFilterInput {...args} disabled placeholder="Disabled" a11yClearButton="Clear" />
    </div>
);
