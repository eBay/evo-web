import React, { useState, useRef, ChangeEvent } from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayLabel } from "../../ebay-field";
import { EbayCheckbox } from "../index";

const meta: Meta<typeof EbayCheckbox> = {
    component: EbayCheckbox,
    title: "form input/ebay-checkbox",
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
