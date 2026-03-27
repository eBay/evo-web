import React, { useState } from "react";
import { StoryFn, Meta, StoryObj } from "@storybook/react-vite";
import { EbayDateTextbox, EbayDateTextboxProps } from "../index";
import { EbayButton } from "../../ebay-button";
import { EbayTextbox } from "../../ebay-textbox";

const story: Meta<typeof EbayDateTextbox> = {
    component: EbayDateTextbox,
    title: "form input/ebay-date-textbox",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayDateTextbox } from "@ebay/ui-core-react/ebay-date-textbox";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/calendar";
import "@ebay/skin/date-textbox";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/textbox";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/calendar.css";
@import "@ebay/skin/date-textbox.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/textbox.css";
\`\`\``,
            },
        },
    },
    argTypes: {
        value: { description: "Selected date for controlled component.", control: "text" },
        rangeEnd: { description: "If range is true, the end of the selected range.", control: "text" },
        defaultValue: { description: "Default selected date. Use it for not controlled component.", control: "text" },
        defaultRangeEnd: {
            description: "Default end of the selected range. Use it for not controlled component.",
            control: "text",
        },
        range: { description: "True if selecting a range, false if a single value", control: "boolean" },
        locale: { description: "Locale of the date picker, default to `navigator.language`", control: "text" },
        inputPlaceholderText: {
            description:
                'Text for the input placeholder. Should indicate that users need to enter dates in ISO format. If separate placeholders are required for a range display, use an array of two strings (i. e. `["Start (YYYY-MM-DD)", "End (YYYY-MM-DD)"]`).',
            control: "text",
        },
        collapseOnSelect: {
            description: "Whether the calendar should collapse after a date is selected",
            control: "boolean",
        },
        disableBefore: { description: "First date that may be selected", control: "text" },
        disableAfter: { description: "Last date that may be selected", control: "text" },
        disableWeekdays: {
            description:
                "List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",
            options: ["0", "6"],
            control: { type: "select" },
        },
        disableList: {
            description:
                "List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",
            control: "text",
        },
        linkBuilder: {
            description:
                "Function used to build the href for each date. The function is passed the date as a `Date` object, and should return a url string. For dates that don't have a link, the function should return a falsy value",
            action: "linkBuilder",
            table: { category: "Events" },
        },
        getA11yShowMonthText: {
            description:
                "Function used to get the text for showing previous and next months, defaults to `Show ${monthName}`",
            action: "getA11yShowMonthText",
            table: { category: "Events" },
        },
        a11ySelectedText: {
            description: "Text to be read by screen readers when a date is selected, defaults to `Selected`",
            control: "text",
        },
        a11yRangeStartText: {
            description:
                "Text to be read by screen readers when a date is the start of a range, defaults to `Start of range`",
            control: "text",
        },
        a11yInRangeText: {
            description: "Text to be read by screen readers when a date is in a range, defaults to `in range`",
            control: "text",
        },
        a11yRangeEndText: {
            description:
                "Text to be read by screen readers when a date is the end of a range, defaults to `End of range`",
            control: "text",
        },
        a11yTodayText: {
            description: "Text to be read by screen readers when a date is the current date, defaults to `Today`",
            control: "text",
        },
        a11yDisabledText: {
            description: "Text to be read by screen readers when a date is disabled, defaults to `inactive`",
            control: "text",
        },
        a11ySeparator: {
            description: "Text to be read by screen readers to separate properties, defaults to `-`",
            control: "text",
        },
        a11yOpenPopoverText: {
            description: "Text to be read by screen readers for the button that opens the calendar popover",
            control: "text",
        },
        onChange: {
            description: "Triggered when the selection changes",
            action: "onChange",
            table: {
                category: "Events",
                defaultValue: { summary: "`(event: Event, { selected?, rangeStart?, rangeEnd? })`" },
            },
        },
        onInputChange: {
            description: "Triggered when the input field is typed, use it for controlled components",
            action: "onInputChange",
            table: { category: "Events", defaultValue: { summary: "`(event: Event)`" } },
        },
        onInputRangeEndChange: {
            description: "Triggered when the range end input field is typed, use it for controlled components",
            action: "onInputRangeEndChange",
            table: { category: "Events", defaultValue: { summary: "`(event: Event)`" } },
        },
        onInvalidDate: {
            description: "Called when an invalid date is entered",
            action: "onInvalidDate",
            table: { category: "Events" },
        },
        onMonthChange: {
            description: "Called when the visible month changes",
            action: "onMonthChange",
            table: { category: "Events" },
        },
    },
};

export const Default: StoryObj<EbayDateTextboxProps> = {
    args: {
        locale: "en-CA",
    },
};

export const Range: StoryObj<EbayDateTextboxProps> = {
    args: {
        range: true,
        locale: "en-CA",
    },
};

export const CollpaseOnSelect: StoryObj<EbayDateTextboxProps> = {
    args: {
        collapseOnSelect: true,
    },
};

export const ControlledValues: StoryFn<EbayDateTextboxProps> = (args) => {
    const Component = () => {
        const [value, setValue] = useState("");

        const handleOnChange = (event, { selected }) => {
            setValue(selected || "");
        };

        const handleOnInputChange = (event) => {
            setValue(event.target.value);
        };

        return (
            <>
                <EbayDateTextbox
                    locale="en-CA"
                    value={value}
                    onChange={handleOnChange}
                    onInputChange={handleOnInputChange}
                    {...args}
                />
                <div style={{ marginTop: 16 }}>
                    <EbayButton onClick={() => setValue("2024-01-03")}>Set to 2024-01-03</EbayButton>
                </div>
            </>
        );
    };

    return <Component />;
};

export const WithFloatingLabel: StoryFn<EbayDateTextboxProps> = (args) => {
    const Component = () => {
        const [value, setValue] = useState("");

        const handleOnChange = (event, { selected }) => {
            setValue(selected || "");
        };

        const handleOnInputChange = (event) => {
            setValue(event.target.value);
        };

        return (
            <EbayDateTextbox value={value} onChange={handleOnChange} onInputChange={handleOnInputChange} {...args}>
                <EbayTextbox floatingLabel="Purchase Price" />
            </EbayDateTextbox>
        );
    };

    return <Component />;
};

export const RangeWithFloatingLabel: StoryFn<EbayDateTextboxProps> = (args) => {
    const Component = () => {
        return (
            <EbayDateTextbox range={true} {...args}>
                <EbayTextbox floatingLabel="Start" />
                <EbayTextbox floatingLabel="End" />
            </EbayDateTextbox>
        );
    };

    return <Component />;
};

export const LocalizedGerman: StoryObj<EbayDateTextboxProps> = {
    name: "Localized (German - de-DE)",
    args: {
        locale: "de-DE",
    },
};

export const LocalizedBritish: StoryObj<EbayDateTextboxProps> = {
    name: "Localized Range (British English - en-GB)",
    args: {
        locale: "en-GB",
        range: true,
    },
};

export const LocalizedJapanese: StoryObj<EbayDateTextboxProps> = {
    name: "Localized (Japanese - ja)",
    args: {
        locale: "ja",
    },
};

export const LocalizedWithInvalidHandler: StoryFn<EbayDateTextboxProps> = (args) => {
    const Component = () => {
        const [invalidMessage, setInvalidMessage] = useState("");

        const handleInvalidDate = ({ value, index }) => {
            setInvalidMessage(`Invalid date entered: "${value}" at input ${index + 1}`);
            setTimeout(() => setInvalidMessage(""), 3000);
        };

        return (
            <>
                <EbayDateTextbox locale="en-US" onInvalidDate={handleInvalidDate} {...args} />
                {invalidMessage && <div style={{ marginTop: 16, color: "red" }}>{invalidMessage}</div>}
            </>
        );
    };

    return <Component />;
};
LocalizedWithInvalidHandler.storyName = "Localized with Invalid Date Handling";

export default story;
