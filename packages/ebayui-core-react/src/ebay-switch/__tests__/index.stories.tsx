import React, { useState } from "react";
import { action } from "storybook/actions";
import { EbaySwitch } from "../index";

export default {
    title: "form input/ebay-switch",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Import

\`\`\`jsx harmony
import { EbaySwitch } from "@ebay/ui-core-react/ebay-switch";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/switch";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/switch.css";
\`\`\``,
            },
        },
    },
    argTypes: {
        checked: { description: "Whether the switch is checked (controlled)", control: "boolean" },
        defaultChecked: { description: "Whether the switch is initially checked (uncontrolled)", control: "boolean" },
        disabled: { control: "boolean" },
        value: { description: "Value of the switch input", control: "text" },
        onChange: {
            description: "Triggered on change",
            action: "onChange",
            table: {
                category: "Events",
                defaultValue: { summary: "`(ChangeEvent, { value: string, checked: boolean }`" },
            },
        },
    },
};

export const DefaultSwitchButton = {
    render: () => (
        <span className="field">
            <EbaySwitch value="123" id="switch-1" onChange={(e, props) => action("onChange")(e, props)} />
            <label className="field__label field__label--end" htmlFor="switch-1">
                Default
            </label>
        </span>
    ),

    name: "Default switch-button",
};

export const SelectedSwitchButton = {
    render: () => (
        <span className="field">
            <EbaySwitch checked value="123" id="switch-2" onChange={action("switch-change")} />
            <label className="field__label field__label--end" htmlFor="switch-2">
                Checked
            </label>
        </span>
    ),

    name: "Selected switch-button",
};

export const DisabledSwitchButton = {
    render: () => (
        <span className="field">
            <EbaySwitch disabled id="switch-20" />
            <label className="field__label field__label--end" htmlFor="switch-20">
                Disabled
            </label>
        </span>
    ),

    name: "Disabled switch-button",
};

export const ControlledSwitchButton = {
    render: () => {
        const [checked, setChecked] = useState(false);
        return (
            <span className="field">
                <EbaySwitch
                    checked={checked}
                    id="switch-30"
                    onChange={(e, props) => {
                        action("onChange")(e, props);
                        if (props) {
                            setChecked(props.checked);
                        }
                    }}
                />
                <label className="field__label field__label--end" htmlFor="switch-30">
                    {checked ? "Checked" : "Unchecked"}
                </label>
            </span>
        );
    },

    name: "Controlled switch-button",
};
