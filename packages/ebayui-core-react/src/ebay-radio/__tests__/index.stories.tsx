import React, { useState } from "react";
import { action } from "storybook/actions";
import { EbayField, EbayLabel } from "../../ebay-field";
import { EbayButton } from "../../ebay-button";
import { EbayRadio } from "../index";

export default {
    title: "form input/ebay-radio",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayRadio } from "@ebay/ui-core-react/ebay-radio";
import { EbayLabel } from "@ebay/ui-core-react/ebay-field";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/field";
import "@ebay/skin/icon";
import "@ebay/skin/radio";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/field.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/radio.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayRadio value="1" id="radio-1">
    <EbayLabel>Choice 1</EbayLabel>
</EbayRadio>
\`\`\``,
            },
        },
    },
    argTypes: {
        disabled: { description: "Disabled when true", control: "boolean" },
        value: {
            description:
                "The value of radio button component. For the radio checked/unchecked state, please use `checked` props.",
            control: "text",
        },
        checked: {
            description: "Set the radio button state to checked/unchecked. Use this for **controlled component**.",
            control: "boolean",
        },
        defaultChecked: {
            description:
                "Set the radio button initial state to checked/unchecked. Use this for **uncontrolled component**.",
            control: "boolean",
        },
        size: { description: "No", control: "text" },
        onChange: {
            description: "Callback fired when selected radio button is changed",
            action: "onChange",
            table: { category: "Events", defaultValue: { summary: "`(ChangeEvent, { value })`" } },
        },
        onFocus: {
            description: "Callback fired when radio button is focused",
            action: "onFocus",
            table: { category: "Events", defaultValue: { summary: "`(FocusEvent, { value })`" } },
        },
        onKeyDown: {
            description: "Callback fired when key is down",
            action: "onKeyDown",
            table: { category: "Events", defaultValue: { summary: "`(KeyboardEvent, { value })`" } },
        },
    },
};

export const Default = () => (
    <>
        <p>
            <EbayRadio value="123" id="radio-1">
                <EbayLabel>Default</EbayLabel>
            </EbayRadio>
        </p>
        <p>
            <EbayRadio value="123" id="radio-11" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayRadio>
        </p>
    </>
);

export const UsingCustomLabelHtml = {
    render: () => (
        <>
            <p>
                <EbayRadio value="123" id="radio-1" />
                <label className="field__label field__label--end" htmlFor="radio-1">
                    Default
                </label>
            </p>
            <p>
                <EbayRadio value="123" id="radio-11" size="large" />
                <label className="field__label field__label--end" htmlFor="radio-11">
                    Large
                </label>
            </p>
        </>
    ),

    name: "Using custom label html",
};

export const SelectedRadioButton = {
    render: () => (
        <>
            <EbayRadio checked id="radio-2">
                <EbayLabel>Selected</EbayLabel>
            </EbayRadio>
        </>
    ),

    name: "Selected radio-button",
};

export const DisabledRadioButton = {
    render: () => (
        <>
            <EbayRadio disabled id="radio-20">
                <EbayLabel>Disabled</EbayLabel>
            </EbayRadio>
        </>
    ),

    name: "Disabled radio-button",
};

export const GroupedRadioButtons = {
    render: () => {
        const defaultProps = {
            onChange: (e, props) => action("onChange")(e, props),
            onFocus: (e, props) => action("onFocus")(e, props),
            onKeyDown: (e, props) => action("onKeyDown")(e, props),
        };

        return (
            <fieldset>
                <legend>Choose an Option</legend>
                <EbayField>
                    <EbayRadio id="group-radio-1" value="1" defaultChecked name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 1</EbayLabel>
                    </EbayRadio>
                </EbayField>
                <EbayField>
                    <EbayRadio id="group-radio-2" value="2" defaultChecked={false} name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 2</EbayLabel>
                    </EbayRadio>
                </EbayField>
                <EbayField>
                    <EbayRadio id="group-radio-3" value="3" defaultChecked={false} name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 3</EbayLabel>
                    </EbayRadio>
                </EbayField>
            </fieldset>
        );
    },

    name: "Grouped radio-buttons",
};

export const StyledRadioButton = {
    render: () => (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .custom ~ label,
                .custom .radio__icon svg { color: green !important }
                `,
                }}
            />
            <EbayRadio className="custom" aria-label="custom color radio example" id="radio-30">
                <EbayLabel>Custom style</EbayLabel>
            </EbayRadio>
        </>
    ),

    name: "Styled radio-button",
};

export const ControlledComponent = {
    render: () => {
        const deliveryMethods = ["Regular", "Express", "Local Pickup"];

        const TestControlledComponent = () => {
            const [selectedValue, setSelectedValue] = useState(deliveryMethods[0]);
            const handleChange = (e, ...rest) => {
                action("radio-change")(e, ...rest);
                setSelectedValue(e.target.value);
            };

            return (
                <div>
                    <fieldset>
                        <legend>Choose your delivery</legend>
                        {deliveryMethods.map((item, index) => (
                            <EbayField key={`delivery-${item}`}>
                                <EbayRadio
                                    id={`delivery-${index}`}
                                    checked={selectedValue === item}
                                    value={item}
                                    name="delivery-method"
                                    onChange={handleChange}
                                >
                                    <EbayLabel>{item}</EbayLabel>
                                </EbayRadio>
                            </EbayField>
                        ))}
                    </fieldset>

                    <div style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}>
                        <div style={{ marginRight: "1rem" }}>
                            Current selected: <strong>{selectedValue}</strong>
                        </div>

                        <EbayButton onClick={() => setSelectedValue(deliveryMethods[1])}>
                            Reset to default (Express)
                        </EbayButton>
                    </div>
                </div>
            );
        };

        return (
            <>
                <TestControlledComponent />
            </>
        );
    },

    name: "Controlled component",
};
