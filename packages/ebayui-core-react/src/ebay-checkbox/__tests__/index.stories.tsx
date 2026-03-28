import React, { useState, useRef, ChangeEvent } from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayLabel } from "../../ebay-field";
import { EbayCheckbox } from "../index";

const meta: Meta<typeof EbayCheckbox> = {
    component: EbayCheckbox,
    title: "form input/ebay-checkbox",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayCheckbox } from "@ebay/ui-core-react/ebay-checkbox";
import { EbayLabel } from "@ebay/ui-core-react/ebay-field";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/checkbox";
import "@ebay/skin/field";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/checkbox.css";
@import "@ebay/skin/field.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayCheckbox id="checkbox-1">
    <EbayLabel>Remember me!</EbayLabel>
</EbayCheckbox>
\`\`\``,
            },
        },
    },
    argTypes: {
        size: {
            description:
                "Either `large` or `regular` (default). Sets the checkbox icon size. For mweb this should be set to `large`. (Note: The dimensions of the radio will not change, but only the icon)",
            options: ["regular", "large"],
            control: { type: "select" },
        },
        disabled: { control: "boolean" },
        checked: {
            description: "indicates the checked value of the input element, required for a controlled component.",
            control: "boolean",
        },
        defaultChecked: {
            description: "indicates the default checked input element value. Use when the component is not controlled.",
            control: "boolean",
        },
        onChange: {
            description: "Callback fired on change",
            action: "onChange",
            table: {
                category: "Events",
                defaultValue: { summary: "`(event: ChangeEvent, { value: string, checked: Boolean })`" },
            },
        },
        onFocus: {
            description: "Callback fired when button is focused",
            action: "onFocus",
            table: {
                category: "Events",
                defaultValue: { summary: "`(event: FocusEvent, { value: string, checked: Boolean })`" },
            },
        },
        onKeyDown: {
            description: "Callback fired when key is pressed",
            action: "onKeyDown",
            table: {
                category: "Events",
                defaultValue: { summary: "`(event: KeyboardEvent, { value: string, checked: Boolean })`" },
            },
        },
    },
};

export default meta;

export const DefaultCheckboxButton: StoryFn<typeof EbayCheckbox> = () => (
    <>
        <p>
            <EbayCheckbox
                value="123"
                id="checkbox-11"
                onChange={(e, props) => action("onChange")(e, props)}
                onFocus={(e, props) => action("onFocus")(e, props)}
                onKeyDown={(e, props) => action("onKeyDown")(e, props)}
            >
                <EbayLabel>Default</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox value="123" id="checkbox-12" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayCheckbox>
        </p>
    </>
);

export const SelectedCheckboxButton: StoryFn<typeof EbayCheckbox> = () => (
    <>
        <p>
            <EbayCheckbox checked value="123" id="checkbox-21">
                <EbayLabel>Default</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox checked value="123" id="checkbox-22" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayCheckbox>
        </p>
    </>
);

export const DisabledCheckboxButton: StoryFn<typeof EbayCheckbox> = () => (
    <>
        <p>
            <EbayCheckbox disabled value="123" id="checkbox-31">
                <EbayLabel>Default disabled</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox disabled value="123" id="checkbox-32" size="large">
                <EbayLabel>Large disabled</EbayLabel>
            </EbayCheckbox>
        </p>
    </>
);

export const GroupedCheckboxButtons: StoryFn<typeof EbayCheckbox> = () => (
    <fieldset>
        <legend>Choose an Option</legend>
        <span className="field">
            <EbayCheckbox id="group-checkbox-1" value="1" onChange={action("checkbox-change")} name="checkbox-group">
                <EbayLabel>Option 1</EbayLabel>
            </EbayCheckbox>
        </span>
        <span className="field">
            <EbayCheckbox id="group-checkbox-2" value="2" onChange={action("checkbox-change")} name="checkbox-group">
                <EbayLabel>Option 2</EbayLabel>
            </EbayCheckbox>
        </span>
        <span className="field">
            <EbayCheckbox id="group-checkbox-3" value="3" onChange={action("checkbox-change")} name="checkbox-group">
                <EbayLabel>Option 3</EbayLabel>
            </EbayCheckbox>
        </span>
    </fieldset>
);

export const StyledCheckboxButton: StoryFn<typeof EbayCheckbox> = () => (
    <span className="checkbox">
        <style
            dangerouslySetInnerHTML={{
                __html: `
                .custom ~ label { color: green; }
                .custom ~ .checkbox__icon svg { color: green !important; }
            `,
            }}
        />
        <EbayCheckbox className="custom" aria-label="custom color checkbox example" id="checkbox-30">
            <EbayLabel>Custom style</EbayLabel>
        </EbayCheckbox>
    </span>
);

export const ControlValueFromOutside: StoryFn<typeof EbayCheckbox> = () => {
    const Controller = () => {
        const [isChecked, setChecked] = useState(true);
        const [isDisabled, setDisabled] = useState(false);
        const counter = useRef(0);
        const handleOnChange = (
            e: ChangeEvent<HTMLInputElement>,
            {
                checked,
            }: {
                value: string | number;
                checked: boolean;
            },
        ) => {
            if (counter.current < 4) {
                setChecked(checked);
            } else {
                setDisabled(true);
            }
            counter.current++;
        };

        return (
            <EbayCheckbox
                className="custom"
                onChange={handleOnChange}
                checked={isChecked}
                aria-label="custom color checkbox example"
                id="checkbox-30"
                disabled={isDisabled}
            >
                {isDisabled ? (
                    <EbayLabel>Disabled</EbayLabel>
                ) : (
                    <EbayLabel>Gets disabled after {5 - counter.current} clicks</EbayLabel>
                )}
            </EbayCheckbox>
        );
    };
    return (
        <>
            <Controller />
        </>
    );
};
